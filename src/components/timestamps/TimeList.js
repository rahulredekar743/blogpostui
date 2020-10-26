import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchTimes} from "../../actions";

class TimeList extends Component {
    componentDidMount() {
        this.props.fetchTimes()
    }

    renderButtons(item) {
        return (
            <div className={`right floated content`}>
                <Link to={`/timetrack/edit/${item.id}`} className={`ui button primary`}>Edit</Link>
                <Link to={`/timetrack/delete/${item.id}`} className={`ui button negative`}>Delete</Link>
            </div>
        )
    }

    renderList() {
        return this.props.timeStamp.map((item) => {
            return (
                <div className={`item`} key={item.id}>
                    {this.renderButtons(item)}
                    <div className={`content`}>
                        <div className={`header`}>
                            {item.title}
                        </div>
                        <div className={`desscription`}>
                            {item.st_time}
                        </div>
                        <div className={`desscription`}>
                            {item.end_time}
                        </div>
                    </div>
                </div>
            )
        });
    }

    renderCreate() {
        return (
            <div style={{textAlign: 'right'}}>
                <Link to={`/timetrack/new`} className={`ui button primary`}>
                    Create TimeStamp
                </Link>
            </div>
        )
    }

    render() {
        return (
            <div className={`item`} key={`1`}>
                <div className={`ui celled list`}>
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        timeStamp: Object.values(state.timeStamp)
    }
};

export default connect(
    mapStateToProps,
    {fetchTimes: fetchTimes}
)
(TimeList);