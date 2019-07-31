function sorting(arrNumber) {
  for (var i = 0; i < arrNumber.length; i++){
    for (var j = 0; j < arrNumber.length-i; j++){ ;
      var temp = null;
      if (arrNumber[j] > arrNumber[j+1]){
        temp = arrNumber[j];
        arrNumber[j] = arrNumber[j+1];
        arrNumber[j+1] = temp;
      }
    }
  }
  return arrNumber;
}

function getTotal(arrNumber) {
  var count = 0;
  if (arrNumber.length === 0){
    return ''
  } else {
    var count = 1;
    var terbanyak = arrNumber[0]
    for(var k=1; k<arrNumber.length; k++ ){
      if(terbanyak !== arrNumber[k]){
        terbanyak = arrNumber[k];
        count = 1;
      } else if(terbanyak === arrNumber[k]){
        count++;
      }
    }
  }
  console.log('angka paling besar adalah '+terbanyak +' dan jumlah kecountan sebanyak '+ count)
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}
console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kecountan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kecountan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kecountan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));