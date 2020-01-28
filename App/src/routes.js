import React, { lazy, Suspense } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import PageNotFound from './pages/page-404';
import Loader from './components/loader';

const Public = [
    {name: "Login", path: "login-page.jsx", url: "/login", title: "Member Login"}
];//end;
const Private = [
    {name: "Dashboard", path: "dashboard-page.jsx", url: "/dashboard", title: "Dashboard"},
    {name: "User", path: "pages/user-page.jsx", url: "/user/:id", title: "Member Detail"},
    {name: "Users", path: "users-page.jsx", url: "/users", title: "Registred Members"},
    {name: "RegisterMember", path: "pages/register-page.jsx", url: "/signup", title: "Member Registration"},

];//end;

export default function MainRoutes (){
    return (
        <Suspense fallback={Loader}>
    <BrowserRouter>
    <Switch>
    {Private.map((val,i)=>{
        const PageComponent = lazy(()=>import('./pages/'+val.path));
        return <Route 
        exect="true" 
        path={val.url} 
        render={(props)=><PageComponent {...props} />}
        />})}

        {Public.map((val,i)=>{
        const PageComponent = lazy(()=>import('./pages/'+val.path));
        return <Route 
        exect="true" 
        path={val.url} 
        render={(props)=><PageComponent {...props} />}
        />})}
    
    <Route component={PageNotFound} />
    </Switch>
    {window.location.pathname === "/" && (<Redirect to="/dashboard" />)}
    </BrowserRouter>
    </Suspense>
    )};//end;