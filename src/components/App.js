import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import history from '../history';
import BlogList from './BlogPost/BlogList';
import BlogCreate from './BlogPost/BlogCreate';
import Header from './Header';

const App = () => {
    return (

        <div className={`ui container`}>
            <Router history={history}>
                <div>
                    <Header/>
                    <Switch>
                        <Route path={`/`} exact component={BlogList}/>
                        <Route path={`/blogpost/new`} component={BlogCreate}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
};

export default App;