
function mixin(target, ...sources){
    Object.assign(target, ...sources);
}

/**
 * Composition - Better than inheritence
 */
const canEat={
    eat:function(){
        console.log("eating");
    }
};

const canWalk = {
    walk : function(){
        console.log("Walking");
    }
};

const canSwim = {
    swim : function(){
        console.log("Swim")
    }
};

function Person(){

};

/**
 * Assign copies props into the new object
 */
//Object.assign(Person.prototype, canEat, canWalk);
mixin(Person.prototype, canWalk, canEat);
const per = new Person();  // this per will have both canEat and ccanWalk props

function GoldFish(){

}

mixin(GoldFish.prototype, canEat, canSwim);
const goldie = new GoldFish();

