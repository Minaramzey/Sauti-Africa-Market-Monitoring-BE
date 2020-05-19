const express = require('express');
const expressGraphQL = require('express-graphql');
const { buildSchema } = require('graphql');

var schema = buildSchema(`
    type Query {
        hello: String
    }
`);

var root = {
    hello:() => {
        return 'Hello World!';
    }
};

const app = express();
app.use('/graphql', expressGraphQL({
    graphiql: true,
    rootValue: root,
    schema: schema
}));

app.listen(5000, () => {
    console.log('Running a GraphQL API server at localhost:5000/graphql');
});