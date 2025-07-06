function cekNilai (angka) {
    if (angka == 2) {
        console.log("Ini angka 2");
    } else {
        console.log("bukan angka 2");
    }
}
cekNilai(2);
//Note : Jadi perbedaan == dan === adalah: == akan menganggap nilai 2 dan "2" sama karena hanya membandingkan nilainya, sedangkan === akan menganggap berbeda karena tipe datanya berbeda (number vs string)