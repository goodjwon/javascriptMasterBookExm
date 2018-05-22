var current = new Date();

var res = document.getElementById("result2");

console.log(current.toLocaleString());

console.log(res);

res.textContent = current.toLocaleString();