import React from 'react';
import { Route, HashRouter as Router, Switch, Redirect} from 'react-router-dom';
import Money from './views/Money';
import NoMatch from './views/NoMatch';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import {Tag} from './views/Tag';


function App() {
  return (
    <Router>
          <Switch>
            <Route path="/money">
              <Money/>
            </Route>
            <Route exact path="/tags" >
              <Tags/>
            </Route>
            <Route path="/statistics">
              <Statistics/>
            </Route>
            <Redirect exact from="/" to="/money"/>
            <Route path="/tags/:tag" >
              <Tag/>
            </Route>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
    </Router>
  );
}

export default App;
