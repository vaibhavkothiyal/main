function mrgSort(arr) {
    if (arr.length == 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    //  console.log(mid);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mrgSort(left), mrgSort(right));
}
function merge(left, right) {
    let fnl = []
    let leftI = 0
    let rightI = 0
    while (leftI < left.length && rightI < right.length) {
        if (left[leftI] < right[rightI]) {
            fnl.push(left[leftI]);
            leftI++
        } else {
            fnl.push(right[rightI]);
            rightI++
        }
    }
    return fnl.concat(left.slice(leftI)).concat(right.slice(rightI));
}

function runProgram(input) {
    var inp=input.trim().split("\n");
    var arr=inp[1].trim().split(" ").map(Number);
    console.log(mrgSort(arr).join(" "));
   
  }
  if (process.env.USERNAME === "Vaibhav Kothiyal") {
    runProgram(`5
    3 5 0 9 8`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }