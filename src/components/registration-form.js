// form for registration
import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 5, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component{
    onSubmit(values){
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        
        
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
            
    }

    render(){
        return (
            <form
                class="form signup-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                    <div class="header">
                        <h2>Register</h2>
                    </div>
                    <div class="form-input">
                        <label htmlFor="firstName">First name</label>
                        <Field component={Input} type="text" name="firstName" />
                    </div>
                    <div class="form-input">
                        <label htmlFor="lastName">Last name</label>
                        <Field component={Input} type="text" name="lastName" />
                    </div>
                    <div class="form-input">
                        <label htmlFor="username">Username</label>
                        <Field
                            component={Input}
                            type="text"
                            name="username"
                            validate={[required, nonEmpty, isTrimmed]}
                        />
                    </div>
                    <div class="form-input">
                        <label htmlFor="password">Password</label>
                        <Field
                            component={Input}
                            type="password"
                            name="password"
                            validate={[required, passwordLength, isTrimmed]}
                        />
                    </div>
                
                    <div class="form-input">
                        <label htmlFor="passwordConfirm">Confirm password</label>
                        <Field
                            component={Input}
                            type="password"
                            name="passwordConfirm"
                            validate={[required, nonEmpty, matchesPassword]}
                        />
                    </div>
                
                    <button type="submit" disabled={this.props.pristine || this.props.submitting}>
                        Register
                    </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);


