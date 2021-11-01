import functools

def find(n, count=0):
     while len(str(n))>1:
          n = functools.reduce((lambda x, y: int(x)*int(y)), list(str(n)))
          count += 1
          # print(n)
     print(f'the number of muliplication is {count}')






find(57) # 3
find(5923) # 2
find(90) # 1
find(7) # 0
find(999) # 4