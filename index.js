/**
 * 2 ways to create objects in javascript
 */

 //Factory Function
 function createCircle(radius){
     return {
         radius :radius,
         draw : function(){
             console.log("draw")
         }
     }
 }

 const circle = createCircle(1);
 circle.draw();


// Constructor function
function Circle(radius){
    // This references the object the functio is calling - by default this references to the global object - window for browser
    console.log('this '+ this);
    this.radius = radius,
    this.draw = function(){
        console.log("constructor draw");
    }
}

const another = new Circle(1); // When 'new' is defined, first empty object is created{}, 'this' is assigned to the empty object
another.draw();

// value vs reference types

  /**
 * Primitives are copied by value;
 * objects are copied by reference -> Objects, functions, arrays
 *  */

 /**
  * Enumerating properties - for in loop
  */

  for(let key in another){
      console.log("keys -"+key);
  }

  // to fetch only types and not dunctions in object
  for(let key in another){
      if(typeof another[key] != 'function'){
          console.log("key - "+ key);
      }
  }

  // annother way of enumerating object keys
  const keys = Object.keys(another);
  console.log("object keys - "+keys);

  //to check if object has a property
  if('radius' in another){
      console.log("radius is in circle");
  }
