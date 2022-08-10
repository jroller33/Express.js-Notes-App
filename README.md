# Express.js Notes App
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
## Description
This is a deployed app that allows you to read, edit, save and delete notes. It uses Express.js, REST API, npm, UUID, bootstrap, HTML, CSS, and javascript. 

### HTML routes: 
- ✅ GET /notes - returns /public/notes.html   
- ✅ GET * - returns /public/index.html    

### API routes:
- ✅ GET /api/notes - read db.json and return all saved notes as JSON 
- ✅ GET /api/notes/:id - read db.json and return specific saved note 
- ✅ POST /api/notes - receive new note to save on the request body, add to db.json, and return the new note to the client. 
- ✅ DELETE /api/notes/:id - receives a query parameter w the id of a note to delete. 1st read all notes from db.json, remove the note with the given id property, and rewrite notes to db.json 

## Table of Contents
- [Deployed Link](#deployed-link)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Contact](#contact)

## Deployed Link

https://arcane-thicket-35541.herokuapp.com/

### ⚠️Note about Heroku:⚠️
If you experience a 5-10 second lag after clicking the link, it is because I'm using the free version of [Heroku](https://www.heroku.com/about). The server for an app on Heroku isn't listening at all times, because Heroku kills it after ~10 minutes if it doesn't receive a request. So when you click the link, the lag is from Heroku spinning-up the server so that it can receive your request and respond.<br/>

## Usage

1. On the landing page, click the "Get Started" button.
2. You will be redirected to the /notes page.
3. Saved notes are shown in the left column.
4. On the right, you can click on the title and text fields to type a new note.
5. After you've entered a title and text, a save button will appear in the top-right corner.
6. After you click the save button, the saved note will appear in the left column.
7. You can click on any saved note on the left, and the title and text for that note will appear on the right.
8. Click the '+' button in the top-right corner to write a new note.
9. To delete a saved note, click the red delete button next to the note.

## Contribution
You can fork the repo at https://github.com/jroller33/Express.js-Notes-App

## Tests
Used [Insomnia](https://insomnia.rest/) for API testing.

## License
This project is licensed under the MIT License. <br/>
https://www.mit.edu/~amini/LICENSE.md

## Contact
GitHub: https://github.com/jroller33 

