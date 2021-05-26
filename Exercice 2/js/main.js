function palindrome() {
    let string2 = prompt('char')
    let re = /[\W_]/g;
    let lowRegStr = string2.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    if (reverseStr === lowRegStr) {
        alert(string2+' est un palindrome');
        palindrome();
    } else {
        alert(string2+" n'est pas un palindrome");
        palindrome();
    }
  }

  palindrome();