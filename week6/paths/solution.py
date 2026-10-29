class Solution:
    def binaryTreePaths(self, root):
        result = []

        def traverse(node, path):
            if node is None:
                return

            path += str(node.val)

            if node.left is None and node.right is None:
                result.append(path)
                return

            traverse(node.left, path + "->")
            traverse(node.right, path + "->")

        traverse(root, "")
        return result
