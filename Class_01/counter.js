// setTimeout(() => { 
//     for(let i =30;i>=0;i--){
//     console.log(i);
//     }
// }, 1000); 
const currentDate = new Date();
const date = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();   
const hrs = currentDate.getHours();
const min = currentDate.getMinutes();
const sec = currentDate.getSeconds();
console.log(`${date}/${month}/${year} [${hrs}:${min}:${sec}]`); 