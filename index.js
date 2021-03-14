const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const { MONGODB, port } = require("./config");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => server.listen({ port: port }))
  .then((res) => {
    console.log(`Server ${res.url}`);
  });
