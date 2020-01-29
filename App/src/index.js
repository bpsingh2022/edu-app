import React from 'react';
import ReactDOM from 'react-dom';

import graphql from 'graphql';
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

import App from './App';

/*  bootstrap  */
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min";
import "popper.js/dist/popper.min";
import "bootstrap/dist/js/bootstrap.min.js";

import * as serviceWorker from './serviceWorker';
/*  bind graphql api  */
const link = new createHttpLink({uri: "http://localhost:3001/"});
const cache = new InMemoryCache();
const AppClient = new ApolloClient({
    link,
    cache
});//end;


ReactDOM.render(
    <ApolloProvider client={AppClient}>
<App />
    </ApolloProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
