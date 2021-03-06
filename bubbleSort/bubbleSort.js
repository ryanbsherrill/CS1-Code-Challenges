/*
 * Bubble sort is the most basic sorting algorithm.
 * It compares the first element of an array with the second element.
 * If the first element is greater than the second element then it swaps them.
 * Then it compares the second and third elements and swaps them if the second is larger.
 * Then it compares the third and fourth elements and does the same.
 * This continues and the the larger elements begin to "bubble" towards the end.
 * The loop then restarts and repeats this process until it makes a clean pass
 * without performing any swaps.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * What's the time complexity of your algorithm?  Are there ways you can improve it?
 *
*/

/*
 * Example:
 * bubbleSort([2, 1, 3]); // returns [1, 2, 3]
 *
*/

const bubbleSort = (arr) => {
<<<<<<< HEAD
  let sort = false;
  while (!sort) sort = true;
  arr.forEach((j, i, arr) => {
    if (j > arr[i + 1]) {
      arr[i] = arr[i + 1];
      arr[i + 1] = j;
      sort = false;
    }
  });
  return arr;
};

console.log(bubbleSort([2, 1, 3]))
=======
  //code here
};
>>>>>>> 08d5a5bfab5c02a8eed369a0a034a0e55c7c2181
