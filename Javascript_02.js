// prototype
function Person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    /* this.sum = function(){
        return this.first + this.second + this.third;
    }
    제거
    */
}
var park = new Person('park', 10, 20, 30);
var lee = new Person('lee', 10, 10, 10);
// sum은 Person 객체가 생성될때마다 생성, 메모리 사용, 불필요한 방법
park.sum = function(){
    return 'modified : ' + (this.first + this.second);
}
console.log('park.sum()', park.sum());

// 공통적으로 사용하는 속성 및 함수를 만드는 방법
Person.prototype.sum = function(){
    return 'prototype : ' + (this.first + this.second + this.third);
}   // Person이 생성될때마다 생성되지 않고, 한번만 생성되기 때문에 메모리가 절약


console.log('lee.sum()', lee.sum());
console.log('park.sum()', park.sum());
