// numbers

let nilai_integer = 10; // integer - nilai bilangan bulat, 64 bit
let nilai_float = 10.1233;
let nilai_bigint = 1234567890123456789012345678901234567890n; // bigInt - nilai bilangan bulat yang sangat besar
// menggunakan rentang yang lebis besar dari integer (lebih besar dari 64 bi)

console.log(typeof nilai_integer);
console.log(typeof nilai_float);
console.log(typeof nilai_bigint);

// menggunakan data ini gimana
let angka = 5.635;
let angaka_int = parseInt(angka); // mengubah angka menjadi integer
console.log(angaka_int);

let angka2 = 5.635;
let angaka_float = parseFloat(angka); // mengubah angka menjadi integer
console.log(angaka_float);

//merubah string
let data = "1.98";
console.log(typeof data);
console.log(data);
console.log(parseInt(data) + 10);
console.log(parseFloat(data) + 10);

//contoh
let pendapatan = "10000";
let pajak = 1200;
// let bayar = pendapatan + pajak;  // !hasilnya 10000.12 karena pendapatan masih string
let bayar = parseInt(pendapatan) + pajak;
console.log(bayar);
