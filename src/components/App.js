import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import history from '../history';
import TimeList from './timestamps/TimeList';
import TimeCreate from './timestamps/TimeCreate';
import TimeEdit from './timestamps/TimeEdit';
import TimeDelete from './timestamps/TimeDelete';
import Header from './Header';

const App = () => {
    return (

        <div className={`ui container`}>
            <Router history={history}>
                <div>
                    <Header/>
                    <Switch>
                        <Route path={`/`} exact component={TimeList}/>
                        <Route path={`/timetrack/new`} component={TimeCreate}/>
                        <Route path={`/timetrack/edit/:id`} component={TimeEdit}/>
                        <Route path={`/timetrack/delete/:id`} component={TimeDelete}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
};

export default App;