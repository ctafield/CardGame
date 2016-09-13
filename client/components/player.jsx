import client from '../client.js';

module.exports = class Player extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasJoined: false,
      name: this.props.name
    };
  }

  _joined(result) {
    if (result) {
      this.setState({ hasJoined: true },
        () => { if (this.props.joined) {
          this.props.joined();  
          }
        });
    }
  }

  _joinGame(event) {
    new client().playerJoin(this.props.name, this._joined.bind(this));
  }

  render() {
    var state = '';
    var disabled = false;

    if (this.state.hasJoined !== true) {
      state = 'Join ' + this.state.name;
    } else {
      state = 'Ready ' + this.state.name;
      disabled = true;
    }

    return (
      <button onClick={this._joinGame.bind(this)} disabled={disabled}>{state}</button>
    )
  }
}