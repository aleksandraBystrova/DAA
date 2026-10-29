class Solution:
    def inorderTraversal(self, root):
        result = []

        def traverse(node):
            if node is None:
                return

            traverse(node.left)
            result.append(node.val)
            traverse(node.right)

        traverse(root)
        return result
