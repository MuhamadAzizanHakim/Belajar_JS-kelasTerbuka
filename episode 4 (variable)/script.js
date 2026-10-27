// ini adalah coment jadi bebas aja gak kebaaca juga
// let
// const
// var
let nama = "asep anak baik"; // ini adalah variabel untuk menyimpan nama
// namun let tidak bisa di gunakan untuk mendeklarasikan variabel yang sama lagi dalam scope yang sama
console.log(nama); // untuk menampilkan di console

//  let nama = "asep anak jahat"; // ini akan error karena nama sudah dideklarasikan dengan let

nama = "asep anak jahat"; // sekarang dia jadi jahat
console.log(nama);

var umur = 20; // ini adalah variabel untuk menyimpan umur
console.log(umur);

var namaDepan = "ucup";
var namaBelakang = "surucup";

namaLengkap = namaDepan + " " + namaBelakang; // diberi spasi " "
console.log(namaLengkap);

// {} scope
{
  let nama = "nama asep bisa di ganti";
  console.log(nama);
}
console.log(nama); // memakai nama global atau yang di deklarasikan di luar scope {} jadi nama nya tetap "asep anak jahat"

// tanpa keyword var, let, const. tapi otomatis jadi global variable
gorengan = "Bala-bala";
console.log(gorengan);
{
  gorengan = "Combro";
  console.log(gorengan);
}
console.log(gorengan);

const TTL = "10 Maret 2022";
console.log(TTL);

// TTL = "11 Maret 2054"; gak boleh dilakukan karena sudah janji
