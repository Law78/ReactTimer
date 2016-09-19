var expect = require('expect');
var Clock = require('Clock');
var TestUtils = require('react-addons-test-utils');
var React = require('react');
var $ = require('jQuery');
var ReactDOM = require('react-dom');

describe('Componente Clock', () => {
  // Per questo TEST ho solo bisogno di EXPECT e CLOCK
  it('il componente Clock deve esistere', () => {
    expect(Clock).toExist();
  });
  // Per questo TEST ho bisogno anche di react-addons-test-utils che ha bisogno di react
  it('è possibile inserire il Clock in un documento', () =>{
    // Ritorna il componente React
    var clock = TestUtils.renderIntoDocument(<Clock />);
    expect(clock).toExist();
  });
  // Per questo TEST ho bisogno di react-dom e di jQuery
  it('è possibile prelevare l\'elemento Clock dal DOM', () =>{
    var clock = TestUtils.renderIntoDocument(<Clock />);
    var el = $(ReactDOM.findDOMNode(clock));
    expect(el).toExist();
  })
});
