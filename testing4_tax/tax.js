function calTax(sal){
    if(sal<250000){
      return 0;
    }else if(sal>=250000 && sal<=500000){
      sal=sal/2;
      return (sal*10)/100;
    }else if(sal>=500000 && sal<=1000000){
      sal=sal-(sal*30)/100;
      return (sal*20)/100;
    }else if(sal>1000000){
      sal=sal-(sal*10)/100;
      return (sal*30)/100;
    }
  }
  console.log(calTax(1000000));

  module.exports={calTax};