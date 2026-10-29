var button = document.getElementById("btn");
button.onclick = function () {
  let jumlah = Number(prompt("masukkan jumlah pengulangan"));
  let i = 0;

  do {
    alert("ini pengulangan ke" + i);
    i++;
  } while (i < jumlah);
};
