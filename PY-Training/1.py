
def hello_world(y):
    if len(y) == 0:
        print(f"Hello Unknown!")
    else:
        if y.find(' '):
            newStr = y.split()
            for item in newStr:
                print(f"Hello {item}!")

        elif y.find(' ') == -1:
            print(f"Hello {y}!")


print('Write your name please: ')
x = input()
hello_world(x)