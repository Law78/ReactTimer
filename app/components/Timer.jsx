var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function(){
    return {
      timerCount: 0,
      timerStatus: 'stopped'
    };
  },
  componentDidUpdate: function(prevProps, prevState){
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            timerCount: 0
          });
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function(){
    if(this.timer){
      clearInterval(this.timer);
    }
  },
  startTimer: function(){
    this.timer = setInterval( ()=> {
      var newTimer = this.state.timerCount + 1;
      this.setState({
        timerCount: newTimer
      });
    }, 1001);
  },
  handleStatusChange: function(newStatus){
    this.setState({
      timerStatus: newStatus
    })
  },
  render: function(){
    var {timerStatus, timerCount} = this.state;
    return(
      <div className="timer">
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={timerCount}/>
        <Controls countdownStatus = {timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>

    );
  }
});

module.exports = Timer;
