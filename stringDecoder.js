const decoder = (code) => {
    let letter ='';
    let word = '';
    for(i = 0; i < code.length; i++){
        if(!isNaN(code[i])){
            letter = Number(code[i]);
            letter = letter + 1 + i;
            word += (code[letter]);
        }
    }
    return word;
}

