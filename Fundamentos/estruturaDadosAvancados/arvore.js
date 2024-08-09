function Node(data){
    this.data = data;
    this.left = null;
    this.right = null;

}
function BinaryTree(){
    this.root = null;
}
BinaryTree.prototype.add = function(data){
    var node = new Node(data);
    if(this.root === null){
        this.root = node;
    }else{
        insertNode(this.root, node);
    }
}
function insertNode(node, newNode){
    if(newNode.data < node.data){
        if(node.left === null){
            node.left = newNode;
        }else{
            insertNode(node.left, newNode)
        }
    }else{
        if(node.right === null){
            node.right = newNode;
        }else{
            insertNode(node.right, newNode);
        }
    }
}
function printTree(node, prefix = '', isLeft = null){
    if(node != null){
        printTree(node.right, prefix + (isLeft ? '|  ' : ' '), false);
        console.log(prefix + (isLeft ? ' |__ ' : '|---') + node.data);
        printTree(node.left, prefix + (isLeft ? ' ' : '|  '), true);
    }
}
var tree = new BinaryTree();
tree.add(5);
tree.add(3);
tree.add(7);
tree.add(1);
tree.add(2);
tree.add(0);
tree.add(4);
tree.add(4.5);
tree.add(3.5);
tree.add(6);
tree.add(5);
tree.add(6.5);
tree.add(10);
tree.add(12);
tree.add(9);

printTree(tree.root);