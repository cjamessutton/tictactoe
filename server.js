
var moves = ['-','-','-','-','-','-','-','-','-']; //Will move these into the main method once
var movesLeft = ['0','1','2','3','4','5','6','7','8'];

var printBoard = function(moves){
  console.log("0-2:  "+ moves[0] +" | "+ moves[1] +" | "+ moves[2] +" ");
  console.log("     ---|---|---");
  console.log("3-5:  "+ moves[3] +" | "+ moves[4] +" | "+ moves[5] +" ");
  console.log("     ---|---|---");
  console.log("6-8:  "+ moves[6] +" | "+ moves[7] +" | "+ moves[8] +" ");
}


var playerMove = function(moves, movesLeft, newMove){
  var moveIndex = movesLeft.indexOf(newMove);
  if(moveIndex != -1){
    moves[newMove] = 'x';
    movesLeft.splice(newMove, 1);
  } else{
    console.log("Invalid move. Try again!");
  }
}

printBoard(moves); //testing output
playerMove(moves, movesLeft, '2');
console.log("");
printBoard(moves);
