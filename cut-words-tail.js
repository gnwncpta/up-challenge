function tailCutter(input){

    let isPunc = false;
    if(input.includes('.')) isPunc = true;

    const wordContainer = [];
    const punctuations = [];

    if(isPunc){
        for(let i = 0; i < input.length; i++){
            const idx = i - 1;

            switch(input[i]){

                case ".":
                    punctuations.push({ index: idx, letter: '.' });
                    break;
                
                case ",":
                    punctuations.push({ index: idx, letter: ',' });
                    break;
    
                case ";":
                    punctuations.push({ index: idx, letter: ';' });
                    break;
    
                case ":":
                    punctuations.push({ index: idx, letter: ':' });
                    break;
    
                case "!":
                    punctuations.push({ index: idx, letter: '!' });
                    break;
    
                case "@":
                    punctuations.push({ index: idx, letter: '@' });
                    break;
    
                case "#":
                    punctuations.push({ index: idx, letter: '#' });
                    break;

            }
        }

        console.log(punctuations);
    
        const wordResult = [];
        const removedSpace = [] // container for removed space character
        const wordSplitter = input.split(/\W/i); // Split every non-word character

        // Migrate and remove blank space to removedSpace
        wordSplitter.forEach(word => {
            if(!word.length) return;
            else removedSpace.push(word);
        });
    
        removedSpace.forEach(word => {
            wordResult.push(word.slice(0, word.length - 1));
        });

        const txt = wordResult.join(' ');
        const txtSpli = txt.split('');
        
        punctuations.forEach(punc => {
            txtSpli.splice(punc.index, 0, punc.letter);
        });

        console.log(txtSpli.join(''));
        
    }



    // wordSplitter.forEach(word => {
    //     wordContainer.push(word.slice(0, word.length - 1));
    // });

    // return wordContainer.join(' ');
}

// console.log(tailCutter('Lorem ipsum dolor sit amet, consectetur adipiscing elit'));
// console.log(tailCutter('The best error message is the one that never shows up'));
console.log(tailCutter('First, solve the problem. Then, write the code.'));
// console.log(tailCutter('Experience is the name everyone gives to their mistakes'));