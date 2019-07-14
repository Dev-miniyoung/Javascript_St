function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}       // constructor function

Person.prototype.sum = function(){
    return this.first + this.second;
}

function PersonPlus(name, first, second, third){
    Person.call(this, name, first, second);         // super(name, first, second)와 같다.
    this.third = third; 
}
PersonPlus.prototype.avg = function(){
    return (this.first + this.second + this.third) / 3;
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log(kim.sum());
console.log(kim.avg());