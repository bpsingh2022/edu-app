import React, { lazy, Suspense, Fragment, useState } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Helmet from 'react-helmet';
import PageNotFound from './pages/page-404';
import Loader from './components/loader';

const Public = [
    {name: "LogIn", path: "login-page.jsx", url: "/login", title: "Member Login"},
    {name: "SignUp", path: "signup-page.jsx", url: "/signup", title: "Member Registration"},
];//end;
const Private = [
    {name: "Dashboard", path: "dashboard-page.jsx", url: "/dashboard", title: "Dashboard"},
    {name: "User", path: "user-page.jsx", url: "/user/:id", title: "Member Detail"},
    {name: "Users", path: "users-page.jsx", url: "/users", title: "Registred Members"},
    // {name: "RegisterMember", path: "register-page.jsx", url: "/signup", title: "Member Registration"},

];//end;

export default function MainRoutes (){
    const [cn, setCn] = useState(document.title);
    return (
        <Suspense fallback={Loader}>
    <BrowserRouter>
    <Switch>
    {Private.map((val,i)=>{
        const PageComponent = lazy(()=>import('./pages/'+val.path));
        return <Route 
        exect="true" 
        path={val.url} 
        render={(props)=>(
            <Fragment>
                <Helmet>
                    <title>{cn+' - '+val.title}</title>
                </Helmet>
        <PageComponent {...props} />
        </Fragment>)}
        />})}

        {Public.map((val,i)=>{
        const PageComponent = lazy(()=>import('./pages/'+val.path));
        return <Route 
        exect="true" 
        path={val.url} 
        render={(props)=>(
            <Fragment>
                <Helmet>
                    <title>{cn+' - '+val.title}</title>
                </Helmet>
        <PageComponent {...props} />
        </Fragment>)}
        />})}
    
    <Route component={PageNotFound} />
    </Switch>
    {window.location.pathname === "/" && (<Redirect to="/dashboard" />)}
    </BrowserRouter>
    </Suspense>
    )};//end;