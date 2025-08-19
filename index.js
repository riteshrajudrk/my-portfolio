

const express = require('express');  
const bodyParser = require('body-parser'); 
const fs = require('fs');  

// Initialize the app
const app = express(); 
app.set('view engine','ejs');
app.set('views', './views');


app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));



// Define the POST route for form submission
app.post('/submit-form', (req, res) => {
  const formData = {
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    message: req.body.message,
  };

  // Save form data to a file
  fs.appendFile('responses.txt', JSON.stringify(formData) + '\n', (err) => {
    if (err) {
      console.error('Error saving response:', err);
      res.status(500).send('Something went wrong.');
    } else {
      res.send('Thank you for your message!');
    }
  });
});

const projects = [
  {
    title: "Mindverse Blog App",
    category: "fullstack",
    image: "/images/mindverseProject.png",
    description: "A full-stack blog app built with EJS, Express, MongoDB (Mongoose), HTML, CSS, and JavaScript.",
    github: "https://github.com/riteshrajudrk/mindverse.git",
    live: "https://mindverse-cshl.onrender.com/"
  },
  {
    title: "Snake Game",
    category: "game",
    image: "/images/snakegameProject.jpeg",
    description: "A classic snake game developed using Python's Turtle library.",
    github: "https://github.com/riteshrajudrk/Snake-Game.git",
    live: "https://github.com/riteshrajudrk/Snake-Game.git"
  },
  {
    title: "Music Player Web App",
    category: "webapp",
    image: "/images/musicplayerProject.png",
    description: "A music player web app built using HTML, CSS, and JavaScript.",
    github: "https://github.com/riteshrajudrk/basic-music-player.git",
    live: "https://basic-music-player.onrender.com"
  },
  {
    title: "Text to Scanner",
    category: "webapp",
    image: "/images/texttoscannerProject.png",
    description: "A simple web app that converts text to a QR code scanner using HTML, CSS, and JavaScript.",
    github: "https://github.com/riteshrajudrk/Text-To-Scanner-Converter.git",
    live: "https://text-to-scanner-converter.onrender.com"
  },
  {
    title: "Weather App",
    category: "webapp",
    image: "/images/weatherProject.jpeg",
    description: "A weather forecasting web app built using HTML, CSS, and JavaScript.",
    github: "https://github.com/riteshrajudrk/basic-weather-app.git",
    live: "https://basic-weather-app-pt3m.onrender.com"
  }
];





const technicalSkills = [
  // 🖥️ Programming Languages
  { name: "C", percent: 70, category: "language" },
  { name: "C++", percent: 75, category: "language" },
  { name: "Python", percent: 65, category: "language" },
  { name: "Java", percent: 60, category: "language" },
  { name: "JavaScript", percent: 70, category: "language" },

  // 🎨 Frontend
  { name: "HTML", percent: 85, category: "frontend" },
  { name: "CSS", percent: 75, category: "frontend" },
  { name: "React", percent: 65, category: "frontend" },
  { name: "EJS", percent: 70, category: "frontend" },
  { name: "Tailwind CSS", percent: 60, category: "frontend" },

  // ⚙️ Backend
  { name: "Node.js", percent: 75, category: "backend" },
  { name: "Express.js", percent: 70, category: "backend" },
  { name: "REST API", percent: 70, category: "backend" },

  // 🗄️ Database
  { name: "MongoDB", percent: 70, category: "database" },
  { name: "Mongoose", percent: 65, category: "database" },

  // 🛠️ Tools & Deployment
  { name: "Git", percent: 85, category: "tools" },
  { name: "GitHub", percent: 80, category: "tools" },
  { name: "Postman / Thunder Client", percent: 75, category: "tools" },
  { name: "Vercel", percent: 70, category: "tools" },
  { name: "Render", percent: 70, category: "tools" },
];


app.get("/", (req, res) => {
  res.render("home", { technicalSkills, projects }); // Pass data to homepage
});


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
