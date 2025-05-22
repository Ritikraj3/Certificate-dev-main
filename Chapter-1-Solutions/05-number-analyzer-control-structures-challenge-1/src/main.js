// complete the challenge here 👇
//1.
const numbers = [23, 54, 32, 87, 47, 15, 98, 6, 63, 41];

//2.
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenCount = evenCount++;
  } else {
    oddCount = oddCount++;
  }
}

console.log(`Even count: ${evenCount}`);
console.log(`Odd count: ${oddCount}`);

//3.
let lowCount = 0;
let mediumCount = 0;
let highCount = 0
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 30) {
    lowCount++;
  } else if (numbers <= 70) {
    mediumCount++;
  } else {
    highCount++
  }
}

console.log(`Low numbers: ${lowCount}`);
console.log(`Low numbers: ${mediumCount}`);
console.log(`Low numbers: ${highCount}`);

//4.
let sum = 0

numbers.forEach((number) => {
    sum = sum + number
})

const average = (sum / numbers.length).toFixed(2)

console.log('Sum:', sum)
console.log('Average:', average)
