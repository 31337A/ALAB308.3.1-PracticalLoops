// for (let i = 1; i <= 100; i++) {
//     let output = '';
//     if (i % 3 === 0) output += "Fizz";
//     if (i % 5 === 0) output += "Buzz";
//     console.log(output || i);
//   }


function findNextPrime(n) {
    n++; 
    while (true) { 
        let isPrime = true; 

        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) { 
                isPrime = false; 
                break; 
            }
        }

        if (isPrime) { 
            console.log(n); 
            break; 
        } else {
            n++; 
        }
    }
}

findNextPrime(4); 
findNextPrime(5); 
findNextPrime(9); 



