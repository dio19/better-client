import React from 'react';
import './index.scss';

const NavBar = () => {
    return (
        <nav className="navbar">
            <a className="navbar__title" href="/" >{<h1>Customers App</h1>}</a>
                <ul className="navbar__list">
                    <a
                        href="/"
                        >{<li className="navbar__list-item"><div className="navbar__list-item-link">Home</div></li>}
                    </a>
                    <a
                        href="/customers"
                        >{<li className="navbar__list-item"><div className="navbar__list-item-link">Customers</div></li>}
                    </a>
                </ul>
        </nav>
    )
}

export default NavBar;
