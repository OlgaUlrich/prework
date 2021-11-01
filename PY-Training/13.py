def prime_number(n):
    if n<=0:
        return "Input positive number, please"
    elif n == 1:
        return []
    elif n == 2:
        return [2]
    else:
        primeNum = [2, 3]
        for i in range(3, n+1):
            if i % 2 != 0 and i % 3 != 0:
                primeNum.append(i)
        return primeNum

print(prime_number(6))