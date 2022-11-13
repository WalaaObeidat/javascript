"use strict"
//task1_________________//
// const array1 = [2,5, 100];

// const map1 = array1.map(x => x * 2);

// console.log(map1);

//task2_________________//
// var arr = [2,5,100];

// var walaa = arr.map(String);

// console.log(walaa); 
// resalt// ["2","5","100"]

//task3_________________//
// var Names = ["walaa", "JACOB", "jinGleHeimer", "husam"]
// let capitalize =Names.map(function (element)
// {
//   return element.toUpperCase()
// });

//  console.log(capitalize)


//task4_________________//
// function walaaob(array) {


//     return array.map(i => i.name);
//     }
//     var names = walaaob([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
//     ])
    
//     console.log(names);
//task5_________________//
// function makeStrings(arr){
//     let reFormArr = arr.map(arr =>{
//         if(arr.age>=18){
//         console.log(arr.name + ' can go to The Matrix') 
//         }else {
//             console.log(arr.name + " is under age!!");
//         }
//     })
//     }
    
//     console.log(makeStrings([
//         {
//             name: "Angelina Jolie",
//             age: 80
//         },
//         {
//             name: "Eric Jones",
//             age: 2
//         },
//         {
//             name: "Paris Hilton",
//             age: 5
//         },
//         {
//             name: "Kayne West",
//             age: 16
//         },
//         {
//             name: "Bob Ziroll",
//             age: 100
//         }
//     ])); 

//task6_________________//
// function readyToPutInTheDOM(arr){
       
//         let result = arr.map(e => `<h1>${e.name}</h1><h2>${e.age}</h2>`)
//         return result
//       }
    
//           console.log(readyToPutInTheDOM([
//            {
//                name: "Angelina Jolie",
//                age: 80
//            },
//            {
//                name: "Eric Jones",
//                age: 2
//            },
//            {
//                name: "Paris Hilton",
//                age: 5
//            },
//            {
//                name: "Kayne West",
//                age: 16
//            },
//            {
//                name: "Bob Ziroll",
//                age: 100
//            }
//            ]));

           
//task7_________________//

// function doubleValues(arr){
//           // your code here
//           let result = arr.map(e => e * 2)
//           return result;
//         }
        
//         console.log(doubleValues([1,-2,-3]))
//         console.log(doubleValues([1,2,3])
//         )
//task8_________________//

// var myrray=[1,-2,-3]

// let valTimesIndex=myrray.map ((d,i) => d* i )
// console.log(valTimesIndex)

//task9_________________//
// function extractKey(name_2) {


//     return name_2.map(i => i.name);
//     }
//     let result = extractKey([{name: 'walaa'}, {name: 'husam'}, {name: 'sajeda'}, {name: 'mohamad'}]) 
    
//     console.log(result)
    
//task10_________________//
// function extractFullName(ww) {

//     return ww.map(i => i.first + ' ' +i.last)}
//     var fullname = extractFullName([{first: 'walaa', last:"obeidat"}, {first: 'husam', last:"Garcia"}, {first: 'sajeda', last:"shilpayah"}, {first: 'mohamad', last:"Steele"}])
    
//     console.log(fullname)