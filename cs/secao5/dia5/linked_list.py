class Node:
    def __init__(self, value) -> None:
        self.value = value
        self.next = None


# Simplified linked list
class LinkedList:
    def __init__(self) -> None:
        self.__head = None
        self.__size = 0

    def size(self) -> int:
        return self.__size

    def get_element_at(self, index):
        if index >= self.__size:
            return None

        if index == 0:
            return self.__head

        current_node = self.__head
        for _ in range(index):
            current_node = current_node.next
        return current_node

    def insert(self, value, position=0):
        new_node = Node(value)

        if position > self.__size + 1:
            return False

        if position == 0:
            if not self.__head:
                self.__head = new_node
            else:
                current_node = self.__head
                new_node.next = current_node
                self.__head = new_node
        else:
            previous_node = self.get_element_at(position - 1)
            following_node = previous_node.next
            previous_node.next = new_node
            new_node.next = following_node

        self.__size += 1
        return True

    def remove(self, position=0):
        if position >= self.__size:
            return None

        if position == 0:
            to_remove = self.__head
            self.__head = to_remove.next
        else:
            previous_node = self.get_element_at(position - 1)
            to_remove = previous_node.next
            previous_node.next = to_remove.next

        self.__size -= 1
        return to_remove
