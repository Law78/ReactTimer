const React = require('react');
const ReactDOM = require('react-dom');
//const ReactDOMServer = require('react-dom/server');
const {Link, IndexLink} = require('react-router');

/*const DropDownMenu = React.createClass({
    render: function(){
      console.log('asd')
      return(
        <div>
         <ul className="dropdown menu" data-dropdown-menu="">
           <li><IndexLink to="/" activeClassName="active-link">Timer</IndexLink></li>
           <li><Link to="/countdown" activeClassName="active-link">Countdown</Link></li>
           <li><a href="www.google.it" >asd</a></li>
         </ul>
       </div>
      );
    }
});*/

const Navigation = React.createClass({
  /*componentDidMount: function(){
    var navMarkup = (

    );
    var navigation = $(ReactDOMServer.renderToString(navMarkup));
    $(ReactDOM.findDOMNode(this)).html(navigation);
    $(document).foundation();
  },*/
  /*componentDidMount: function(){
    var elem = document.getElementById("drop-down-menu")
    elem.innerHTML += "<DropDownMenu />"
    console.log('CIAO')
    $(document).foundation();
  },*/
  render: function(){
    return(
      <div>
        <div className="top-bar" id="nav-menu">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">Site Title</li>
              <li><Link onlyActiveOnIndex to="/" activeClassName="active-link">Timer</Link></li>
              <li><Link to="/countdown" activeClassName="active-link">Countdown</Link></li>
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
  }
});

module.exports = Navigation;
