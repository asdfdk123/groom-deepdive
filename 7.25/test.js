// let name = "원형";

// switch (name) {
//     case "원형":
//         console.log("사람이름입니다");
//         break;
//     case "ㅁㄴㅇㅍㅁ":
//         console.log("이름이 아닙니다");
//         break;
// }
// 함수 선언문
// hello();

// function hello() {
//   console.log("안녕!");
// }

//함수표현식
// const hello = function() {
//     console.log("안녕!");
// };

// hello();

// function add(a, b) {
//     return a + b;
// }

// const result = add(3, 4);
// console.log(result)

// function greet(name = "guest") {
//     console.log(`안녕하세요, ${name}님!`);
// }

// function multiply(x) {
//     return x * 2;
// }
// function applyFn(fn, value) {
//     return fn(value);
// }
// console.log(applyFn(multiply, 5));

function makeCoffee() {
    return new Promise((resolve) => {
        console.log("1");
        setTimeout(() => {
            console.log("2. 커피 완료!");
            resolve();
        }, 1000); // 1초 대기
    });
}

async function receiveCoffee() {
    await makeCoffee(); // 커피가 완료될 때까지 기다림
    console.log("3. 커피 받으러 갑니다!");
}

receiveCoffee();


