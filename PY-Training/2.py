import os

def files_and_dirlist(x):
    dir = os.listdir(str(x))
    print(f"In directory {x} are located next files: ")
    for i in dir:
        print(i)


print("Write your path please: ")
path = input()

print(files_and_dirlist(path))