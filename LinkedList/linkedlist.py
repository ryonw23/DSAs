class Node:
    def __init__(self,value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self,value):
        new_node = Node(value)    
        if self.head is None:
            self.head = new_node
        else:
            current = self.head
            while current.next is not None:
                current = current.next
            current.next = new_node

    def pop_head(self):
        if not self.head:
            return None
        popped = self.head.value
        self.head = self.head.next
        return popped

linked_list = LinkedList()
linked_list.append(98)
linked_list.append(120)
linked_list.append(14)

print(linked_list.pop_head())
    
