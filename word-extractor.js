function ambilKata(acakacakan){
    const res = [];

    // Remove every number between character
    acakacakan = acakacakan.split(/\d/i).join('');
    
    for(let i = 0; i < acakacakan.length; i++){
        if(acakacakan[i] === acakacakan[i].toLowerCase()){
            res.push(acakacakan[i]);
        }
    }

    return res.join('');
}


console.log(ambilKata('OPdHRuDSnIKSiWRRSaDDTY'));
console.log(ambilKata('JF74G0FhHE4SeOOlRQ7FTlBVHo'));
console.log(ambilKata('111l22o3333v4444e555'));