//sign up form
//I HAVE TO MAKE THIS LOOK LIKE REGISTRATION FORM
import React from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import RegistrationForm from './registration-form';

import './form.css'

export function Signup(props){

    if(props.loggedIn){
        return <Redirect to="/creator"/>;
    }

    return(

        <section id="signup">
            <div id="login-content" class="row">
                <div class="col-12">
                        <RegistrationForm/>
                        <p>Already Have an Account? <a class="link" href="/login">Login</a> </p>
                    
                </div>
            </div>

        </section>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Signup);

/*

    <section class="signup">
        <div class="row">
            <div class="col-12">
                
                    <form class='form signup-form'>
                        <legend><h2>Sign Up</h2></legend>

                        <div class="form-input">
                        <label for="first-name">First name</label>
                        <br/>
                        <input placeholder='First Name' type="text" name='first-name' id='first-name' />
                        </div>

                        <div class="form-input">
                        <label for="last-name">Last name</label>
                        <br/>
                        <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
                        </div>

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

                        <button type='submit'>Sign Up</button>
                    </form>
                    <p>Already Have an Account? <a href="/login">Login</a> </p>
                
            </div>
        </div>

    </section>
*/