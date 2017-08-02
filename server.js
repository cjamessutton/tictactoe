
var moves = ['-','-','-','-','-','-','-','-','-']; //Will move these into the main method once
var movesLeft = ['0','1','2','3','4','5','6','7','8'];

var printBoard = function(moves){
  console.log("0-2:  "+ moves[0] +" | "+ moves[1] +" | "+ moves[2] +" ");
  console.log("     ---|---|---");
  console.log("3-5:  "+ moves[3] +" | "+ moves[4] +" | "+ moves[5] +" ");
  console.log("     ---|---|---");
  console.log("6-8:  "+ moves[6] +" | "+ moves[7] +" | "+ moves[8] +" ");
  console.log("");
}

var boardIsFull = function(movesLeft){
  return movesLeft.length > 0 ? false : true;
}

var addMove = function(moves, newMove, player){ //Player is a boolean. False means the AI is movings
  moves[newMove] = player ? 'x' : 'o';
}

var playerMove = function(moves, movesLeft, newMove){
  var moveIndex = movesLeft.indexOf(newMove);
  if(moveIndex != -1){
    addMove(moves, newMove, true);
    movesLeft.splice(moveIndex, 1);
    return true;
  } else{
    console.log("Invalid move. Try again!");
    return false;
  }
}

var aiMove = function(moves, movesLeft){
  var moveIndex = Math.floor(Math.random() * movesLeft.length);
  addMove(moves, movesLeft[moveIndex], false);
  movesLeft.splice(moveIndex, 1);
}

printBoard(moves); //testing output
playerMove(moves, movesLeft, '2');
printBoard(moves);
aiMove(moves, movesLeft);
printBoard(moves);
console.log("Board is full: " + boardIsFull(movesLeft));
console.log(movesLeft);
