import perf from 'perf_hooks'
// const arr = Array(300).fill('0')

// const start = perf.performance.now()
// // arr.pop() //.00379
// // arr.shift() //.00670
// arr.unshift('0') //.7.54
// console.log(perf.performance.now() - start)

// for (let i = 0; i<10; i++ ) {

// }
class MyArray {
  length = 0
  data = {}
  get(index: string) {
    return this.data[index]
  }
  push(item: any) {
    this.data[this.length] = item
    this.length++
  }
  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }
  delete(index: number) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1]
      return this.pop()
    }
  }
}

const arr = new MyArray()
arr.push('a')
arr.push('b')
arr.push('c')
console.log(arr)
arr.delete(1)
console.log(arr)
