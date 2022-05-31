function findCouple(arrayAngka){

    for(let x = 0; x < arrayAngka.length; x++){
        for(let i = 0; i < arrayAngka.length; i++){
            if(arrayAngka[i] > arrayAngka[i+1]){
                const initalVal = arrayAngka[i]; // keep the moved value;
    
                arrayAngka[i] = arrayAngka[i+1];
                arrayAngka[i+1] = initalVal;
            }
        }
    }

    return [arrayAngka[0], arrayAngka[arrayAngka.length - 1]];
}


console.log(findCouple([9,8,7,6,5,4,3,2,1]));
