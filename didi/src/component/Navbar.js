import React from 'react';
import '../App.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className = 'flexDivOfNavbar'>
            <Link to ='/' className = 'linkNavBar'>A propos de moi</Link>
            <Link to = '/tarifs' className = 'linkNavBar'>Mes tarifs</Link>
                <p className =' titleNavbar'>Andy</p>
            <Link to ='/devis' className = 'linkNavBar'>Devis rapide</Link>
            <Link to = '/contact' className = 'linkNavBar'>Me contacter</Link>
        </div>
    )
}

export default Navbar;