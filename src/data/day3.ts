// Day 3 public statements. No hints or answers in this module.
import type { Question } from "./question";

export const DAY3: Question[] = [
  {
    label: "E1",
    pts: 1,
    tier: "easy",
    statement: "Define greet() that prints 'Hello' when called. Call it once.",
  },
  {
    label: "E2",
    pts: 1,
    tier: "easy",
    statement: "Define add(a, b) that returns a + b. Print add(3, 4).",
  },
  {
    label: "E3",
    pts: 1,
    tier: "easy",
    statement: "Create fruits = ['apple', 'mango']. Append 'banana' and print the list.",
  },
  {
    label: "E4",
    pts: 1,
    tier: "easy",
    statement: "From nums = [10, 20, 30], print the first and last items using indexes.",
  },
  {
    label: "E5",
    pts: 1,
    tier: "easy",
    statement: "Print the length of skills = ['py', 'c', 'java'] with len().",
  },
  {
    label: "E6",
    pts: 1,
    tier: "easy",
    statement: "Create point = (3, 4). Print the second value.",
  },
  {
    label: "E7",
    pts: 1,
    tier: "easy",
    statement: "Unpack rgb = (255, 0, 128) into r, g, b and print g.",
  },
  {
    label: "E8",
    pts: 1,
    tier: "easy",
    statement: "Create tags = {'py'}. Add 'code' with add() and print the set.",
  },
  {
    label: "E9",
    pts: 1,
    tier: "easy",
    statement: "From student = {'name': 'Anu', 'mark': 90}, print the mark.",
  },
  {
    label: "E10",
    pts: 1,
    tier: "easy",
    statement: "Add key 'grade' = 'A' to d = {'mark': 90} and print the dict.",
  },
  {
    label: "E11",
    pts: 1,
    tier: "easy",
    statement: "Print math.sqrt(16). Remember to import math first.",
  },
  {
    label: "E12",
    pts: 1,
    tier: "easy",
    statement: "Print math.pow(2, 3). Remember to import math first.",
  },
  {
    label: "E13",
    pts: 1,
    tier: "easy",
    statement: "From nums = [1, 2, 3, 4, 5], print the middle three [2, 3, 4] with a slice.",
  },
  {
    label: "E14",
    pts: 1,
    tier: "easy",
    statement: "Check if 'mango' is in fruits = ['apple', 'mango']. Print True/False.",
  },
  {
    label: "E15",
    pts: 1,
    tier: "easy",
    statement: "Define square(n) that returns n * n. Print square(5).",
  },
  {
    label: "E16",
    pts: 1,
    tier: "easy",
    statement: "Print all keys of d = {'a': 1, 'b': 2} with a for loop.",
  },
  {
    label: "E17",
    pts: 1,
    tier: "easy",
    statement: "Remove 'c' from skills = ['py', 'c', 'java'] with remove() and print the list.",
  },
  {
    label: "E18",
    pts: 1,
    tier: "easy",
    statement: "Swap a = 5 and b = 9 using tuple assignment in one line. Print both.",
  },
  {
    label: "E19",
    pts: 1,
    tier: "easy",
    statement: "Define is_even(n) returning True if n is even else False. Print is_even(8).",
  },
  {
    label: "E20",
    pts: 1,
    tier: "easy",
    statement: "From t = (1, 2, 3), print its length with len().",
  },
  {
    label: "M1",
    pts: 2,
    tier: "medium",
    statement: "Write factorial(n) using a for loop and return. Print factorial(5).",
  },
  {
    label: "M2",
    pts: 2,
    tier: "medium",
    statement: "Build squares = [i*i for i in range(1, 6)] with a list comprehension. Print it.",
  },
  {
    label: "M3",
    pts: 2,
    tier: "medium",
    statement:
      "Loop over prices = {'pen': 10, 'book': 50} with items() and print 'pen costs 10' style lines.",
  },
  {
    label: "M4",
    pts: 2,
    tier: "medium",
    statement: "Print the union and intersection of a = {1, 2, 3} and b = {3, 4, 5}.",
  },
  {
    label: "M5",
    pts: 2,
    tier: "medium",
    statement: "From data = [[1, 2], [3, 4]], print the value 4 using double indexes.",
  },
  {
    label: "M6",
    pts: 2,
    tier: "medium",
    statement: "Define area(r) returning 3.14*r*r. Print area(7) rounded to 2 decimals.",
  },
  {
    label: "M7",
    pts: 2,
    tier: "medium",
    statement:
      "Pop the last item of nums = [1, 2, 9] with pop(), print the popped value and the list.",
  },
  {
    label: "M8",
    pts: 2,
    tier: "medium",
    statement: "Define greet(name='friend') with a default argument. Call it with no argument.",
  },
  {
    label: "M9",
    pts: 2,
    tier: "medium",
    statement: "Count how many times 2 appears in nums = [2, 5, 2, 8, 2] with count(). Print it.",
  },
  {
    label: "M10",
    pts: 2,
    tier: "medium",
    statement: "Merge d1 = {'a': 1} and d2 = {'b': 2} into one dict with update(). Print it.",
  },
  {
    label: "M11",
    pts: 2,
    tier: "medium",
    statement: "Sort nums = [5, 1, 4] without changing the original: print sorted(nums) then nums.",
  },
  {
    label: "M12",
    pts: 2,
    tier: "medium",
    statement: "Get d.get('fee', 0) for d = {'bus': 500}. Print the default 0 without error.",
  },
  {
    label: "M13",
    pts: 2,
    tier: "medium",
    statement: "Circle check: r = 5. Print 'big' if math.pi*r*r > 75 else 'small'. Import math.",
  },
  {
    label: "M14",
    pts: 2,
    tier: "medium",
    statement: "Print the difference a - b for a = {1, 2, 3, 4}, b = {3, 4, 5}.",
  },
  {
    label: "M15",
    pts: 2,
    tier: "medium",
    statement: "Define power(base, exp=2) returning base**exp. Print power(3) and power(2, 5).",
  },
  {
    label: "M16",
    pts: 2,
    tier: "medium",
    statement: "Reverse nums = [1, 2, 3] in place with reverse() and print it.",
  },
  {
    label: "M17",
    pts: 2,
    tier: "medium",
    statement: "Build evens = [i for i in range(10) if i % 2 == 0]. Print it.",
  },
  {
    label: "M18",
    pts: 2,
    tier: "medium",
    statement: "From marks = {'Anu': 90, 'Dev': 45}, print names scoring above 60 with a loop.",
  },
  {
    label: "M19",
    pts: 2,
    tier: "medium",
    statement: "Unpack coords = [(1, 2), (3, 4)] in a for loop and print x + y for each pair.",
  },
  {
    label: "M20",
    pts: 2,
    tier: "medium",
    statement: "Hypotenuse: a = 3, b = 4. Print math.sqrt(a*a + b*b).",
  },
  {
    label: "H1",
    pts: 4,
    tier: "hard",
    statement: "Write fib(n) recursively (fib(0)=0, fib(1)=1). Print fib(8).",
  },
  {
    label: "H2",
    pts: 4,
    tier: "hard",
    statement: "Flatten nested = [[1, 2], [3], [4, 5]] into one list with nested loops. Print it.",
  },
  {
    label: "H3",
    pts: 4,
    tier: "hard",
    statement: "Invert d = {'a': 1, 'b': 2} into {1: 'a', 2: 'b'} with a loop. Print it.",
  },
  {
    label: "H4",
    pts: 4,
    tier: "hard",
    statement:
      "Dedupe nums = [3, 1, 3, 2, 1] preserving order, using a set for seen. Print [3, 1, 2].",
  },
  {
    label: "H5",
    pts: 4,
    tier: "hard",
    statement: "Find the most frequent word in s = 'go do go run go do' with a dict. Print 'go'.",
  },
  {
    label: "H6",
    pts: 4,
    tier: "hard",
    statement:
      "Sort students = [('Dev', 45), ('Anu', 90)] by mark descending with sorted() + lambda. Print it.",
  },
  {
    label: "H7",
    pts: 4,
    tier: "hard",
    statement:
      "Group words = ['py', 'go', 'code', 'c'] by length into a dict {1: ['c'], 2: ['py', 'go'], 4: ['code']}.",
  },
  {
    label: "H8",
    pts: 4,
    tier: "hard",
    statement: "Closure: make_adder(n) returns a function adding n. Print make_adder(5)(10).",
  },
  {
    label: "H9",
    pts: 4,
    tier: "hard",
    statement:
      "Compound interest: P = 1000, r = 0.05, t = 3. Print round(P * math.pow(1 + r, t), 2).",
  },
  {
    label: "H10",
    pts: 4,
    tier: "hard",
    statement:
      "Transpose grid = [[1, 2], [3, 4]] into [[1, 3], [2, 4]] with nested loops. Print it.",
  },
  {
    label: "H11",
    pts: 4,
    tier: "hard",
    statement:
      "Safe divide(a, b): return a/b, or None when b is 0. Print divide(10, 2) and divide(5, 0).",
  },
  {
    label: "H12",
    pts: 4,
    tier: "hard",
    statement:
      "Merge stock = {'pen': 5} with shipment = [('pen', 3), ('book', 2)] adding quantities. Print stock.",
  },
  {
    label: "H13",
    pts: 4,
    tier: "hard",
    statement: "Common letters: print sorted(set('workshop') & set('code')) as a list.",
  },
  {
    label: "H14",
    pts: 4,
    tier: "hard",
    statement:
      "Running balance: start 0, apply ops = [('+', 100), ('-', 30), ('+', 20)] with a function. Print 90.",
  },
  {
    label: "H15",
    pts: 4,
    tier: "hard",
    statement:
      "Validate sudoku row [5, 3, 5, 7]: print 'bad' if len(set(row)) != len(row) else 'ok'.",
  },
  {
    label: "H16",
    pts: 4,
    tier: "hard",
    statement: "Distance: p1 = (0, 0), p2 = (6, 8). Unpack both, print math.sqrt(dx*dx + dy*dy).",
  },
  {
    label: "H17",
    pts: 4,
    tier: "hard",
    statement:
      "Topper: marks = {'Anu': 90, 'Dev': 92, 'Mia': 88}. Return name of highest with max() + key. Print it.",
  },
  {
    label: "H18",
    pts: 4,
    tier: "hard",
    statement:
      "Chunk nums = [1, 2, 3, 4, 5] into groups of 2: [[1, 2], [3, 4], [5]]. Print with range steps.",
  },
  {
    label: "H19",
    pts: 4,
    tier: "hard",
    statement: "Memoized fib: fib(30) with a dict cache so it returns instantly. Print fib(30).",
  },
  {
    label: "H20",
    pts: 4,
    tier: "hard",
    statement:
      "Scoreboard: scores = {'CC1': 12, 'CC2': 15}. Print the winner and margin using unpacking + f-string.",
  },
];
