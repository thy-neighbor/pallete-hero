//sign up form

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
