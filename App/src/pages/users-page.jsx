import React, { Component, Fragment } from 'react';

import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Col, Button } from 'reactstrap';
import CustomErrorBox from '../components/error';
import Loader from '../components/loader';

const UsersGrid = ()=>{
    const userquery = gql`
    query users {
            _id
            user
            password
}`;//end;
const {loading, error, data} = useQuery(userquery,{
    onCompleted: (data)=>alert('ready'),
    onError: (err)=>{
        console.log(err);
    }
});

if(loading) return (<p>Loading...</p>);
if(error) return (<p>{error.message}</p>);
return (
<h1>User List</h1>
)};//end;

export default class Users extends Component {
    render(){
        return(
            <div>
<UsersGrid />
            </div>
        )}};//endClass;