"use strict"
//task1_________________//
function doubleValues(arr){
       
        arr.forEach((item, index, arr) =>{
            arr[index] = item * 2;
        })
        return arr
     }
     console.log(doubleValues([1,2,3]))
     //task2_________________//
     function onlyEvenValues(arr){
             //Your Code Here
             let newArr = []
             arr.forEach((item, index, arr) =>{
                if(item % 2 == 0){
                    newArr.push(item)
                }
            })
            return newArr
         }
         
         console.log(onlyEvenValues([1,2,3]))
         console.log(onlyEvenValues([5,1,2,3,10]))




    //task3___________________//
    // السؤال

    // * Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
    // *
    // * Test Case:
    // *   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
    // *   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
    // *  
    // * Result:
    // * Test Case 1: ["ct", "mt", "tm", "uy"]
    // * Test Case 2: ['hi', 'ge', 'se']
    // *
    // */
    // function showFirstAndLast(arr){
