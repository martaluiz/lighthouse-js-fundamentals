function lastIndexOf (array, n) {
  let i;
  let result = -1;
  for (i = 0; i <= array.length; i++) {
    if (array[i] === n) {
      result = i;
    }
  }
  return result;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);