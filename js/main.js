console.log('Connected!')

var xplayer = 'http://www.clipartkid.com/images/536/red-x-clipart-best-HRe7Rc-clipart.jpeg'
var oplayer = 'http://www.iconsdb.com/icons/preview/green/circle-outline-xxl.png'

var cells = document.getElementsByClassName('cell');
var changeText = document.getElementById('playerTurn');
var counter = 0;
var winningCombinations = [[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var oMoves = [];
var xMoves = [];

// failed code
// if(counter % 2 === 0) {
//   for(var i = 0; i < cells.length; i++) {
//     cells[i].addEventListener('click', function() {
//       this.style.backgroundImage = 'url(' + xplayer + ')';
//       changeText.innerHTML = "It is O's turn";
//       counter++;
//       console.log(counter);
//     })
//   }
// }
// else {
//   for(var i = 0; i < cells.length; i++) {
//     cells[i].addEventListener('click', function() {
//       this.style.backgroundImage = 'url(' + oplayer + ')';
//       changeText.innerHTML = "It is X's turn";
//       counter++;
//       console.log(counter);
//     })
//   }
// }


for(var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function() {
    if(counter % 2 === 0) {
      this.style.backgroundImage = 'url(' + xplayer + ')';
      changeText.innerHTML = "It is O's turn";
      counter++;
      console.log(counter);
      // the push command does not add the index number to the selected array
      xMoves.push(this);
      // checkForWin(xMoves, "X");
    }
    else {
      this.style.backgroundImage = 'url(' + oplayer + ')';
      changeText.innerHTML = "It is X's turn";
      counter++;
      console.log(counter);
      // the push command does not add the index number to the selected array
      oMoves.push(this);
      // checkForWin(oMoves, "O");
    }
  })
}

// function checkForWin(movesArray, name)
// this function should check to see if either xMoves or oMoves contains a winning combination
// the code should set an alert to 'x/o Player Wins! '
