import React from 'react';
import {register} from '../services/userService';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const initialState = {
    phone: '',
    email: '',
    password: '',
    rePassword: '',
    error: '',
}

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
    };
    validate = (form) => {
        if (
            form.phone && form.email &&
            form.password && form.rePassword
        ) {
            if (form.password === form.rePassword) {
                return false;
            }
        }
        return true;
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        if (!this.validate(this.state)) {
            const result = await register(this.state.phone, this.state.email, this.state.password);
            console.log(result);
            this.setState(initialState);
        }
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
                                disabled={this.validate(this.state)}
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