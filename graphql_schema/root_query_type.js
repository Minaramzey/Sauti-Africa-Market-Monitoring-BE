const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLID } = graphql;

const Users = require('../users/users-model');

const UserType = require('./user_type');

const RootType = new GraphQLObjectType({
    name: "RootType",
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve() {
                return Users.find({}); 
            }
        },
        user: {
            type: UserType,
            args: {
                id: {
                    type: GraphQLID
                }
            },
            resolve(parentValue, args) {
                return Users.findById(args.id);
            }
        }
    }
});

module.exports = RootType;