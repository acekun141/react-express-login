import React from 'react';
import {connect} from 'react-redux';

let HomePage = ({user}) => {
    return (
        <div className="module-homepage">
            <h2>Home Page</h2>
            <p>{user.phone}</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
        </div>
    )
};

const mapStateToProps = (state) => ({
    user: state.user
});

HomePage = connect(
    mapStateToProps,
    null
)(HomePage)

export default HomePage;
