import React from 'react'

import './form.css'

export default function login(props){

    return(
        <section class="login">
        <div class="row">
            <div class="col-12">
                
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

                        <button type='submit'>Sign Up</button>
                    </form>
                    <p>Don't Have an Account? <a href="/signup">Sign up</a></p>
                
            </div>
        </div>

    </section>
    );
}
