function cekBaterai (presentaseBaterai) {
    if (presentaseBaterai > 80) {
       return `Baterai Hampir Penuh`;
    } else if (presentaseBaterai < 30 && presentaseBaterai <= 80) {
        return `Baterai Sudah cukup`;
    } else {
        return `Baterai Hampir Habis,segera charge!`;
    }
}

const baterai = presentaseBaterai(9);
console.log(baterai);
