def reverse_list(lst):
    if len(lst) == 1:
        return lst

    last_item = [lst[-1]]

    return last_item + reverse_list(lst[:-1])
