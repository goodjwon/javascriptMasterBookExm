


function* genPrimes() {
    let num = 2;

    while (true) {
        if (isPrimes(num)) {yield num;}
        num++;
    }

}


function isPrimes(value) {
    let prime = true;

    for (let i = 2; i <= Math.floor(Math.sqrt(value)); i++){
        if( value % i === 0){
            prime = false;
            break;
        }
    }
    return prime;
}

for(let value of genPrimes()){
    if (value > 100) {break;}
    console.log(value);
}


function* myGenerator() {
    yield '가나다라마'; //yield 양보하다.
    yield '바사아자차';
    yield '타카파하가';
}

for(let t of myGenerator()){
    console.log(t);
}