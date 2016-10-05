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
    var spy = expect.createSpy();
    it('should render pause when started and pass value paused when clicked', () =>{

      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" onStatusChange={spy}/>);

      expect(controls.refs.pausebutton).toExist();
      TestUtils.Simulate.click(controls.refs.pausebutton);
      expect(spy).toHaveBeenCalledWith('paused');
    });
    it('should render pause when started and pass value paused when clicked', () =>{
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" onStatusChange={spy}/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
      TestUtils.Simulate.click(controls.refs.pausebutton);
      expect(spy).toHaveBeenCalledWith('paused');
    });
    it('should render pause when started and pass value paused when clicked', () =>{
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" onStatusChange={spy}/>);
      var elems = TestUtils.scryRenderedDOMComponentsWithTag(controls, "button");

      expect( (ReactDOM.findDOMNode(elems[0])).textContent).toEqual("Pause");

      TestUtils.Simulate.click(controls.refs.pausebutton);
      expect(spy).toHaveBeenCalledWith('paused');
    });
    it('should render start when paused and pass value started when clicked', () =>{
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" onStatusChange={spy}/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);

    });
    it('should render start and clear when paused and pass value started or stopped when clicked', () =>{
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" onStatusChange={spy}/>);
      var elems = TestUtils.scryRenderedDOMComponentsWithTag(controls, "button");
      expect( (ReactDOM.findDOMNode(elems[0])).textContent).toEqual("Start");
      expect( (ReactDOM.findDOMNode(elems[1])).textContent).toEqual("Clear");

      TestUtils.Simulate.click(elems[0]);
      expect(spy).toHaveBeenCalledWith('started');
      TestUtils.Simulate.click(elems[1]);
      expect(spy).toHaveBeenCalledWith('stopped');

    });

    it('should render pause and clear when started and pass value paused or stopped when clicked', () =>{
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" onStatusChange={spy}/>);
      var elems = TestUtils.scryRenderedDOMComponentsWithTag(controls, "button");
      expect( (ReactDOM.findDOMNode(elems[0])).textContent).toEqual("Pause");
      expect( (ReactDOM.findDOMNode(elems[1])).textContent).toEqual("Clear");

      TestUtils.Simulate.click(elems[0]);
      expect(spy).toHaveBeenCalledWith('paused');
      TestUtils.Simulate.click(elems[1]);
      expect(spy).toHaveBeenCalledWith('stopped');
    });

    it('should render start when stopped and pass value \'started\' when \'start button\' is clicked', () =>{

      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="stopped" onStatusChange={spy}/>);
      var startButton = controls.refs.startbutton;
      expect(startButton).toExist();
      TestUtils.Simulate.click(startButton);
      expect(spy).toHaveBeenCalledWith('started');
    });
  });
});
