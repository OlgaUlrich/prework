# def factorial(n):
#     #define counter for multiplying
#     s = 1
#     #define for loop, where 1 is beggining and n+1 is the end
#     #Last number is not in the range, that is why, we should add 1
#     for i in range(1, n+1):
#         #every iteration we redefine our counter
#         s = s * i
#     # at the end of the loop, return the last result of our counter
#     return s
# #print result in the console
# print(factorial(3))

def factorial(n):
    t = n
# decrement n

    newNum = n - 1
# define counter
    counter = 1


# define the end of the programm - it should stop when n is = 0
    if newNum > 0:
        # every iteration we redefine our counter
        counter = n * factorial(newNum)

    return counter
# at the end of recirsion (when n is = 0), return the last result of our counter
#     return counter

#print result in the console
print(factorial(3))