
import {Field, reduxForm, focus} from 'redux-form';
import React from 'react';
import Input from '../input';
import {required, nonEmpty, isTrimmed} from '../../validators';
import {addPaletteData} from '../../actions/protected-data';
import {setEditState} from '../../actions/actions';
import './duplicate-form.css'

export class DuplicateForm extends React.Component{
    onSubmit(values){
        const {paletteTitle} = values;

        return this.props
            .dispatch(addPaletteData(paletteTitle))
            .then(this.props.dispatch(setEditState(false)))
            .then(this.props.close).
            then(window.location = '/dashboard');

    }

    render(){
        return(
            <form
                class="duplicate-form"
                onSubmit={this.props.handleSubmit(values => 
                    this.onSubmit(values)
                )}>
                    <label htmlFor="palette-title">Name</label>
                    <Field
                                component={Input}
                                type="text"
                                name="paletteTitle"
                                validate={[required, nonEmpty, isTrimmed]}
                            /> 
                      <button type="submit" disabled={this.props.pristine || this.props.submitting}>
                          Save
                      </button>
                      
                </form>
        );
    }   
      
}

export default reduxForm({
    form: 'duplicate',
    onSubmitFail:(errors,dispatch)=>
    dispatch(focus('registration', Object.keys(errors)[0]))
})(DuplicateForm);