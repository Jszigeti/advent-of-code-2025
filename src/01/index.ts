import { input } from './input.js';

// Clean input to have only non-empty lines in a rotations array
const rotations = input
  .split('\n')
  .map((line) => line.trim())
  .filter((line) => line.length > 0);

// Calculate how many times the dial passes through 0
const howManyZero = (rotations: string[]): number => {
  // Initialize counter and dial state
  let counter = 0;
  let dialState = 50;

  for (const rotation of rotations) {
    // Extract direction and distance
    const direction = rotation[0];
    const distance = Number(rotation.slice(1));

    // Update dial state based on direction
    if (direction === 'R') dialState = (dialState + distance) % 100;
    if (direction === 'L') dialState = (dialState - distance + 100) % 100;

    // Increment counter if dial points to 0
    if (dialState === 0) counter++;
  }

  // Return the total count of times the dial passed through 0
  return counter;
};

const result = howManyZero(rotations);
console.log('result:', result);
