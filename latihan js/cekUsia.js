function cekUsia (umur ) {
    if( umur > 0 && umur <=13) {
       console.log("Anda Berada diusia Anak-Anak");
    } else if (umur > 13 && umur <=19) {
        console.log("Anda Berada diusia Remaja");
    } else if (umur > 20 && umur <=60) {
        console.log("Anda Berada diusia Dewasa");
    } else {
        console.log("Anda Berada diusia Lansia");
    }
}
cekUsia(10)




