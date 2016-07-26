const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');
const {Link, IndexLink} = require('react-router');

const Navigation = React.createClass({
  componentDidMount: function(){
    var navMarkup = (
      <div>
        <div className="title-bar" data-responsive-toggle="nav-menu" data-hide-for="medium">
          <button className="menu-icon" type="button" data-toggle=""></button>
          <div className="title-bar-title">Menu</div>
        </div>
        <div className="top-bar" id="nav-menu">
          <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu="">
              <li className="menu-text">Site Title</li>
              <li>
                <a href="#">One</a>
                <ul className="menu vertical">
                  <li><Link to="#">One</Link></li>
                  <li><Link to="#">Two</Link></li>
                  <li><Link to="#">Three</Link></li>
                </ul>
              </li>
              <li><Link to="#">Timer</Link></li>
              <li><Link to="#">Countdown</Link></li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">Created by <a href="http://www.lorenzofranceschini.com">Lorenzo Franceschini</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
    var navigation = $(ReactDOMServer.renderToString(navMarkup));
    $(ReactDOM.findDOMNode(this)).html(navigation);
    $(document).foundation();
  },
  render: function(){
    return(
      <div></div>
    );
  }
});

module.exports = Navigation;
