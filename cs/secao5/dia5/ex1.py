from linked_list import LinkedList


class Queue:
    def __init__(self) -> None:
        self.__queue = LinkedList()

    def size(self):
        return self.__queue.size()

    def is_empty(self):
        return self.__queue.size() == 0

    def peek(self):
        return self.__queue.get_element_at(0)

    def enqueue(self, value):
        return self.__queue.insert(value, self.__queue.size())

    def dequeue(self):
        return self.__queue.remove(0).value
