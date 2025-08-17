# 🚀 Basics of GraphQL  

GraphQL is a **query language for APIs** and a **runtime for fulfilling those queries** with your existing data.  
It allows clients to request exactly the data they need, making APIs **faster, flexible, and developer-friendly**.  

---

## ⚡ Why GraphQL?  

✅ **Single Endpoint** → Unlike REST (multiple endpoints), GraphQL uses only one endpoint.  
✅ **Get Only What You Need** → No over-fetching or under-fetching.  
✅ **Strongly Typed** → Schema defines the shape of your data clearly.  
✅ **Faster Development** → Frontend teams can ask for specific fields without backend changes.  

---
```bash

📂 basics-of-graphql
 ┣ 📜 server.js     # Main server setup
 ┣ 📜 schema.js     # GraphQL schema (typeDefs + resolvers)
 ┣ 📜 package.json  # Node dependencies
 ┣ 📜 .gitignore
 ┗ 📜 README.md     # Documentation


---

## 📦 Installation  

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/basics-of-graphql.git
cd basics-of-graphql

# 2. Install dependencies
npm install

# 3. Start the server
npm start
Server will start at 👉 http://localhost:5000/

🔧 Code Snippets
1. Schema Definition (schema.js)
js
Copy
Edit
const typeDefs = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  { title: "The Awakening", author: "Kate Chopin" },
  { title: "City of Glass", author: "Paul Auster" },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

export { typeDefs, resolvers };
2. Server Setup (server.js)
js
Copy
Edit
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs, resolvers } from './schema.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 5000 },
});

console.log(`🚀 Server ready at: ${url}`);
🎯 Example Query
Query all books
graphql
Copy
Edit
query {
  books {
    title
    author
  }
}
✅ Response:

json
{
  "data": {
    "books": [
      { "title": "The Awakening", "author": "Kate Chopin" },
      { "title": "City of Glass", "author": "Paul Auster" }
    ]
  }
}
