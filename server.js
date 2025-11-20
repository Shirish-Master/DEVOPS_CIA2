const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the main page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hi, I am Shirish Shyam</title>
      <style>
        body {
          margin: 0;
          font-family: 'Helvetica Neue', Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(135deg, #6a11cb, #2575fc);
          color: white;
        }
        .container {
          text-align: center;
          background: rgba(255, 255, 255, 0.1);
          padding: 40px 60px;
          border-radius: 20px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.2);
          animation: fadeIn 1.5s ease-in-out;
        }
        h1 {
          font-size: 3rem;
          margin: 0 0 20px 0;
        }
        p {
          font-size: 1.2rem;
          opacity: 0.9;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hi, I am Shirish Shyam</h1>
        <p>Welcome to my sample web page!</p>
      </div>
    </body>
    </html>
  `);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = server;
