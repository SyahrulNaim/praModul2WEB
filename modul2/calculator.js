 function penjumlahan() {
        var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
        var bilangan2 = parseFloat(document.getElementById("bilangan2").value);

        var hasil = bilangan1 + bilangan2;

        // Menampilkan hasil dalam bentuk alert
        alert("Hasil penjumlahan: " + hasil);
      }

      function ulang() {
        // Mengosongkan kotak input
        document.getElementById("bilangan1").value = "";
        document.getElementById("bilangan2").value = "";
      }