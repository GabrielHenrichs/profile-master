import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={SignIn} />
    </Switch>
);

export default Routes;
