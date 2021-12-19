import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
        <nav className='navBarConteiner'>
            <h1>RestCountries!</h1>
        <nav className='navBar'>
            <ul>
               <Link to={'/'}> <li>HOME</li></Link>
                <li>REGISTER</li>
            </ul>
         </nav>
         </nav>
        </>
    )
}

export default Sidebar;
