var a = [5, 2, 4, 7, 1, 3, 2, 6]


const mergeSort = (arrayToSort, firstIndex, lastIndex) =>  {
  if(firstIndex < lastIndex) {
    midIndex = Math.floor((firstIndex + lastIndex) / 2);
    // console.log('midIndex: ', midIndex);
    console.log('firstIndex, lastIndex, midIndex: ', firstIndex, lastIndex, midIndex);
    
    console.log('mergeSort() left, firstIndex, midIndex: ', firstIndex, midIndex);
    mergeSort(arrayToSort, firstIndex, midIndex);

    console.log('mergeSort() right, midIndex + 1, lastIndex: ', midIndex + 1, lastIndex);
    mergeSort(arrayToSort, (midIndex + 1), lastIndex);

    console.log('------------------')
    merge(arrayToSort, firstIndex, midIndex, lastIndex);
  }
  // return arrayToSort;
}

const merge = (arrayToSort, firstIndex, midIndex, lastIndex) => {
  console.log('call merge(), firstIndex, lastIndex, midIndex: ', firstIndex, lastIndex, midIndex);
  let lengthOfLeftArray = midIndex - firstIndex + 1;
  let lengthOfRightArray = lastIndex - midIndex;

  let leftArray = [];
  let rightArray = [];

  for(let i = 0; i < lengthOfLeftArray; i++) {
    leftArray[i] = arrayToSort[firstIndex + i]; 
  }
  for(let j = 0; j < lengthOfRightArray; j++) {
    rightArray[j] = arrayToSort[midIndex + j + 1];
  }

  // leftArray[lengthOfLeftArray + 1] = 'sentinel';
  // rightArray[lengthOfRightArray + 1] = 'sentinel';
  console.log('leftArray: ', leftArray);
  console.log('rightArray: ', rightArray);

  let indexInLeftArray = 0
  let indexInRightArray = 0

  for(let k = firstIndex; k < lastIndex + 1; k++) {
    console.log('k: ', k);
    if(indexInRightArray === rightArray.length || leftArray[indexInLeftArray] <= rightArray[indexInRightArray]) {
      console.log('copy left array');
      arrayToSort[k] = leftArray[indexInLeftArray];
      indexInLeftArray += 1;
    }
    else {
      console.log('copy right array');
      arrayToSort[k] = rightArray[indexInRightArray];
      indexInRightArray += 1;
    }
  }

  console.log('array after merge: ', arrayToSort);
  console.log('======================')
}

console.log(mergeSort(a, 0, a.length -1));
console.log('result: ', a);
