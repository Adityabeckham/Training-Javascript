// function ganjilGenap(angka) {
//     if ( angka % 2 == 0 ) {
//         console.log("Genap");
//     } else {
//         console.log("Ganjil");
//     }
// }
// ganjilGenap(10);

let mahasiswa = [
    {
        nama : "Aditya Beckham",
        nim  : 24552011066,
        kelas : "TIF RP24A",
        jurusan : "Teknik Informatika",
        nilaiPresensi : 90,
        nilaiUjian : 90,
        
    },
     {
        nama : "Budi Otomo",
        nim  : 245520110,
        kelas : "TIF RP24A",
        jurusan : "Teknik Informatika",
        nilaiPresensi : 80,
        nilaiUjian : 75,
    },
      
    
     {
        nama : "Sri Astrit",
        nim  : 245520110,
        kelas : "TIF RP24A",
        jurusan : "Teknik Informatika",
        nilaiPresensi : 60,
        nilaiUjian : 75,
    }
]

function cekKelulusan (data) {
    data.forEach(mhs => {
        const kelulusan = mhs.nilaiPresensi >=90 && mhs.nilaiUjian >=80 
        console.log(`Nama : ${mhs.nama}`);
        console.log(`NIM : ${mhs.nim}`);
        console.log(`Kelas : ${mhs.kelas}`);
        console.log(`Jurusan : ${mhs.jurusan}`);
        console.log(`Nilai Presensi : ${mhs.nilaiPresensi}`);
        console.log(`Nilai Ujian : ${mhs.nilaiUjian}`);
        console.log(`CekStatus : ${kelulusan ? "LULUS" : "TIDAK LULUS"} `);
        console.log("-------------------------------------------------");
    });
}

cekKelulusan(mahasiswa);

   