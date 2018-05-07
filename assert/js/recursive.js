

function factorial(n) {

    if(n!=0){return n * factorial(n-1);}

    return 1;

}

console.log(factorial(5));


// 함수를 인자로 받는다.
function arrayWalk(data, f) {

    for(var key in data) {
        f(data[key], key);
    }
}

//callback 함수
function showElement(value, key) {
    console.log(key + ':' + value);
}

var ary = [1, 2, 3, 4, 5];
arrayWalk(ary, showElement);


/** callback 함수, 익명함수
 * 장점 : 코드가 짧아진다. 1회용 이므로 코드가 겹치는 이유가 없다.
 */
arrayWalk(ary, function (value, key) {
    console.log(key + ':' + value);
});