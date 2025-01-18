

const express = require('express');  
const bodyParser = require('body-parser'); 
const fs = require('fs');  

// Initialize the app
const app = express(); 
app.set('view engine','ejs');
app.set('views', './views');


app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));

app.get('/',(req,res) => {
    res.render("home");
})

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

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
