
// // const obj = {
// //   name: "Alice",
// //   greet: function() {
// //     setTimeout(function() {
// // //       console.log(this.name); // Fails! `this` is global/window
// // //     }, 1000);
// // //   }
// // // };
// // // obj.greet();
// // // console.log("hello sara")

// // // console.log("Start");
// // // setTimeout(() => console.log("Timeout"), 0);
// // // Promise.resolve().then(() => console.log("Promise"));
// // // console.log("End");
// // for (let i = 0; i < 3; i++) {
// //   console.log(i); // Logs `3` three times!
// // }
// // for (var i = 0; i < 3; i++) {
// //   setTimeout(() => console.log(i), 1000); // Logs `3` three times!
// // }
// // for (let i = 0; i < 3; i++) {
// //   setTimeout(() => console.log(i), 1000); // Logs `3` three times!
// // }
// // setTimeout(() => console.log("Hello after 1s one"), 1000);

// // // async/await
// // const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
// // async function run() {
// // //   await delay(500);
// // //   console.log("Hello after 1s two");
// // // }
// // // run();
// // // setTimeout(() => console.log("Hello after 1s three"), 1000);
// // // console.log("Hello after 1s four");


// // setTimeout(() => {
// //   console.log("Step 1");
// //   setTimeout(() => {
// //     console.log("Step 2");
// //   }, 0);
// // }, 1000);

// // // / Sequential (clean with async/await)
// // async function steps() {
// //   await delay(1000); console.log("Step 1");
// //   await delay(1000); console.log("Step 2");
// // }

// // setTimeout(() => console.log("Task A"), 1000);
// // setTimeout(() => console.log("Task B"), 500);

// // await Promise.all([
// //   delay(1000).then(() => console.log("Task A")),
// //   delay(1000).then(() => console.log("Task B"))
// // ]);

// app.get('/', function(req, res) {  // Add `next` parameter
//     console.log(11111);
//     next();  // Now works
// });

// app.get('/', function(req, res) {
//     console.log(22222);
//     res.send('Done');  // Send a response to avoid hanging
// });

// app.listen(3000, function() {
//     console.log('Connected to 3000 port');
// });
// let  arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
// arr1.sort()
// // arr1.copyWithin()
// // console.log(arr1.sort())
// // console.log(arr1)
// // // console.log(arr1.copyWithin(6, 5))
// // // console.log(arr1.fill(5))
// // console.log(arr1.reverse())
// // console.log(arr1.indexOf(9))
// // // console.log(arr1.join(''))
// // // const sum = arr1.reduce((acc, curr)=> acc + curr, 0)
// // // const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// // // console.log(sum)

// // const arr = [{a:1}, {a:2}];
// // arr.reduce((acc, obj) => {obj.a *= 10; // This mutates the objects inside the array
// //   return acc;
// // }, 0);

// // console.log(arr); // [{a: 10}, {a: 20}]
// console.log([1, 2, 3].map(n => `{'n'}`))
// // console.log([1, 2, 3].map(n => n * 3)).filter(n=> n > 5);
// const nums = [3, 1, 4];  
// console.log(nums.sort((a, b) => a - b));
// // console.log('hello')
// // const evens = nums.filter(n => n % 2 === 0);
// let  arr1 = [1, 2, 3, 4, 5, 6, 7, 8]
// // console.log(arr1.length)
// word = 'byekwaaso'
// // console.log(word.length)
// // console.log(word)
// // console.log(word.toUpperCase())
// // console.log(word.includes('kwa'))
// // console.log(arr1.slice(1,3))
// // console.log(word.slice(1,3))
// // // console.log(arr1.slice(-3))
// // let char = word.split("")
// // console.log(char)
// // console.log([1, 2, 3, , , , , , , , , , 99])
// // let arr2 = [1, 2, 3, , , , , , , , , , 99]
// // console.log(arr2.length)
// // // console.log(arr2.indexOf(99))
// // let obj = { a: 1 };
// // const obj2 = obj;
// // // obj2.a = 3;
// // // console.log(obj.a);
// // const arr = [10, 20, 30];
// // for (const idx in arr) {
// // //     arr[idx] += 5;
// // // // }
// // // // console.log(arr)


// // // var makeFunnyName = function(firstName, lastName) {
// // //     return "Mister " + firstName + " Mc" + lastName + "Pants";
    
// // // }
// // // console.log(makeFunnyName('Winston'));
// // const favoriteFoods = ['Quiche', 'Carrots', 'Tuna', 'Chicken', 'Fries'];
// // // i = 0;
// // // while(i < favoriteFoods.length){
// // for (i = 0; i < favoriteFoods.length; i++){
// //     console.log(favoriteFoods[i])};


// // console.log(favoriteFoods.slice(-2)); // undefined
// // // console.log(favoriteFoods[-1]); // undefined (also invalid)
// // // console.log(favoriteFoods[favoriteFoods.length -1])
// // var carName = "Honda";

// // function myFunction() {
// // //     var carName = "Volvo";
// // //     return carName;
// // // }

// // // // console.log(carName);
// // // let myName = 'John Doe';
// // // const greeting = 'Hello';
// // // // const greetMe = () => {
// // // //     myName = 'Nageeb';
// // // //     console.log(greeting + '', '' + myName);
// // // // // };
// // // // // greetMe();
// // // //    let animals = ['Duck', 'Goose', 'Moose']
// // // //    let farmer = 'Old McDonald'
// // // //     const farm = (color, size) => {
// // // //         let animals = ['Cow', 'Lamb', 'Chicken'];
// // // //         console.log(`WOW! A ${size} ${color} ${animals[3]}`);
// // // //         }   // this closes the function
// // // //     farm('red', 'big')

// // //         let mobile = {
// // //             brand: 'Samsung',
// // //             model: 'Galaxy Note 9'
// // //         };
// // //         for (let key in mobile) {
// // //             console.log(`${key}: ${mobile[key]}`);
// // //         }
// //    const List = [1,2,3,4,5,6,7];
// //    const fun1 = (a) => fun2(a);
// //    function fun2(b) {
// //        let c = 0;
// //        for (let i in b) {
// //            let d = b[i];
// //            if (d % 2 == 0) {
// //                c += d;
// //            } else {
// //                c -= d;
// //            }
// //        }
// //        return c;  
// //    }
// //    console.log(fun1(List));

// promise
//   .then(function(data) {
//       console.log(data);
//   })
//   .catch(function(error) {
//       console.log(error); // "Sorry"
//   });
var a = 2
setTimeout(function() {console.log(a*2)}, 2000)
var a = 5

