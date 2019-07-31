function cariPelaku(str) {
    var arr = [];
    arr.push(str.match(/abc/g));
    for (var i = 0 ; i < arr.length ; i++) {
        return arr[i].length;
    }
}
  
  // TEST CASES
  console.log(cariPelaku('mabcvabc')); // 2
  console.log(cariPelaku('abcdabdc')); // 1
  console.log(cariPelaku('bcabcac')); // 1
  console.log(cariPelaku('abcabcabc')); // 3
  console.log(cariPelaku('babcbacabc')); // 2