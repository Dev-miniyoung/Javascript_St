var superObj = {superVal : 'super'};
var subObj = {subVal : 'sub'};
subObj.__proto__ = superObj;            // __proto__ 로 subObj를 superObj에 상속시킨다
console.log('subObj.subVal =>', subObj.subVal);         //sub
console.log('subObj.superVal =>', subObj.superVal);     //super


// prototype vs __proto__

subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);     // super
// sub로 변경되지 않는다.


// 새로운 상속되는 객체를 만드는 정석적인 방법
var superPol = {superPol : 'superPol'};

var subPol = Object.create(superPol);
// subPol은 superPol을 부모로 하는 객체 생성
subPol.subPol = 'subpol';       // subPol = {subPol : 'subpol'}


var kim = {
    name:'kim',
    first:10,
    second:20,
    sum:function(){
        return this.first + this.second;
    }
}
var lee = {
    name:'lee',
    first:10, second:10,
    avg:function(){
        return (this.first + this.second)/2;
    }
}
lee.__proto__ = kim;
console.log('kim.sum()',kim.sum());     // 30
console.log('lee.sum()',lee.sum());     // 20
console.log('lee.avg()',lee.avg());     

var park = Object.create(kim);          // Object.create로 상속 표준화방법 
park.name = 'park';
park.first = 10;
park.second = 40;
console.log('park.sum()',park.sum());