function cekMakananSehat(namaMakanan, kandunganGizi, kalori) {
    if (kandunganGizi === "tinggi" && kalori < 500) {
        return `${namaMakanan} termasuk makanan sehat`;
    } else if (kandunganGizi === "sedang" && kalori >= 500) {
        return `${namaMakanan} termasuk makanan sehat,tetapi kalori tinggi`;
    } else {
        return `${namaMakanan} termasuk makanan tidak sehat`;
    }
}

const makanan = cekMakananSehat("Nasi Goreng", "tinggi", 600);
console.log(makanan);
