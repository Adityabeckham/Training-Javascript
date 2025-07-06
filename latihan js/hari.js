function cekHari (hari) {
    if (hari === 1) {
        return 'senin';
    } else if ( hari === 2) {
        return 'selasa';
    } else if ( hari === 3){
        return 'rabu';
    } else if ( hari === 4) {
        return 'kamis';
    } else if ( hari === 5) {
        return 'jumat';
    } else if ( hari === 6){
        return 'sabtu';
    } else{
        return 'minggu';
    }
}


const hasilAkhir = cekHari (1)
console.log (hasilAkhir);

