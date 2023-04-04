from ex2_4 import Stack


class StackGarage(Stack):
    def __init__(self) -> None:
        super().__init__()

    def remove_car_at(self, position):
        if self.is_empty() or position >= self.size():
            return None

        moved_cars = Stack()
        car_to_move_position = self.size() - 1

        while car_to_move_position > position:
            moved_cars.push(self.pop())
            car_to_move_position -= 1

        removed_car = self.pop()

        for _ in range(moved_cars.size()):
            self.push(moved_cars.pop())

        return removed_car
