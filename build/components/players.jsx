import Player from './player.jsx';

module.exports = class Players extends React.Component {

  render() {
    return (
      <div>
        <Player name='Player 1' />
        <Player name='Player 2' />
        <Player name='Player 3' />
        <Player name='Player 4' />
      </div>
    )
  }
}