class Solution:
    def preorderTraversal(self, root):
        result = []

        def traverse(node):
            if node is None:
                return

            result.append(node.val)
            traverse(node.left)
            traverse(node.right)

        traverse(root)
        return result
