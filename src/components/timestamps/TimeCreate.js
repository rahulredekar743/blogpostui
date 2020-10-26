import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createTime} from '../../actions';
import TimeStampForm from './TimeStampForm';

class TimeCreate extends Component {

    onFormSubmit = (formValues) => {
        console.log(formValues);
        this.props.createTime(formValues);
    };

    render() {
        return (
            <div>
                <h3>Create Time Stamp</h3>
                <TimeStampForm onSubmit={this.onFormSubmit}/>
            </div>
        )
    }
}

export default connect(null, {
    createTime: createTime
})(TimeCreate);