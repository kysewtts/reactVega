import React from 'react';
import { Link } from 'react-router-dom';

const navbar = (props) => {
    return(
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo center"  style = {{"textDecoration": "none"}}>ReactVegaLite</Link>
            </div>
        </nav>
    );
}

export default navbar;