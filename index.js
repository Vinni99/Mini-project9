const inquirer = require('inquirer');
const fs = require('fs')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'checklist',
      message: 'Where are you from?',
      name: 'country',
    },
    {
      type: 'checklist',
      message: 'What is your favorite food?',
      name: 'food', 
    },
    {
        type: 'checklist',
        message: 'What is your favorite color?',
        name: 'color', 
      },
  ])
.then((data) => {

    

    fs.writeFile('index.html', createHTMLString(data), (err) =>
     err ? console.log(err) : console.log('Success!'))

});

function createHTMLString (answers) {
  // console.log(answers)
 return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Username: ${answers.username}</h1>
    <h2>Country: ${answers.country}</h2>
    <h2>Favorite-Food: ${answers.food}</h2>
    <h2>Favorite-Color: ${answers.color}</h2>
</body>
</html>
  `
}