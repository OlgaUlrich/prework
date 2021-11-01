def fibonacci(args):
    int(args)
    fib = [0, 1]
    i = 0
    if args == 0:
        return 0
    elif args == 1:
        return 1
    else:
        while i < int(args)-1:
            newNum = fib[len(fib)-1] + fib[len(fib)-2]
            fib.append(newNum)
            i+=1
        return newNum

arg = input("input your number: ")
if arg != "":
    int(arg)
    print(fibonacci(arg))
else:
    print("Error: you must supply which Fibonacci number to compute")


# print(fibonacci(0))  # 0
# print(fibonacci(1))  # 1
# print(fibonacci(2))  # 1
# print(fibonacci(3))  # 2
# print(fibonacci(7))  # 13
# print(fibonacci(12)) # 144