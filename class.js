const _radius =  new WeakMap();

class Cirle{
    constructor(radius){
        _radius.set(this, radius);
    }

    /**
     * Getter func - can be accessed eg - c.radius
     */
    get radius(){
       return _radius.get(this);
    }

    /**
     * Setter fnc
     */
    set radius(value){
        if(value<=0) throw new Error('invalid value');
        _radius.set(this,value);
    }
}