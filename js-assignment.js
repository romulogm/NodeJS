const assert = require('assert');

// Implement a function that takes an object and multiply it's value by a constant and returns a promise
// --> retornar promise ou async
async function calculateItem(item, constant) {
  let multiplyValue = item.value * constant;
  return multiplyValue;
  };

// Implement a function that returns true for "settled" items
function isSettled(item) {
  if (item.settled == true) {
  return true
  } else {
      return false;
  };
};
  

async function main() {
  // Load data from a json file located at the "resources" folder
  const loadData = async () => {
    const readData = await require('./data.json');
    return readData;
    };

  const data = await loadData();

  // For each item in the array that is "settled" 
  // Multiply its absolute value by 2
  // Sum up results

  var calculatedValue = 0;
  for (let i = 0; i < data.length; i++) {
    if (isSettled(data[i]) == true && data[i].value != undefined) {
      calculatedValue += await calculateItem(data[i], 2) 
    }
    else {
    i++;
    }
  }

  console.log('calculated value:', calculatedValue);

  // The final answer should be 42
  assert(calculatedValue === 42, 'Incorrect value');
  };
  
main();
