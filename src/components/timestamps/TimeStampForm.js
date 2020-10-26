import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class TimeStampForm extends Component {

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
                    <Field name={'st_time'} component={this.renderInput} labelProp={`Enter Start Time`}/>
                    <Field name={'end_time'} component={this.renderInput} labelProp={`Enter End Time`}/>
                    <button className={`ui button primary`}>Submit</button>
                </form>
            </div>
        )
    }
}

const validate = (formValues) => {
    const error = {};
    if (!formValues.title) {
        error.title = `You must enter task name`;
    }

    if (!formValues.st_time) {
        error.st_time = `You must enter start time`;
    }

    if (!formValues.end_time) {
        error.end_time = `You must enter end time`;
    }

    return error;
};

export default reduxForm({
    form: 'TimeStampForm',
    validate: validate
})(TimeStampForm);