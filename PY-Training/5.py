# vovels = [a, u, i, e, o]
import re
def count_of_vowels(args):
    x = re.findall("a|o|i|u|e", args, re.IGNORECASE)
    return len(x)



print(count_of_vowels("Propulsion Academy"))