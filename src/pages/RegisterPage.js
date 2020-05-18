import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            email: '',
            password: '',
            rePassword: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
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
                    <form>
                        <p className="h5 text-center mb-4">Register</p>
                        <div className="grey-text">
                            <MDBInput
                                label="Enter your phonenumber"
                                icon="phone"
                                group type="number"
                                validate error="wrong"
                                success="right"
                                name="phone"
                                value={this.state.phone}
                                onChange={this.handleChange}
                            />
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
                            <MDBInput
                                label="Re-enter password"
                                icon="lock"
                                group type="password"
                                validate
                                name="rePassword"
                                value={this.state.rePassword}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="text-center">
                            <MDBBtn
                                type="submit"
                                disabled={
                                    this.state.email &&
                                    this.state.password &&
                                    this.state.rePassword &&
                                    this.state.phone
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

export default RegisterPage;