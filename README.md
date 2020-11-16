# Note Taking App
by. SeHee

## Goal
- Duration : 2hrs
- Render a list of notes onto a web page.
- Allow the user to create new notes in the user interface (UI).
- Add the ability for a user to Edit and Delete notes in the UI.
- Add persistent storage to your application using a relational database (e.g. SQLite).
- Add the concept of users. Allow a user to “login” (with just a username, don’t worry about a password)
- When a user creates a note, that note is associated with their username.
- Users should not be able to see each others’ notes.
- You don’t need to create a User models in the database, rather, you can just add a column to your Notes table that stores the username of who created the note.


## Tech stacks
- Frontend : React.Js, Bootstrap, React Bootstrap
- Backend : Python, Flask
- Database : SQLite

## Installation

## Frontend

```
git clone https://github.com/seheesf88/notetaking_app_frontend.git
npm install
```
run

```
cd notetaking_app_frontend
npm start
```

## Backend

```
git clone https://github.com/seheesf88/notetaking_app_backend.git
cd notetaking_app_backend
virtualenv .env -p python3
source .env/bin/activate
pip3 install flask-restful peewee flask flask_login flask_cors
pip3 freeze > requirements.txt

```

run
```
python3 app.py
```
## Introduction

This is a simple note taking app. Users can post title and content(note) after they register their username and password. If users don't register, they can't post a note. Users also can't share their notes(contents) with others.
Users can't delete or edit note if those notes are not theirs. Once they login, they can see the delete button and edit button.  

## Further features or things that I want to update.
1. I want to make better UX for the login/logout button.
2. I want to use CSS(sass) for better UI.
3. I want to change variable name postings to note.
 
