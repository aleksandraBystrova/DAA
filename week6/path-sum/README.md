# PATH SUM

## 1. PROBLEM

I am given the root of a binary tree and an integer targetSum, i need to return True if there is a root to leaf 
path where the sum of all node values equals targetSum.

A leaf is a node that has no left or right child

The path must end at a leaf, so reaching the target sum at an intermediate node is not enough

## 2. APPROACH

The idea is to use recursion and subtract the value of each node from targetSum
First i check if the current node is None. If it is, there is no valid path in this branch, so i return False.

if root is None:
    return False

Then i check if the current node is a leaf

if root.left is None and root.right is none:
    return targetSum == root.val

If it is a leaf, i compare its value with the remaining targetSum. If they are equal, i found a valid path

If the current node is not a leaf, i subtract its value from targetSum.

remaining = targetSum - root.val

Then i recursively check the left and right subtrees using the remaining sum

return (
    self.hasPathSum(root.left, remaining)
    or self.hasPathSum(root.right, remaining)
)

I use or because i only need one valid path. If the left or the right subtree contains a valid path, the function returns True

For example, if targetSum is 22 and the path is 5 -> 4 -> 11 -> 2, the sum is 22, and the last node is a leaf. So the answer is True

## 3. TIME COMPLEXITY

T = O(n)

In the worst case the algorithm visits every node once. And each node requires a constant number 
of operations, so the time complexity is O(n)
Space complexity is O(h) because of the recurrsive call stack

## 4. REFLECTION

The important part is that the path must end at a leaf.
I subtract the current node value from targetSum and pass the remaining sum to the children