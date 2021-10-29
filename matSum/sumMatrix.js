function findSum(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
      if(checkValid(arr[i])){
        sum=sum+arr[i];
      }else{
        return i;
      }
    }
    return sum;
  }
//   findSum([1,2,3,4]);
  
  function checkValid(chk){
    if(chk===undefined || chk===""){
      return false;
    }else{
      return true;
    }
  }

  module.exports={findSum}