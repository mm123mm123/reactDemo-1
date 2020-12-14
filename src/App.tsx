import React from 'react';
import { Route, HashRouter as Router, Switch, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import Nav from 'components/Nav'
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height:100vh;
`;
const Main = styled.div`
  flex-grow:1;
  overflow: auto;
`;


function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/money">
              <Money/>
            </Route>
            <Route path="/tags">
              <Tags/>
            </Route>
            <Route path="/statistics">
              <Statistics/>
            </Route>
            <Redirect exact from="/" to="/money"/>
            <Route path="*">
              <NoMatch/>
            </Route>
          </Switch>
        </Main>
        <Nav/>
      </Wrapper>
    </Router>
  );
}

function Money() {
  return <h2>money</h2>;
}

function Tags() {
  return <h2>tags</h2>;
}

function Statistics() {
  return <h2>statistics</h2>;
}

function NoMatch() {
  return (
    <h3>
      路径错误，请重新输入
    </h3>
  );
}

export default App;
