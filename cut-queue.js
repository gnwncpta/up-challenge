function potongAntrian(antrian, pemotong){
    let startIndex = antrian.length / 2;

    pemotong.forEach(num => {
        antrian.splice(startIndex, 0, num);
        startIndex = startIndex + 1;
    });

    return antrian;
}

potongAntrian([1, 2, 3, 4], [10, 11, 12]);
potongAntrian([[1,2], [3,4]], [[10,11], [12,13]]);