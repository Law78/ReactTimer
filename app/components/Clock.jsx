var React = require('react');

var Clock = React.createClass({
  getDefaultProps: function(){
    return{
      totalSeconds: 0
    }
  },
  propTypes:{
    totalSeconds: React.PropTypes.number.isRequired
  },
  formatSeconds: function(totalSeconds){
    if(!totalSeconds || typeof totalSeconds !== 'number' ){
      // Se non passo nulla o passo qualcosa che non è un numero ritorna 00:00
      return '00:00';
    }
    // 61 secondi verrà tradotto in 01:01
    var seconds = totalSeconds % 60;
    var minutes = (totalSeconds - seconds) / 60;
    // Devo aggiungere uno 0 davanti ai secondi tra 0-9
    if(seconds<10){
      seconds = '0' + seconds;
    }
    // Devo aggiungere uno 0 davanti ai minuti tra 0-9
    if(minutes<10){
      minutes = '0' + minutes;
    }
    return `${minutes}:${seconds}`;
  },
  render: function(){
    var {totalSeconds} = this.props;
    return(
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>

      </div>
    );
  }
});

module.exports = Clock;
