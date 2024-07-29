class TreeNode {
    constructor(value = null) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    // Method to add a left child
    addLeft(child) {
        if (child instanceof TreeNode) {
            this.left = child;
        } else {
            this.left = new TreeNode(child);
        }
    }

    // Method to add a right child
    addRight(child) {
        if (child instanceof TreeNode) {
            this.right = child;
        } else {
            this.right = new TreeNode(child);
        }
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Insert a value into the binary tree
    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Helper method to insert a node into the binary tree
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Perform in-order traversal and display nodes
    inOrderTraversal() {
        this.inOrder(this.root);
    }

    // Helper method for in-order traversal
    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }
}

// Example usage
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log('In-order traversal:');
tree.inOrderTraversal();
