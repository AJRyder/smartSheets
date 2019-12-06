import React from 'react'
import { NavLink } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

const NavBar = () => { 
    return ( 
        <div>
            <NavLink to={ROUTES.HOME}>HOME</NavLink>
            <NavLink to={ROUTES.LOGIN}>LOGIN</NavLink>
            <NavLink to={ROUTES.SIGN_UP}>SIGN UP</NavLink>
            <NavLink to={ROUTES.PRODUCTIONS}>PRODUCTIONS</NavLink>
            <NavLink to={ROUTES.CALLSHEETS}>CALL SHEETS</NavLink>
        </div>
    )
}

export default NavBar