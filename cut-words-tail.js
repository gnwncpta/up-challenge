// REMEMBER! This is not the ultimate way and flexible way to solve this problem
// But i do create this as intended as it is

function tailCutter(input){

    let isPunc = false;
    if(input.includes('.') || input.includes(',') || input.includes(';')) isPunc = true;

    const wordContainer = [];
    const punctuations = [];

    if(isPunc){
        for(let i = 0; i < input.length; i++){
            let idx = 1;

            switch(input[i]){

                case ".":
                    punctuations.push({ index: i - idx, letter: '.' });
                    break;
                
                case ",":
                    punctuations.push({ index: i - idx, letter: ',' });
                    break;
    
                case ";":
                    punctuations.push({ index: i - idx, letter: ';' });
                    break;
    
                case ":":
                    punctuations.push({ index: i - idx, letter: ':' });
                    break;
    
                case "!":
                    punctuations.push({ index: i - idx, letter: '!' });
                    break;
    
                case "@":
                    punctuations.push({ index: i - idx, letter: '@' });
                    break;
    
                case "#":
                    punctuations.push({ index: i - idx, letter: '#' });
                    break;

            }
        }

        const cuttedWord = [];
        const removedSpace = []; // container for removed space character
        const wordSplitter = input.split(/\W/i); // Split every non-word character
        let puncIndex = 0;

        // Insert punctuations between items on array
        wordSplitter.forEach((word) => {
            if(!word.length) {
                removedSpace.push(punctuations[puncIndex].letter);
                puncIndex += 1;

            } else {
                removedSpace.push(word);
            }
        });

        // Cutting every word's tail
        removedSpace.forEach(word => {
            word.length > 1 ? cuttedWord.push(word.slice(0, word.length - 1)) : cuttedWord.push(word);
        });

        // Combine every items on array become string sentence
        let txResult = cuttedWord.join(' ');

        // Remove every space before punctuations
        for(let i = 0; i < txResult.length; i++){

            if(txResult[i] === " " && txResult[i+1] === ','){
                txResult = txResult.replace(" ,", ",");

            } else if(txResult[i] === " " && txResult[i+1] === '.'){
                txResult = txResult.replace(" .", ".");

            } else if(txResult[i] === " " && txResult[i+1] === ';'){
                txResult = txResult.replace(" ;", ";");

            } else if(txResult[i] === " " && txResult[i+1] === ':'){
                txResult = txResult.replace(" :", ":");
            }

        }

        return txResult;
    }

    const wordSplitter = input.split(' ');

    wordSplitter.forEach(word => {
        wordContainer.push(word.slice(0, word.length - 1));
    });

    return wordContainer.join(' ');
}

console.log(tailCutter('Lorem ipsum dolor sit amet, consectetur adipiscing elit'));
console.log(tailCutter('The best error message is the one that never shows up'));
console.log(tailCutter('First, solve the problem. Then, write the code.'));
console.log(tailCutter('Experience is the name everyone gives to their mistakes'));
console.log(tailCutter("Computers are fast; programmers keep it slow."));