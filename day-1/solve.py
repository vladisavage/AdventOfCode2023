WORDS_DICTIONARY = {
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five' : 5,
        'six' : 6,
        'seven' : 7,
        'eight' : 8,
        'nine' : 9,
    }

def replace_words_with_numbers(lines):
    new_lines = []
    for line in lines:
        new_line = ''
        for c in line:
            new_line += c
            for word in WORDS_DICTIONARY:
                if word in new_line:
                    new_line = new_line.replace(word, str(WORDS_DICTIONARY[word]))
        new_lines.append(new_line)
    return new_lines

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
    solution1 = solve(lines)
    solution2 = solve(replace_words_with_numbers(lines))
    print('Solution 1:', solution1)
    print('Solution 2:', solution2)
