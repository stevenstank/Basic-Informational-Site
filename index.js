const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8080;

// Create the server
const server = http.createServer((req, res) => {
  // Get the requested URL
  let filePath = '';
  
  // Route handling
  switch (req.url) {
    case '/':
      filePath = path.join(__dirname, 'index.html');
      break;
    case '/about':
      filePath = path.join(__dirname, 'about.html');
      break;
    case '/contact-me':
      filePath = path.join(__dirname, 'contact-me.html');
      break;
    default:
      filePath = path.join(__dirname, '404.html');
      res.statusCode = 404;
      break;
  }

  // Read and serve the file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // If file reading fails, serve a simple error message
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal Server Error');
      return;
    }

    // Set content type to HTML and status code (200 for success, 404 already set above)
    res.setHeader('Content-Type', 'text/html');
    if (res.statusCode !== 404) {
      res.statusCode = 200;
    }
    
    // Send the HTML content
    res.end(data);
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  console.log('Available routes:');
  console.log('- http://localhost:8080/ (Home)');
  console.log('- http://localhost:8080/about (About)');
  console.log('- http://localhost:8080/contact-me (Contact)');
});