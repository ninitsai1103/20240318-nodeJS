let t1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("函數1執行結果");
            resolve();
        }, 2000);
    })
}

let t2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("函數2執行結果");
            resolve();
        }, 4000);
    })
}

let t3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("函數3執行結果");
            resolve();
        }, 1000);
    })
}

// async function doThing(){
//     await t1();
//     await t2();
//     await t3();
// }

// doThing();

// 改為立即執行函數
// 通常用在想要執行一組程式碼，又不想讓這組程式碼的內容去影響外面的變數，想使用區域變數
// 而這組程式碼好像也沒有重要到變成一個 function 時
// 就會使用立即執行函數

// (async function(){
//     await t1();
//     await t2();
//     await t3();
// })()

// 再改為
// (async () =>{})()

(async () =>{
    await t1();
    await t2();
    await t3();
})()
