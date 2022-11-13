"use strict"
// math
// console.log(Math.abs(- 3));
// تغير القيمة من سالب الى موجب

// console.log(Math.sqrt(9));
// // الجذر التربيعي لالها

// console.log(Math.pow(2,3));
// الاسس> الرقم الاول يكون الرقم والرقم بعد الفاصلة يكون الاس>

// console.log(Math.round(10,5));
// اقرب العدد الى اقرب عددصحيح

// console.log(Math.ceil(10,4));
//  تقرب الى اقرب عدد من الاعلى

//  console.log(Math.floor(7,9));
//  تقرب الى اقرب عدد من الاسفل

// console.log(Math.min(10,4,5,7,2,-1));
//  يظهر اصغر قيمة بالارقام

// console.log(Math.max(10,4,5,7,2,-1));

// يظهر اكبر قيمة بالارقام

// let sale =window.prompt()
// console.log(0.15 * sale +'denar' );

// تحويل الارقام الى نصوص
//  let x =100;
//  console.log(typeof x);
// console.log(typeof String(x));لما اكتب الرقم واضع جنبه نقطه فقط   
//  console.log(typeof (100)toString());                                             سيعتبر انه يةجد قيمه عشرية بجانبه
//  console.log(typeof 100..toString());      لحل مشكه نضع بين اقواس اوننقطتين قبل توسترنغ

// string  //
// let name =' walaa';
// console.log(name.repeat(10));  
// لتكرار

// let name =' walaa';
// console.log(name.length)
// للعد الاحرف والمسافات
// seqwans value قيم منفصله

// let name =' walaa';
// console.log(name[10]);
// console.log(name.charAt(10));

// let name ='walaa obeidat';
// console.log(name.indexOf('a',4))


// let name ='walaa obeidat'
// console.log(name.slice(6,13));


// let name ='walaa obeidat'
// console.log(name.split('a'));

// let name ='i love java script'
// console.log(name.slice(-2,6));
// console.log(name.substring(2,6));
// console.log(name.substr(2,6));

// let name ='i love java script'
// // console.log(name.includes('h'));
// // / console.log(name.indexOf('a',4))
// // console.log(name.startsWith('java',7));
// console.log(name.endsWith('j',8));

// ARRAY//
// let name1= 'walaa';
// let name2= 'fedaa';
// let name3= 'nedaa';
//  let names = ['walaa','fedaa','nedaa','ahmad']
// console.log(names)
// let names = ['walaa','fedaa','nedaa','ahmad']
// console.log(names[3])

// array in array//

// let walaa = [1,2,3,[4,5,6,[7,8,9]]]
// console.log(walaa[3][3][1])

// let names = ['walaa','fedaa','nedaa','ahmad']
// names[3] = 'mohmmad'
// console.log(names)
// لتغير العنصر حسب موقعه بالمصفوفه
// محمد موقعه 3 بدل احمد
 

// let names = ['walaa','fedaa','nedaa','ahmad']
// names.push('mohmmad')
// console.log(names)
// نوع لاضافة العناصر من  نهاية الاريه


// let names = ['walaa','fedaa','nedaa','ahmad']
// names.unshift('mohmmad')
// console.log(names)
// // نوع لاضافة العناصر من  بداية الاريه

// let names = ['walaa','fedaa','nedaa','ahmad']
// names.shift()
// console.log(names)
// // // نوع لحذف العناصر من  بداية الاريه

// let names = ['walaa','fedaa','nedaa','ahmad']
//  names.pop()
// console.log(names)
   
// //  نوع لمسح العناصر من  نهاية الاريه

//splice && slice//

// let names = ['walaa','fedaa','nedaa','ahmad']
//  names.splice(0,2 ,'mona')
// console.log(names)
   
// let names = ['walaa','fedaa','nedaa','ahmad']
// console.log(names.slice(-1))

//يطبع من الاخر للاول
// let arr = ['walaa','fedaa','nedaa','ahmad']
//  console.log(arr.reverse()) 

//concat//
// let arr1 = ['walaa','fedaa']
// let arr2 = ['nedaa','ahmad']
// // console.log(arr1.concat(arr2,'huda'));
// console.log(arr1.join('_'))
// دمج بين 2اريه

//condition//
// ==values
//  let x = 'ahmad';
//  let y = 'ali'; 
//  console.log(x==y)

// let askemail = prompt('entat your email');
// let email = 'walaaobeidat43@gmail.com';
// console.log(askemail == email);

// let x = 'ahmad';
// console.log(x.toUpperCase());

// console.log(x.tolowerCase());

// trim   لمسح المسافات من البداية ونهاية

// ===values and datatypes//
// console.log(5 ==='5');


// // if///
// let x = 12;
// let y = 10;
// if(x > y)
// {
//     console.log('walaa');
// }

// let role =prompt('waht is your role')
// if(role =='admin')
// {
//     document.write('update,create, delete' );
// }
// else if(role =='moderator')
// {
// document.write('update,create' );
// }
// else
// {
//         document.write('hello');   
// }

//  let x  ='walam';
// for (let i =0; i> x.length ; i++)
// {
//      console.log(x[i]);
//  }
// // // ضروري افهمو///////

// let cars =['bmw', 'honda'];
// let models =[2020,2021];

// for( let i =0;  i < cars.length; i++)
// {
//     console.log(('car: ${cars[i]}'));
   
//       for( let j =0; models.length; j++)
// {
//     console.log(('models: ${models[j]}')); 
// }
// console.log(____________);
// }
// let users = ['walaa','huda','shemo','mhod']
// // for(let i=0 ; i < users.length  ; i++) 
// // {
// // if ( typeof users[i]=='number')  
// // {
// //     continue;
// // }
// //     console.log(users[i]);
// // }

// for(let i=0 ; i < users.length ; i++) 
// {
// if (users[i] != 'walaa')  
// {
//     continue;
// }
//     console.log(users[i])
// } 
// function calcage(age) {
    
//     let resalt = age * 356;
//     console.log(resalt);
// }
// calcage(12);

// function walaa()
// {
//     return 2000;
// }
// let w = walaa;
// console.log(      walaa());

// hoisting///scop//
// console.log(      x()     );
// function x()
// { 
//     function y () {return 1 }
// return y();
// function y () {return 0 }    
//     }


