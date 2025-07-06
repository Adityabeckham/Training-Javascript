//FUNCTION ANGKA POSITIF,NEGATIF dan NOL
function cekAngka (nilai) {
    if (nilai > 0) {
     console.log("ANGKA POSITIF");
  } else if (nilai < 0) {
     console.log("ANGKA NEGATIF");
  } else {
     console.log("NOL");
}

}
  
cekAngka(10);//ANGKA POSITIF
cekAngka(-5);//ANGKA NEGATIF
cekAngka(0);//ANGKA NOL