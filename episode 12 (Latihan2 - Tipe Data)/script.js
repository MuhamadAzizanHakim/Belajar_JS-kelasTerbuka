let angka_1, angka_2, hasil;
document.getElementById("button_jumlah").onclick = function () {
  angka_1 = document.getElementById("angka_1").value;
  angka_1 = parseFloat(angka_1);
  console.log(`angka_1 =${angka_1}, tipedatanya = ${typeof angka_1}`);

  angka_2 = document.getElementById("angka_2").value;
  angka_2 = parseFloat(angka_2);
  console.log(`angka_2 =${angka_2}, tipedatanya = ${typeof angka_2}`);

  hasil = parseFloat(angka_1 + angka_2);

  console.log(`hasil = ${hasil} tipe =${typeof hasil}`);

  document.getElementById("hasil").textContent = hasil;
};

//! kalo berdasarkan yang di ajarkan ada seprti kode di bawah ini namun saat
//! di jalankan hasil dari  'angka_ =${angka_}' adalah NaN dan tidak bisa di
//! operasikan untuk selanjutnya

// let angka_1, angka_2, hasil;
// document.getElementById("button_jumlah").onclick = function () {
//   angka_1 = document.getElementById("angka_1").valueAsNumber;
//   angka_1 = parseFloat(angka_1);
//   console.log(`angka_1 =${angka_1}, tipedatanya = ${typeof angka_1}`);

//   angka_2 = document.getElementById("angka_2").valueAsNumber;
//   angka_2 = parseFloat(angka_2);
//   console.log(`angka_2 =${angka_2}, tipedatanya = ${typeof angka_2}`);

//   hasil = parseFloat(angka_1 + angka_2);

//   console.log(`hasil = ${hasil} tipe =${typeof hasil}`);

//   document.getElementById("hasil").textContent = hasil;
// };
