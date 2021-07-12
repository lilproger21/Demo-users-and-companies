import React from 'react';
import {NavLink} from 'react-router-dom';

import './nav-menu.css'




const NavMenu = () => {

        return (
            <header className='header'>
                <div className='container'>
                    <div className='header__body'>
                        <nav className='header__menu'>
                            <ul className="header__list">
                                <li>
                                    <NavLink to='/Company' activeStyle={{color: "blue"}} className='button__header'>Company</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/Users' activeStyle={{color: "blue"}} className='button__header'>Users</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }



export default NavMenu;
