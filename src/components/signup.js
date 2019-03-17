//sign up form
import React from 'react'

import './form.css'

export default function Signup(){
    return(

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
    );
}