class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def getIntersectionNode(headA, headB):
    currentA = headA

    while currentA:
        currentB = headB

        while currentB:
            if currentA is currentB:
                return currentA

            currentB = currentB.next

        currentA = currentA.next

    return None
