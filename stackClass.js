const _items = new WeakMap();
/**
 * ES6 module notation -> export
 */
export class Stack{
//;

    constructor(){
        _items.set(this,[]);
    }

    push(obj){
        _items.get(this).push(obj);
    }

    pop(){
        const items = _items.get(this);

        if(items.length ===0)
        throw new Error('no items in the stack');

        return items.pop();

    }

    peek(){
        const items = _items.get(this);
        if(items.length ===0)
        throw new Error('no items in the stack');
        return items[items.length-1];
    }

    get count(){
        return _items.get(this).length;
    }
}

//commonjs notation
//module.exports = Stack;