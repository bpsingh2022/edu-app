import express from 'express';
import BodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import {buildSchema} from 'graphql';
import httpGraphql from 'express-graphql';
import bodyParser from 'body-parser';
import EduGraphqlSchema from './edu-graphql-schema';
import EduGraphqlResolver from './edu-graphql-resolver';

const FormatError = require('easygraphql-format-error');

const App = express();

App.use(BodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));
App.use(cors());

/* format errors  */
const formatError = new FormatError([
    {
        name: 'NO_USER',
        message: "no users found",
        statusCode: 400
    }
]);//end;
const errorName = formatError.errorName;

App.use("/", (req, res)=>{
    httpGraphql({
    schema: EduGraphqlSchema,
    rootValue: EduGraphqlResolver,
    context: { errorName},
    customFormatError: (err)=>{
return {message:'test'}
    },graphiql: true,
    
})(req, res);
});//end;

const port = process.env.PORT || 3001;

App.listen(port, ()=>console.log(`EduApi start on Port: ${port}`));