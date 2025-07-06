function cekTiket(kelasTiket, nama) {
    if (kelasTiket === 'VIP') {
        console.log(`Halo ,${nama} Anda Membeli Tiket VIP`);
} else if (kelasTiket === 'Reguler') {
    console.log(`Halo ,${nama} Anda Membeli Tiket Reguler`);
} else if (kelasTiket === 'Economy') {
    console.log(`Halo ,${nama} Anda Membeli Tiket Economy`);
} else {
    console.log(`Halo ,${nama} Anda tidak membeli tiket`);
}
}
const nama = 'Aditya';
cekTiket('VIP',nama);

