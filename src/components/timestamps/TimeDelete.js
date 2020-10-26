import React, {Component} from 'react';
import Modal from '../Modal';
import history from '../../history';
import {connect} from "react-redux";
import {fetchTime, deleteTime} from "../../actions";
import {Link} from "react-router-dom";


class TimeDelete extends Component {
    componentDidMount() {
        this.props.fetchTime(this.props.match.params.id)
    }

    renderActions() {
        const {id} = this.props.match.params;

        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteTime(id)} className={`ui button negative`}>
                    Delete
                </button>
                <Link to={`/`} className={`ui button`}>Cancel</Link>
            </React.Fragment>
        )
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure want to delete this timestamp'
        }

        return `Are you sure want to delete the stream with timestamp: ${this.props.timestamp.title}`
    }

    render() {
        return (
            <div>
                <Modal
                    title={`Delete Timestamp`}
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/')}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        timestamp: state.timeStamp[ownProps.match.params.id]
    }
};

export default connect(mapStateToProps,
    {fetchTime: fetchTime, deleteTime: deleteTime})
(TimeDelete);