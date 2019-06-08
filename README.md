This repo is my attempt to implement algorithms in [Introduction to Algorithms by CLRS](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844) while I'm following MIT's Introduction to Algorithms course via their [open course ware](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/index.htm).

*The purpose of writing notes, is to makes notes unnecessary. In the process of orginazing notes, I have understood the material.*

# Notes

## <b>Chapter 2.2 Analyzing algorithms</b>

### What is analyzing an algorithm?
Analyzing an algorithm is to predict the resources that the algorithm requires.
- most often, it's computational time we want to measure


### Analysis of insertion sort
It's traditional to describle the running time of a program as a function of the size of its input.

The running time of an algorithm on a particular input is the number of primitive operations or "steps" executed.

### How to derive big O notation for insertsion sort?
1. For now, we assume that to execute each line of our pseudocode (refers to the pseudocode in textbook, JS implementation [here](https://github.com/eqlz/mit-intro-to-algorithms/blob/master/insertionSort.js) is a better reference), a constant amount of time is required.

1. Assume that each execution of the i th line takes time c<sub>i</sub>, where c<sub>i</sub> is a constant.

1. Calculate how many times the for loop and while loop will run.

1. The running time of the alogrithm is the sum of running time for each statement executed. A statement takes c<sub>i</sub> steps to execute and execute n times will contribute c<sub>i</sub>n to the total running time.
    - the goal of this step is to derive a function of n to express running time.
    - this is the most importat step to find big O. Steps before this one is just a preparation for me to get the f(n). Everthing after this step relies on f(n) to do analysis.

1. Figure out the worst-case scenario - to sort an array in reverse sorted order.

1. Calculate the running time for worst-case scenario: a quadratic function of n.

1. It's rate of growth or order of growth, of the running time that really interests us. We drop the coefficient of leading term, and drop the non-leading terms of the formula. For large input n, these are relatively insignificant. Thus, Θ(n<sup>2</sup>).

## Chapter 2.3 Designing algorithms
### What is divide-and-conquer?
Break the problem into several smaller subproblems that are similar to original problems, solve the problem recursively, then combine these solutions into a solution to the original problem.

### Example of divide-and-conquer: merge sort
My [implementation](https://github.com/eqlz/mit-intro-to-algorithms/blob/master/mergeSort.js) follows the pseudocode in the textbook. ```console.log()``` has been put into places that helps visually understand how the algorithm works.


## Binary Search Tree
### BST deletion
For the case where the node to be deleted has both left and right child, we need to find a replacement node first.

This replacement node has these attributes:
- in the right sub-tree of the node to be deleted
- is the smallest node in the right sub-tree of the node to be deleted

Why does the replacement node need to have these attributes?

In order to maintain the BST structure:
- the replacement node has to be bigger or equal to any node in left sub-tree of node to be deleted,
- and smaller or equal to any node in right sub-tree of the node to be deleted.

Any node in the right sub-tree of NTBD(node to be deleted) is bigger or equal to any node in left sub-tree of NTBD.  Now, we just need to find the smallest node in right sub-tree in NTBD.

### BST successor
What is a succssor of a given node? It the node has 1) smallest key, 2) greater than the given node.