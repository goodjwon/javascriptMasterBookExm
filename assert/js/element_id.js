var current = new Date();

var res = document.getElementById('result');

console.log(current.toLocaleString());

console.log(res);

res.textContent = current.toLocaleString();