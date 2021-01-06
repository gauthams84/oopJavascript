
/**
 * Extends method
 */

 function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
 }

/**
 * object constructor - Parent object
 */
function Shape(){

}

Shape.prototype.duplicate = function(){
    console.log("duplicate");
}

/**
 * Chld object
 */
function Circle(){

}

/**
 * Inheritence
 */
extend(Circle, Shape);

/**
 * Mthod overridng
 */
Circle.prototype.duplicate = function(){
    console.log("duplicate Circle");
}

const c = new Circle();
c.duplicate();

function Square(){

}
extend(Square, Shape);
Square.prototype.duplicate = function(){
    console.log("duplicate Square");
}

const shapes = [
    new Circle(),
    new Square
]

/**
 * Polymorphism
 */
for(sh of shapes){
    sh.duplicate();
}














