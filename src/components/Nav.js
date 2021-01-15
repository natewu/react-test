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
        "name":"another button lol",
        "icon":<InfoIcon/>
    },
    {
        "name":"another button lol",
        "icon":<InfoIcon/>
    }
]

class Nav extends Component{
    render(){
        return (
            // <header style={{backgroundColor:"rgba(0, 0, 0, 0.1)", gridTemplateColumns:"1fr 1fr 3fr 1fr", display:"grid"}}>
            //     <h1 style={{color:"#000", gridColumn:"2"}}>Web App Logo</h1>
            //     <div className="links" style={{display:"grid", gridColumn:"3", gridTemplateColumns:"1fr 1fr 1fr", alignItems:"center"}} >
            //         {navLinks.map(links=>(
            //             <NavItem style={[{display:"grid",gridColumn:"3"},linkStyles]} name={links.name} link={links.link} key={links.name}/>
            //         ))}
            //     </div>
            // </header>
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
