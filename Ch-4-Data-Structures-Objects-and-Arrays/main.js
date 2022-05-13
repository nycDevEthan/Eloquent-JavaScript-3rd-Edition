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

// A list
// Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.
// The resulting objects form a chain, like this:
// A linked list
// A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.
// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
// couldn't figure this one out, had to study solution code to improve my understanding

function arrayToList(arr) {
    let list = null;

    for(let i = arr.length - 1; i >= 0; i--) {
        list = {value: arr[i], rest: list};
    }

    return list;
}

arrayToList([1, 2, 3]);

// Also write a listToArray function that produces an array from a list.

function listToArray(list) {
    let arr = [];

    for (let node = list; node; node = node.rest) {
        arr.push(node.value);
    }

    return arr;
}

console.log(listToArray(arrayToList([10, 20, 30])));

// Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list,
// couldn't figure this one out, had to study solution code to improve my understanding

function prepend(value, list) {
    return {value, rest: list};
}

prepend(10, prepend(20, prepend(30, prepend(40, prepend(50, null)))));

// and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.
// couldn't figure this one out, had to study solution code to improve my understanding

function nth(list, num) {
    if (!list) return undefined;
    else if (num === 0) return list.value;
    else return nth(list.rest, num - 1);
}

nth({value: 1, rest: {value: 2, rest: {value: 3, rest: {value: 4, rest: {value: 5, rest: null}}}}}, 3);

// Deep comparison
// The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

// To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

// The Object.keys function will be useful when you need to go over the properties of objects to compare them.

function deepEqual(obj1, obj2) {
    let obj1Arr = Object.keys(obj1);
    let obj2Arr = Object.keys(obj2);
    if (typeof obj1 === "object" && typeof obj2 === "object" && obj1Arr === obj2Arr) return true;
    else if (typeof obj1 !== "object" || typeof obj2 !== "object") return false;
}

let obj1 = {
    a: 'somestring',
    b: 42,
    c: false
}

let obj2 = {
    a: 'somestring',
    b: 42,
    c: false
}

// {
//     a: 'astring',
//     b: 59,
//     c: true
// }

deepEqual(obj1, obj2);

// let obj1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
// }

// let obj2 = {
//     a: 'somestring',
//     b: 42,
//     c: false
// }



