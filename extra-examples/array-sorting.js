var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: -17 },
  { name: 'Zeros', value: 37 }
];
items.sort(function (a, b) {
  if (b.value > a.value) {
    return 1;
  }  
});

console.log(items[0].value);
console.log(items[1].value);
console.log(items[2].value);
console.log(items[3].value);
console.log(items[4].value);
console.log(items[5].value);

console.log('= = = = = = = = = ');

items.sort(function (a, b) {
  if (a.value > b.value) {
    return 1;
  }  
});

console.log(items[0].value);
console.log(items[1].value);
console.log(items[2].value);
console.log(items[3].value);
console.log(items[4].value);
console.log(items[5].value);
