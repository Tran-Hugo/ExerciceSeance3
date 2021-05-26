function uppercase() {
    let string2 = prompt("chaine de caractère");
    let stringModified = string2.charAt(0).toUpperCase()+string2.slice(1);
    alert(stringModified);
}

uppercase();