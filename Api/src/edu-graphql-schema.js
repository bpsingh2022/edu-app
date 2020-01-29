import {buildSchema} from 'graphql';

export default buildSchema(`
type User {
    _id: String!,
    user: String,
    password: String
}
input UserInput {
    user: String,
    password: String,
    rePassword: String
}
type Query {
    users: [User!]!
}
type Mutation {
    userAdd(user: UserInput): User!
}
`);//end;