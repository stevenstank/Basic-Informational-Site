# Basic Informational Site

A simple informational website built with **Node.js** using only built-in modules (no Express or external dependencies). This project demonstrates the fundamentals of creating a web server from scratch.

## 🎯 Learning Objectives

- Understand how web servers work at a basic level
- Learn HTTP request/response cycle
- Practice routing without frameworks
- Work with Node.js built-in modules (`http`, `fs`, `path`)
- Handle different HTTP status codes (200, 404, 500)
- Serve static HTML files dynamically

## 📁 Project Structure

```
Basic-Informational-Site/
├── README.md           # This file
├── package.json        # Project configuration
├── index.js           # Main server file
├── index.html         # Home page
├── about.html         # About page
├── contact-me.html    # Contact page
└── 404.html          # Error page for unknown routes
```

## ✨ Features

- **Pure Node.js** - No external dependencies or frameworks
- **Route handling** - Different pages based on URL
- **Error handling** - Proper 404 responses and server error handling
- **Static file serving** - Serves HTML files from the file system
- **HTTP status codes** - Returns appropriate status codes (200, 404, 500)
- **Cross-platform** - Works on Windows, macOS, and Linux

## 🌐 Available Routes

| URL | File Served | Description |
|-----|-------------|-------------|
| `http://localhost:8080/` | `index.html` | Home page |
| `http://localhost:8080/about` | `about.html` | About page |
| `http://localhost:8080/contact-me` | `contact-me.html` | Contact page |
| Any other URL | `404.html` | Error page (404 status) |

## 🚀 How to Run

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your computer

### Steps

1. **Clone or download** this project to your computer

2. **Navigate to the project directory:**
   ```bash
   cd Basic-Informational-Site
   ```

3. **Initialize the project** (optional, but good practice):
   ```bash
   npm init -y
   ```

4. **Start the server:**
   ```bash
   node index.js
   ```
   
   You should see:
   ```
   Server running at http://localhost:8080/
   Available routes:
   - http://localhost:8080/ (Home)
   - http://localhost:8080/about (About)
   - http://localhost:8080/contact-me (Contact)
   ```

5. **Open your browser** and visit:
   - http://localhost:8080/ (Home page)
   - http://localhost:8080/about (About page)
   - http://localhost:8080/contact-me (Contact page)
   - http://localhost:8080/nonexistent (404 page)

6. **Stop the server:** Press `Ctrl + C` in the terminal

## 🔧 How It Works

### Server Code Explanation (`index.js`)

```javascript
const http = require('http');    // Create HTTP server
const fs = require('fs');        // Read files from disk
const path = require('path');    // Handle file paths safely
```

**Key Components:**

1. **Route Handling:** Uses a `switch` statement to map URLs to HTML files
2. **File Reading:** Uses `fs.readFile()` to load HTML content
3. **HTTP Responses:** Sets appropriate headers and status codes
4. **Error Handling:** Catches file reading errors and server issues

### The Request/Response Flow

1. User visits a URL in their browser
2. Browser sends HTTP request to our server
3. Server checks the URL and determines which file to serve
4. Server reads the appropriate HTML file from disk
5. Server sends the HTML content back to the browser
6. Browser displays the page to the user

## 📋 HTTP Status Codes Used

- **200 OK** - Page found and served successfully
- **404 Not Found** - Requested page doesn't exist
- **500 Internal Server Error** - Something went wrong on the server

## 🆚 Why Node.js Without Express?

### Learning Benefits:
- **Understand the fundamentals** - See how web servers actually work
- **No magic** - Every line of code has a clear purpose
- **Appreciation for frameworks** - You'll understand what Express does for you
- **No dependencies** - Simple to set up and run

### When to Use This Approach:
- Learning web development fundamentals
- Simple static sites
- Understanding HTTP protocols
- Building custom server logic

### When to Use Express Instead:
- Building complex web applications
- Need middleware support
- Rapid development
- Production applications

## 🏗️ Possible Enhancements

As you learn more, you could add:
- CSS styling for better appearance
- JavaScript for interactivity
- Form handling for the contact page
- Database integration
- Session management
- File upload capabilities
- API endpoints

## 🎓 Next Steps

After mastering this basic server:
1. Learn **Express.js** for easier web development
2. Explore **template engines** (EJS, Handlebars)
3. Add a **database** (MongoDB, PostgreSQL)
4. Learn **RESTful API** development
5. Build **full-stack applications**

## 🐛 Common Issues

**Port already in use:**
```bash
Error: listen EADDRINUSE: address already in use :::8080
```
**Solution:** Change the port number in `index.js` or stop other processes using port 8080.

**Cannot find files:**
- Make sure all HTML files are in the same directory as `index.js`
- Check file names match exactly (case-sensitive on Linux/Mac)

**Server not starting:**
- Verify Node.js is installed: `node --version`
- Make sure you're in the correct directory
- Check for syntax errors in `index.js`

## 📖 Additional Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [HTTP Module](https://nodejs.org/api/http.html)
- [File System Module](https://nodejs.org/api/fs.html)
- [Path Module](https://nodejs.org/api/path.html)

---

**Happy coding! 🚀**