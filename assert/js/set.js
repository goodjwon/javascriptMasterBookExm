
let s = new Set();
s.add(NaN);
s.add(NaN);

s.add({});
s.add({});

console.log('s size is '+s.size);