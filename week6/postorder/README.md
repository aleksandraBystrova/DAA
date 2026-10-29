# BINARY TREE POSTORDER TRAVERSAL

## 1. PROBLEM

I am given the root of a binary tree, and i need to return the postorder traversal of its nodes values
The idea is to use recursion to traverse the tree in the order Left -> Right -> Root

## 2. APPROACH

First i create an empty list to store the node values

result = []


Then i create a helper function called travers

I check if the current node is none. If it is, i return because there is no node to visit

if node is None:
    return

After that i recursively traverse the left subtree and then the right subtree

traverse(node.left)
traverse(node.right)

Only after both subtrees are processed, i append the current node value to the result list

result.append(node.val)


This is the main idea of postorder traversal. I visit the current node after its children

For example, if the tree looks like this

        1
       / \
      2   3
     / \
    4   5


First i visit 4 and 5, then their parent 2. After that i visit 3, and finally the root 1

The result is [4, 5, 2, 3, 1]

## 3. TIME COMPLEXITY

T = O(n)

The algorithm visits every node exactly once, and each visit takes constant time.
 The space complexity is O(h) because of the recursive call stack. In the worst case, it can be O(n).

The result list requires O(n) spase

## 4. REFLECTION

The main difference between preorder, inorder and postorder is when i visit the current node

In preorder, i visit the root first
In inorder, i visit the root between the left and right subtrees
