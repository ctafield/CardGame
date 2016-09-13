import Players from './players.jsx';

module.exports = class Index extends React.Component {

  _playedJoined(player) {
    console.log('player joined:' + player);
  }
  
  render() {
    return (
      <Players joined={this._playedJoined} />
    )
  }
}