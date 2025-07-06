// Hitung Vokal
function hitungVokal(str) {
    let vokal = 'aiueoAIUEO';
    let jumlah = 0;

    for (let i = 0; i < str.length; i++) {
        if (vokal.includes(str[i])) {
            jumlah++;
        }
    }

    return jumlah;
}

console.log(hitungVokal("Halo Dunia"));  // Output: 5