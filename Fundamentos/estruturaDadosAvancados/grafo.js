function Graph(){
    this.adjacencyList ={};
}
Graph.prototype.addVertex = function(vertex){
    if(!this.adjacencyList[vertex]){
        this.adjacencyList[vertex] = [];
    }
}

Graph.prototype.addEdge = function(vertex1, vertex2){
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
}
Graph.prototype.removeEdge = function(vertex1, vertex2){
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1
    );
}
Graph.prototype.removeVertex = function(vertex){
    while(this.adjacencyList[vertex].length){
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
}
var graph = new Graph();
graph.addVertex["A"];
graph.addVertex["B"];
graph.addVertex["C"];
graph.addEdge["A", "B"];
graph.addEdge["A", "C"];
console.log(graph.adjacencyList);
graph.removeEdge("A", "C");
console.log(graph.adjacencyList);
graph.removeVertex("A");
console.log(graph.adjacencyList);