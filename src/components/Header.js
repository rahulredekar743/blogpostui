import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className={`ui secondary pointing menu`}>
            <Link to={`/`} className={`item`}>
                Blog Post
            </Link>
            <div className={`right menu`}>
                <Link to={`/`} className={`item`}>
                    All Blog
                </Link>
            </div>
        </div>
    )
};

export default Header;