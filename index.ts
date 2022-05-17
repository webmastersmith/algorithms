const arr = [1, 3, 7, 9, 2]

function findIndices(num: number = 0) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] + arr[i] === num) {
        return [i, j]
      }
    }
  }
  return null
}
console.time()
console.log(findIndices(8)) //O(n^2)
console.timeEnd()
console.log(findIndices(25)) //O(n^2)
console.log(findIndices()) //O(n^2)
console.log(findIndices(5)) //O(n^2)
console.log(findIndices(7)) //O(n^2)0
