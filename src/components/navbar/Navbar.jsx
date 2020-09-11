import React, { Component } from 'react'

import {MenuItems} from './MenuItems'
import './Navbar.css';

export default class Navbar extends Component {
   render() {
      return (
         <nav className="NavbarItems">
            <h1 className="navbar-logo">Taguara Digital
               <i className="fab fa-react"></i>
            </h1>
            <div className="menu-icon">
            </div>
            <ul>
               {MenuItems.map((item, index) => {
                  return (
                     <li key={index}><a className={item.cName} href={item.url}>{item.link}</a></li>
                  )
               })}
            </ul>
         </nav>
      )
   }
}
