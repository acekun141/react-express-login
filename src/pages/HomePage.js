import React from 'react';
import {connect} from 'react-redux';

let HomePage = ({user}) => {
    return (
        <div>
            <h2>Home Page</h2>
            {user}
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