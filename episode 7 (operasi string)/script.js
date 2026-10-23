// operasi string

// 1.charAt
let dataString = "abcdef";
let dataChar = dataString.charAt(2);
console.log(dataChar);
console.log(dataString.charAt(0));
console.log(`data index ke 0 adalah = ${dataChar}`);
console.log("---------------------------------");

console.log(`data index ke 0 adalah = ${dataString.charAt(0)}`);
console.log(`data index ke 0 adalah = ${dataString.charAt(1)}`);
console.log(`data index ke 0 adalah = ${dataString.charAt(2)}`);
console.log(`data index ke 0 adalah = ${dataString.charAt(3)}`);
console.log(`data index ke 0 adalah = ${dataString.charAt(4)}`);
console.log("---------------------------------");

// 2.menyambung string
let namaDepan = "Ucup";
let namaBelakang = "Surucup";
let namaLengkap = namaDepan.concat(" ", namaBelakang, " si keren");
console.log(namaLengkap);
console.log("---------------------------------");

// 3. mengambil index string
console.log(namaLengkap.indexOf("k"));
console.log(namaLengkap.indexOf("c"));
console.log(namaLengkap.indexOf("u"));
console.log(namaLengkap.indexOf("U"));
console.log("---------------------------------");

// 4.substring
console.log(namaLengkap.substring(0, 4));
console.log(namaLengkap.substring(5, 12));
console.log(namaLengkap.substring(12, 5));
console.log("---------------------------------");

namaLengkap_5_sampai_12 = namaLengkap.substring(5, 12);
console.log(namaLengkap_5_sampai_12);
console.log("---------------------------------");

// 5. slice
console.log(namaLengkap.slice(5, 12));
console.log(namaLengkap.slice(12, 5)); // akan hilang karena index 12 lebih besar dari 5
console.log("---------------------------------");

// 6. replace
let namaBaru = namaLengkap.replace("Ucup", "surucup");
console.log(namaBaru);
console.log("---------------------------------");

namaLengkap = namaLengkap.replace("Ucup", "joko");
console.log(namaLengkap);
console.log("---------------------------------");

//7. toLowerCase
console.log(namaLengkap.toLowerCase());
console.log("---------------------------------");

//8. toUpperCase
console.log(namaLengkap.toUpperCase());
console.log("---------------------------------");

//9.extracting string
let DataString2 = "10";
console.log(typeof DataString);

let dataInteger = parseInt(DataString2);
console.log(typeof dataInteger);
console.log(dataInteger);

let DataString3 = "10.121232";
console.log(typeof DataString);
console.log(DataString3);

let dataFloat = parseFloat(DataString3);
console.log(typeof dataFloat);
console.log(dataFloat);

let dataString4 = "10.121232";
console.log(typeof dataString4);
console.log(dataString4);
