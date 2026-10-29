# BINARY TREE PATHS

## 1. PROBLEM

I am given the root of a binary tree, and i need to return all root to leaf paths
A leaf is a node that has no children

Each path should be represented as a string, with the node values separated by ->

## 2. APPROACH

I need  to use recursion to explore every path from the root to a leaf
First i create an empty list to store all the paths

result = []

Then i create a helper function called traverse. It takes the current node 
and the path that i have built so far

If the current node = none, i return because there is no node to process

if node is None:
    return


Then i add the current node value to the pat

path += str(node.val)

I use str() because the node value is a number, but the path is a string

Next i check if the current node is a leaf.

if node.left is None and node.right is None:
    result.append(path)
    return


If it is a leaf, i found a complete root-to-leaf path, so i add it to the result list

If it is not a leaf i continue recursively through the left and right subtrees


traverse(node.left, path + "->")
traverse(node.right, path + "->")


I add the arrow separator before moving to the next node.

For example, if the tree looks like this

       1
       / \
       2   3
       \
         5


The first path is 1->2->5, and the second path is 1->3.

The result is [1->2->5, 1->3].

## 3. TIME COMPLEXITY

T = O(n^2) in the worst case when counting the cost of building and copying path strings

it is creating new strings can take additional time depending on the path length

The space complexity is O(n^2) in the worst case when including the stored path strings for 
a tree shaped like a chain. The recursion stack itself requires O(h) space

## 4. REFLECTION

The important part is to save a path only when i reach a leaf

I use recursion to explore every branch, and each recursive call keeps its own path string
This allows the left and right branches to be processed independently

