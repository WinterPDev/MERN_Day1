

// const runTenTimes = (operation) => {
//     for(let i = 0; i < 10; i++){
//         operation();
//     }
// }

// runTenTimes(()=>{console.log("woah, this is trippy, man.")});
// runTenTimes(()=>{console.log(Math.PI)});
// runTenTimes(48);

let temperature = 70;

let clothing = temperature < 30 ? "coat" : temperature < 50 ? " light jacket" : "you're fine!";

console.log(clothing);