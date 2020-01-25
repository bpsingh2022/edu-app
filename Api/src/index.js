import {ApolloServer, gql,
    
} from 'apollo-server';

const typeDefs = gql`
type test {
 name: String
 }
 type Query {
     test: String
 }`;//end;
const resolver = {
    Query:{
        test: (root, arg, context, info)=>{
            return {name: 'test'}
        }
    }
};//end;

const server = new ApolloServer({
    typeDefs,
    resolver
});//end;

server.listen().then((res)=>console.log(`start server for port: ${res.port}`));