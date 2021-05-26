function possibleCombinations(){
    let str = prompt('string');
    let combinations = [];
      for(let i = 0 ;i < str.length; i++)
    {
        for(let j = i + 1; j< str.length + 1; j++)
        {
            combinations.push(str.slice(i , j));
        }
    }
   alert(combinations);
   possibleCombinations();
}

possibleCombinations();