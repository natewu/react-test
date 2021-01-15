import React from 'react'
import {Link} from 'react-router-dom';
import './NavItem.css';

export const NavItem = ({name,link,Icon,active}) => {
    return (
        <div >
            <Link style={linkStyle} to={'/'+link}>
                <div className={`NavLinks ${active && "NavLinks--active"}`}>
                    {Icon}
                    {name}
                </div>
            </Link>
            
        </div>
        
    )
}

const linkStyle = {
    textDecoration:"none",
    color:"#000",
    fontSize:"20px",
    "&:hover":{
        backgroundColor:"#e8f5fe",
        color:"Blue"
    }
};