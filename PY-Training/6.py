# A password must have at least ten characters.
#
# A password consists of only letters and digits.
#
# A password must contain at least a capital letter in it.
import re
def is_valid_password(x):
    if len(x)<10:
        y = "Password is less then 10 characters"
        return y

    elif re.search("\w+", x, re.IGNORECASE) == None:
        y="Password should consist of letters and digits"
        return y

    elif re.search("[a-z]", x, re.IGNORECASE) == None:
        y="Password should consist of letters and digits"
        return y

    elif re.search("[0-9]", x, re.IGNORECASE) == None:
        y="Password should consist of letters and digits"
        return y


    elif re.search("[A-Z]", x) == None:
        y="Password must contain at least a capital letter in it"
        return y

    else:
        y="Password is correct"
        return y





print(is_valid_password("kjkjkljlkjljlkjlkjlkjM012"))