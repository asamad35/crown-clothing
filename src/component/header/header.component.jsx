import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../assets/crown.svg'

import { auth } from "../firebase/firebase.util";

import './header.styles.scss';

const Header = ({currentUser})=>{
    const title = (title) => title.toUpperCase()
    return (
        <div className="header">
            <Link className="logo-container" to='/'>
                <Logo className='logo'></Logo>
            </Link>
            <div className="options">
                <Link className="option" to='/'>{title('home')}</Link>
                <Link className="option" to='/shop'>{title('shop')}</Link>
                <Link className="option" to='/contact'>{title('contact')}</Link>
                
                    {
                    currentUser ? 
                    <div className="option" onClick={()=> auth.signOut()}> {title('sign out')} </div> 
                    : 
                    <Link className="option" to='/signin'> {title('sign in')} </Link>
                     }
            </div>
        </div>
    )
}

export default Header