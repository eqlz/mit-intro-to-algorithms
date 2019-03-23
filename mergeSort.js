var a = [2, 4, 5, 7, 1, 2, 3, 6]

const mergeSort = (arrayToSort, firstIndex, lastIndex) =>  {
  if(firstIndex < lastIndex) {
    midIndex = Math.floor((firstIndex + lastIndex) / 2);
    mergeSort(arrayToSort, firstIndex, midIndex);
    mergeSort(arrayToSort, midIndex + 1, lastIndex);
    merge(arrayToSort, firstIndex, midIndex, lastIndex);
  }
}

const merge = (arrayToSort, firstIndex, midIndex, lastIndex) => {
  let lengthOfLeftArray = midIndex - firstIndex + 1;
  let lengthOfRightArray = lastIndex - midIndex;

  let leftArray = [];
  let rightArray = [];

  for(let i = 0; i < lengthOfLeftArray; i++) {
    leftArray[i] = arrayToSort[firstIndex + i - 1]; 
  }
  for(let j = 0; j < lengthOfRightArray; j++) {
    rightArray[j] = arrayToSort[midIndex + j];
  }

  leftArray[lengthOfLeftArray + 1] = 'sentinel'
  rightArray[lengthOfRightArray + 1] = 'sentinel'

  let indexOfLeftArray = 0
  let indexOfRightArray = 0

  
}