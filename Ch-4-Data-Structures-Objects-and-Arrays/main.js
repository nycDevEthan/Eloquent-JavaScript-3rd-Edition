// Eloquent JavaScript 3rd edition (2018) - Chapter 4 - Data Structures: Objects and Arrays
// Written by Ethan O'Connell
// Language: JavaScript
// May 2022

// Exercises

// The sum of a range
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

function range(start, end) {
    let emptyArr = []
    for (let i = start; i <= end; i++) {
        emptyArr.push(i);
    }
    return emptyArr;
}

range(1, 5);

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

sum([1, 2, 3, 4, 5]);
// 15

// using array.reduce method
function sumMap(arr) {
    const initialValue = 0;
    return arr.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
}

sumMap([1, 2, 3, 4, 5]);
// 15

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

function range(start, end, step) {
    let emptyArr = [];

    if (Math.sign(step) === 1) {
        for (let i = 0; i < end / step; i++) {
            emptyArr.push(start);
            start += step;
        }
    } else if (Math.sign(step) === -1) {
        for (let i = start; i >= end ; i += step) {
            emptyArr.push(start);
            start += step;
        }
    }

    return emptyArr;
}

range(1, 10, 2);
range(10, 3, -2);

// Reversing an array
// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.

// original solution
// function reverseArray (arr) {

//     let reversedArray = [];
//     let arrValue;
//     let originalArrLength = arr.length;

//     for (let i = 0; i < originalArrLength; i++) {
//         arrValue = arr.pop(i);
//         reversedArray.push(arrValue);
//     }
    
//     return reversedArray;
// }

// after reading hints - using unshift
function reverseArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i]);
    }
    return newArr;
}

reverseArray([1, 2, 3, 4, 5]);

// using push
function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

reverseArray([1, 2, 3, 4, 5]);

// The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

function reverseArrayInPlace(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr.length - 1;
    }
    return arr;
}

reverseArray([1, 2, 3, 4, 5]);


