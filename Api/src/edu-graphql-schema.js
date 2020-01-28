import {buildSchema} from 'graphql';

export default buildSchema(`
type User {
    _id: String!,
    user: String,
    password: String
}
type Query {
    users: [User!]!
}
`);//end;