const assert = require('assert');
const selisihTahun = 3;

function hitungUmurAdikSaatIni(umurSaya){
    return umurSaya - selisihTahun;
}

const umurSaya = 6;
const umurAdik = 3;

assert(hitungUmurAdikSaatIni(umurSaya) === umurAdik);

const umurSayaDewasa = 25;
const umurAdikDewasa = 22;

assert(hitungUmurAdikSaatIni(umurSayaDewasa) === umurAdikDewasa);