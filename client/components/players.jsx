import Player from './player.jsx';

module.exports = class Players extends React.Component {

  render() {
    return (
      <div>
        <Player name='Player 1' joined={() => this.props.joined(1)} />
        <Player name='Player 2' joined={() => this.props.joined(2)} />
        <Player name='Player 3' joined={() => this.props.joined(3)} />
        <Player name='Player 4' joined={() => this.props.joined(4)} />
      </div>
    )
  }
}