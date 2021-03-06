import React, { Fragment } from 'react';
import globalCSS from './global-styles';
import TwentySeventeen from './2017';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-101990309-1');
ReactGA.set({ anonymizeIp: true });
ReactGA.pageview(window.location.pathname + window.location.search);

globalCSS();

export default TwentySeventeen;
