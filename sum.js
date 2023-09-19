// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// extract the command-line arguments

const args = process.argv.slice(2);
console.log('args:', args);

// edge case: We need at least 2 arguments
if (args.length < 2) {
  console.log(`Error, please enter at least 2 arguments`)
  process.exit()
}

//initialize an accumulator

let total = 0;

// edge case: If any argument is not a number, output an error message

// iterate through the args
// for (let i; i< args.lenght;i++) => c-style loop => iterate over the index
// for of => iterate over the element
// for in => iterate over the index => use for iterating through objects
// forEach => ietrate through the element and the index

for (let arg of args) {
  // edge case: If any argument is not a whole number, skip it.

  // if (arg % 1 == 0) => this is an integer
  // Number.isInteger

  const convertedNum = Number(arg);
  // check if args are valid numbers

  if (isNaN(convertedNum)) {
    console.log(`Error: please enter only numbers`);
    // stop the execution here
    process.exit()
  }

  if (Number.isInteger(convertedNum)) {
    total += convertedNum; // typecasting
    console.log('arg:', convertedNum, 'total:', total);
  }
}

// add each arg to our accumulator

// print the sum

console.log('Total:', total);
