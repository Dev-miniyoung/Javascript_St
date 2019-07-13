// object study 
var memberArray = ['miniyoung', 'architect', 'programmer'];
console.log(memberArray[1]);        // 2번째 원소 출력  

var memberobject = {
    user : 'miniyoung',
    designer : 'architect',
    developer : 'programmer',
}
console.log(memberobject.designer);     //객체화 시켜 출력
console.log(memberobject['designer']); 

// 객체를 읽는 방법

// 객체 수정 
memberobject.developer = 'deverloper';
console.log(memberobject['developer']);      // deverloper 출력

// 객체 삭제
delete memberobject.designer;
console.log(memberobject['designer']);       // desinger 삭제 undefined 출력


// 객체와 반복문 Object loop
var i = 0;
console.group('array loop');
while(i < memberArray.length){
    console.log(i, memberArray[i]);
    i = i +1;
}
console.groupEnd('array loop');         // group 안의 원소는 들여쓰기로 작성

for(var name in memberobject){          // 객체에서 사용하는 for문은 for-in 문, in 앞에는 객체 key 값들을 저장하는 변수 선언
    console.log(name, memberobject[name]);
}   

// 객체 built-in 내장되어 있는 함수
console.log("Math.PI : ",Math.PI);       // PI값 출력
console.log("Math.random() : ", Math.random());         // random값 출력
console.log("Math.floor(3.9) ", Math.floor(3.9));       // 소수점 내림값 출력 = 3;

// 객체 생성 , 객체에 소속된 함수는 method
var MyMath = {

    PI : Math.PI,
    random : function(){
        return Math.random();
    }
    floor : function(val){
        return Math.floor(val);
    }

}
console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(3.9)", MyMath.floor(3.9));

// this
var lee = {
    name : "lee",
    first : 10,
    second : 20,
    third : 30,
    sum : function(){
        return this.first + this.second + this.third;
    }
}
// console.log("lee.sum(lee.first, lee.second)", lee.sum(lee.first, lee.second));      // 30
console.log("lee.sum(lee.first, lee.second)", lee.sum());      


// constructor 
var kim = {
    name : "kim",
    first : 10,
    second : 10,
    third : 20,
    sum : function(){
        return this.first + this.second + this.third;
    }
}

console.log("kim.sum(kim.first, kim.second)", kim.sum());

var d1 = new Date('2019.07.14');
console.log('d1.getFullYear()', d1.getFullYear());      // 2019 출력
console.log('d1.getMoneth()', d1.getMonth());       // 6 출력(Month는 0부터 카운팅 되기 때문에)

// 객체를 만드는 공장 생성
function Person(){
    this.name = 'lee';
    this.first = 10;
    this.second = 20;
    this.third = 30;
    this.sum = function(){
        return this.first + this.second + this.third;
    }
}

console.log('Person()', Person());          // undefined, 그냥 함수
// constructor
console.log('new Person()', new Person());              // 객체를 생성하는 생서자가 된다.

var park = new Person();
var son = new Person();

// construct function은 new로 새로운 객체 생산 가능
function C_Person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function(){
        return this.first + this.second + this.third;
    }
}