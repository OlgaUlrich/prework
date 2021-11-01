def get_middle_character(args):
    if len(args) % 2 == 1:
        x = slice(len(args)//2, len(args)//2+1)
        return args[x]
    else:
        x = slice(len(args)//2-1, len(args)//2+1)
        return args[x]

print(get_middle_character("358670"))