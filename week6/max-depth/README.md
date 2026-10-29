# MAXIMUM DEPTH OF BINARY TREE

## 1. PROBLEM
I am given the root of a binary tree, and i need to return its maximum depth. Maximum depth is the number of nodes along the 
longest path from the root to the farthest leaf node

## 2. APPROACH
The idea is to use recursion to find the depth of the left and right subtrees and then choose the biggest one

At first i need to check if the root is None. If it is, it means there is no node, so i return 0

if root is None:
    return 0

Then i need to calculate the depth of the left and right children.

left_depth = self.maxDepth(root.left)
right_depth = self.maxDepth(root.right)

For example, i have this tree to traverse [3,9,20,none, none,15,7]

Whitch looks like

  -[3]-
   / \
  [9] [20]
   /    \
 [15]   [7]


So at first i go to the left child of 3, which is 9. It has no children, so both sides return 0 and its depth is 1

Then i go to the right child 20. It has two children 15 and 7. Both of them have no children, so their depth is 1

Now the node 20 gets the results from its children and calculates its depth: 1 + max(1,1) = 2

After that i go back to the root 3. Its left subtree has depth 1 and right subtree has depth 2. So i take the biggest depth and add 1 for the root itself

return 1 + max(left_depth, right_depth)

The final result is 3, because the longest path contains 3 nodes: 3 -> 20 -> 15 or 3 -> 20 -> 7

The recursion is being called for every node, and when it reaches None, it returns 0. Then 
the results go back up to the parent nodes, until we calculate the depth of the root

## 3. TIME COMPLEXITY

T = O(n)

The algorithm visits each node in the binary tree exactly once. At each node it performs constant
 time operations: checking whether the node is None, calling the function for its children, comparing two depths and adding 1.

So the total time complexity is O(n), and n is the number of nodes in the tree

## 4. REFLECTION

There is no more efficient approach in terms of time complexity because we need to visit every node to find the
 maximum depth of the tree. The current recursive solution already achieves the optimal time complexity of O(n).

We could use an iterative approach with a queue and BFS instead of recursion. This would help to avoid 
recursion depth problems for very deep trees but the time complexity would still be O(n)
