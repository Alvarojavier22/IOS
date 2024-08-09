function Queue(){
    this.elements = [];
}

Queue.prototype.enqueue = function(element){
    this.elements.push(element);
}
Queue.prototype.dequeue = function(){
    return this.elements.shift();
}
Queue.prototype.peek = function(){
    if (this.isEmpty()){
        return null;
    }else{
        return this.elements[0];
    }
}

let queue = new Queue();
queue.enqueue("X");
queue.enqueue("Y");
queue.enqueue("Z");
queue.enqueue("V");
queue.print();
console.log(queue.dequeue());
queue.print();