function cekWarna (hari) {
    if (hari === 'senin') {
        return 'merah'
    } else if ( hari === 'selasa') {
        return 'biru'
    } else {
        return 'kuning'
    }
        
}

cekWarna('senin')
const hasil = cekWarna("senin")
console.log(hasil)