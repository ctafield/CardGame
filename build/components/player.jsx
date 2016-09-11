module.exports = class Player extends React.Component {

  _joinGame(event) {
    console.log('gonna join');
  }

  render() {
    var state = '';
    if (this.props.joined !== true) {
      state = 'Join ' + this.props.name;
    } else {
      state = 'Ready ' + this.props.name;
    }

    return (
      <button onClick={this._joinGame.bind(this)}>{state}</button>
    )
  }
}