import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = `#graphql
  type Book {
    id: ID
    title: String
    author: String
  }

  type User {
    id: ID
    name: String
    email: String
  }

  type Query {
    books: [Book]
    getAllUsers: [User]   # 👈 new query
  }
`;

const users = [
  { id: "1", name: "Saurabh Singh", email: "saurabh@example.com" },
  { id: "2", name: "Raj Kumar", email: "raj@example.com" },
];


  // Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
    getAllUsers: () => users,   // 👈 new resolver
  },
};

  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 5000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);