# Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

# Notice that the solution set must not contain duplicate triplets.

# ex.1
# Input: nums = [-1,0,1,2,-1,-4]
# Output: [[-1,-1,2],[-1,0,1]]

# ex.2
# Input: nums = []
# Output: []

# ex.3
# Input: nums = [0]
# Output: []

# def two_sum(target, nums):
#     seen = {}
#     for i in range(len(nums)):
#         pair = target - nums[i]
#         if pair in seen:
#             return [nums[i], pair]
#         seen[nums[i]] = i
#     return None

# def three_sum(nums):
#     for i in range(len(nums)):
#         new_target = nums[i] * -1
#         two_sum(new_target, nums[i+1:])
                    


def triplets(target, nums):
    left = 0
    right = len(nums)-1
    sorted_nums = sorted(nums)
    while left < right:
        x = sorted_nums[left]
        left += 1
        print(x)
        


nums = [-1,0,1,2,-1,-4]
print(triplets(0, nums))