import React, {Component} from 'react';
import {connect} from "react-redux";

import {fetchTime, editTime} from "../../actions";

import TimeStampForm from './TimeStampForm';

import _ from 'lodash';

class TimeEdit extends Component {
    componentDidMount() {
        this.props.fetchTime(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        console.log(formValues);
        this.props.editTime(this.props.match.params.id, formValues)
    };

    render() {
        if (!this.props.timestamp) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit Timestamp</h3>
                <TimeStampForm
                    initialValues={_.pick(this.props.timestamp, 'title', 'st_time', 'end_time')}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps);
    return {timestamp: state.timeStamp[ownProps.match.params.id]}
};

export default connect(mapStateToProps, {editTime, fetchTime})(TimeEdit);