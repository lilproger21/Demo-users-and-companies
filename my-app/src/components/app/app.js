import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import NavMenu from 'components/nav-menu/nav-menu.js';
import Companies from '../companies/Companies.js';
import Users from '../users/Users.js';

import './app.css'

const App = () => {
    return (
        <div className='wrapper'>
            <BrowserRouter>
                <NavMenu />
                <Switch>
                    <Route path='/Company'>
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