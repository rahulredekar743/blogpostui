import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPosts} from "../../actions";

class BlogList extends Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    renderList() {
        return this.props.blogPost.map((item) => {
            return (
                <div className={`item`} key={item.id}>
                    <div className={`content`}>
                        <div className={`header`}>
                            {item.title}
                        </div>
                        <div className={`desscription`}>
                            {item.content}
                        </div>
                    </div>
                </div>
            )
        });
    }

    renderCreate() {
        return (
            <div style={{textAlign: 'right'}}>
                <Link to={`/blogpost/new`} className={`ui button primary`}>
                    Create Blog
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
        blogPost: Object.values(state.blogPost)
    }
};

export default connect(
    mapStateToProps,
    {fetchPosts: fetchPosts}
)
(BlogList);