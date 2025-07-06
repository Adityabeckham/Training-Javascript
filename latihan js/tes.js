// const orang = [
//     {nama:"Aditya Beckham",age:18},
//     {nama:"Budim",age:19},
//     {nama:"xaviera",age:20},
//     {nama:"Zahra",age:21},
//     {nama:"Sienay",age:17},
//     {nama:"Cantika",age:12},
//     {nama:"Marsha",age:25},
    
// ]

// function filterAndSort(orang) {
    
//     return orang
//       .filter(orang => orang.age > 18)
//       .sort((a, b) => a.nama.localeCompare(b.nama));  // cara lebih singkat
//   }
  
//   console.log(filterAndSort(orang));


for (let i = 1; i <= 100; i++) {
 
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Beckham Ganteng");
        } else if (i % 3 === 0) {
            console.log("Aditya");
        } else if (i % 5 === 0) {
            console.log("Beckham");
        } else {
            console.log(i);
        }
    }
    
 
  
  
  