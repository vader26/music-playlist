import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    const links = [
        {
            title: 'Home',
            path: '/'
        }
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {links.map(link => {
                        return <Link className="nav-item nav-link" to={link.path}>{link.title}</Link>
                    })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;