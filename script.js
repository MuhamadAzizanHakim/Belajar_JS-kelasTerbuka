var button = document.getElementById("btn");
button.onclick = function () {
  let jumlah = Number(prompt("masukkan jumlah pengulangan"));
  let i = 0;

  while (i < jumlah) {
    alert("pengulangan ke-" + (i + 1));
    i++;
  }
};
