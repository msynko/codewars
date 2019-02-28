// / Define a function that given 2 lists of words will merge them into one list with all duplicates removed. If an element was a duplicate, it should be marked with an "_" in front of it. The order of the elements in the merged list does not matter.


// Example 1:
// Input - [ "hi", "bye" ], [ "why", "lie" ]
// Output - [ "hi", "bye", "why", "lie" ] or any other ordering

// Example 2:
// Input - [ "hi", "bye" ], [ "bye", "why" ]
// Output - [ "hi", "_bye", "why" ] or any other ordering

// Example 3:
// Input - [ "hi", "hi", "hi" ], [ "bye", "why" , "lie"]
// Output - [ "_hi", "bye", "why", "lie" ] or any other ordering


// function merge (arr1, arr2){
//  let arr3 = arr1.concat(arr2)
//
//  let newArr = arr3.filter(function(element, index) {
//     arr3.indexOf(element)>=index;
//  });
// return newArr;
// }
//
// const arr1 = [ "hi", "bye" ]
// const arr2 = [ "why", "hi" ]
//
// console.log(merge(arr1, arr2))


function merge (arr1, arr2){
 let arr3 = arr1.concat(arr2)
 let arr4 = Array.from(new Set(arr3))
return arr4
}
const arr1 = [ "hi", "bye","hi", "bye" ]
const arr2 = [ "why", "hi","lie", "tie" ]

console.log(merge(arr1, arr2))
