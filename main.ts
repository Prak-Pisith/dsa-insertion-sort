/* 
  Insertion Sort Algorithm
   - After comparing element to the left,
   shift elements to the right to make room to insert a value
   - Quadratic time: 0(n^2)
   - Decent: for small datasets
   - BAD: for large datasets
   - Less step then Bubble Sort
   - Best case is 0(n) compared to Selection Sort O(n^2)
*/

const insertionSort = (numbers: number[]): number[] => {

  for (let i = 1; i < numbers.length; i++) {
    let temp = numbers[i];
    let j = i - 1;
    while(j >= 0 && numbers[j] > temp) {
      numbers[j + 1] = numbers[j];
      j--;
    }
    numbers[j + 1] = temp;
  }
  return numbers;
}

const numbers = [64, 34, 25, 12, 22, 11, 90];
const result: number[] = insertionSort(numbers);
console.log(result);