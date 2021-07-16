import React from 'react';
import {NavLink} from 'react-router-dom';

import './nav-menu.css'




export const NavMenu = () => {

    return (
        <header className='header'>
            <div className='container'>
                <div className='header-body'>
                    <nav className='header-menu'>
                        <ul className="header-list">
                            <li>
                                <NavLink to='/Companies' activeStyle={{ color: "blue" }} className='button-header'>Companies</NavLink>
                            </li>
                            <li>
                                <NavLink to='/Users' activeStyle={{ color: "blue" }} className='button-header'>Users</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
