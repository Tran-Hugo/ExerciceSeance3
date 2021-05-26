function reverseString(str) {
    let string = str;
    let arrayString = string.split("");
    let reversedArrayString = arrayString.reverse();
    let joinArray = reversedArrayString.join("");
    return joinArray;
}

console.log(reverseString('hello'));