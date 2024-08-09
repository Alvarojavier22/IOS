function Stack(){
    this.elements = [];
}

Stack.prototype.push = function(element){
    this.elements.push(element);
}
Stack.prototype.pop = function(){
    return this.elements.pop();
}
Stack.prototype.peek = function(){
    if(this.isEmpty()){
        return null;
    }else{
        return this.elements[this.elements.length -1];
    }
}
Stack.prototype.isEmpty = function(){
    return this.elements.length === 0;
}
Stack.prototype.print = function(){
    for(var i = 0; i < this.elements.length; i++){
        console.log("|", this.elements[i], "|");
        console.log("-----------------");
    }
}
const stack = new Stack();
stack.push("Z");
stack.push("Y");
stack.push("X");
stack.push("V");
stack.print();
console.log(stack.pop());
stack.print();
console.log(stack.peek());
stack.print();
console.log(stack.isEmpty());