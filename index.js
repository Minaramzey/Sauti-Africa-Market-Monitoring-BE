const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./graphql_schema/schema');

//const { buildSchema } = require('graphql');

// var schema = buildSchema(`
//     type Query {
//         hello: String
//     }
// `);

// var root = {
//     hello:() => {
//         return 'Hello World!';
//     }
// };

const app = express();
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(5000, () => {
    console.log('Running a GraphQL API server at localhost:5000/graphql');
});