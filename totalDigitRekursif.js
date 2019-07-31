function totalDigitRekursif(angka) {
    str = String(angka)
    if(str == 0){
        return 0
    }else{
        var newStr = str.slice(1)
        return Number(str[0])  + totalDigitRekursif(Number(newStr))
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5

