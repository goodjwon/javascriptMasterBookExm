

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


function escapeHtml(str){
	if(!str) {return '';}
	str = str.replace(/&/g, '&amp;');
	str = str.replace(/</g, '&lt;');
	str = str.replace(/>/g, '&gt;');
	str = str.replace(/"/g, '&quot;');
	str = str.replace(/'/g, '&#39;');

	return str;
}

function e(templates, ...value){
	let result = '';
	for(let i = 0, len = templates.length; i < len; i++){
		result += templates[i] + escapeHtml(value[i]);
	}
	return result;
}

let name = '<"Mario" &  \'Luigi \'>';
console.log(e `안녕사세요, ${name}씨!` );
