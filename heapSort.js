var a = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];

const buildMaxHeapify = (arrayToMaxHeapify) => {
    console.log('arrayToMaxHeapify, index: ', arrayToMaxHeapify)
    let heapSize = arrayToMaxHeapify.length;
    for(let i = Math.floor(arrayToMaxHeapify.length / 2); i > -1; i--) {
        maxHeapify(arrayToMaxHeapify, i);
    }
}

const maxHeapify = (arrayToMaxHeapify, index) => {
    // console.log('arrayToMaxHeapify, index: ', arrayToMaxHeapify, index)
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

buildMaxHeapify(a);
console.log('result: ', a);