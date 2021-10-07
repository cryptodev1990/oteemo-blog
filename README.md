# Oteemo Blog
Sample React, Flask, and MongoDB blog application for use in Platform One Big Bang

# Roadmap
* containerize each part of the app
  - [x] frontend
  - [x] backend
  - [x] db
* skipping docker-compose
* orchestrate with kubernetes

# Installation

## frontend
**LEGACY INSTALL**

```bash
cd frontend
npm install
npm start
```

**NEW INSTALL**

```bash
cd frontend
docker build -t frontend:1.0 .
docker run --name react -p 3000:3000 frontend:1.0
```

## backend
**LEGACY INSTALL**

```bash
cd backend
pipenv install --ignore-pipfile
pipenv shell
python api/api.py
```
**NEW INSTALL**

```bash
cd backend
docker build -t backend:1.0 .
docker container run --name flask -p 5001:5001 backend:1.0
```

## db
**LEGACY INSTALL**
```bash
docker run --name mongodb -d -p 5000:27017 mongo
# use mongosh to init BlogDB
mongosh localhost:5000
> use BlogDB
> db.posts.insertOne({'author':'jedi', 'date': 'whatevadate', 'title':'coolstring', 'posts':'body of msg'})
```

**NEW INSTALL**
```bash
cd db
chmod +x install.sh
./install.sh
```

NOTE: Database is ephemeral, initialized with fixture data upon container
creation via install script for demonstration purposes. We could mount a
local directory or just implement StatefulSet down the line.