import React, {Component} from 'react'
import Cart from './img/shopping-cart-solid.svg'
import './css/Header.css'
import {DataContext} from './Context'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Header extends Component{
    static contextType = DataContext
    render(){
        const {cart} = this.context
        return(
            <header>
                <div className="logo">
                    <h1><Link to="/product">NIKE</Link></h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/product">Home</Link></li>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/product">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>                       
                        <li><Link to="/login">Login / Register</Link></li>
                    </ul>
                    <div className = "cart">
                        <span>{cart.length}</span>
                        <Link to ="/cart"><img src={Cart} width="20"></img></Link>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;