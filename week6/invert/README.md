# INVERT BINARY TREE

## 1. PROBLEM
Im given the root of a binary tree, and i need to invert the tree and return its root
Invert means that i need to swap the left and right children of every node in the tree

## 2. APPROACH
The idea is to use recursion and swap the left and right children at every node

At first i need to check if the root is None. If it is, there is no node to invert so i return None

if root is None:
    return None


Then i need to swap the left and right children of the current node

root.left, root.right = root.right, root.left


For example, i have this tree to invert
   - [4]-
     / \
   [2] [7]
    /     \
  [1]   [3]


So at first i stand at the root 4. I swap its children, and now 7 is on the left and 2 is on the right

Then i call the function for the left and right children. 
Since i already swapped them, the function first goes to node 7. It has no children, 
so there is nothing to swap.

After that i go to node 2. It has children 1 and 3, so i swap them too
Now 3 is on the left and 1 is on the right.

The final tree looks like this

       -[4]-
        /  \
     [7]   [2]
      /     \
    [3]     [1]

The recursion is being called for every node. When it reaches none, 
the function returns None, because there is no node to invert

After all nodes are processed i return the root of the inverted tree.

## 3. TIME COMPLEXITY

T = O(n)

 At each node it performs constant time operations. 
checking whether the node is none, swapping its left and right children, 
and calling the function for both children

So the total time complexity is O(n), and n is the number of nodes in the tree

## 4. REFLECTION

There is no more efficient approach in terms of time complexity because every 
node must be visited to invert the whole tree

