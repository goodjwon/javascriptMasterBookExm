var current = new Date();

var res = document.getElementById("result2");

console.log(current.toLocaleString());

res.textContent = current.toLocaleString();



var list = document.getElementsByTagName('a');

for(var i =0 , len = list.length; i < len ; i++){
    console.log(list.item(i).href);
}
;


var listSelector = document.querySelectorAll("#list a");
console.log(listSelector.length);