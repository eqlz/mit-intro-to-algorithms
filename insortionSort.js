var a = [5, 2, 4, 6, 1, 3];

const insertionSort = (arrayToSort) => {
    console.log('input array: ', arrayToSort);
    for(let keyIndex = 1; keyIndex < arrayToSort.length; keyIndex++) {
        let key = arrayToSort[keyIndex];

        let leftPositionToKey = keyIndex - 1;
        while (leftPositionToKey > -1 && arrayToSort[leftPositionToKey] > key) {
            let valueOfLeftPositionToKey = arrayToSort[leftPositionToKey]
            arrayToSort[leftPositionToKey + 1] = valueOfLeftPositionToKey;
            console.log('arrayToSort after move value of leftPositionToKey to key: ', arrayToSort);
            leftPositionToKey = leftPositionToKey - 1;
        }
        arrayToSort[leftPositionToKey + 1] = key;
        console.log('arrayToSort after each iteration: ', arrayToSort);
    }
    return arrayToSort;
}

console.log(insertionSort(a));