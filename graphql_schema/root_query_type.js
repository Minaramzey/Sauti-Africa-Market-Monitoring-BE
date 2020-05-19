const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLID } = graphql;

//? dummy database with dummy datasets
const _ = require('lodash'); 
const users = [
    { id: "1", name: "testing1", username: "testing#ONE", password: "001", email: "one@email.com" },
    { id: "2", name: "testing2", username: "testing#TWO", password: "002", email: "two@email.com" },
    { id: "3", name: "testing3", username: "testing#THREE", password: "003", email: "three@email.com" },
    { id: "4", name: "testing4", username: "testing#FOUR", password: "004", email: "four@email.com" },
    { id: "5", name: "testing5", username: "testing#FIVE", password: "005", email: "five@email.com" }
]

const UserType = require('./user_type');

const RootType = new GraphQLObjectType({
    name: "RootType",
    fields: {
        user: {
            type: UserType,
            args: { 
                id: { 
                    type: GraphQLID 
                } 
            },
            resolve(parentValue, args) {
                return _.find(users, { id: args.id }); 
            }
        }
    }
});

module.exports = RootType;