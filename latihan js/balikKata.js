// BALIK KATA
function balikKata(str) {
    // Validasi input, pastikan str adalah string
    if (typeof str !== 'string') {
        return 'Input harus berupa string!';
    }
    return str.split('').reverse().join('');
}

console.log(balikKata("JAVASCRIPT"));  // Output: TPIRCSAVAJ
console.log(balikKata(12345));         // Output: Input harus berupa string!
console.log(balikKata(true));          // Output: Input harus berupa string!
