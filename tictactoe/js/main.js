console.log('Connected!')

var xplayer = 'http://www.clipartkid.com/images/536/red-x-clipart-best-HRe7Rc-clipart.jpeg'
var oplayer = 'http://www.iconsdb.com/icons/preview/green/circle-outline-xxl.png'

var cells = document.getElementsByClassName('cell');
var changeText = document.getElementById('playerTurn');
var counter = 2;

// every click will add +1 to the counter and change clicked div background to x/o
if(counter === 2) {
  for(var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function() {
      this.style.backgroundImage = 'url(' + xplayer + ')';
      changeText.innerHTML = "It is O's turn";
      counter++;
    })
  }
}
else if(counter === 4) {
  for(var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function() {
      this.style.backgroundImage = 'url(' + oplayer + ')';
      changeText.innerHTML = "It is X's turn";
      counter++;
    })
  }
}
