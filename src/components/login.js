import React from 'react'
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import LoginForm from './login-form';
import './form.css'
import './login.css'


export function login(props){
        // If we are logged in redirect straight to the user's dashboard
        if (props.loggedIn) {
            return <Redirect to="/dashboard" />;
        }

    return(
        <section id="login">
            <div id="login-content" class="row">
                <div class="col-12">
                <LoginForm />
                <p>Don't Have an Account? <a class="link" href="/signup">Signup</a></p>  
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(login);

