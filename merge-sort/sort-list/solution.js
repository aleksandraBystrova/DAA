var sortList = function(head) {
    if (!head || !head.next) {
        return head;
    }

    // Find the length of the linked list
    let length = 0;
    let current = head;

    while (current) {
        length++;
        current = current.next;
    }

    const dummy = new ListNode(0);
    dummy.next = head;


    for (let size = 1; size < length; size *= 2) {
        let prev = dummy;
        current = dummy.next;

        while (current) {
            let left = current;
            let right = split(left, size);
            current = split(right, size);

            const merged = merge(left, right);
            prev.next = merged.head;
            prev = merged.tail;
        }
    }

    return dummy.next;

   
    function split(node, size) {
        if (!node) return null;

        for (let i = 1; node.next && i < size; i++) {
            node = node.next;
        }

        const next = node.next;
        node.next = null;
        return next;
    }


    function merge(left, right) {
        const dummyNode = new ListNode(0);
        let tail = dummyNode;

        while (left && right) {
            if (left.val <= right.val) {
                tail.next = left;
                left = left.next;
            } else {
                tail.next = right;
                right = right.next;
            }

            tail = tail.next;
        }

        tail.next = left || right;

        while (tail.next) {
            tail = tail.next;
        }

        return {
            head: dummyNode.next,
            tail: tail
        };
    }
};