
// for(let i=1;i<=100;i++) {
//     if (i % 3 === 0 && i % 5 !== 0) {
//       console.log(" Fizz")
//     } else if (i % 5 === 0 && i % 3 !== 0) {
//        console.log(" Buzz")
//     } 
//     else if (i % 3 === 0 && i % 5 === 0) {
//        console.log(" Fizz-Buzz") 
//     } else{
//       console.log(i)
//     }
  
//   }

// function findNextPrime(n) {
//     n++; 
//     while (true) { 
//         let isPrime = true; 

//         for (let i = 2; i <= Math.sqrt(n); i++) {
//             if (n % i === 0) { 
//                 isPrime = false; 
//                 break; 
//             }
//         }

//         if (isPrime) { 
//             console.log(n); 
//             break; 
//         } else {
//             n++; 
//         }
//     }
// }

// findNextPrime(4); 
// findNextPrime(5); 
// findNextPrime(9); 



function parseAndLogCSV(csvString) {
    let rows = csvString.split('\n'); // Split the CSV string into rows
    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].split(','); // Split each row into cells
        if (cells.length === 4) { // Assuming there are always 4 cells per row
            console.log(cells[0], cells[1], cells[2], cells[3]);
        }
    }
}

// Test with the example CSV string
let csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
parseAndLogCSV(csvString);

// Test with the additional CSV string
let additionalCSV = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
console.log("----- Additional CSV Data -----");
parseAndLogCSV(additionalCSV);


