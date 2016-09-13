import Players from './players.jsx';
import client from '../client.js';

module.exports = class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ready: false
    }
    this.joinedPlayers = [];
    this.client = new client();
  }

  _playedJoined(player) {
    console.log('player joined:' + player)
    this.joinedPlayers.push(player);
    this.setState({ready:(this.joinedPlayers.length === 4)});
  }
  
  startGame() {
    console.log('starting game');
    this.client.startGame();
  }

  render() {
    var startButton = null;
    if (this.state.ready) {
      startButton = <button onClick={this.startGame.bind(this)}>Start!</button>;
    }

    return (
      <div>
       <Players joined={this._playedJoined.bind(this)} />
       {startButton}
      </div>
    )
  }
}