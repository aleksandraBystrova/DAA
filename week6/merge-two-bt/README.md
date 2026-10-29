# MERGE TWO BINARY TREES

## 1. PROBLEM

I am given the roots of two binary trees, root1 and root2, and i need to merge them into one tree

If two nodes overlap, i need to add their values together
If only one node exists, i use that node in the merged tree

## 2. APPROAH

The idea is to use recursion to merge the two trees, starting from their root nodes.
First i check if root1 is None. If it is, i return root2 because there is no node in the first tree, so i can use the node from the second tree.


if root1 is None:


Then i check if root2 is Non

if root2 is None:
    return root1

If both nodes exist, i add their values together


root1.val += root2.val


Then i recursively merge their left children and assign the result to root1.left


root1.left = self.mergeTrees(root1.left, root2.left)


I do the same for the right children.


root1.right = self.mergeTrees(root1.right, root2.right)


Finally i return root1, which is now the root of the merged tree.

For example, if the trees look like this:


Tree 1:       Tree 2:

    1             2
   / \           / \
  3   2         1   3
 /               \   \
5                 4   7


The merged tree will look like this


        3
       / \
      4   5
     / \   \
    5   4   7


The overlapping nodes are added together, while nodes that exist in only one tree are kept

## 3. TIME COMPLEXITY

T = O(min(n, m)) for the overlapping nodes, where n and m are the numbers of nodes in the two trees

More precisely, the time complexity is O(n + m) in the worst case because the algorithm may need to process nodes from both trees
The space complexity is O(h). In the worst case, it can be O(n + m).

## 4. REFLECTION

The important part is to check for missing nodes before adding their values.
If one node is missing, i return the other node. If both nodes exist, i add their values and recursively merge their children
