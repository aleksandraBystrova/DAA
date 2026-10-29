class Solution:
    def minDepth(self, root):
        if root is None:
            return 0

        if root.left is None:
            return 1 + self.minDepth(root.right)

        if root.right is None:
            return 1 + self.minDepth(root.left)

        left_depth = self.minDepth(root.left)
        right_depth = self.minDepth(root.right)

        return 1 + min(left_depth, right_depth)
