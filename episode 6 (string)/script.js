let dataString = "data string";
console.log(dataString);

// 1. escaping string (\' \" \\ \n \t \f \r)
let data1 = 'ucup \t berkata "apa kabar dunia?"';
// let data1 = "ucup berkata \"apa kabar dunia?\"";
console.log(data1);
let data2 = 'otong berkata "tetep asyiiik"';
console.log(data2);
let data3 = "ucup berialan-jalan di tepi pantai, \n kereeen";
console.log(data3);

// 2. literal string ( tremate literal string )
let namaDepan = "Otong";
let namaBelakang = "Surotong";
let umur = 10;
let namaLengkap = namaDepan + " " + namaBelakang + " " + umur;
console.log(namaLengkap);
console.log(typeof namaLengkap);

// lebih elehan supaya tidak eror
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata);
console.log(typeof biodata); // akan tetap string walaupun ada angka di dalamnya
// umur udah jadi angka ya
