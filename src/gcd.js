/**
 * Write a function named gcd1 that implements algorithm 1 here
 */

 function gcd1(a, b) {//O(log n); why?

    if (a === 0) return b;
    if (b === 0) return a; 
    
    while (b != 0) {//b === !0
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
  }
  
  
  /**
   * Write a function named gcd2 that implements algorithm 2 here
   */
function gcd2(a, b) {//O(n)
  if (a < 0 || b < 0) return
  if (a === 0) return b;
  if (b === 0) return a;
  
  let divA = [1, a];//runs once
  let divB = [1, b];
  let common = [];
  let num = 0

  for (let i = 2; i < a - 1; i ++) {//runs a - 3 times; why?
    if (a % i === 0) divA.push(i);
  }
  
  for (let i = 2; i < b - 1; i ++) {
    if (b % i === 0) divB.push(i);
  }
  
  divA.forEach((n) => {
    if (divB.includes(n)) {
        common.push(n);
        }
  });
  
  let largest = Math.min(...common);
  common.forEach((n) => {
    if (n > largest) largest = n;
  });
  return largest;
}


  module.exports = { gcd1, gcd2 };

