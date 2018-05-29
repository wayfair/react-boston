import React from 'react';
import globalCSS from './global-styles';
import twentyEighteen from './2018';
import twentySeventeen from './2017';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => (
  <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>
    <div>
      <Route path="/(|2018|)/" component={twentyEighteen} />
      <Route
        path={process.env.PUBLIC_URL + '/2017'}
        component={twentySeventeen}
      />
    </div>
  </Router>
);

ReactGA.initialize('UA-101990309-1', {
  gaOptions: { anonymizeIp: true }
});
ReactGA.pageview(window.location.pathname + window.location.search);

globalCSS();

const App = () => <Home />;

export default App;
