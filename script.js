window.addEventListener('DOMContentLoaded', function () {

window.onload = function Dice() {

  var player1 = document.getElementById('player1');
  var player2 = document.getElementById('player2');
  var winner = document.getElementById('winner');

        var p1 = Math.floor( Math.random() * 6 ) + 1;
        var p2 = Math.floor( Math.random() * 6 ) + 1;

        player1.innerHTML = p1;
        player2.innerHTML = p2;

  if ( p1 < p2 ) {
  winner.innerHTML = ' Player Two wins! '
  }
    if ( p1 > p2 ) {
  winner.innerHTML += ' Player One wins! '
  }
      if ( p1 === p2 ) {
    winner.innerHTML = ' Draw! '
  }
}

}, false);
