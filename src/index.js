import { ApolloServer, gql } from 'apollo-server';

// 'Query' is a GraphQL reserved Type that determines that everything inside it can be fetched.
const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }
    type User {
      id: ID!
      username: String!
    }
  `,
  resolvers: {
    Query: {
      user: () => ({
        id: '1',
        username: 'Lucas',
      }),
      users: () => {
        const user1 = {
          id: '1',
          username: 'Lucas 1',
        };
        const user2 = {
          id: '2',
          username: 'Lucas 2',
        };

        return [user1, user2];
      },
    },
  },
});

server.listen(4000).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});
