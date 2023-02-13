import math


def find_required_paint(wall_size):
    sq_meters_per_liter = 3
    liters_in_paint_can = 18
    sq_meters_per_can = liters_in_paint_can * sq_meters_per_liter
    required_cans = math.ceil(wall_size / sq_meters_per_can)
    can_price = 80
    return (required_cans, can_price * required_cans)


print(find_required_paint(108))
print(find_required_paint(456))
