docker run --name mongodb -d -p 5000:27017 mongo
docker cp fixture.js mongodb:/fixture.js
docker exec mongodb mongosh fixture.js
