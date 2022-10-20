export class TreeNode {
    constructor(value = null) {
      this.value = value;
      this.children = [];
    }
  }
  
  export class Tree {
    constructor(root) {
      this.root = root;
    }
    
    search(node, value) {
      if (node.name == s) {
        return node;
      } else {
        for (const child of node.children) {
          const result = search(child, s);
          if (result != null) {
            return result;
          }
        }
      }
      return null;
    }
  }
  