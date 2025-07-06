function cekHargagym (membership,originalPrice) {
    if (membership === 'Silver') {
        const diskon = 0.05
        const hargaDiskon = originalPrice * diskon
        const hargaBayar = originalPrice - hargaDiskon
        console.log(`Pelanggan dapat harga ${hargaBayar}`);
    } else if (membership === 'Gold') {
       const diskon = 0.1
       const hargaDiskon = originalPrice * diskon
       const hargaBayar = originalPrice - hargaDiskon  
        console.log(`Pelanggan dapat harga ${hargaBayar}`);
    } else if (membership === 'Platinum') {
       const diskon = 0.15
       const hargaDiskon = originalPrice * diskon
       const hargaBayar = originalPrice - hargaDiskon
        console.log(`Pelanggan dapat harga ${hargaBayar}`);
    } else {
        console.log(`Pelanggan tidak dapat diskon`);
    }
}


cekHargagym('Platinum', 100000)
