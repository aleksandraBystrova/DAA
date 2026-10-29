# MINIMUM DEPTH OF BINARY TREE

## 1. PROBLEM

I am given the root of a binary tree, and i need to find its minimum depth
Minimum depth is the number of nodes from the root to the nearest leaf
A leaf is a node that has no left or right child

## 2. APPROACH

The idea is to use recursion to calculate the minimum depth of the left and right subtrees
First i need to check if the current node is None. If it is, i return 0 because there is no node

if root is None:
    return 0

Then i need to check if the current node has no left child

if root.left is None:
    return 1 + self.minDepth(root.right)

If there is no left child, i have to continue through the right child
I cannot just choose the left side because it does not lead to a leaf

The same logic works for the right child

if root.right is None:
    return 1 + self.minDepth(root.left)

If both children exist, i calculate the minimum depth of both subtrees

left_depth = self.minDepth(root.left)
right_depth = self.minDepth(root.right)

Then i choose the smaller depth and add 1 for the current node

return 1 + min(left_depth, right_depth)

For example, if the tree looks like this:

        3
       / \
      9   20
          / \
         15  7

The path from 3 to 9 contains 2 nodes. The other paths to leaves contain 3 nodes

So the minimum depth is 2

## 3. TIME COMPLEXITY

T = O(n)

In the worst case, the algorithm visits every node in the tree once
Each node requires a constant number of operations, so the total time complexity is O(n), where n is the number of nodes.



## 4. REFLECTION

We need to find the nearest leaf, so we cannot always choose the smaller depth if one 
of the children is missing
If one child does not exist, we must continue through the other child because 
the current node is not a leaf
The solution is O(n) because in the worst case we need to check every node to find the nearest leaf