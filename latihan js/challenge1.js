function sum(...angka) {
 let hasil = 0 

 for (let j = 0; j < angka.length; j++) {
    hasil += angka[j]
 }
 return hasil
}


const penjumlah = sum(1, 2, 3,)
console.log(penjumlah)



