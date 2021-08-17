/**
 * Write a function named splitSum1 that implements algorithm 1 here
 */
 function splitSum1(tours) {
    const total = tours.reduce((a, b) => a + b);
    let preSum = 0;
    let postSum = total;
    let smallest = Number.MAX_VALUE;
    
    for (let i = 0; i < tours.length - 1; i++) {
      preSum += tours[i];
      postSum -= tours[i];
      let dif = Math.abs(preSum - postSum);
      if (dif < smallest) smallest = dif;
    }
    return smallest;
  }
  
  /**
   * Write a function named splitSum2 that implements algorithm 2 here
   */
  function splitSum2(tours) {
    let smallest = Number.MAX_VALUE;
    for (let k = 0; k < tours.length - 1; k++) {
      let preSum = tours.slice(0, k + 1)
        .reduce((a, b) => {return a + b}, 0);
      let postSum = tours.slice(k + 1, tours.length)
        .reduce((a, b) => {return a + b}, 0);
      const dif = Math.abs(preSum - postSum);
      if (dif < smallest) smallest = dif;
    }
    return smallest;
  }
  
  
  module.exports = { splitSum1, splitSum2 };