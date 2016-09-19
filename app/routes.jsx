var React = require('react')
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');

// equivale a scrivere var Route = require('react-router').Route; ecc...

// Miei componenti:
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

const NotFound = () => (
  <h1>404...Questa pagina non esiste!</h1>
)

var Routes = () => {
  return(
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Timer}/>
        <Route path="countdown" component={Countdown} />
        <Route path="*" component={NotFound} />

      </Route>
    </Router>
  )
}

module.exports = Routes;
