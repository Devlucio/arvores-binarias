export class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  export class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    push(value) {
      if(this.root !== null){
        this.root = new BinaryTreeNode(value);
        return this;
      }
  
      const newNode = new BinaryTreeNode(value);
      const currentNode = this.root;
  
      while(currentNode){
        if(value < currentNode.value){
          if(!currentNode.left){
            currentNode.left = newNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if(!currentNode.right){
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }