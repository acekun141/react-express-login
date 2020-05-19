import React from 'react';
import Header from './Header';
import HomePage from '../pages/HomePage';
import SigninPage from '../pages/SigninPage';
import RegisterPage from '../pages/RegisterPage';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/'>
                    <Header/>
                    <HomePage/>
                </Route>
                <Route path='/signin' component={SigninPage}/>
                <Route path='/register'>
                    <RegisterPage/>
                </Route>
            </Switch>
        )
    };
}

export default App;
