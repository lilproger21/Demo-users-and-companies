import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {NavMenu} from 'components/nav-menu/nav-menu.js';
import {Companies} from '../companies/companies.js';
import {Users} from '../users/users.js';

import './app.css'

const App = () => {
    return (
        <div className='wrapper'>
            <BrowserRouter>
                <NavMenu />
                <Switch>
                    <Route path='/Companies'>
                        <Companies />
                    </Route>
                    <Route path='/Users'>
                        <Users />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App