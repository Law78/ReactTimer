var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;
    // ^ = inizio
    // $ = fine
    // Una regular expression la delimito con //
    // [0-9] qualsiasi numero
    // * un certo numero di caratteri non precisati
    // {1,} 1 o più
    if(strSeconds.match(/^[0-9]{1,}$/) && strSeconds){
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10)); // base 10
    }
  },
  render: function(){
    return(
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Inserisci i secondi"/>
          <button className="button expanded">Inizia</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
