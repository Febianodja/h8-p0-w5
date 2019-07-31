function changeVocals (str) {
  
    var strArray = str.split('');
    var vokal = 'aiueoAIUEO';
    var letter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var indeks ;
    var altered = [];
    for (var i = 0; i < strArray.length; i++){
      for (var j = 0; j < vokal.length; j++){
        if (strArray[i] === vokal[j]){
         
          indeks = letter.indexOf(str[i])+1
          strArray[i] = letter[indeks]
        }
      }
      altered.push(strArray[i])
    }
    return altered;
  }
  
  function reverseWord (str) {
    var strReverse = '';
    for (var i = str.length-1; i >= 0; i--){
      strReverse += str[i]
    }
    return strReverse;
  }
  
  function setLowerUpperCase (str) {
    var newReverse = ''
    for (var i = 0; i < str.length; i++){
      hurufbesar = str[i].toUpperCase();
      hurufKecil = str[i].toLowerCase();
  
      if(str[i] === hurufKecil){
        newReverse += hurufbesar;
      } else if(str[i] === hurufbesar){
        newReverse += hurufKecil;
      }
    }
    return newReverse;
  }
  
  function removeSpaces (str) {
    var remove = str.replace(/\s+/g, '');
    return remove;
  }
  
  function passwordGenerator (name) {
    if(name.length < 5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter';
    } else {
      var alterVocal = changeVocals(name);
      var reversing = reverseWord(alterVocal);
      var lowerUpperName = setLowerUpperCase(reversing);
      var letRemoveSpace = removeSpaces(lowerUpperName);
      
      return letRemoveSpace;
    }
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'