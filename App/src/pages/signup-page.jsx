import React, { Component, Fragment } from 'react';

import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Form, FormGroup, Label, Input, ButtonGroup, Button } from 'reactstrap';
import CustomErrorBox from '../components/error';
import Loader from '../components/loader';

function SignUp  (){
return(
    <h1>Member add</h1>
)
};//end;

export default SignUp;