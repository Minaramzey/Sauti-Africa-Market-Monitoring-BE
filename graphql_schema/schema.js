const graphql = require('graphql');
const { GraphQLSchema } = graphql;

const RootType = require('./root_query_type');

module.exports = new GraphQLSchema({
    query: RootType
});