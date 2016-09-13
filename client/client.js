module.exports = class GameClient {

  startGame() {
    $.post('http://localhost:8080/api/game/start')
    .done((result) => {
      console.log('startGame done: ' + JSON.stringify(result));
    })
    .fail((result) => {
      console.log('startGame failed: ' + JSON.stringify(result));
    });
  }

  playerJoin(name, finished) {
    console.log('player is joining: ' + name);
    var data = {
      name: name
    };
    $.ajax({
      method: 'PUT',
      url: 'http://localhost:8080/api/player',
      data: data
    })
    .done((result) => {
      console.log('done: ' + JSON.stringify(result));
      if (finished) finished(true);
    })
    .fail((result) => {
      console.log('failed: ' + JSON.stringify(result));
      if (finished) finished(false);
    });
  }

}