// bfs/dfs

const Bfs = (root) => {
  let queue = [root];
  while (queue.length > 0) {
    let current = queue.shift();
    queue.push(current.left);
    queue.push(current.right);
  }
};

// preorder traversal
const dfs = (root) => {
  let stack = [root];
  while (stack.length > 0) {
    let current = stack.pop();
    stack.push(current.left);
    stack.push(current.right);
  }
};

// binary trees + defaultProps
//
// a) inorder (left,root, right)
// b) preorder (root, left, right)
// c) postorder (left,right,root)
