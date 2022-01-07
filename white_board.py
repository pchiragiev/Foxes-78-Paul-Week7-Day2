def lucky(l):
    y = None
    for x in l:
        if abs(x) == l.count(x):
            if not y or x > y:
                y = x
    return y if y else -1

print(lucky([-2, -2]))
print(lucky([2,3,4]))
print(lucky([1,2,2,3,3,3]))