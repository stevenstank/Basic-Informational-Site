# Basic Informational Site (Express Only)

A basic informational website built with Express and static HTML pages.

## Stack

- Node.js
- Express

## Project Structure

```text
Basic-Informational-Site/
├── index.js
├── package.json
├── index.html
├── about.html
├── contact-me.html
├── 404.html
├── public/
│   └── styles.css
└── README.md
```

## Routes

- `/` - Home page
- `/about` - About page
- `/contact-me` - Contact page
- Any unknown route - Custom 404 page

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start:

```bash
npm start
```

3. Open:

`http://localhost:8080`

## Notes

- Port defaults to `8080`
- You can override the port with `PORT`, for example:

```bash
PORT=3000 npm start
```