import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <Link to='/signin'>Sign In</Link>
                <Link to='/register'>Register</Link>
            </div>
        )
    }
}

export default Header;