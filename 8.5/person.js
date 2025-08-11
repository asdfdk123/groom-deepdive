class Person {
    constructor(name) {
        this._name = name; // 실제 데이터는 _name에 저장
    }

    get name() {
        // 속성처럼 보이지만 함수 실행됨
        return this._name.toUpperCase(); // 출력 형식 제어
    }

    set name(value) {
        if (value.length < 2) {
            throw new Error("이름은 두 글자 이상이어야 합니다");
        }
        this._name = value;
    }
}

const p = new Person("choi");
console.log(p.name);
