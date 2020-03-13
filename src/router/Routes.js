import React from "react";
import { Route, Switch } from 'react-router-dom';
// import routes below

import Register from '../login/Registration';
import Login from '../login/Login';

const Routes = () => {
    return (
        <>
        <Switch>
            <Route path='/register' exact component={Register} />
            <Route path='/login' component={Login} />
        </Switch>
        </>
    )
}
 
export default Routes;
