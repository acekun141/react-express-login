import React from 'react';
import {connect} from 'react-redux';
import {signIn} from '../ducks/user/actions';
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn} from 'mdbreact';

const initialState = {
    email: '',
    password: '',
}

class SigninPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.email && this.state.password) {
            this.props.signIn(this.state);
            this.setState(initialState);
        };
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    render() {
        return (
            <MDBContainer className="module-signin">
                <MDBRow>
                    <MDBCol md="6" className="ml-auto mr-auto">
                    <form onSubmit={this.handleSubmit}>
                        <p className="h5 text-center mb-4">Sign in</p>
                        <div className="grey-text">
                            <MDBInput
                                label="Type your email"
                                icon="envelope"
                                group type="email"
                                validate error="wrong"
                                success="right"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            <MDBInput
                                label="Type your password"
                                icon="lock"
                                group type="password"
                                validate
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="text-center">
                            <MDBBtn
                                type="submit"
                                disabled={
                                    this.state.email && this.state.password
                                        ? false
                                        : true
                                }
                            >
                                Login
                            </MDBBtn>
                        </div>
                    </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    };
};

const mapDispatchToProps = {
    signIn: signIn
};

SigninPage = connect(null, mapDispatchToProps)(SigninPage)

export default SigninPage;