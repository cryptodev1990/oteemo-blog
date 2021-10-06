
# Oteemo Blog
Sample React, Flask, and MongoDB blog application for use in Platform One Big Bang

## Roadmap
* containerize each part of the app
* orchestrate with kubernetes

## Installation
pre-containerization installation instructions.

### frontend
`npm install`

`npm start`

### backend
**LEGACY INSTALL** now broken!

`pipenv install --ignore-pipfile`

`pipenv shell`

`python api/api.py`
---
**NEW** dockerized version

`docker build -t backend:1.0 .`

`docker container run --name flask -p 5001:5001 backend:1.0`

### db
start mongo via docker:

`docker run --name mongodb -d -p 5000:27017 mongo`

connect to mongo

`mongo localhost:5000`

init the db

`> use BlogDB`

populate with some fixture

`> db.posts.insertOne({'author':'jedi', 'date': 'whatevadate', 'title':'coolstring', 'posts':'body of msg'})`
<- we gotta change the `posts` key to `body`, `text`, or `post` or smth
