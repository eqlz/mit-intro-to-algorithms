This repo is my attempt to implement algorithms in [Introduction to Algorithms by CLRS](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844) while I'm following MIT's Introduction to Algorithms course via their [open course ware](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/index.htm).

# Notes

## <b>Chapter 2.2 Analyzing algorithms</b>

## What is analyzing an algorithm?
Analyzing an algorithm is to predict the resources that the algorithm requires.
- most often, it's computational time we want to measure


## Analysis of insertion sort
It's traditional to describle the running time of a program as a function of the size of its input.

The running time of an algorithm on a particular input is the number of primitive operations or "steps" executed.

## How to derive big O notation for insertsion sort?
1. For now, we assume that to execute each line of our pseudocode, a constant amount of time is required.

1. Assume that each execution of the i th line takes time c<sub>i</sub>, where c<sub>i</sub> is a constant.

1. Calculate how many times the for loop and while loop will run.

1. The running time of the alogrithm is the sum of running time for each statement executed. A statement takes c<sub>i</sub> steps to execute and execute n times will contribute c<sub>i</sub>n to the total running time.
    - the goal of this step is to derive a function of n to express running time.
    - this is the most importat step to find big O. Steps before this one is just a preparation for me to get the f(n). Everthing after this step relies on f(n) to do analysis.

1. Figure out the worst-case scenario - to sort an array in reverse sorted order.

1. Calculate the running time for worst-case scenario: a quadratic function of n.

1. It's rate of growth or order of growth, of the running time that really interests us. We drop the coefficient of leading term, and drop the non-leading terms of the formula. For large input n, these are relatively insignificant. Thus, Θ(n<sup>2</sup>).