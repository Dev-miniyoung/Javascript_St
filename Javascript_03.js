// class, 객체를 만드는 공장
class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }       // function 키워드 생략 가능
    sum(){
        return 'prototype : ' + (this.first + this.second);
    }
}
var park = new Person('park', 10, 20);    
// 자동으로 constructor 함수 실행
var lee = new Person('lee', 10, 30);
lee.sum = function(){
    return 'this : ' + (this.first + this.second);
}
console.log('park', park);
console.log('park', park.sum());
console.log('lee', lee.sum());      // lee.sum만의 sum함수 가능

// 상속 Inheritance
class PersonPlus extends Person{    // extends로 Person class의 요소가 PersonPlus로 상속
    // 중복 코드 제거
    // constructor(name, first, second){
    //     this.name = name;
    //     this.first = first;
    //     this.second = second;
    // }       
    // sum(){
    //     return 'prototype : ' + (this.first + this.second);
    // }    

    constructor(name, first, second, third){
        super(name, first, second);
        this.third = third;
    }

    // super - 부모가 가지고 있는 기능 사용 가능
    // PersonPlus 에 third요소를 더 받고싶을때

    sum(){
        return super.sum() + this.third;
    }

    avg(){
        return (this.first + this.second) / 2;
    }
}

var kim = new PersonPlus('kim', 10, 10);


