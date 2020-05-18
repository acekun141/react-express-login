import React from 'react';
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
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <HomePage/>
                    </Route>
                    <Route path='/signin'>
                        <SigninPage/>
                    </Route>
                    <Route path='/register'>
                        <RegisterPage/>
                    </Route>
                </Switch>
            </Router>
        )
    };
}

export default App;