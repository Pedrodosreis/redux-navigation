import React from 'react';
import MainPage from './components/MainPage';
import AssetPage from './components/AssetPage';

import { Switch, Route, withRouter } from 'react-router-dom';

function App() {
  return (
    <div >
        <Switch>
          <Route path='/' exact component={MainPage}/>
          <Route path='/pageTwo' component={AssetPage}/>
        </Switch>
    </div>
  );
}

export default withRouter(App);
