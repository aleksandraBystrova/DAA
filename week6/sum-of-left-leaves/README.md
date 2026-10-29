# SUM OF LEFT LEAVES

## 1. PROBLEM

I am given the root of a binary tree, and i need to return the sum of all left leaves
A leaf is a node that has no children

A left leaf is a leaf that is the left child of another node

## 2. APPROACH

The idea is to use recursion to check the left and right subtrees and add the values of all left leaves

First i check if the current node is None. If it is, i return 0 because there is no node to process

if root is None:
    return 0

Then i check if the current node has a left child.


if root.left is not None


If the left child exists, i check if it is a leaf by verifying that it has no children.


if root.left.left is None and root.left.right is None:
    total += root.left.val


If it is a left leaf, i add its value to the total.

If it is not a leaf, i recursively search for left leaves inside its subtree.


else:
    total += self.sumOfLeftLeaves(root.left)


Then i also search the right subtree.


total += self.sumOfLeftLeaves(root.right)


I need to check the right subtree too because it can contain left leaves further down the tree.

Finally i return the total sum.

For example, if the tree looks like this


        3
       / \
      9   20
         /  \
     15   7


The left leaves are 9 and 15.

The sum is 9 + 15 = 24.

## 3. TIME COMPLEXITY

T = O(n)

In the worst case, the algorithm visits every node once. 
Space complexity is O(h) because of the recursive call stack

## 4. REFLECTION

The important part is to check whether a node is a left leaf before adding its value.
I cannot add every left child because some left children may have their own children and are not leaves
