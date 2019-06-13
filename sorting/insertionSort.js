/*
 * Reference to book: Chapter 2.1 Insertion Sort
*/
var a = [5, 2, 4, 6, 1, 3];

const insertionSort = (arrayToSort) => {
    console.log('input array: ', arrayToSort);
    for(let keyIndex = 1; keyIndex < arrayToSort.length; keyIndex++) {
        let key = arrayToSort[keyIndex];

        let leftPositionToKey = keyIndex - 1;
        while (leftPositionToKey > -1 && arrayToSort[leftPositionToKey] > key) {
            let valueOfLeftPositionToKey = arrayToSort[leftPositionToKey]
            
            // change the value of keyIndex:
            // the value at keyIndex (leftPositionToKey + 1) becomes
            // the value of leftPositionToKey
            arrayToSort[leftPositionToKey + 1] = valueOfLeftPositionToKey;
            console.log('arrayToSort after move value of leftPositionToKey to key: ', arrayToSort);

            leftPositionToKey = leftPositionToKey - 1;
            console.log('left position to the key: ', leftPositionToKey);
        }
        // if go through while loop
        // below will change the value of leftPositionToKey
        // value of leftPositionToKey becomes
        // value of keyIndex
        arrayToSort[leftPositionToKey + 1] = key;
        console.log('arrayToSort after each iteration: ', arrayToSort);
    }
    return arrayToSort;
}

console.log(insertionSort(a));