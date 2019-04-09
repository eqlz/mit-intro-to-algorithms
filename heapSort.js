var a = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1];

const maxHeapify = (arrayToMaxHeapify, index) => {
    let heapSize = arrayToMaxHeapify.length;

    let indexOfLeftChildNode = getIndexOfLeftChild(index);
    let indexOfRightChildNode = getIndexOfRightChild(index);

    let indexOfLargestValue;
    if(indexOfLeftChildNode < heapSize && arrayToMaxHeapify[indexOfLeftChildNode] > arrayToMaxHeapify[index]) {
        indexOfLargestValue = indexOfLeftChildNode;
    } else {
        indexOfLargestValue = index;
    }

    if(indexOfRightChildNode < heapSize && arrayToMaxHeapify[indexOfRightChildNode] > arrayToMaxHeapify[indexOfLargestValue]) {
        indexOfLargestValue = indexOfRightChildNode;
    }

    if(indexOfLargestValue !== index) {
        let largestValue = arrayToMaxHeapify[indexOfLargestValue];
        let indexValue = arrayToMaxHeapify[index];

        arrayToMaxHeapify[index] = largestValue;
        arrayToMaxHeapify[indexOfLargestValue] = indexValue;

        maxHeapify(arrayToMaxHeapify, indexOfLargestValue);
    }

}

const getIndexOfLeftChild = (index) => {
    return (index * 2) + 1
}

const getIndexOfRightChild = (index) => {
    return (index * 2) + 2
}

maxHeapify(a, 1);
console.log('result: ', a);