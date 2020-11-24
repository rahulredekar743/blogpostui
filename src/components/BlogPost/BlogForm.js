import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class BlogForm extends Component {

    renderInput = ({input, labelProp, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label>{labelProp}</label>
                <input {...input} autoComplete={`off`}/>
                {this.renderError(meta)}
            </div>
        );
    };

    renderError = ({error, touched}) => {
        if (touched && error) {
            return (
                <div className={`ui error message`}>
                    <div className={`header`}>{error}</div>
                </div>
            )
        }
    };

    onFormSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} className={`ui form error`}>
                    <Field name={`title`} component={this.renderInput} labelProp={'Enter Title'}/>
                    <Field name={'content'} component={this.renderInput} labelProp={`Enter Content`}/>
                    <button className={`ui button primary`}>Submit</button>
                </form>
            </div>
        )
    }
}

const validate = (formValues) => {
    const error = {};
    if (!formValues.title) {
        error.title = `You must enter title`;
    }

    if (!formValues.content) {
        error.content = `You must enter content`;
    }

    return error;
};

export default reduxForm({
    form: 'BlogForm',
    validate: validate
})(BlogForm);