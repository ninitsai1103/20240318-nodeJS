let a;
console.log("開始");

// new Promise().then().catch()
new Promise((resolve, reject) => {
    setTimeout(() => {
        a = 10;
        console.log("事件進行中");
        resolve();
    }, 1000);
}).then(() => {
    console.log("結束, a+a = " + (a + a));
})


