def unique_array(nums):
    newArr2 = list(nums)
    newArr = nums
    newArr.sort()
    i=0

    while i < len(newArr)-1:
        if newArr[i] == newArr[i+1]:
            newArr2.remove(newArr[i])
        i+=1

    return newArr2



print(unique_array([0, 3, -2, 4, 3, 2]))
print(unique_array([10, 22, 10, 4, 20, 11, 22]))