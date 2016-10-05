var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var Timer = require('Timer');

describe('Timer', () => {
  it('the component Timer should exist', () => {
    // toExist appartiere a Expect
    expect(Timer).toExist();
  });
  describe('render', () => {
    it('should render controls and clock components', () => {
      var timer = TestUtils.renderIntoDocument(<Timer />);
      var controls = TestUtils.findRenderedDOMComponentWithClass(timer, 'controls');
      var clock = TestUtils.findRenderedDOMComponentWithClass(timer, 'clock');
      expect(controls).toExist();
      expect(clock).toExist();

    });
  });
  describe('Logic', () =>{
    it('should start timer on started status', (done) =>{
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleStatusChange('started');
      expect(timer.state.timerCount).toBe(0);

      setTimeout( () => {
        expect(timer.state.timerStatus).toBe('started');
        expect(timer.state.timerCount).toBe(1);
        done();
      }, 1001);
    });
    it('should pause timer on paused status', (done) =>{
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.setState({
        timerCount:10
      });
      timer.handleStatusChange('started');
      timer.handleStatusChange('paused');
      expect(timer.state.timerCount).toBe(10);

      setTimeout( () => {
        expect(timer.state.timerStatus).toBe('paused');
        expect(timer.state.timerCount).toBe(10);
        done();
      }, 1001);
    });
    it('should clear timer on stopped status', (done) =>{
      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.setState({
        timerCount:10
      });
      timer.handleStatusChange('started');
      timer.handleStatusChange('stopped');
      expect(timer.state.timerCount).toBe(0);

      setTimeout( () => {
        expect(timer.state.timerStatus).toBe('stopped');
        expect(timer.state.timerCount).toBe(0);
        done();
      }, 1001);
    });
  });
});
