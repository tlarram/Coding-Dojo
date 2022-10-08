class BSTNode { // TreeNode , node
  constructor(data) {
    this.data = data;
    this.left = null; // a BSTNode with a smaller value
    this.right = null;
  }
}

/**
 * Represents an ordered tree of nodes where 
 * the data of left nodes are <= to their parent and
 * the data of right nodes are > their parent's data.
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Recursively counts the total number of nodes in this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during the traversal of this tree.
   * @returns {number} The total number of nodes.
   */
  // size(node = this.root) {
  //   let total=0
  //   //if tree is empty, return 0
  //   if(node == null) {
  //     return 0;
  //   }
  //   while(node!= null) {
  //     total++
  //     node=node.left
  //   }
  //    node = this.root;
  //   while(node != null) {
  //     total++
  //     node=node.right
  //   }
  //   return total
  //   //otherwise, add values from left and right
  // }

  size(node = this.root) {
    // check is tree is empty, return 0;
    if (node == null) {
      return 0;
    } else {
      return this.size(node.left) + 1 + this.size(node.right);
    }
  }

  /**
   * Calculates the height of the tree which is based on how many nodes from
   * top to bottom (whichever side is taller).
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during traversal of this tree.
   * @returns {number} The height of the tree.
   */
   height(node = this.root) {
    var right=0;
    var left=0;

    while(node != null && node.right != null && node.left != null){
        left++;
        node = node.left;
    }

    node = this.root;
    while(node != null && node.right != null && node.left != null){
        right++;
        node = node.right;
    }
    if(right === left){
        return "You're a full tree!!!!";
    }else if(right > left){
        return `Left is taller ${left}`;
    }else if(right < left){
        return `Right is taller ${right}`;
    }
}

  /**
   * Determines if this tree is a full tree. A full tree is a tree where every
   * node has both a left and a right except for the leaf nodes (last nodes)
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during traversal of this tree.
   * @returns {boolean} Indicates if this tree is full.
   */
  isFull(node = this.root) { }


  // HELPER METHOD
  // Logs this tree horizontally with the root on the left.
  print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
    if (!node) {
      return;
    }

    spaceCnt += spaceIncr;
    this.print(node.right, spaceCnt);

    console.log(
      " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
      `${node.data}`
    );

    this.print(node.left, spaceCnt);
  }
  insert(newVal, curr = this.root) {
    let newNode = new BSTNode(newVal);
    if (!curr) {
      this.root = newNode;
      return "node inserted";
    }
    while (curr) {
      if (newVal < curr.data) {
        if (!curr.left) {
          curr.left = newNode
          return;
        }
        curr = curr.left;
      } else if (newVal >= curr.data) {
        if (!curr.right) {
          curr.right = newNode;
          return;
        }
        curr = curr.right
      }
    }
  }


}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);
// oneNodeTree.print()

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);
// twoLevelTree.print()

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2   8  13  20
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.insert(10)
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(8);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.right = new BSTNode(20);
threeLevelTree.root.right.left = new BSTNode(13);
threeLevelTree.print()
/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/


// const fullTree = new BinarySearchTree();
// fullTree
//   .insert(25)
//   .insert(15)
//   .insert(10)
//   .insert(22)
//   .insert(4)
//   .insert(12)
//   .insert(18)
//   .insert(24)
//   .insert(50)
//   .insert(35)
//   .insert(70)
//   .insert(31)
//   .insert(44)
//   .insert(66)
//   .insert(90);

// fullTree.size();

console.log("threeLevelTree size: " + threeLevelTree.size());

console.log("twoLevelTree size: " + twoLevelTree.size());
console.log("twoLevelTree height: " + twoLevelTree.height());
