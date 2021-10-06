command to start mongo:
`docker run --name mongodb -d -p 5000:27017 mongo`

command to initialize db through mongo shell
`db.posts.insertOne({'author':'jedi', 'date': 'whatevadate', 'title':'coolstring', 'posts':'body of msg'})`
