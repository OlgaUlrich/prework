def get_pentagonal_number(n):
    newArr = []
    i=0
    x=n+1

    for i in range(x):
        num = (3 * i ** 2 - i) // 2
        newArr.append(num)
    print(newArr)

get_pentagonal_number(50)
