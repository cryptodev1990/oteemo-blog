db = db.getSiblingDB('BlogDB')

db.posts.insertMany([
   {'author':'root', 'date': '4 OCT 2021', 'title':'how to hack the world', 'posts':'copy paste `rm -rf /`!!'},
   {'author':'junior programmer', 'date': 'datetime.now?', 'title':'hello world', 'posts':'all hail Ismail'},
   {'author':'Lorem', 'date': 'another dollar', 'title':'another day', 'posts':'lorem ipsum i forget the rest...'},
   {'author':'jedi', 'date': 'whatevadate', 'title':'coolstring', 'posts':'body of msg'}
])