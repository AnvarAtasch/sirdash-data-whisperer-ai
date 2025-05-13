// Script to restart the server
const { exec } = require('child_process');

// Find and kill any node processes running the server
exec('ps -ef | grep "node index.js" | grep -v grep | awk \'{print $2}\' | xargs -r kill -9', (error) => {
  if (error) {
    console.log('No server process found or unable to kill process');
  } else {
    console.log('Successfully stopped previous server process');
  }
  
  // Start the server
  console.log('Starting server...');
  require('./index.js');
});
