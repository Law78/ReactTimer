var React = require('react');
var ReactDOM = require('react-dom');

var Routes = require('Routes');

// Carico Foundation
require('style!css!foundation-sites/dist/foundation.min.css');
// Chiamata in Navigation.jsx per il dropdown menu
//$(document).foundation();

// App css
require('applicationStyle');
$(document).foundation();
ReactDOM.render(<Routes />, document.getElementById('app'));
