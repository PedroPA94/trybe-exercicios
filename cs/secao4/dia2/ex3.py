def max_num(nums):
    if len(nums) == 1:
        return nums[0]

    max_in_new_list = max_num(nums[:-1])

    if nums[-1] > max_in_new_list:
        return nums[-1]
    return max_in_new_list
