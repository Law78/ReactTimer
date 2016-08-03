var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

// Raggruppo i test con describe
describe('Clock', () => {
  it('the component Clock should exist', () => {
    // toExist appartiere a Expect
    expect(Clock).toExist();
  });
  describe('render', () => {
    it('should render clock to output', () =>{
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      // findDOMNode converte il componente nel componente HTML attuale
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();

      expect(actualText).toBe('01:02');
    });

    it('should be zero without Clock parameter', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();

      expect(actualText).toBe('00:00');
    });
  });
  describe('formatSeconds', () => {
    it('should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 615; // 10:15
      var expected = '10:15';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('should format seconds when min/sec are less than 10', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 61; // 01:01
      var expected = '01:01';
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});
