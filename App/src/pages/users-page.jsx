import React, { Component, Fragment } from 'react';

import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Col, Button, ButtonGroup, Card, CardHeader, CardBody, CardGroup } from 'reactstrap';
import CustomErrorBox from '../components/error';
import Loader from '../components/loader';

const UserCard = (props)=>{
    const {user} = props;
return(
<CardBody>
        {user}
</CardBody>    
)};//endCard;


const UsersGrid = ()=>{
    const userquery = gql`
    {users {
            _id
            user
            password
}}`;//end;
const {loading, error, data} = useQuery(userquery,{
    onCompleted: (data)=>alert('ready'),
    onError: (err)=>{
        alert(err);
    }
});

if(loading) return (<p>Loading...</p>);
if(error) return (<p>{error.message}</p>);
return (
    <CardGroup>
{data.users.map((val,i)=>(
<div key={val.user}>
    <UserCard {...val} />
</div>
    ))}
    </CardGroup>
)};//end;

export default class Users extends Component {
    render(){
        return(
            <div>
                <h1>Members</h1>
                <ButtonGroup>
                    <Button type="button" 
                    onClick={()=>this.props.history.push('/signup')}
                    >Add</Button>
                </ButtonGroup>
<UsersGrid />
            </div>
        )}};//endClass;