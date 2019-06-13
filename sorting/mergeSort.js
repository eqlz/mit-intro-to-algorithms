var a = [5, 2, 4, 7, 1, 3, 2, 6]


const mergeSort = (arrayToSort, firstIndex, lastIndex) =>  {
  if(firstIndex < lastIndex) {
    let midIndex = Math.floor((firstIndex + lastIndex) / 2);
    mergeSort(arrayToSort, firstIndex, midIndex);
    mergeSort(arrayToSort, (midIndex + 1), lastIndex);
    merge(arrayToSort, firstIndex, midIndex, lastIndex);
  }
}

const merge = (arrayToSort, firstIndex, midIndex, lastIndex) => {
  let lengthOfLeftArray = midIndex - firstIndex + 1;
  let lengthOfRightArray = lastIndex - midIndex;

  let leftArray = [];
  let rightArray = [];

  for(let i = 0; i < lengthOfLeftArray; i++) {
    leftArray[i] = arrayToSort[firstIndex + i]; 
  }
  for(let j = 0; j < lengthOfRightArray; j++) {
    rightArray[j] = arrayToSort[midIndex + 1 + j];
  }

  let indexInLeftArray = 0
  let indexInRightArray = 0

  for(let k = firstIndex; k < lastIndex + 1; k++) {
    if(indexInRightArray === rightArray.length || leftArray[indexInLeftArray] <= rightArray[indexInRightArray]) {
      console.log('copy left array: ', leftArray);
      arrayToSort[k] = leftArray[indexInLeftArray];
      indexInLeftArray += 1;
    }
    else {
      console.log('copy right array: ', rightArray);
      arrayToSort[k] = rightArray[indexInRightArray];
      indexInRightArray += 1;
    }
  }

  console.log('array after merge: ', arrayToSort);
}

console.log(mergeSort(a, 0, a.length -1));
console.log('result: ', a);
