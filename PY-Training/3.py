
arr1 = [2, 5, 7, 9, 11]
arr2 = [2, 5, 7, 8, 11]
arr3 = [2, 5, 11, 9, 7]

def are_two_arrays_equal(arg1, arg2):
    ar1 = arg1
    ar2 = arg2
    ar1.sort()
    ar2.sort()
    for i in range(0, len(ar1)):
        if ar1[i] == ar2[i]:
            b = True
        else:
            b = False
            break
    return b





print(are_two_arrays_equal(arr1, arr2))  # false
print(are_two_arrays_equal(arr1, arr3))  # true


