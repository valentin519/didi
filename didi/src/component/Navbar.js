import React from 'react';
import '../App.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className = 'flexDivOfNavbar'>
            <Link to ='/' className = 'linkNavBar'>A propos de moi</Link>
            <Link to = '/tarifs' className = 'linkNavBar'>Mes tarifs</Link>
            <p className =' titleNavbar'>Andy</p>
            <p className = 'linkNavBar'>Devis rapide</p>
            <p className = 'linkNavBar'>Me contacter</p>
        </div>
    )
}

export default Navbar;