var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause when started', () =>{
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);

      expect(controls.refs.pausebutton).toExist();
    });
    it('should render pause when started', () =>{
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });
    it('should render pause when started', () =>{
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
      var elems = TestUtils.scryRenderedDOMComponentsWithTag(controls, "button");

      expect( (ReactDOM.findDOMNode(elems[0])).textContent).toEqual("Pause");
    });
    it('should render start when paused', () =>{
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });
    it('should render start and clear when paused', () =>{
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
      var elems = TestUtils.scryRenderedDOMComponentsWithTag(controls, "button");
      expect( (ReactDOM.findDOMNode(elems[0])).textContent).toEqual("Start");
      expect( (ReactDOM.findDOMNode(elems[1])).textContent).toEqual("Clear");

    });

    it('should render pause and clear when started', () =>{
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
      var elems = TestUtils.scryRenderedDOMComponentsWithTag(controls, "button");
      expect( (ReactDOM.findDOMNode(elems[0])).textContent).toEqual("Pause");
      expect( (ReactDOM.findDOMNode(elems[1])).textContent).toEqual("Clear");

    });
  });
});
