export type Question = {
  label: string;
  pts: 5 | 10;
  tier: "easy" | "medium";
  statement: string;
  hint: string;
  solution: string;
  expected: string;
};

// Day 1: operators, input, print, precedence, if-else. 5 questions. Code runs locally, site is read-only.
export const QUESTIONS: Record<number, Question[]> = {
  1: [
    {
      label: "Q1 — Add two numbers",
      pts: 5,
      tier: "easy",
      statement: "Take two numbers as input and print their sum.",
      hint: "input() gives strings. Wrap with int().",
      solution: "a = int(input())\nb = int(input())\nprint(a + b)",
      expected: "in: 3 4 → out: 7",
    },
    {
      label: "Q2 — Even or odd",
      pts: 5,
      tier: "easy",
      statement: "Take a number and print even or odd.",
      hint: "n % 2 == 0 means even.",
      solution: "n = int(input())\nprint('even' if n % 2 == 0 else 'odd')",
      expected: "in: 7 → out: odd",
    },
    {
      label: "Q3 — Precedence check",
      pts: 5,
      tier: "easy",
      statement: "Take a, b, c. Print a + b * c. Tests operator precedence.",
      hint: "* runs before +. No brackets needed.",
      solution: "a = int(input())\nb = int(input())\nc = int(input())\nprint(a + b * c)",
      expected: "in: 2 3 4 → out: 14",
    },
    {
      label: "Q4 — Sign check",
      pts: 10,
      tier: "medium",
      statement: "Print positive, negative, or zero for input.",
      hint: "if / elif / else around 0.",
      solution:
        "n = int(input())\nif n > 0:\n    print('positive')\nelif n < 0:\n    print('negative')\nelse:\n    print('zero')",
      expected: "in: -3 → out: negative",
    },
    {
      label: "Q5 — Menu calculator",
      pts: 10,
      tier: "medium",
      statement:
        "Menu: add, sub, mul, div. Take choice + two numbers, print result. Division by zero prints a message.",
      hint: "Branch on choice string. Guard b == 0.",
      solution:
        "op = input().strip()\na = float(input())\nb = float(input())\nif op == 'add': print(a + b)\nelif op == 'sub': print(a - b)\nelif op == 'mul': print(a * b)\nelif b == 0: print('cannot divide by zero')\nelse: print(a / b)",
      expected: "in: mul 3 4 → out: 12.0",
    },
  ],
  2: [
    {
      label: "Q1 — Loop calculator",
      pts: 5,
      tier: "easy",
      statement:
        "Wrap yesterday's calculator in a loop so it keeps running. Use while + for/range where it fits.",
      hint: "Hint 1: while True around menu. Hint 2: for + range only for repeat-N variant.",
      solution:
        "while True:\n    op = input('op (add/sub/mul/div): ').strip().lower()\n    a = float(input('a: '))\n    b = float(input('b: '))\n    if op == 'add': print(a + b)\n    elif op == 'sub': print(a - b)\n    elif op == 'mul': print(a * b)\n    elif op == 'div': print(a / b)",
      expected: "runs twice in a row without restart",
    },
    {
      label: "Q2 — Add exit",
      pts: 5,
      tier: "easy",
      statement: "Add exit option. Typing exit quits loop via break. Must-have win condition.",
      hint: "Hint 1: check op == 'exit' first. Hint 2: break.",
      solution:
        "while True:\n    op = input('op or exit: ').strip().lower()\n    if op == 'exit':\n        print('bye')\n        break\n    a = float(input('a: '))\n    b = float(input('b: '))\n    if op == 'add': print(a + b)\n    elif op == 'sub': print(a - b)\n    elif op == 'mul': print(a * b)\n    elif op == 'div': print(a / b)",
      expected: "in: exit → out: bye, quits",
    },
    {
      label: "Q3 — Skip bad choice",
      pts: 5,
      tier: "easy",
      statement:
        "Unknown operation prints message and skips to next round with continue. Nested condition practice.",
      hint: "Hint 1: else branch. Hint 2: continue skips rest of loop.",
      solution:
        "while True:\n    op = input('op or exit: ').strip().lower()\n    if op == 'exit':\n        break\n    if op not in ('add', 'sub', 'mul', 'div'):\n        print('unknown op')\n        continue\n    a = float(input('a: '))\n    b = float(input('b: '))\n    if op == 'add': print(a + b)\n    elif op == 'sub': print(a - b)\n    elif op == 'mul': print(a * b)\n    else: print(a / b)",
      expected: "in: xyz → out: unknown op, loops again",
    },
    {
      label: "Q4 — Input validation",
      pts: 10,
      tier: "medium",
      statement: "Optional. Numbers must not crash on bad input. Keep asking until valid.",
      hint: "Hint 1: try int/float. Hint 2: except ValueError + continue.",
      solution:
        "def num(prompt):\n    while True:\n        try:\n            return float(input(prompt))\n        except ValueError:\n            print('not a number, try again')\nwhile True:\n    op = input('op or exit: ').strip().lower()\n    if op == 'exit': break\n    a = num('a: ')\n    b = num('b: ')\n    print(a + b if op == 'add' else 'todo')",
      expected: "in: abc → out: not a number, asks again",
    },
    {
      label: "Q5 — Division by 0 guard",
      pts: 10,
      tier: "medium",
      statement:
        "Optional. Dividing by 0 prints message, no crash. Demo: 1 good run + 1 bad input case.",
      hint: "Hint 1: nested if on b == 0. Hint 2: minimal fix, touch div branch only.",
      solution:
        "while True:\n    op = input('op or exit: ').strip().lower()\n    if op == 'exit': break\n    a = float(input('a: '))\n    b = float(input('b: '))\n    if op == 'div':\n        if b == 0:\n            print('cannot divide by zero')\n        else:\n            print(a / b)\n    elif op == 'add': print(a + b)\n    elif op == 'sub': print(a - b)\n    elif op == 'mul': print(a * b)",
      expected: "in: div 5 0 → out: cannot divide by zero",
    },
  ],
  3: [
    {
      label: "Q1 — Core: calculator functions",
      pts: 5,
      tier: "easy",
      statement:
        "Core. Move each op into function with return. Minimum viable day: functions + 1 new op (eg % or **).",
      hint: "Hint 1: def add(a, b): return a + b. Hint 2: call it from menu.",
      solution:
        "def add(a, b): return a + b\ndef sub(a, b): return a - b\ndef mul(a, b): return a * b\ndef div(a, b): return a / b\ndef mod(a, b): return a % b\nop = input('op: ').strip()\na = float(input('a: '))\nb = float(input('b: '))\nif op == 'add': print(add(a, b))\nelif op == 'mod': print(mod(a, b))",
      expected: "in: mod 7 3 → out: 1.0",
    },
    {
      label: "Q2 — Stretch: history list",
      pts: 5,
      tier: "easy",
      statement:
        "Stretch. Keep every result in a list. Print history on exit. Tuples/sets revision: history stays list.",
      hint: "Hint 1: history = []. Hint 2: .append(result).",
      solution:
        "history = []\nwhile True:\n    op = input('op or exit: ').strip()\n    if op == 'exit': break\n    r = float(input('a: ')) + float(input('b: '))\n    history.append(r)\n    print(r)\nprint(history)",
      expected: "exit prints eg [7.0, 3.0]",
    },
    {
      label: "Q3 — Advanced: dict dispatch",
      pts: 10,
      tier: "medium",
      statement: "Advanced. Map names to functions with dict. Demo needs modular + extensible.",
      hint: "Hint 1: ops = {'add': add}. Hint 2: ops[op](a, b).",
      solution:
        "def add(a, b): return a + b\ndef sub(a, b): return a - b\nops = {'add': add, 'sub': sub}\nop = input('op: ').strip()\nprint(ops[op](float(input('a: ')), float(input('b: '))))",
      expected: "in: add 2 3 → out: 5.0",
    },
    {
      label: "Q4 — Bonus: math lib",
      pts: 10,
      tier: "medium",
      statement: "Optional. Add sqrt and pow via math module as new dict entries.",
      hint: "Hint 1: import math. Hint 2: one-arg vs two-arg needs branch.",
      solution:
        "import math\ndef add(a, b): return a + b\nops = {'add': add, 'pow': lambda a, b: math.pow(a, b), 'sqrt': lambda a, b: math.sqrt(a)}\nop = input('op: ').strip()\na = float(input('a: '))\nb = float(input('b: ')) if op == 'pow' else 0\nprint(ops[op](a, b))",
      expected: "in: sqrt 9 → out: 3.0",
    },
  ],
};

// Passwords live in Convex (seeded). This export kept for docs only. Rotate after event.
