function kaliTerusRekursif(angka) {
    str = String(angka)
    if(str == 0){
        return 1
    }else{
        var newStr = str.slice(1)
        return Number(str[0])  * kaliTerusRekursif(Number(newStr))
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6