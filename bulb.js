const bulb_test = (bulbs) => {
  
    //loop over each bulb in the bulbs matrix
    for(let i = 0; i < bulbs.length; i++) {
      for(let j = 0; j < bulbs[i].length; j++) {

        // Generate a random percentage to determine quality of bulb
        const functionalTest = parseInt(Math.random() * 100);
        const structuralTest = parseInt(Math.random() * 100);

        // check if functional test is necessary
        if(functionalTest === 6) {
          console.log(`R${i+1}C${j+1}:F`);
        }

        // check is structural test is necessary
        if(structuralTest === 15) {
          console.log(`R${i+1}C${j+1}:S`);
        }

        // check if no test is necessary
        if(functionalTest !== 6 && structuralTest !== 15) {
          console.log(`R${i+1}C${j+1}:-`);
        }
      }
    }
}

// Create a 10x10 matrix containing 100 bulbs(0)
const bulbs = new Array(10).fill(new Array(10).fill(0));

//call the bulb_test method
bulb_test(bulbs);
