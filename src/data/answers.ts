// Volunteer/admin answer key. Imported only by the /live page,
// never by the student page.
export type Answer = { hint: string; solution: string; expected: string };

export const ANSWERS: Record<number, Record<string, Answer>> = {
  1: {
    "E1 — Hello print": {
      hint: "print() with the text in quotes.",
      solution: "print('Hello, Tripy')",
      expected: "out: Hello, Tripy",
    },
    "E2 — Two lines": {
      hint: "Two print() calls, one after the other.",
      solution: "print('Anu')\nprint('CC1')",
      expected: "out: two lines",
    },
    "E3 — Name variable": {
      hint: "name = ... then print(name).",
      solution: "name = 'Anu'\nprint(name)",
      expected: "out: Anu",
    },
    "E4 — Echo input": {
      hint: "Save input() in a variable, then print it.",
      solution: "word = input()\nprint(word)",
      expected: "in: hello → out: hello",
    },
    "E5 — Add two numbers": {
      hint: "input() gives strings. Wrap with int().",
      solution: "a = int(input())\nb = int(input())\nprint(a + b)",
      expected: "in: 3 4 → out: 7",
    },
    "E6 — Subtract": {
      hint: "Same shape as addition, with -.",
      solution: "a = int(input())\nb = int(input())\nprint(a - b)",
      expected: "in: 9 4 → out: 5",
    },
    "E7 — Multiply": {
      hint: "The multiply operator is *.",
      solution: "a = int(input())\nb = int(input())\nprint(a * b)",
      expected: "in: 6 7 → out: 42",
    },
    "E8 — Divide": {
      hint: "Single / always gives a float.",
      solution: "a = float(input())\nb = float(input())\nprint(a / b)",
      expected: "in: 7 2 → out: 3.5",
    },
    "E9 — Floor division": {
      hint: "Double slash // drops the remainder.",
      solution: "a = int(input())\nb = int(input())\nprint(a // b)",
      expected: "in: 7 2 → out: 3",
    },
    "E10 — Remainder": {
      hint: "The remainder operator is %.",
      solution: "a = int(input())\nb = int(input())\nprint(a % b)",
      expected: "in: 7 2 → out: 1",
    },
    "E11 — Power": {
      hint: "Power is **, not ^.",
      solution: "a = int(input())\nb = int(input())\nprint(a ** b)",
      expected: "in: 2 5 → out: 32",
    },
    "E12 — Precedence": {
      hint: "* runs before +. No brackets needed.",
      solution: "a = int(input())\nb = int(input())\nc = int(input())\nprint(a + b * c)",
      expected: "in: 2 3 4 → out: 14",
    },
    "E13 — Brackets win": {
      hint: "Brackets run first, before *.",
      solution: "a = int(input())\nb = int(input())\nc = int(input())\nprint((a + b) * c)",
      expected: "in: 2 3 4 → out: 20",
    },
    "E14 — Input type": {
      hint: "type(x) tells the type. input() is always str.",
      solution: "x = input()\nprint(type(x))",
      expected: "in: 5 → out: <class 'str'>",
    },
    "E15 — To int": {
      hint: "int(float(x)) chops the decimal part.",
      solution: "x = input()\nprint(int(float(x)))",
      expected: "in: 7.9 → out: 7",
    },
    "E16 — To float": {
      hint: "Wrap with float().",
      solution: "x = input()\nprint(float(x))",
      expected: "in: 5 → out: 5.0",
    },
    "E17 — Even or odd": {
      hint: "n % 2 == 0 means even.",
      solution: "n = int(input())\nprint('even' if n % 2 == 0 else 'odd')",
      expected: "in: 7 → out: odd",
    },
    "E18 — Positive check": {
      hint: "if n > 0 ... else ...",
      solution: "n = int(input())\nif n > 0:\n    print('positive')\nelse:\n    print('negative')",
      expected: "in: -3 → out: negative",
    },
    "E19 — Pass mark": {
      hint: "Compare with >= 40.",
      solution: "m = int(input())\nif m >= 40:\n    print('pass')\nelse:\n    print('fail')",
      expected: "in: 55 → out: pass",
    },
    "E20 — Bigger of two": {
      hint: "if a > b print a, else print b.",
      solution: "a = int(input())\nb = int(input())\nif a > b:\n    print(a)\nelse:\n    print(b)",
      expected: "in: 3 9 → out: 9",
    },
    "M1 — Sign check": {
      hint: "if / elif / else around 0.",
      solution:
        "n = int(input())\nif n > 0:\n    print('positive')\nelif n < 0:\n    print('negative')\nelse:\n    print('zero')",
      expected: "in: -3 → out: negative",
    },
    "M2 — Add or sub menu": {
      hint: "Branch on the choice string with if / else.",
      solution:
        "op = input().strip()\na = float(input())\nb = float(input())\nif op == 'add':\n    print(a + b)\nelse:\n    print(a - b)",
      expected: "in: add 3 4 → out: 7.0",
    },
    "M3 — Average of 3": {
      hint: "Add all three, divide by 3.",
      solution:
        "a = float(input())\nb = float(input())\nc = float(input())\nprint((a + b + c) / 3)",
      expected: "in: 60 70 80 → out: 70.0",
    },
    "M4 — Celsius to F": {
      hint: "Multiply before adding, as the formula reads.",
      solution: "c = float(input())\nprint(c * 9 / 5 + 32)",
      expected: "in: 100 → out: 212.0",
    },
    "M5 — Largest of 3": {
      hint: "Compare a against b and c with and.",
      solution:
        "a = int(input())\nb = int(input())\nc = int(input())\nif a >= b and a >= c:\n    print(a)\nelif b >= c:\n    print(b)\nelse:\n    print(c)",
      expected: "in: 4 9 7 → out: 9",
    },
    "M6 — Grade bands": {
      hint: "Check from the top down with elif.",
      solution:
        "m = int(input())\nif m >= 90:\n    print('A')\nelif m >= 75:\n    print('B')\nelif m >= 60:\n    print('C')\nelif m >= 40:\n    print('D')\nelse:\n    print('F')",
      expected: "in: 82 → out: B",
    },
    "M7 — Divisible by 5 and 11": {
      hint: "Two % checks joined with and.",
      solution:
        "n = int(input())\nif n % 5 == 0 and n % 11 == 0:\n    print('yes')\nelse:\n    print('no')",
      expected: "in: 55 → out: yes",
    },
    "M8 — Vowel check": {
      hint: "Check if it is in 'aeiouAEIOU'.",
      solution:
        "ch = input().strip()\nif ch in 'aeiouAEIOU':\n    print('vowel')\nelse:\n    print('consonant')",
      expected: "in: E → out: vowel",
    },
    "M9 — Teen check": {
      hint: "Chain it: 13 <= age <= 19.",
      solution:
        "age = int(input())\nif 13 <= age <= 19:\n    print('teen')\nelse:\n    print('not teen')",
      expected: "in: 16 → out: teen",
    },
    "M10 — FizzBuzz lite": {
      hint: "Check both first, then each one.",
      solution:
        "n = int(input())\nif n % 3 == 0 and n % 5 == 0:\n    print('fizzbuzz')\nelif n % 3 == 0:\n    print('fizz')\nelif n % 5 == 0:\n    print('buzz')\nelse:\n    print(n)",
      expected: "in: 15 → out: fizzbuzz",
    },
    "M11 — Swap two": {
      hint: "a, b = b, a swaps in one step.",
      solution: "a = input().strip()\nb = input().strip()\na, b = b, a\nprint(a, b)",
      expected: "in: 3 9 → out: 9 3",
    },
    "M12 — Minutes to sec": {
      hint: "Minutes times 60 plus seconds.",
      solution: "m = int(input())\ns = int(input())\nprint(m * 60 + s)",
      expected: "in: 2 30 → out: 150",
    },
    "M13 — Discount bill": {
      hint: "Final = price - price * pct / 100.",
      solution: "price = float(input())\npct = float(input())\nprint(price - price * pct / 100)",
      expected: "in: 200 10 → out: 180.0",
    },
    "M14 — Day name": {
      hint: "Seven branches with elif, else at the end.",
      solution:
        "d = int(input())\nif d == 1:\n    print('Monday')\nelif d == 2:\n    print('Tuesday')\nelif d == 3:\n    print('Wednesday')\nelif d == 4:\n    print('Thursday')\nelif d == 5:\n    print('Friday')\nelif d == 6:\n    print('Saturday')\nelif d == 7:\n    print('Sunday')\nelse:\n    print('invalid')",
      expected: "in: 5 → out: Friday",
    },
    "M15 — Absolute value": {
      hint: "Negatives print as -n, rest print as n.",
      solution: "n = int(input())\nif n < 0:\n    print(-n)\nelse:\n    print(n)",
      expected: "in: -8 → out: 8",
    },
    "M16 — Triangle valid": {
      hint: "Each pair must sum above the third side.",
      solution:
        "a = int(input())\nb = int(input())\nc = int(input())\nif a + b > c and b + c > a and a + c > b:\n    print('valid')\nelse:\n    print('invalid')",
      expected: "in: 3 4 5 → out: valid",
    },
    "M17 — Simple interest": {
      hint: "Straight formula with three inputs.",
      solution:
        "p = float(input())\nr = float(input())\nt = float(input())\nprint(p * r * t / 100)",
      expected: "in: 1000 5 2 → out: 100.0",
    },
    "M18 — Even and in range": {
      hint: "Combine % and range checks with and.",
      solution:
        "n = int(input())\nif n % 2 == 0 and 10 <= n <= 99:\n    print('yes')\nelse:\n    print('no')",
      expected: "in: 42 → out: yes",
    },
    "M19 — Smallest of 3": {
      hint: "Mirror the largest-of-3 pattern with <=.",
      solution:
        "a = int(input())\nb = int(input())\nc = int(input())\nif a <= b and a <= c:\n    print(a)\nelif b <= c:\n    print(b)\nelse:\n    print(c)",
      expected: "in: 4 9 7 → out: 4",
    },
    "M20 — Char or digit": {
      hint: "Compare ranges: '0' <= ch <= '9' and similar for letters.",
      solution:
        "ch = input().strip()\nif '0' <= ch <= '9':\n    print('digit')\nelif 'a' <= ch <= 'z' or 'A' <= ch <= 'Z':\n    print('letter')\nelse:\n    print('other')",
      expected: "in: 7 → out: digit",
    },
    "H1 — Full menu calc": {
      hint: "Branch on choice. Guard b == 0 before dividing.",
      solution:
        "op = input().strip()\na = float(input())\nb = float(input())\nif op == 'add': print(a + b)\nelif op == 'sub': print(a - b)\nelif op == 'mul': print(a * b)\nelif b == 0: print('cannot divide by zero')\nelse: print(a / b)",
      expected: "in: mul 3 4 → out: 12.0",
    },
    "H2 — Leap year": {
      hint: "Divisible by 400, or by 4 but not by 100.",
      solution:
        "y = int(input())\nif y % 400 == 0 or (y % 4 == 0 and y % 100 != 0):\n    print('leap')\nelse:\n    print('common')",
      expected: "in: 2024 → out: leap",
    },
    "H3 — Triangle type": {
      hint: "Check validity first, then count equal sides.",
      solution:
        "a = int(input())\nb = int(input())\nc = int(input())\nif not (a + b > c and b + c > a and a + c > b):\n    print('invalid')\nelif a == b == c:\n    print('equilateral')\nelif a == b or b == c or a == c:\n    print('isosceles')\nelse:\n    print('scalene')",
      expected: "in: 3 3 5 → out: isosceles",
    },
    "H4 — Roots nature": {
      hint: "Compute D, then compare with 0.",
      solution:
        "a = float(input())\nb = float(input())\nc = float(input())\nd = b * b - 4 * a * c\nif d > 0:\n    print('real-distinct')\nelif d == 0:\n    print('real-equal')\nelse:\n    print('imaginary')",
      expected: "in: 1 -3 2 → out: real-distinct",
    },
    "H5 — Power bill slabs": {
      hint: "Peel off each slab from the top down.",
      solution:
        "u = int(input())\nif u <= 100:\n    print(u * 3)\nelif u <= 200:\n    print(100 * 3 + (u - 100) * 5)\nelse:\n    print(100 * 3 + 100 * 5 + (u - 200) * 8)",
      expected: "in: 250 → out: 1200",
    },
    "H6 — RPS winner": {
      hint: "Draw first, then the three cases where player 1 wins.",
      solution:
        "p1 = input().strip()\np2 = input().strip()\nif p1 == p2:\n    print('draw')\nelif (p1 == 'rock' and p2 == 'scissors') or (p1 == 'scissors' and p2 == 'paper') or (p1 == 'paper' and p2 == 'rock'):\n    print('player1')\nelse:\n    print('player2')",
      expected: "in: rock scissors → out: player1",
    },
    "H7 — ATM withdraw": {
      hint: "Two checks with and: amount % 100 == 0 and amount <= balance.",
      solution:
        "bal = int(input())\namt = int(input())\nif amt % 100 == 0 and amt <= bal:\n    print(bal - amt)\nelse:\n    print('denied')",
      expected: "in: 1000 300 → out: 700",
    },
    "H8 — Login check": {
      hint: "Both must match, joined with and.",
      solution:
        "u = input().strip()\np = input().strip()\nif u == 'admin' and p == 'tripy123':\n    print('welcome')\nelse:\n    print('denied')",
      expected: "in: admin tripy123 → out: welcome",
    },
    "H9 — Seconds to h:m:s": {
      hint: "Hours = // 3600, minutes from the leftover // 60, rest is %.",
      solution: "t = int(input())\nh = t // 3600\nm = (t % 3600) // 60\ns = t % 60\nprint(h, m, s)",
      expected: "in: 3661 → out: 1 1 1",
    },
    "H10 — Middle of 3": {
      hint: "a is middle if it sits between b and c in either order.",
      solution:
        "a = int(input())\nb = int(input())\nc = int(input())\nif (b < a < c) or (c < a < b):\n    print(a)\nelif (a < b < c) or (c < b < a):\n    print(b)\nelse:\n    print(c)",
      expected: "in: 4 9 7 → out: 7",
    },
    "H11 — 3-digit palindrome": {
      hint: "First digit is n // 100, last is n % 10.",
      solution:
        "n = int(input())\nif n // 100 == n % 10:\n    print('yes')\nelse:\n    print('no')",
      expected: "in: 121 → out: yes",
    },
    "H12 — Armstrong 3-digit": {
      hint: "Pull digits with // and %, cube each with ** 3.",
      solution:
        "n = int(input())\na = n // 100\nb = (n // 10) % 10\nc = n % 10\nif a ** 3 + b ** 3 + c ** 3 == n:\n    print('armstrong')\nelse:\n    print('not armstrong')",
      expected: "in: 153 → out: armstrong",
    },
    "H13 — Gross salary": {
      hint: "Pick the slab first, then one formula.",
      solution:
        "b = float(input())\nif b <= 10000:\n    print(b + b * 0.2 + b * 0.8)\nelse:\n    print(b + b * 0.25 + b * 0.9)",
      expected: "in: 8000 → out: 16000.0",
    },
    "H14 — Exam pass": {
      hint: "Three >= checks and one average check, all with and.",
      solution:
        "a = float(input())\nb = float(input())\nc = float(input())\nif a >= 40 and b >= 40 and c >= 40 and (a + b + c) / 3 >= 50:\n    print('pass')\nelse:\n    print('fail')",
      expected: "in: 60 50 40 → out: pass",
    },
    "H15 — Sort 3 numbers": {
      hint: "Find min, max, and middle = total - min - max.",
      solution:
        "a = int(input())\nb = int(input())\nc = int(input())\nlo = a\nif b < lo:\n    lo = b\nif c < lo:\n    lo = c\nhi = a\nif b > hi:\n    hi = b\nif c > hi:\n    hi = c\nprint(lo, a + b + c - lo - hi, hi)",
      expected: "in: 3 1 2 → out: 1 2 3",
    },
    "H16 — Speed fine": {
      hint: "Elif chain from the top: check the biggest first or smallest first, just stay ordered.",
      solution:
        "s = int(input())\nif s <= 60:\n    print('ok')\nelif s <= 80:\n    print('fine 500')\nelif s <= 100:\n    print('fine 1000')\nelse:\n    print('seized')",
      expected: "in: 85 → out: fine 1000",
    },
    "H17 — Voter + senior": {
      hint: "Three bands with elif.",
      solution:
        "age = int(input())\nif age < 18:\n    print('minor')\nelif age < 60:\n    print('voter')\nelse:\n    print('senior voter')",
      expected: "in: 65 → out: senior voter",
    },
    "H18 — Digit sum vs product": {
      hint: "Tens = n // 10, ones = n % 10.",
      solution:
        "n = int(input())\na = n // 10\nb = n % 10\nif a + b > a * b:\n    print('sum-first')\nelse:\n    print('product-first')",
      expected: "in: 23 → out: product-first",
    },
    "H19 — Extended calc": {
      hint: "Elif chain on op, zero-guard inside div and mod branches.",
      solution:
        "op = input().strip()\na = float(input())\nb = float(input())\nif op == 'add': print(a + b)\nelif op == 'sub': print(a - b)\nelif op == 'mul': print(a * b)\nelif op == 'mod':\n    print(a % b if b != 0 else 'cannot divide by zero')\nelif op == 'pow': print(a ** b)\nelif b == 0: print('cannot divide by zero')\nelif op == 'div': print(a / b)\nelse: print('unknown')",
      expected: "in: pow 2 8 → out: 256.0",
    },
    "H20 — Largest of 4": {
      hint: "Assume the first is largest, replace it whenever a bigger one comes.",
      solution:
        "a = int(input())\nb = int(input())\nc = int(input())\nd = int(input())\nbig = a\nif b > big:\n    big = b\nif c > big:\n    big = c\nif d > big:\n    big = d\nprint(big)",
      expected: "in: 4 9 7 2 → out: 9",
    },
  },
  2: {
    E1: {
      hint: "Start i at 1. Loop while i <= 3. Print i, then add 1 to i.",
      solution: "i = 1\nwhile i <= 3:\n    print(i)\n    i = i + 1",
      expected: "1\n2\n3",
    },
    E2: {
      hint: "Count from 0 while count < 3.",
      solution: "count = 0\nwhile count < 3:\n    print('Hi')\n    count = count + 1",
      expected: "Hi\nHi\nHi",
    },
    E3: {
      hint: "Inside the loop: if i == 4: break.",
      solution: "i = 1\nwhile True:\n    if i == 4:\n        break\n    print(i)\n    i = i + 1",
      expected: "1\n2\n3",
    },
    E4: {
      hint: "If i == 2: continue, then print(i).",
      solution: "for i in range(5):\n    if i == 2:\n        continue\n    print(i)",
      expected: "0\n1\n3\n4",
    },
    E5: {
      hint: "for i in range(5): print(i).",
      solution: "for i in range(5):\n    print(i)",
      expected: "0\n1\n2\n3\n4",
    },
    E6: {
      hint: "Loop directly over the string.",
      solution: "for ch in 'CAT':\n    print(ch)",
      expected: "C\nA\nT",
    },
    E7: {
      hint: "range(1, 6).",
      solution: "for i in range(1, 6):\n    print(i)",
      expected: "1\n2\n3\n4\n5",
    },
    E8: {
      hint: "range(0, 10, 2).",
      solution: "for i in range(0, 10, 2):\n    print(i)",
      expected: "0\n2\n4\n6\n8",
    },
    E9: { hint: "'HELLO'.lower().", solution: "print('HELLO'.lower())", expected: "hello" },
    E10: { hint: "'kerala'.upper().", solution: "print('kerala'.upper())", expected: "KERALA" },
    E11: { hint: "s[0:3].", solution: "s = 'python'\nprint(s[0:3])", expected: "pyt" },
    E12: {
      hint: "Negative index: s[-2:].",
      solution: "s = 'python'\nprint(s[-2:])",
      expected: "on",
    },
    E13: {
      hint: "n = len(s), loop while n > 0, subtract 1 each time.",
      solution: "s = 'abc'\nn = len(s)\nwhile n > 0:\n    print(n)\n    n = n - 1",
      expected: "3\n2\n1",
    },
    E14: {
      hint: "if i % 2 == 0: print(i).",
      solution: "for i in range(1, 7):\n    if i % 2 == 0:\n        print(i)",
      expected: "2\n4\n6",
    },
    E15: {
      hint: "Loop while n >= 1, then print('Go!') after the loop.",
      solution: "n = 5\nwhile n >= 1:\n    print(n)\n    n = n - 1\nprint('Go!')",
      expected: "5\n4\n3\n2\n1\nGo!",
    },
    E16: {
      hint: "The loop variable is unused; just print inside.",
      solution: "for i in range(3):\n    print('CEC')",
      expected: "CEC\nCEC\nCEC",
    },
    E17: {
      hint: "w=0.. 'rks' is s[2:5].",
      solution: "s = 'workshop'\nprint(s[2:5])",
      expected: "rks",
    },
    E18: {
      hint: "word.upper() == 'PYTHON'.",
      solution:
        "word = input()\nif word.upper() == 'PYTHON':\n    print('YES')\nelse:\n    print('NO')",
      expected: "YES for python/PYTHON",
    },
    E19: {
      hint: "while True: read, if == 'stop': break.",
      solution: "while True:\n    word = input()\n    if word == 'stop':\n        break",
      expected: "loop ends on stop",
    },
    E20: {
      hint: "Keep total and i; loop while i <= 5.",
      solution:
        "total = 0\ni = 1\nwhile i <= 5:\n    total = total + i\n    i = i + 1\nprint(total)",
      expected: "15",
    },
    M1: {
      hint: "Use range(len(s)); if s[i] == 's': print(i); break.",
      solution:
        "s = 'workshop'\nfor i in range(len(s)):\n    if s[i] == 's':\n        print(i)\n        break",
      expected: "4",
    },
    M2: {
      hint: "if ch in 'aeiou': count += 1.",
      solution:
        "s = 'celebration'\ncount = 0\nfor ch in s:\n    if ch in 'aeiou':\n        count = count + 1\nprint(count)",
      expected: "5",
    },
    M3: {
      hint: "range(1, 10, 2); add to total.",
      solution: "total = 0\nfor i in range(1, 10, 2):\n    total = total + i\nprint(total)",
      expected: "25",
    },
    M4: {
      hint: "Chain if/elif/else inside order from highest.",
      solution:
        "marks = 72\nif marks >= 90:\n    print('A')\nelif marks >= 75:\n    print('B')\nelif marks >= 60:\n    print('C')\nelif marks >= 40:\n    print('D')\nelse:\n    print('Fail')",
      expected: "C",
    },
    M5: { hint: "s[::2].", solution: "s = 'abcdefgh'\nprint(s[::2])", expected: "aceg" },
    M6: { hint: "s == s[::-1].", solution: "s = 'madam'\nprint(s == s[::-1])", expected: "True" },
    M7: {
      hint: "if i % 3 == 0: i += 1; continue.",
      solution:
        "i = 1\nwhile i <= 10:\n    if i % 3 == 0:\n        i = i + 1\n        continue\n    print(i)\n    i = i + 1",
      expected: "1\n2\n4\n5\n7\n8\n10",
    },
    M8: {
      hint: "Compare word.lower() == 'foces'.",
      solution:
        "word = input()\nif word.lower() == 'foces':\n    print('match')\nelse:\n    print('no match')",
      expected: "match for FOCES/foces",
    },
    M9: {
      hint: "Track best, update if n > best.",
      solution:
        "nums = [4, 9, 2, 11, 6]\nbest = nums[0]\nfor n in nums:\n    if n > best:\n        best = n\nprint(best)",
      expected: "11",
    },
    M10: {
      hint: "Outer range(1,4), inner prints '*' * i.",
      solution: "for i in range(1, 4):\n    print('*' * i)",
      expected: "*\n**\n***",
    },
    M11: {
      hint: "Index from len(s)-1 down to 0, build result.",
      solution:
        "s = 'python'\nresult = ''\ni = len(s) - 1\nwhile i >= 0:\n    result = result + s[i]\n    i = i - 1\nprint(result)",
      expected: "nohtyp",
    },
    M12: {
      hint: "elif chain.",
      solution:
        "age = 17\nif age < 13:\n    print('Child')\nelif age < 18:\n    print('Teen')\nelif age < 60:\n    print('Adult')\nelse:\n    print('Senior')",
      expected: "Teen",
    },
    M13: { hint: "s[2:5].", solution: "s = 'banana'\nprint(s[2:5])", expected: "nan" },
    M14: {
      hint: "Loop chars, increment on match.",
      solution:
        "s = 'malayalam'\nc = 0\nfor ch in s:\n    if ch == 'a':\n        c = c + 1\nprint(c)",
      expected: "4",
    },
    M15: {
      hint: "print('5 x', i, '=', 5 * i).",
      solution: "for i in range(1, 6):\n    print('5 x', i, '=', 5 * i)",
      expected: "5 x 1 = 5 ... 5 x 5 = 25",
    },
    M16: {
      hint: "Order: <5, <18, >=60, else.",
      solution:
        "age = 65\nif age < 5:\n    print(0)\nelif age < 18:\n    print(50)\nelif age >= 60:\n    print(30)\nelse:\n    print(100)",
      expected: "30",
    },
    M17: {
      hint: "Decrement before continue carefully.",
      solution:
        "n = 10\nwhile n >= 1:\n    if n == 5:\n        n = n - 1\n        continue\n    print(n)\n    n = n - 1",
      expected: "10 9 8 7 6 4 3 2 1",
    },
    M18: {
      hint: "Combine any() checks with and.",
      solution:
        "pw = 'Abc123'\nhas_digit = False\nhas_upper = False\nfor ch in pw:\n    if ch.isdigit():\n        has_digit = True\n    if ch.isupper():\n        has_upper = True\nif len(pw) >= 6 and has_digit and has_upper:\n    print('Strong')\nelse:\n    print('Weak')",
      expected: "Strong",
    },
    M19: {
      hint: "split(',') then .lower() each.",
      solution: "emails = 'a@x.com,B@X.COM'\nfor e in emails.split(','):\n    print(e.lower())",
      expected: "a@x.com\nb@x.com",
    },
    M20: {
      hint: "Check %15 first, then %3, then %5.",
      solution:
        "for i in range(1, 16):\n    if i % 15 == 0:\n        print('FizzBuzz')\n    elif i % 3 == 0:\n        print('Fizz')\n    elif i % 5 == 0:\n        print('Buzz')\n    else:\n        print(i)",
      expected: "1 2 Fizz 4 Buzz ... 14 FizzBuzz",
    },
    H1: {
      hint: "Try divisors i from 2 while i*i <= n.",
      solution:
        "n = 29\ni = 2\nprime = True\nwhile i * i <= n:\n    if n % i == 0:\n        prime = False\n        break\n    i = i + 1\nprint('prime' if prime else 'not prime')",
      expected: "prime",
    },
    H2: {
      hint: "Count attempts; break on match.",
      solution:
        "correct = 'py123'\nattempts = 0\nwhile attempts < 3:\n    guess = input()\n    if guess == correct:\n        print('in')\n        break\n    attempts = attempts + 1\nelse:\n    print('locked')",
      expected: "in or locked",
    },
    H3: {
      hint: "Outer i, inner j, print(i*j, end=' ').",
      solution:
        "for i in range(1, 4):\n    for j in range(1, 4):\n        print(i * j, end=' ')\n    print()",
      expected: "1 2 3\n2 4 6\n3 6 9",
    },
    H4: {
      hint: "Count steps until n == 1.",
      solution:
        "n = 6\nsteps = 0\nwhile n != 1:\n    if n % 2 == 0:\n        n = n // 2\n    else:\n        n = 3 * n + 1\n    steps = steps + 1\nprint(steps)",
      expected: "8",
    },
    H5: {
      hint: "Track largest and second; skip duplicates of largest.",
      solution:
        "nums = [5, 9, 2, 9, 7]\nfirst = second = -1\nfor n in nums:\n    if n > first:\n        second = first\n        first = n\n    elif n > second and n != first:\n        second = n\nprint(second)",
      expected: "7",
    },
    H6: {
      hint: "Split, reverse each word with while, join.",
      solution:
        "s = 'py is fun'\nout = []\nfor w in s.split(' '):\n    r = ''\n    i = len(w) - 1\n    while i >= 0:\n        r = r + w[i]\n        i = i - 1\n    out.append(r)\nprint(' '.join(out))",
      expected: "yp si nuf",
    },
    H7: {
      hint: "range(len(s)-2), slice s[i:i+3].",
      solution: "s = 'abcdef'\nfor i in range(len(s) - 2):\n    print(s[i:i + 3])",
      expected: "abc\nbcd\ncde\ndef",
    },
    H8: {
      hint: "Inner range(i).",
      solution:
        "for i in range(1, 5):\n    for j in range(i):\n        print(i, end='')\n    print()",
      expected: "1\n22\n333\n4444",
    },
    H9: {
      hint: "split('@'), check len==2 and '.' in domain.",
      solution:
        "email = 'a@b.com'\nparts = email.split('@')\nif len(parts) == 2 and len(parts[0]) > 0 and '.' in parts[1] and len(parts[1]) > 2:\n    print('valid')\nelse:\n    print('invalid')",
      expected: "valid",
    },
    H10: {
      hint: "n % 10 gives last digit; n //= 10.",
      solution:
        "n = 4821\ntotal = 0\nwhile n > 0:\n    total = total + n % 10\n    n = n // 10\nprint(total)",
      expected: "15",
    },
    H11: {
      hint: "split() for words; isalpha + vowel test per char.",
      solution:
        "s = 'Hi all 123'\nwords = len(s.split())\nv = 0\nc = 0\nfor ch in s.lower():\n    if ch.isalpha():\n        if ch in 'aeiou':\n            v = v + 1\n        else:\n            c = c + 1\nprint(words, v, c)",
      expected: "3 3 3",
    },
    H12: {
      hint: "Convert guess to int; compare; break on win.",
      solution:
        "secret = 7\ntries = 0\nwhile True:\n    g = int(input())\n    tries = tries + 1\n    if g < secret:\n        print('low')\n    elif g > secret:\n        print('high')\n    else:\n        print('win in', tries)\n        break",
      expected: "win in N",
    },
    H13: {
      hint: "Build result; add char only if not already in it.",
      solution:
        "s = 'programming'\nout = ''\nfor ch in s:\n    if ch not in out:\n        out = out + ch\nprint(out)",
      expected: "progamin",
    },
    H14: {
      hint: "p = 1; p *= i each step.",
      solution: "p = 1\nfor i in range(1, 7):\n    p = p * i\n    print(p)",
      expected: "1 2 6 24 120 720",
    },
    H15: {
      hint: "split() command; check funds before withdraw.",
      solution:
        "balance = 1000\nwhile True:\n    cmd = input()\n    if cmd == 'Q':\n        break\n    parts = cmd.split(' ')\n    amt = int(parts[1])\n    if parts[0] == 'D':\n        balance = balance + amt\n    elif parts[0] == 'W':\n        if amt <= balance:\n            balance = balance - amt\n        else:\n            print('no funds')\nprint(balance)",
      expected: "depends on commands",
    },
    H16: {
      hint: "Split; track longest by len.",
      solution:
        "s = 'py workshop rocks today'\nbest = ''\nfor w in s.split(' '):\n    if len(w) > len(best):\n        best = w\nprint(best)",
      expected: "workshop",
    },
    H17: {
      hint: "Nested loops; if i == j: continue.",
      solution:
        "for i in range(1, 4):\n    for j in range(1, 4):\n        if i == j:\n            continue\n        print(i, j)",
      expected: "1 2, 1 3, 2 1, 2 3, 3 1, 3 2",
    },
    H18: {
      hint: "Use ord/chr: chr((ord(ch)-97+1)%26+97); keep spaces.",
      solution:
        "s = 'abc xyz'\nout = ''\nfor ch in s:\n    if ch == ' ':\n        out = out + ' '\n    else:\n        out = out + chr((ord(ch) - 97 + 1) % 26 + 97)\nprint(out)",
      expected: "bcd yza",
    },
    H19: {
      hint: "Inner for sums the list.",
      solution:
        "prices = [50, 30, 20]\nwhile True:\n    cmd = input()\n    if cmd == 'quit':\n        break\n    if cmd == 'bill':\n        total = 0\n        for p in prices:\n            total = total + p\n        print(total)",
      expected: "100 on bill",
    },
    H20: {
      hint: "range(1,4) then range(2,0,-1).",
      solution:
        "for i in range(1, 4):\n    print('*' * i)\nfor i in range(2, 0, -1):\n    print('*' * i)",
      expected: "*\n**\n***\n**\n*",
    },
  },
  3: {
    E1: {
      hint: "def greet(): then greet().",
      solution: "def greet():\n    print('Hello')\ngreet()",
      expected: "Hello",
    },
    E2: {
      hint: "return a + b.",
      solution: "def add(a, b):\n    return a + b\nprint(add(3, 4))",
      expected: "7",
    },
    E3: {
      hint: "fruits.append('banana').",
      solution: "fruits = ['apple', 'mango']\nfruits.append('banana')\nprint(fruits)",
      expected: "['apple', 'mango', 'banana']",
    },
    E4: {
      hint: "nums[0] and nums[-1].",
      solution: "nums = [10, 20, 30]\nprint(nums[0])\nprint(nums[-1])",
      expected: "10\n30",
    },
    E5: {
      hint: "len(skills).",
      solution: "skills = ['py', 'c', 'java']\nprint(len(skills))",
      expected: "3",
    },
    E6: {
      hint: "Tuples index like lists: point[1].",
      solution: "point = (3, 4)\nprint(point[1])",
      expected: "4",
    },
    E7: {
      hint: "r, g, b = rgb.",
      solution: "rgb = (255, 0, 128)\nr, g, b = rgb\nprint(g)",
      expected: "0",
    },
    E8: {
      hint: "tags.add('code').",
      solution: "tags = {'py'}\ntags.add('code')\nprint(tags)",
      expected: "{'py', 'code'} order varies",
    },
    E9: {
      hint: "student['mark'].",
      solution: "student = {'name': 'Anu', 'mark': 90}\nprint(student['mark'])",
      expected: "90",
    },
    E10: {
      hint: "d['grade'] = 'A'.",
      solution: "d = {'mark': 90}\nd['grade'] = 'A'\nprint(d)",
      expected: "{'mark': 90, 'grade': 'A'}",
    },
    E11: {
      hint: "import math then math.sqrt(16).",
      solution: "import math\nprint(math.sqrt(16))",
      expected: "4.0",
    },
    E12: {
      hint: "math.pow(2, 3).",
      solution: "import math\nprint(math.pow(2, 3))",
      expected: "8.0",
    },
    E13: {
      hint: "nums[1:4].",
      solution: "nums = [1, 2, 3, 4, 5]\nprint(nums[1:4])",
      expected: "[2, 3, 4]",
    },
    E14: {
      hint: "'mango' in fruits.",
      solution: "fruits = ['apple', 'mango']\nprint('mango' in fruits)",
      expected: "True",
    },
    E15: {
      hint: "return n * n.",
      solution: "def square(n):\n    return n * n\nprint(square(5))",
      expected: "25",
    },
    E16: {
      hint: "for k in d: print(k).",
      solution: "d = {'a': 1, 'b': 2}\nfor k in d:\n    print(k)",
      expected: "a\nb",
    },
    E17: {
      hint: "skills.remove('c').",
      solution: "skills = ['py', 'c', 'java']\nskills.remove('c')\nprint(skills)",
      expected: "['py', 'java']",
    },
    E18: {
      hint: "a, b = b, a.",
      solution: "a = 5\nb = 9\na, b = b, a\nprint(a, b)",
      expected: "9 5",
    },
    E19: {
      hint: "return n % 2 == 0.",
      solution: "def is_even(n):\n    return n % 2 == 0\nprint(is_even(8))",
      expected: "True",
    },
    E20: { hint: "len(t).", solution: "t = (1, 2, 3)\nprint(len(t))", expected: "3" },
    M1: {
      hint: "result = 1; multiply 1..n.",
      solution:
        "def factorial(n):\n    result = 1\n    for i in range(1, n + 1):\n        result = result * i\n    return result\nprint(factorial(5))",
      expected: "120",
    },
    M2: {
      hint: "[i * i for i in range(1, 6)].",
      solution: "squares = [i * i for i in range(1, 6)]\nprint(squares)",
      expected: "[1, 4, 9, 16, 25]",
    },
    M3: {
      hint: "for k, v in prices.items().",
      solution:
        "prices = {'pen': 10, 'book': 50}\nfor k, v in prices.items():\n    print(k, 'costs', v)",
      expected: "pen costs 10\nbook costs 50",
    },
    M4: {
      hint: "a | b and a & b.",
      solution: "a = {1, 2, 3}\nb = {3, 4, 5}\nprint(a | b)\nprint(a & b)",
      expected: "{1, 2, 3, 4, 5}\n{3}",
    },
    M5: {
      hint: "data[1][1].",
      solution: "data = [[1, 2], [3, 4]]\nprint(data[1][1])",
      expected: "4",
    },
    M6: {
      hint: "round(area(7), 2).",
      solution: "def area(r):\n    return 3.14 * r * r\nprint(round(area(7), 2))",
      expected: "153.86",
    },
    M7: {
      hint: "x = nums.pop().",
      solution: "nums = [1, 2, 9]\nx = nums.pop()\nprint(x)\nprint(nums)",
      expected: "9\n[1, 2]",
    },
    M8: {
      hint: "def greet(name='friend').",
      solution: "def greet(name='friend'):\n    print('Hi', name)\ngreet()",
      expected: "Hi friend",
    },
    M9: {
      hint: "nums.count(2).",
      solution: "nums = [2, 5, 2, 8, 2]\nprint(nums.count(2))",
      expected: "3",
    },
    M10: {
      hint: "d1.update(d2).",
      solution: "d1 = {'a': 1}\nd2 = {'b': 2}\nd1.update(d2)\nprint(d1)",
      expected: "{'a': 1, 'b': 2}",
    },
    M11: {
      hint: "sorted() returns a new list.",
      solution: "nums = [5, 1, 4]\nprint(sorted(nums))\nprint(nums)",
      expected: "[1, 4, 5]\n[5, 1, 4]",
    },
    M12: {
      hint: "get() returns the default if missing.",
      solution: "d = {'bus': 500}\nprint(d.get('fee', 0))",
      expected: "0",
    },
    M13: {
      hint: "math.pi * r * r.",
      solution:
        "import math\nr = 5\nif math.pi * r * r > 75:\n    print('big')\nelse:\n    print('small')",
      expected: "big",
    },
    M14: {
      hint: "a - b.",
      solution: "a = {1, 2, 3, 4}\nb = {3, 4, 5}\nprint(a - b)",
      expected: "{1, 2}",
    },
    M15: {
      hint: "Default exp squares.",
      solution:
        "def power(base, exp=2):\n    return base ** exp\nprint(power(3))\nprint(power(2, 5))",
      expected: "9\n32",
    },
    M16: {
      hint: "nums.reverse().",
      solution: "nums = [1, 2, 3]\nnums.reverse()\nprint(nums)",
      expected: "[3, 2, 1]",
    },
    M17: {
      hint: "Add the if to the comprehension.",
      solution: "evens = [i for i in range(10) if i % 2 == 0]\nprint(evens)",
      expected: "[0, 2, 4, 6, 8]",
    },
    M18: {
      hint: "if v > 60: print(k).",
      solution:
        "marks = {'Anu': 90, 'Dev': 45}\nfor k, v in marks.items():\n    if v > 60:\n        print(k)",
      expected: "Anu",
    },
    M19: {
      hint: "for x, y in coords.",
      solution: "coords = [(1, 2), (3, 4)]\nfor x, y in coords:\n    print(x + y)",
      expected: "3\n7",
    },
    M20: {
      hint: "3-4-5 triangle.",
      solution: "import math\na = 3\nb = 4\nprint(math.sqrt(a * a + b * b))",
      expected: "5.0",
    },
    H1: {
      hint: "return fib(n-1) + fib(n-2); base cases first.",
      solution:
        "def fib(n):\n    if n == 0:\n        return 0\n    if n == 1:\n        return 1\n    return fib(n - 1) + fib(n - 2)\nprint(fib(8))",
      expected: "21",
    },
    H2: {
      hint: "Outer list, inner items, append.",
      solution:
        "nested = [[1, 2], [3], [4, 5]]\nflat = []\nfor group in nested:\n    for x in group:\n        flat.append(x)\nprint(flat)",
      expected: "[1, 2, 3, 4, 5]",
    },
    H3: {
      hint: "inv[v] = k.",
      solution:
        "d = {'a': 1, 'b': 2}\ninv = {}\nfor k, v in d.items():\n    inv[v] = k\nprint(inv)",
      expected: "{1: 'a', 2: 'b'}",
    },
    H4: {
      hint: "Add to out only if not in seen.",
      solution:
        "nums = [3, 1, 3, 2, 1]\nseen = set()\nout = []\nfor n in nums:\n    if n not in seen:\n        seen.add(n)\n        out.append(n)\nprint(out)",
      expected: "[3, 1, 2]",
    },
    H5: {
      hint: "Count with dict, track best.",
      solution:
        "s = 'go do go run go do'\ncounts = {}\nfor w in s.split(' '):\n    counts[w] = counts.get(w, 0) + 1\nbest = ''\nfor w, c in counts.items():\n    if c > counts.get(best, 0):\n        best = w\nprint(best)",
      expected: "go",
    },
    H6: {
      hint: "key=lambda s: s[1], reverse=True.",
      solution:
        "students = [('Dev', 45), ('Anu', 90)]\nprint(sorted(students, key=lambda s: s[1], reverse=True))",
      expected: "[('Anu', 90), ('Dev', 45)]",
    },
    H7: {
      hint: "setdefault(len(w), []).append(w).",
      solution:
        "words = ['py', 'go', 'code', 'c']\ngroups = {}\nfor w in words:\n    groups.setdefault(len(w), []).append(w)\nprint(groups)",
      expected: "{2: ['py', 'go'], 4: ['code'], 1: ['c']}",
    },
    H8: {
      hint: "Inner def uses n from outer scope.",
      solution:
        "def make_adder(n):\n    def add(x):\n        return x + n\n    return add\nprint(make_adder(5)(10))",
      expected: "15",
    },
    H9: {
      hint: "A = P(1+r)^t.",
      solution: "import math\nP = 1000\nr = 0.05\nt = 3\nprint(round(P * math.pow(1 + r, t), 2))",
      expected: "1157.62",
    },
    H10: {
      hint: "out[j][i] = grid[i][j].",
      solution:
        "grid = [[1, 2], [3, 4]]\nout = [[0, 0], [0, 0]]\nfor i in range(2):\n    for j in range(2):\n        out[j][i] = grid[i][j]\nprint(out)",
      expected: "[[1, 3], [2, 4]]",
    },
    H11: {
      hint: "if b == 0: return None.",
      solution:
        "def divide(a, b):\n    if b == 0:\n        return None\n    return a / b\nprint(divide(10, 2))\nprint(divide(5, 0))",
      expected: "5.0\nNone",
    },
    H12: {
      hint: "stock[k] = stock.get(k, 0) + q.",
      solution:
        "stock = {'pen': 5}\nshipment = [('pen', 3), ('book', 2)]\nfor k, q in shipment:\n    stock[k] = stock.get(k, 0) + q\nprint(stock)",
      expected: "{'pen': 8, 'book': 2}",
    },
    H13: {
      hint: "Set intersection, then sorted().",
      solution: "print(sorted(set('workshop') & set('code')))",
      expected: "['c', 'o']",
    },
    H14: {
      hint: "Loop tuples; add or subtract.",
      solution:
        "def apply(balance, ops):\n    for op, amt in ops:\n        if op == '+':\n            balance = balance + amt\n        else:\n            balance = balance - amt\n    return balance\nprint(apply(0, [('+', 100), ('-', 30), ('+', 20)]))",
      expected: "90",
    },
    H15: {
      hint: "Sets drop duplicates; compare lengths.",
      solution:
        "row = [5, 3, 5, 7]\nif len(set(row)) != len(row):\n    print('bad')\nelse:\n    print('ok')",
      expected: "bad",
    },
    H16: {
      hint: "6-8-10 triangle.",
      solution:
        "import math\np1 = (0, 0)\np2 = (6, 8)\nx1, y1 = p1\nx2, y2 = p2\ndx = x2 - x1\ndy = y2 - y1\nprint(math.sqrt(dx * dx + dy * dy))",
      expected: "10.0",
    },
    H17: {
      hint: "max(marks, key=marks.get).",
      solution: "marks = {'Anu': 90, 'Dev': 92, 'Mia': 88}\nprint(max(marks, key=marks.get))",
      expected: "Dev",
    },
    H18: {
      hint: "range(0, len(nums), 2), slice i:i+2.",
      solution:
        "nums = [1, 2, 3, 4, 5]\nout = []\nfor i in range(0, len(nums), 2):\n    out.append(nums[i:i + 2])\nprint(out)",
      expected: "[[1, 2], [3, 4], [5]]",
    },
    H19: {
      hint: "Store computed values in cache dict.",
      solution:
        "cache = {}\ndef fib(n):\n    if n in cache:\n        return cache[n]\n    if n < 2:\n        return n\n    cache[n] = fib(n - 1) + fib(n - 2)\n    return cache[n]\nprint(fib(30))",
      expected: "832040",
    },
    H20: {
      hint: "Compare values; margin = abs diff.",
      solution:
        "scores = {'CC1': 12, 'CC2': 15}\nif scores['CC1'] > scores['CC2']:\n    win = 'CC1'\nelse:\n    win = 'CC2'\nloser = 'CC2' if win == 'CC1' else 'CC1'\nprint(f'{win} wins by {scores[win] - scores[loser]}')",
      expected: "CC2 wins by 3",
    },
  },
};
