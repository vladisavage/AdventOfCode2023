def is_digit(c):
    return '0' <= c <= '9'

def solve(lines):
    sum = 0
    for line in lines:
        firstDigit = 0
        lastDigit = 0
        for c in line:
            if is_digit(c) and firstDigit == 0:
                firstDigit = c
            elif is_digit(c) and firstDigit != 0:
                lastDigit = c
        if lastDigit == 0:
            sum += int(firstDigit + firstDigit)
        else:
            sum += int(firstDigit + lastDigit)
    return sum

with open('input', 'r') as f:
    lines = f.readlines()
    solution = solve(lines)
    print(solution)
