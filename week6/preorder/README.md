# BINARY TREE PREORDER TRAVERSAL

## 1. PROBLEM

I am given the root of a binary tree, and i need to return the preorder traversal of its nodes values
The idea is to use recursion to traverse the tree in the order Root -> Left -> Right

## 2. APPROACH

First i create an empty list to store the node values.

result = []

Then i create a helper function called traverse.

First i check if the current node is None. If it is, i return because there is no node to visit

if node is None:
    return

Then i append the current node value to the result list

result.append(node.val)

This is the most important part of preorder traversal because i visit the current node before its children

After that i recursively traverse the left subtree and then the right subtree


traverse(node.left)
traverse(node.right)

Finally i call traverse with the root and return the result list

For example, if the tree looks like this

        1
       / \
      2   3
     / \
    4   5

First i visit 1, then i traverse the left subtree and visit 2, 4 and 5. After finishing the left subtree, i visit 3

The result is [1, 2, 4, 5, 3]

## 3. TIME COMPLEXITY

T = O(n)

The algorithm visits every node exactly once

The space complexity is O(h) because of the recursive call stack
 In the worst case, it can be O(n).

The result list itself requires O(n) space

## 4. REFLECTION

The main difference between preorder and inorder traversal is when i visit the current node
In preorder, i visit the root first, then the left subtree, and then the right subtree

In inorder, i visit the left subtree first, then the root, and finally the right subtree