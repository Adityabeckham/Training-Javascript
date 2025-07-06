function jumlahArray(arr) {
    if (!Array.isArray(arr)) {
        return 0; // Jika input bukan array, kembalikan 0
         
    }

    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            total += arr[i];
        }
    }
    return total; 
}

const hasil = jumlahArray([1, 2, 3, 4]); // Output: 10

console.log(hasil);

jumlahArray([1, 2, 3, 4]); // Output: 10
jumlahArray([10, -5, 3]);  // Output: 8