# INORDER TRAVERSAL

## 1. PROPBLEM
I am given the tree root array, that must be traversed in the inorder way.

## 2. APPROACH
Inorder traversal rule - left -> root -> right

At first i need to create a result list, to where i will put node values.
result = []

Then as rule said, i must go to the very left node. To do that i stand at the root of the tree.
For example, i have this list to traverse [1,2,3]
Whitch looks like
-[1]-
  \
  [2]
  /
[3]

So at fisrt i have 1. There is no left node, so i write 1 into result list [1]
Then i go inside the right child. It has left node, so firsty i put in the list 3, then go back to the root, put 2
and my list looks like this: [1,2,3].
The recurrtion is been calling every time i stand at the root. The function return when it doesnt find any node to traverse

## 3. TIME COMPLEXITY

T = O(n)

The algorithm visits each node in the binary tree exactly once. At each node it performs constant time operations:
 checking whether the node is none, appending its value to the result list, and calling the traversal function for its children. 
So the total time complexity is O(n), and n is the number of nodes in the tree

## 4. REFLECTION
There is no more efficient approach in terms of time complexity because every 
node must be visited to return the complete inorder traversal. The current recurrsive solution 
already achieves the optimal time complexity of O(n)