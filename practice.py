def max_diff(lst):
   min_val = min(lst)
   max_val = max(lst)
   if len(lst) > 1:
    difference = max_val - min_val
    return difference
   else:
     return 0



print(max_diff([1, 2, 3, 4]))
print(max_diff([1, 2, 3, -4]))