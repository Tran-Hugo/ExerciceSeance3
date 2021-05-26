function findLongestWord() {
    let string2 = prompt('char')
    let strSplit = string2.split(' ');
    let longestWord = 0;
    let longestWordStr = "";
    for(let i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
      longestWordStr = strSplit[i];
       }
    }
    alert(longestWordStr);
    findLongestWord();
  }

findLongestWord()