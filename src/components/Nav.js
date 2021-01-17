import React, { Component } from 'react';
import {NavItem} from './NavItem';
import "./NavItem.css"
import TwitterIcon from '@material-ui/icons/Twitter';
import InfoIcon from '@material-ui/icons/Info';
import {Button} from '@material-ui/core';

const navLinks = [
    {
        "name":"Home",
        "link":"",
        "icon":<TwitterIcon/>
    },
    {
        "name":"About",
        "link":"about",
        "icon":<InfoIcon/>
    },
    {
        "name":"Button",
        "icon":<InfoIcon/>,
        "link":"",
    },
    {
        "name":"Button",
        "icon":<InfoIcon/>,
        "link":"",
    }
]

class Nav extends Component{
    render(){
        return (
            <div className="nav"> 
                {navLinks.map(links=>(
                <NavItem style={[linkStyles]} name={links.name} link={links.link} Icon={links.icon} key={links.name}/>
                ))}
                <Button variant="outlined" className={["NavLinks", "nav__post"]}>Post</Button>
            </div>  
        )
    }
}

const linkStyles = {
    textDecoration:"none",
    color:"#000",
}

export default Nav;
