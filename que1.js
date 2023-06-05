// Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

// Constraints:
// a. 1 <= nums.length <= 10^4
// b. -2^31 <= nums[i] <= 2^31 - 1

// Note: Create a GitHub file for the solution and add the file link the the answer section below.

function moveZeros(numbers) {
  const length = numbers.length;
  let countZeros = 0;

  for (let i = 0; i < length; i++) {
    if (numbers[i] === 0) {
      countZeros++;
    }
  }

  let i = 0;
  for (let j = 0; j < length; j++) {
    if (numbers[j] !== 0) {
      numbers[i] = numbers[j];
      i++;
    }
  }

  for (let j = 0; j < countZeros; j++) {
    numbers[i] = 0;
    i++;
  }

  return numbers;
}

const numbers = [0, 14, 7, 0, 19, 3, 0];
const result = moveZeros(numbers);
console.log(result);
