var a = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];

const heapSort = (arrayToHeapSort) => {
    buildMaxHeapify(arrayToHeapSort);
    
    let heapSize = arrayToHeapSort.length;
    for(let i = arrayToHeapSort.length - 1; i > 0; i--) {
        console.log('array before swap: ', arrayToHeapSort);

        let rootValue = arrayToHeapSort[0];
        let lastIndexValue = arrayToHeapSort[i];
        arrayToHeapSort[0] = lastIndexValue;
        arrayToHeapSort[i] = rootValue;
        console.log('array after swap: ', arrayToHeapSort);

        heapSize -= 1;

        maxHeapify(arrayToHeapSort, 0, heapSize);
    }
}

const buildMaxHeapify = (arrayToMaxHeapify) => {
    for(let i = Math.floor(arrayToMaxHeapify.length / 2); i > -1; i--) {
        maxHeapify(arrayToMaxHeapify, i);
    }
}

const maxHeapify = (arrayToMaxHeapify, index, heapSize) => {
    if(typeof heapSize === 'undefined') {
        heapSize = arrayToMaxHeapify.length;
    }
    console.log(heapSize);
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

        maxHeapify(arrayToMaxHeapify, indexOfLargestValue, heapSize);
    }

    return arrayToMaxHeapify;
}

const getIndexOfLeftChild = (index) => {
    return (index * 2) + 1
}

const getIndexOfRightChild = (index) => {
    return (index * 2) + 2
}

heapSort(a);
console.log('result: ', a);
// console.log(maxHeapify([ 2, 8, 3, 4, 7, 1, 9, 10, 14, 16 ], 0, 6));