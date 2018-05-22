

let data = {red : '빨간색', yellow : '노란색'};
let proxy = new Proxy(data, {
    get(target, prop){
        return prop in target ? target[prop] : '?';
    }
});

console.log(proxy.red);
console.log(proxy.yellow);
console.log(proxy.nothing);
