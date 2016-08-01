var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Miei componenti:
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Carico Foundation
require('style!css!foundation-sites/dist/foundation.min.css');
// Chiamata in Navigation.jsx per il dropdown menu
//$(document).foundation();

// App css
require('style!css!sass!applicationStyle');
$(document).foundation();
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown} />
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app'));
