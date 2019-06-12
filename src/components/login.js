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

/**
                    <form class='form login-form'>
                        <legend><h2>Login</h2></legend>

                        <div class="form-input">
                        <label for="username">Email</label>
                        <br/>
                        <input type="text" name='username' id='username' placeholder='123@abc.com' />
                        </div>

                        <div class="form-input">
                        <label for="password">Password</label>
                        <br/>
                        <input type="password" name='password' id='password' placeholder='Password' />
                        </div>

                        <button type='submit'>Log in</button>
                    </form>
                    <p>Don't Have an Account? <a href="/signup">Sign up</a></p>  
*/