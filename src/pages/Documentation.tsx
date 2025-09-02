import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, FileText, Play, Database, Code, HelpCircle, Book, Keyboard, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            SirDash is a powerful dashboard application that helps you manage and visualize your data efficiently. 
            This guide will walk you through the installation process, basic usage, and advanced features.
          </p>
        </div>
      )
    },
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: Play,
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">System Requirements</h3>
            <p className="text-muted-foreground mb-4">Before installing SirDash, ensure your system meets the following requirements:</p>
            <ul className="space-y-2 ml-4">
              {[
                'Docker and Docker Compose installed',
                'Minimum 4GB of RAM',
                '5GB of free disk space',
                'Internet connection for installation'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">Docker Installation (Recommended)</h3>
            <p className="text-muted-foreground mb-4">SirDash application consists of three components:</p>
            <ol className="space-y-3 ml-4 mb-6">
              {[
                { title: 'Backend', desc: 'Provides the API services and business logic' },
                { title: 'Backend DB', desc: 'PostgreSQL database for storing application data' },
                { title: 'Frontend', desc: 'Web interface for user interaction' }
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <div>
                    <strong className="text-card-foreground">{step.title}</strong>: {step.desc}
                  </div>
                </li>
              ))}
            </ol>

            <p className="text-muted-foreground mb-4">
              SirDash can be easily deployed using the following docker-compose file. Save this file as 
              <code className="bg-muted px-2 py-1 rounded text-sm mx-1">docker-compose.yml</code> 
              in your project directory:
            </p>

            <div className="bg-muted rounded-lg p-4 overflow-x-auto mb-6">
              <pre className="text-sm text-muted-foreground">
{`services:
  frontend:
    image: ghcr.io/sirdash/sirdash-frontend:latest
    container_name: sirdash-frontend
    ports:
      - "3000:3000"
    depends_on:
      - backend
    networks:
      - app-network

  backend:
    image: ghcr.io/sirdash/sirdash-backend:latest
    container_name: sirdash-backend
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://[USERNAME]:[PASSWORD]@[HOST]:[PORT]/[DATABASE]
      - ALLOWED_ORIGINS=\${ALLOWED_ORIGINS}
      - OPENAI_API_KEY=\${OPENAI_API_KEY}
    depends_on:
      backend-db:
          condition: service_healthy
    networks:
      - app-network

  backend-db:
    image: ghcr.io/sirdash/sirdash-backend-db:latest
    container_name: sirdash-backend-db
    environment:
      - POSTGRES_USER=[DB_USER]
      - POSTGRES_PASSWORD=[DB_PASSWORD]
      - POSTGRES_DB=[DB_NAME]
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD", "pg_isready", "-U", "[DB_USER]", "-p", "5433"]
      interval: 5s
      retries: 5
      start_period: 20s
    ports:
      - "5433:5433"
    command: ["postgres", "-c", "port=5433"]
    networks:
      - app-network

volumes:
  postgres_data:

networks:
  app-network:
    driver: bridge`}
              </pre>
            </div>

            <p className="text-muted-foreground mb-4">Before starting the application, you need to set the following environment variables:</p>
            
            <div className="bg-muted rounded-lg p-4 overflow-x-auto mb-4">
              <pre className="text-sm text-muted-foreground">
{`export ALLOWED_ORIGINS="http://localhost:3000,http://<hostname>:3000"
export OPENAI_API_KEY="[YOUR_API_KEY]"`}
              </pre>
            </div>

            <p className="text-muted-foreground mb-4">Where:</p>
            <ul className="space-y-2 ml-4 mb-6">
              {[
                '<hostname> is the name of the host where SirDash will be running',
                '[YOUR_API_KEY] is your OpenAI API key (keep this secure and never share publicly)'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground mb-2">Then start the application using:</p>
            <div className="bg-muted rounded-lg p-4">
              <pre className="text-sm text-muted-foreground">docker-compose up</pre>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'basic-usage',
      title: 'Basic Usage',
      icon: Database,
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">Logging In</h3>
            <ol className="space-y-3 ml-4">
              {[
                'Open your web browser and navigate to http://localhost:3000',
                'Enter your username and password',
                'Click the "Login" button'
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">Dashboard Overview</h3>
            <p className="text-muted-foreground mb-4">After logging in, you'll see the main dashboard with several components:</p>
            <ul className="space-y-2 ml-4">
              {[
                { title: 'Navigation Menu', desc: 'Located on the left side, provides access to all features' },
                { title: 'Data Visualizations', desc: 'Central area showing charts and data representations' },
                { title: 'User Settings', desc: 'Accessible from the top-right corner' }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-card-foreground">{item.title}</strong> - {item.desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">Running Queries</h3>
            <p className="text-muted-foreground mb-4">SirDash allows you to run SQL queries against your data:</p>
            <ol className="space-y-3 ml-4">
              {[
                'Navigate to the "Queries" section',
                'Enter your SQL query in the editor',
                'Click "Run" to execute',
                'View results in the data table below'
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      )
    },
    {
      id: 'advanced-features',
      title: 'Advanced Features',
      icon: Code,
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">Creating Custom Dashboards</h3>
            <p className="text-muted-foreground mb-4">SirDash allows you to create personalized dashboards:</p>
            <ol className="space-y-3 ml-4">
              {[
                'Go to "Dashboard Settings"',
                'Click "Create New Dashboard"',
                'Add widgets by dragging and dropping from the widget library',
                'Save your custom dashboard configuration'
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">Data Export</h3>
            <p className="text-muted-foreground mb-4">Export your data in various formats:</p>
            <ul className="space-y-2 ml-4">
              {[
                { format: 'CSV', desc: 'For spreadsheet applications' },
                { format: 'JSON', desc: 'For programmatic access' },
                { format: 'PDF', desc: 'For printable reports' }
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-card-foreground">{item.format}</strong> - {item.desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: HelpCircle,
      content: (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">Application Won't Start</h3>
            <p className="text-muted-foreground mb-4">Check the following:</p>
            <ul className="space-y-2 ml-4">
              {[
                'Docker service is running',
                'Ports 3000 and 8000 are not in use by other applications',
                'Docker has sufficient permissions'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-card-foreground mb-4">Database Connection Errors</h3>
            <p className="text-muted-foreground mb-4">Verify:</p>
            <ul className="space-y-2 ml-4">
              {[
                'Database credentials in configuration files',
                'Database service is running',
                'Network connectivity between application and database'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'faq',
      title: 'FAQ',
      icon: Book,
      content: (
        <div className="space-y-6">
          {[
            {
              question: 'What browsers are supported?',
              answer: 'Chrome, Firefox, Safari, and Edge are fully supported.'
            },
            {
              question: 'How do I reset my password?',
              answer: 'Click the "Forgot Password" link on the login page and follow the instructions.'
            },
            {
              question: 'Can I use SirDash on mobile devices?',
              answer: 'Yes, SirDash is responsive and works on tablets and smartphones.'
            }
          ].map((faq, index) => (
            <div key={index} className="border-l-4 border-primary pl-4">
              <h4 className="text-lg font-semibold text-card-foreground mb-2">{faq.question}</h4>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'support',
      title: 'Support and Community',
      icon: Globe,
      content: (
        <div className="space-y-4">
          <ul className="space-y-3 ml-4">
            {[
              { title: 'Documentation', url: 'https://docs.sirdash.example.com' },
              { title: 'GitHub Issues', url: 'https://github.com/[ORGANIZATION]/sirdash/issues' },
              { title: 'Community Forum', url: 'https://community.sirdash.example.com' }
            ].map((link, index) => (
              <li key={index} className="flex items-start gap-2 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <strong className="text-card-foreground">{link.title}</strong>: {link.url}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: 'keyboard-shortcuts',
      title: 'Keyboard Shortcuts',
      icon: Keyboard,
      content: (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-3 text-card-foreground font-semibold">Shortcut</th>
                <th className="text-left p-3 text-card-foreground font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { shortcut: 'Ctrl+S', action: 'Save current view' },
                { shortcut: 'Ctrl+N', action: 'Create new dashboard' },
                { shortcut: 'Ctrl+F', action: 'Search data' },
                { shortcut: 'Esc', action: 'Close current dialog' }
              ].map((row, index) => (
                <tr key={index} className="border-b border-border/50">
                  <td className="p-3">
                    <code className="bg-muted px-2 py-1 rounded text-sm">{row.shortcut}</code>
                  </td>
                  <td className="p-3 text-muted-foreground">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95 border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ChevronLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              <h1 className="text-xl font-semibold text-foreground">Documentation</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            SirDash User Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Complete documentation to help you get started with SirDash and make the most of your data intelligence platform.
          </p>
        </div>

        {/* Documentation Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <section 
                key={section.id}
                id={section.id}
                className="bg-card rounded-2xl shadow-lg border border-border p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-card-foreground">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-6">
                  {section.content}
                </div>
              </section>
            );
          })}
        </div>

        {/* Support Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Need Additional Help?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our support team is here to help you get the most out of SirDash.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                Contact Support
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;