// Javascript immutable

/*
    mutability vs immutability
          변화 vs 변화하지 않은
    
    Create
    Read
    Update
    Delete

    blockchain 수정과 삭제가 어려움

    mutability와 immutability를 능숙하게 사용 
 */

 // const vs var
var a = 1;
    // 코드 작성후 누군가가 변수명을 이후에 사용하면 변수 data값이 변한다.
a = 2; 
 console.log('a : ', a);

const b = 1;
    // const 변수는 값을 변경 불가
b = 2;
console.log('b : ', b);         // TypeError to constant variable, b는 고정된 data

// 변수 할당 방식 비교
// Primitive - Number, String, Boolean, Null, Undefined, Symbol
// Object - Object, Array, Function

var p1 = 1;
var p2 = 1;
console.log(p1, p2, p1 === p2);         // true

var o1 = {name: 'kim'};
var o2 = {name: 'kim'};
console.log(o1, o2, o1 === o2);         // false

// 객체의 가변성
var o1 = {name:'kim'}
var o2 = Object.assign({}, o1);         // o1을 immutable화 시킨다.

console.log(o1, o2, o1 === o2);         // false
o2.name = 'lee';                        // o2의 name만 변화한다.
console.log(o1, o2, o1 === o2);         // false

// 중첩된 객체의 복사
var o3 = {name: 'kim', score:[1,2]};
var o4 = Object.assign({}, o3);
o4.score = o4.score.concat();       // 복제된 score값 o4.score에 할당
// concat, slice()는 복사 기능
o4.score.push(3);

console.log(o3, o4, o3 === o4, o3.score === o4.score);      // false, true;

