const assert = require('assert')

function umurConverter(umur) {
    if(umur < 25) {
        return 'masih muda nak, banyakin belajar ya!'
    } else if(umur >= 25 && umur < 30) {
        return 'masih muda kok! siap kerja, cari pengalaman'
    } else if(umur >= 30 && umur < 40) {
        return 'kerja atau merinis bisnis dan siap nikah'
    } else if(umur >= 40 && umur < 50) {
        return 'seharusnya udah punya bisnis dan fokus disana!'
    } else if(umur >= 50 && umur < 60){
        return 'investasi, traveling! yay!'
    }
}

// test case
assert(umurConverter(18) === 'masih muda nak, banyakin belajar ya!')
assert(umurConverter(25) === 'masih muda kok! siap kerja, cari pengalaman')
assert(umurConverter(30) === 'kerja atau merinis bisnis dan siap nikah')
assert(umurConverter(45) === 'seharusnya udah punya bisnis dan fokus disana!')
assert(umurConverter(50) === 'investasi, traveling! yay!')

// console.log(umurConverter(40))