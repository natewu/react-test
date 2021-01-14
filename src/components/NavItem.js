import React from 'react'
import {Link} from 'react-router-dom';

export const NavItem = ({name}) => {
    return (
        <div>
            {/* <a href="./{{name}}"><h2>{name}</h2></a> */}
            <Link to={'/'+name}>{name}</Link>
        </div>
    )
}
