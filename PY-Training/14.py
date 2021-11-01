import math
def sort_it(theArray):
    newArr = []
    oddArr = []
    evenArr = []
    for i in theArray:
        if math.floor(i) % 2 == 1:
            oddArr.append(math.floor(i))
        else:
            evenArr.append(math.floor(i))


    oddArr.sort()
    evenArr.sort(reverse=True)
    newArr = oddArr + evenArr

    return newArr


print(sort_it([1, 2, 3, 4, 5, 6, 7, 8, 9]))
print(sort_it([26.66, 24.01, 52.00, 2.10, 44.15, 1.02, 11.15]))