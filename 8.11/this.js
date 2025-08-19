function greet(greeting, name) {
  console.log(`${greeting}, ${name}, ${this.role}`);
}

const user = { role: '사람' };

// call()
greet.call(user, 'ㅎㅇ', '원형1');
// "안녕하세요, 시윤! 나는 관리자입니다."

// apply()
greet.apply(user, ['ㅂㅇ', '원형2']);

// bind()
const boundGreet = greet.bind(user, '환영합니다');
boundGreet('시윤');

const obj = {
  name: '원형',
  delayedSay: function () {
    setTimeout(
      function () {
        console.log(this.name);
      }.bind(this),
      1000
    );
  },
};
obj.delayedSay();


const user1 = {
  name: "원형",
  greet() {
    console.log(`안녕, 나는 ${this.name}이야`);
  }
};

user1.greet();

const sayHello = user1.greet.bind(user1);

sayHello();
