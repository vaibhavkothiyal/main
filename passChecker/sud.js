        
function checkfor(board,chk){
  for(var i=0;i<board.length;i++){
    for(var j=0;j<board.length;j++){
      if(tochk(board,board[i][j],i,j)==false){
        return false;
      }
    }
  }
  return true;
}

function tochk(board,num,row,col){
  for(let i=0;i<board.length;i++){
    if(i!=col){
      if(board[row][i]==num){
        return false;
      }
    }
  }
  for(let i=0;i<board.length;i++){
    if(i!=row){
      if(board[i][col]==num){
        return false;
      }
    }
  }
  let nRow = row - row % 3,nCol = col - col % 3;
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      if(i+nRow!=row && j+nCol!=col){
        if (board[i + nRow][j + nCol] == num){
          return false;
        }
      }
    }
  }
  return true;
}

module.exports = { checkfor };