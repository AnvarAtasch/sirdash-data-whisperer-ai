const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3003;

// In-memory storage for users and verification tokens (in a real app, use a database)
const users = [];
const verificationTokens = {};

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock email sending for development
// In production, you would use real email service like this:
/*
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password',
  },
});
*/

// For development, we'll just log the emails instead of sending them
const transporter = {
  sendMail: (mailOptions) => {
    console.log('\n--- EMAIL WOULD BE SENT ---');
    console.log('To:', mailOptions.to);
    console.log('Subject:', mailOptions.subject);
    console.log('Content:', mailOptions.html ? 'HTML Email' : mailOptions.text);
    console.log('--- END OF EMAIL ---\n');
    return Promise.resolve({ response: 'Mock email sent successfully' });
  }
};

// Generate a verification token
function generateToken() {
  return crypto.randomBytes(32).toString('hex');
}

// Register endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user already exists
    if (users.some(user => user.email === email)) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }
    
    // Create a new user (not activated yet)
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password, // In a real app, hash this password
      isVerified: false,
      createdAt: new Date(),
    };
    
    // Generate verification token
    const token = generateToken();
    verificationTokens[token] = {
      userId: newUser.id,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
    };
    
    // Add user to our in-memory database
    users.push(newUser);
    
    // Create verification URL
    const verificationUrl = `http://localhost:8080/verify-email?token=${token}`;
    
    // Send verification email
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'SirDash - Verify Your Email',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #4f46e5; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">SirDash</h1>
          </div>
          <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
            <h2>Hello ${name},</h2>
            <p>Thank you for registering with SirDash! Please verify your email address by clicking the button below:</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${verificationUrl}" style="background-color: #4f46e5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Verify Email Address</a>
            </div>
            <p>If the button doesn't work, you can also copy and paste the following link into your browser:</p>
            <p><a href="${verificationUrl}">${verificationUrl}</a></p>
            <p>This link will expire in 24 hours.</p>
            <p>If you didn't create an account, you can safely ignore this email.</p>
            <p>Best regards,<br>The SirDash Team</p>
          </div>
          <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
            <p>&copy; ${new Date().getFullYear()} SirDash. All rights reserved.</p>
          </div>
        </div>
      `,
    };
    
    await transporter.sendMail(mailOptions);
    
    res.status(201).json({ 
      message: 'Registration successful. Please check your email to verify your account.',
      userId: newUser.id
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Verify email endpoint
app.get('/api/verify-email', (req, res) => {
  try {
    const { token } = req.query;
    
    // Check if token exists and is valid
    if (!token || !verificationTokens[token]) {
      return res.status(400).json({ message: 'Invalid or expired verification token' });
    }
    
    const verification = verificationTokens[token];
    
    // Check if token has expired
    if (new Date() > verification.expires) {
      delete verificationTokens[token];
      return res.status(400).json({ message: 'Verification token has expired' });
    }
    
    // Find user and verify them
    const user = users.find(u => u.id === verification.userId);
    if (user) {
      user.isVerified = true;
      
      // Remove used token
      delete verificationTokens[token];
      
      return res.status(200).json({ message: 'Email verified successfully. You can now log in.' });
    } else {
      return res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Verification error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Login endpoint
app.post('/api/login', (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    // Check if user is verified
    if (!user.isVerified) {
      return res.status(403).json({ message: 'Please verify your email before logging in' });
    }
    
    // In a real app, you would create and return a JWT token here
    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Resend verification email
app.post('/api/resend-verification', async (req, res) => {
  try {
    const { email } = req.body;
    
    // Find user
    const user = users.find(u => u.email === email);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    if (user.isVerified) {
      return res.status(400).json({ message: 'Email is already verified' });
    }
    
    // Generate new verification token
    const token = generateToken();
    verificationTokens[token] = {
      userId: user.id,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
    };
    
    // Create verification URL
    const verificationUrl = `http://localhost:8080/verify-email?token=${token}`;
    
    // Send verification email
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'SirDash - Verify Your Email',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #4f46e5; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">SirDash</h1>
          </div>
          <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
            <h2>Hello ${user.name},</h2>
            <p>You requested a new verification email. Please verify your email address by clicking the button below:</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${verificationUrl}" style="background-color: #4f46e5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Verify Email Address</a>
            </div>
            <p>If the button doesn't work, you can also copy and paste the following link into your browser:</p>
            <p><a href="${verificationUrl}">${verificationUrl}</a></p>
            <p>This link will expire in 24 hours.</p>
            <p>If you didn't request this email, you can safely ignore it.</p>
            <p>Best regards,<br>The SirDash Team</p>
          </div>
          <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
            <p>&copy; ${new Date().getFullYear()} SirDash. All rights reserved.</p>
          </div>
        </div>
      `,
    };
    
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ message: 'Verification email resent. Please check your inbox.' });
  } catch (error) {
    console.error('Resend verification error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Demo request endpoint
app.post('/api/request-demo', async (req, res) => {
  try {
    const { name, email, company, role, message } = req.body;
    
    // Send email notification to anvar@sirdash.ai
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'support@sirdash.ai',
      subject: `New Demo Request from ${name} at ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #4f46e5; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">SirDash Demo Request</h1>
          </div>
          <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
            <h2>New Demo Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Role:</strong> ${role}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: #f9fafb; padding: 10px; border-radius: 4px;">${message || 'No specific message provided.'}</p>
            <p>Please respond to this request within 24 hours.</p>
          </div>
          <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
            <p>&copy; ${new Date().getFullYear()} SirDash. All rights reserved.</p>
          </div>
        </div>
      `,
    };
    
    await transporter.sendMail(mailOptions);
    
    // Send confirmation email to the user
    const userMailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Your SirDash Demo Request',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #4f46e5; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">SirDash</h1>
          </div>
          <div style="padding: 20px; border: 1px solid #e5e7eb; border-top: none;">
            <h2>Thank You for Your Interest!</h2>
            <p>Hello ${name},</p>
            <p>Thank you for requesting a demo of SirDash. We've received your request and a member of our team will contact you within 24 hours to schedule your personalized demo.</p>
            <p>Here's a summary of the information you provided:</p>
            <ul>
              <li><strong>Company:</strong> ${company}</li>
              <li><strong>Role:</strong> ${role}</li>
            </ul>
            <p>If you have any questions in the meantime, please don't hesitate to reach out to us at <a href="mailto:support@sirdash.ai">support@sirdash.ai</a>.</p>
            <p>Best regards,<br>The SirDash Team</p>
          </div>
          <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280;">
            <p>&copy; ${new Date().getFullYear()} SirDash. All rights reserved.</p>
          </div>
        </div>
      `,
    };
    
    await transporter.sendMail(userMailOptions);
    
    res.status(200).json({ message: 'Demo request received. We will contact you shortly.' });
  } catch (error) {
    console.error('Demo request error:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
