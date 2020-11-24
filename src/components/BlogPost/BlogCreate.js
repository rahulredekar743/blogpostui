import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createPost} from '../../actions';
import BlogForm from './BlogForm';

class BlogCreate extends Component {

    onFormSubmit = (formValues) => {
        console.log(formValues);
        this.props.createPost(formValues);
    };

    render() {
        return (
            <div>
                <h3>Create Blog</h3>
                <BlogForm onSubmit={this.onFormSubmit}/>
            </div>
        )
    }
}

export default connect(null, {
    createPost: createPost
})(BlogCreate);