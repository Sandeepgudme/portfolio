const quickSort = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
  
    let pivot = arr[0]; // Select the first element as the pivot
    let leftArr = []; // Elements less than the pivot
    let rightArr = []; // Elements greater than the pivot
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
  
    return [...quickSort(leftArr), pivot,...quickSort(rightArr)];
  };
  
  // Example usage
  let myArray = [3,-4];
  console.log(quickSort(myArray)); // Output: [1,2,3,4,5,6,7,8]
  