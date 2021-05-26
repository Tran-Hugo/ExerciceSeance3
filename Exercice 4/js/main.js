function sortString(char) {
    let string2 = prompt('chaine de caractere');
    let arrayString = string2.split("");
    let sortedArray = arrayString.sort();
    let joinArray = sortedArray.join("");
    alert(joinArray);
}

console.log(sortString("helloworld"))