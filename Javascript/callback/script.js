// Promise
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved");
  }, 5000);
});

function xyz(ID) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (ID !== 3) {
        console.log("Data", ID);
        res("success");
      } else {
        rej("error");
      }
    }, 3000);
  });
}

xyz(1)
.then((res)=>{
    return xyz(2);
})
.then((res)=>{
    return xyz(3);
}).then((res)=>{
    
})

// CallBack Hell !!
// function fetchdata(rollno, fetchnext) {
//   setTimeout(() => {
//     console.log("student" + rollno);
//     if (fetchnext) {
//       fetchnext();
//     }
//   }, 2000);
// }

// fetchdata(1, () => {
//   fetchdata(2, () => {
//     fetchdata(3, () => {
//       fetchdata(4, () => {
//         fetchdata(5, () => {});
//       });
//     });
//   });
// });

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// function sum(x,y){
//     console.log(x+y);

// }

// sum(1,1);
