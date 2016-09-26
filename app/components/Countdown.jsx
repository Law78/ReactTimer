var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getDefaultProps: function(){
    console.log('getDefaultProps');

    return{}
  },
  getInitialState: function(){
    return {
      count: 0,
      countdownStatus: 'stopped'
    }
  },
  handleSetCountdown: function(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  // Chiamata quando le props o lo state cambiano
  componentDidUpdate: function(prevProps, prevState){
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped': // Non metto la break perchè stopped deve resettare l'intervallo che faccio in paused
          this.setState({
            count: 0
          });
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined; // mi serve solo per "pulire la variabile"
          break;
      }
    }
  },
  startTimer: function(){
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount>=0 ? newCount : 0
      });
      if (newCount === 0) {
        this.setState({
          countdownStatus: "stopped"
        });
      }
    }, 1000);
  },
  handleStatusChange: function(newStatus) {
    this.setState({
      countdownStatus: newStatus
    });
  },
  render: function(){
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus = {countdownStatus} onStatusChange={this.handleStatusChange}/>
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      }
    };
    return(
      <div>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
