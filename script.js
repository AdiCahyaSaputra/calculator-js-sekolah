// euy js, kalo liat tanda % itu artinya /100
let input = '100% * 20%';
let result = input.replace(/%/g, '/100');

console.log(parseInt(result)); // "100/100 * 50"