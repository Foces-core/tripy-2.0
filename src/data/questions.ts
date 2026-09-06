// Public question bank. No hints, solutions, or answers in this module,
// so the student page bundle never contains them.
export type Question = {
  label: string;
  pts: 1 | 2 | 4;
  tier: "easy" | "medium" | "hard";
  statement: string;
};

// Day 1: print, input, variables, types, conversions, operators + precedence, if/elif/else.
export const QUESTIONS: Record<number, Question[]> = {
  1: [
    {
      label: "E1 — Hello print",
      pts: 1,
      tier: "easy",
      statement: "Print Hello, Tripy on the screen.",
    },
    {
      label: "E2 — Two lines",
      pts: 1,
      tier: "easy",
      statement: "Print your name on line 1 and your lab (CC1 or CC2) on line 2.",
    },
    {
      label: "E3 — Name variable",
      pts: 1,
      tier: "easy",
      statement: "Store your name in a variable and print it.",
    },
    {
      label: "E4 — Echo input",
      pts: 1,
      tier: "easy",
      statement: "Take a word as input and print it back.",
    },
    {
      label: "E5 — Add two numbers",
      pts: 1,
      tier: "easy",
      statement: "Take two numbers as input and print their sum.",
    },
    {
      label: "E6 — Subtract",
      pts: 1,
      tier: "easy",
      statement: "Take two numbers and print the first minus the second.",
    },
    {
      label: "E7 — Multiply",
      pts: 1,
      tier: "easy",
      statement: "Take two numbers and print their product.",
    },
    {
      label: "E8 — Divide",
      pts: 1,
      tier: "easy",
      statement: "Take two numbers and print a / b.",
    },
    {
      label: "E9 — Floor division",
      pts: 1,
      tier: "easy",
      statement: "Take two numbers and print how many full times b fits in a.",
    },
    {
      label: "E10 — Remainder",
      pts: 1,
      tier: "easy",
      statement: "Take two numbers and print the remainder of a divided by b.",
    },
    {
      label: "E11 — Power",
      pts: 1,
      tier: "easy",
      statement: "Take a and b and print a raised to b.",
    },
    {
      label: "E12 — Precedence",
      pts: 1,
      tier: "easy",
      statement: "Take a, b, c. Print a + b * c.",
    },
    {
      label: "E13 — Brackets win",
      pts: 1,
      tier: "easy",
      statement: "Take a, b, c. Print (a + b) * c.",
    },
    {
      label: "E14 — Input type",
      pts: 1,
      tier: "easy",
      statement: "Take any input and print its type.",
    },
    {
      label: "E15 — To int",
      pts: 1,
      tier: "easy",
      statement: "Take a decimal number as text and print it as an integer.",
    },
    {
      label: "E16 — To float",
      pts: 1,
      tier: "easy",
      statement: "Take a whole number and print it as a float.",
    },
    {
      label: "E17 — Even or odd",
      pts: 1,
      tier: "easy",
      statement: "Take a number and print even or odd.",
    },
    {
      label: "E18 — Positive check",
      pts: 1,
      tier: "easy",
      statement: "Print positive if the input is above 0, else print negative.",
    },
    {
      label: "E19 — Pass mark",
      pts: 1,
      tier: "easy",
      statement: "Print pass if marks are 40 or more, else fail.",
    },
    {
      label: "E20 — Bigger of two",
      pts: 1,
      tier: "easy",
      statement: "Take two numbers and print the bigger one.",
    },
    {
      label: "M1 — Sign check",
      pts: 2,
      tier: "medium",
      statement: "Print positive, negative, or zero for the input.",
    },
    {
      label: "M2 — Add or sub menu",
      pts: 2,
      tier: "medium",
      statement: "Take a choice (add or sub) plus two numbers, print the result.",
    },
    {
      label: "M3 — Average of 3",
      pts: 2,
      tier: "medium",
      statement: "Take 3 marks and print their average.",
    },
    {
      label: "M4 — Celsius to F",
      pts: 2,
      tier: "medium",
      statement: "Take Celsius and print Fahrenheit. F = C * 9/5 + 32.",
    },
    {
      label: "M5 — Largest of 3",
      pts: 2,
      tier: "medium",
      statement: "Take 3 numbers and print the largest.",
    },
    {
      label: "M6 — Grade bands",
      pts: 2,
      tier: "medium",
      statement: "Marks 90+ print A, 75+ print B, 60+ print C, 40+ print D, else F.",
    },
    {
      label: "M7 — Divisible by 5 and 11",
      pts: 2,
      tier: "medium",
      statement: "Print yes if the number divides by both 5 and 11, else no.",
    },
    {
      label: "M8 — Vowel check",
      pts: 2,
      tier: "medium",
      statement: "Take one letter and print vowel or consonant.",
    },
    {
      label: "M9 — Teen check",
      pts: 2,
      tier: "medium",
      statement: "Print teen if age is 13 to 19 inclusive, else not teen.",
    },
    {
      label: "M10 — FizzBuzz lite",
      pts: 2,
      tier: "medium",
      statement:
        "Print fizz if divisible by 3, buzz if by 5, fizzbuzz if by both, else the number.",
    },
    {
      label: "M11 — Swap two",
      pts: 2,
      tier: "medium",
      statement: "Take two numbers, swap them, print both on one line.",
    },
    {
      label: "M12 — Minutes to sec",
      pts: 2,
      tier: "medium",
      statement: "Take minutes and seconds, print total seconds.",
    },
    {
      label: "M13 — Discount bill",
      pts: 2,
      tier: "medium",
      statement: "Take price and discount percent, print the final price.",
    },
    {
      label: "M14 — Day name",
      pts: 2,
      tier: "medium",
      statement: "Take 1-7 and print Monday to Sunday. Anything else prints invalid.",
    },
    {
      label: "M15 — Absolute value",
      pts: 2,
      tier: "medium",
      statement: "Print the absolute value without using abs().",
    },
    {
      label: "M16 — Triangle valid",
      pts: 2,
      tier: "medium",
      statement: "Take 3 sides. Print valid if they form a triangle, else invalid.",
    },
    {
      label: "M17 — Simple interest",
      pts: 2,
      tier: "medium",
      statement: "Take principal, rate, years. Print interest = P*R*T/100.",
    },
    {
      label: "M18 — Even and in range",
      pts: 2,
      tier: "medium",
      statement: "Print yes if the number is even and between 10 and 99, else no.",
    },
    {
      label: "M19 — Smallest of 3",
      pts: 2,
      tier: "medium",
      statement: "Take 3 numbers and print the smallest.",
    },
    {
      label: "M20 — Char or digit",
      pts: 2,
      tier: "medium",
      statement: "Take one character. Print digit if 0-9, letter if a-z or A-Z, else other.",
    },
    {
      label: "H1 — Full menu calc",
      pts: 4,
      tier: "hard",
      statement:
        "Menu: add, sub, mul, div. Take choice + two numbers, print result. Div by zero prints cannot divide by zero.",
    },
    {
      label: "H2 — Leap year",
      pts: 4,
      tier: "hard",
      statement: "Print leap if the year is a leap year, else common.",
    },
    {
      label: "H3 — Triangle type",
      pts: 4,
      tier: "hard",
      statement: "Take 3 sides. Print invalid, equilateral, isosceles, or scalene.",
    },
    {
      label: "H4 — Roots nature",
      pts: 4,
      tier: "hard",
      statement:
        "Take a, b, c of ax^2+bx+c. Print real-equal, real-distinct, or imaginary from D = b*b-4ac.",
    },
    {
      label: "H5 — Power bill slabs",
      pts: 4,
      tier: "hard",
      statement:
        "First 100 units cost 3 each, next 100 cost 5 each, rest cost 8 each. Print the bill.",
    },
    {
      label: "H6 — RPS winner",
      pts: 4,
      tier: "hard",
      statement: "Two players enter rock, paper, or scissors. Print player1, player2, or draw.",
    },
    {
      label: "H7 — ATM withdraw",
      pts: 4,
      tier: "hard",
      statement:
        "Take balance and amount. Print new balance if amount is a multiple of 100 and within balance, else print denied.",
    },
    {
      label: "H8 — Login check",
      pts: 4,
      tier: "hard",
      statement: "Username must be admin and password tripy123. Print welcome or denied.",
    },
    {
      label: "H9 — Seconds to h:m:s",
      pts: 4,
      tier: "hard",
      statement: "Take total seconds, print hours minutes seconds.",
    },
    {
      label: "H10 — Middle of 3",
      pts: 4,
      tier: "hard",
      statement: "Take 3 different numbers and print the middle one.",
    },
    {
      label: "H11 — 3-digit palindrome",
      pts: 4,
      tier: "hard",
      statement: "Take a 3-digit number. Print yes if it reads the same backwards.",
    },
    {
      label: "H12 — Armstrong 3-digit",
      pts: 4,
      tier: "hard",
      statement: "Print armstrong if the number equals the sum of the cubes of its digits.",
    },
    {
      label: "H13 — Gross salary",
      pts: 4,
      tier: "hard",
      statement:
        "Basic <= 10000: HRA 20%, DA 80%. Else HRA 25%, DA 90%. Print gross = basic + HRA + DA.",
    },
    {
      label: "H14 — Exam pass",
      pts: 4,
      tier: "hard",
      statement: "Take 3 subject marks. Print pass if each is 40+ and average is 50+, else fail.",
    },
    {
      label: "H15 — Sort 3 numbers",
      pts: 4,
      tier: "hard",
      statement: "Take 3 numbers and print them in ascending order without sort().",
    },
    {
      label: "H16 — Speed fine",
      pts: 4,
      tier: "hard",
      statement:
        "Speed <= 60 prints ok, 61-80 prints fine 500, 81-100 prints fine 1000, above prints seized.",
    },
    {
      label: "H17 — Voter + senior",
      pts: 4,
      tier: "hard",
      statement: "Age < 18 prints minor, 18-59 prints voter, 60+ prints senior voter.",
    },
    {
      label: "H18 — Digit sum vs product",
      pts: 4,
      tier: "hard",
      statement:
        "Take a 2-digit number. Print sum-first if digit sum > digit product, else product-first.",
    },
    {
      label: "H19 — Extended calc",
      pts: 4,
      tier: "hard",
      statement:
        "Menu add, sub, mul, div, mod, pow. Guard div/mod by zero. Unknown op prints unknown.",
    },
    {
      label: "H20 — Largest of 4",
      pts: 4,
      tier: "hard",
      statement: "Take 4 numbers and print the largest without max().",
    },
  ],
  2: [
    {
      label: "E1",
      pts: 1,
      tier: "easy",
      statement: "Use a while loop to print the numbers 1, 2, 3 each on its own line.",
    },
    {
      label: "E2",
      pts: 1,
      tier: "easy",
      statement: "Use a while loop to print 'Hi' exactly 3 times.",
    },
    {
      label: "E3",
      pts: 1,
      tier: "easy",
      statement:
        "Loop i from 1 upward with while. Stop the loop with break when i equals 4. Print each i.",
    },
    {
      label: "E4",
      pts: 1,
      tier: "easy",
      statement: "Use a for loop over range(5) with continue to skip the number 2. Print the rest.",
    },
    {
      label: "E5",
      pts: 1,
      tier: "easy",
      statement: "Use a for loop to print each number from 0 to 4.",
    },
    {
      label: "E6",
      pts: 1,
      tier: "easy",
      statement: "Use a for loop to print each character of the string 'CAT' on its own line.",
    },
    {
      label: "E7",
      pts: 1,
      tier: "easy",
      statement: "Use range() in a for loop to print 1 through 5.",
    },
    {
      label: "E8",
      pts: 1,
      tier: "easy",
      statement: "Use range() with a step to print 0, 2, 4, 6, 8.",
    },
    {
      label: "E9",
      pts: 1,
      tier: "easy",
      statement: "Convert the string 'HELLO' to lowercase with lower() and print it.",
    },
    {
      label: "E10",
      pts: 1,
      tier: "easy",
      statement: "Convert the string 'kerala' to uppercase with upper() and print it.",
    },
    {
      label: "E11",
      pts: 1,
      tier: "easy",
      statement: "From s = 'python', print the first 3 characters using slicing.",
    },
    {
      label: "E12",
      pts: 1,
      tier: "easy",
      statement: "From s = 'python', print the last 2 characters using slicing.",
    },
    {
      label: "E13",
      pts: 1,
      tier: "easy",
      statement: "Use a while loop to print the length countdown of s = 'abc': print 3, 2, 1.",
    },
    {
      label: "E14",
      pts: 1,
      tier: "easy",
      statement: "Loop i from 1 to 6. Inside, use a nested if to print only the even numbers.",
    },
    {
      label: "E15",
      pts: 1,
      tier: "easy",
      statement: "Use a while loop to count down from 5 to 1, then print 'Go!'.",
    },
    {
      label: "E16",
      pts: 1,
      tier: "easy",
      statement: "Use a for loop with range(3) to print 'CEC' three times.",
    },
    {
      label: "E17",
      pts: 1,
      tier: "easy",
      statement: "From s = 'workshop', print the middle slice 'rks' using indexes.",
    },
    {
      label: "E18",
      pts: 1,
      tier: "easy",
      statement:
        "Read a word with input(). Print 'YES' if its uppercase form equals 'PYTHON', else 'NO'.",
    },
    {
      label: "E19",
      pts: 1,
      tier: "easy",
      statement:
        "Use an infinite while loop that reads input() and breaks when the user types 'stop'.",
    },
    {
      label: "E20",
      pts: 1,
      tier: "easy",
      statement: "Use a while loop to add 1+2+3+4+5 and print the total 15.",
    },
    {
      label: "M1",
      pts: 2,
      tier: "medium",
      statement:
        "Search the string 'workshop' with a for loop. Break and print the index when you find 's'.",
    },
    {
      label: "M2",
      pts: 2,
      tier: "medium",
      statement: "Count the vowels in s = 'celebration' with a for loop and print the count.",
    },
    {
      label: "M3",
      pts: 2,
      tier: "medium",
      statement: "Use a for loop with range() to print the sum of all odd numbers from 1 to 9.",
    },
    {
      label: "M4",
      pts: 2,
      tier: "medium",
      statement:
        "Grade calculator: marks = 72. Nested conditions: >=90 A, >=75 B, >=60 C, >=40 D, else Fail. Print the grade.",
    },
    {
      label: "M5",
      pts: 2,
      tier: "medium",
      statement:
        "From s = 'abcdefgh', print every 2nd character starting from 'a' using slice steps.",
    },
    {
      label: "M6",
      pts: 2,
      tier: "medium",
      statement: "Check if s = 'madam' is a palindrome using slicing. Print True or False.",
    },
    {
      label: "M7",
      pts: 2,
      tier: "medium",
      statement: "Print numbers 1 to 10 with a while loop, skipping multiples of 3 with continue.",
    },
    {
      label: "M8",
      pts: 2,
      tier: "medium",
      statement: "Read input. Print 'match' if it equals 'Foces' ignoring case, else 'no match'.",
    },
    {
      label: "M9",
      pts: 2,
      tier: "medium",
      statement:
        "Find and print the largest number in nums = [4, 9, 2, 11, 6] using a for loop (no max()).",
    },
    {
      label: "M10",
      pts: 2,
      tier: "medium",
      statement:
        "Print this pattern with nested for loops: * on line 1, ** on line 2, *** on line 3.",
    },
    {
      label: "M11",
      pts: 2,
      tier: "medium",
      statement: "Reverse s = 'python' with a while loop (no slicing) and print it.",
    },
    {
      label: "M12",
      pts: 2,
      tier: "medium",
      statement:
        "Classify age = 17 with nested conditions: under 13 Child, under 18 Teen, under 60 Adult, else Senior.",
    },
    {
      label: "M13",
      pts: 2,
      tier: "medium",
      statement: "From s = 'banana', print the slice that gives 'nan' (first occurrence).",
    },
    {
      label: "M14",
      pts: 2,
      tier: "medium",
      statement:
        "Count how many times 'a' appears in s = 'malayalam' with a for loop (no count()). Print it.",
    },
    {
      label: "M15",
      pts: 2,
      tier: "medium",
      statement: "Print the 5-times table from 5x1 to 5x5 using range(1, 6).",
    },
    {
      label: "M16",
      pts: 2,
      tier: "medium",
      statement:
        "Ticket price: age = 65. Under 5 free, under 18 half (50), 60+ senior (30), else 100. Print price.",
    },
    {
      label: "M17",
      pts: 2,
      tier: "medium",
      statement: "Print all numbers from 10 down to 1 with a while loop, skipping 5 with continue.",
    },
    {
      label: "M18",
      pts: 2,
      tier: "medium",
      statement:
        "Check password strength: pw = 'Abc123'. Print Strong only if len>=6 AND has a digit AND has upper. Else Weak.",
    },
    {
      label: "M19",
      pts: 2,
      tier: "medium",
      statement:
        "From emails = 'a@x.com,B@X.COM', split on comma and print each address lowercased.",
    },
    {
      label: "M20",
      pts: 2,
      tier: "medium",
      statement:
        "FizzBuzz 1-15: multiples of 3 'Fizz', of 5 'Buzz', of both 'FizzBuzz', else the number.",
    },
    {
      label: "H1",
      pts: 4,
      tier: "hard",
      statement: "Check if n = 29 is prime with a while loop. Print 'prime' or 'not prime'.",
    },
    {
      label: "H2",
      pts: 4,
      tier: "hard",
      statement:
        "Simulate login: correct = 'py123'. Allow 3 attempts via input() in a while loop. Print 'in' on success, 'locked' after 3 fails.",
    },
    {
      label: "H3",
      pts: 4,
      tier: "hard",
      statement: "Print the 3x3 multiplication grid (1-3 rows, 1-3 cols) with nested for loops.",
    },
    {
      label: "H4",
      pts: 4,
      tier: "hard",
      statement:
        "Collatz: start n = 6. While n != 1: if even halve, else 3n+1. Print each step count and total steps.",
    },
    {
      label: "H5",
      pts: 4,
      tier: "hard",
      statement: "Find the 2nd largest in nums = [5, 9, 2, 9, 7] with loops (no sort()). Print 7.",
    },
    {
      label: "H6",
      pts: 4,
      tier: "hard",
      statement: "Reverse each word in s = 'py is fun' with loops (no[::-1]). Print 'yp si nuf'.",
    },
    {
      label: "H7",
      pts: 4,
      tier: "hard",
      statement:
        "Sliding windows: from s = 'abcdef', print every 3-char window (abc, bcd, cde, def).",
    },
    {
      label: "H8",
      pts: 4,
      tier: "hard",
      statement:
        "Print a number triangle: row i (1-4) contains i repeated i times, using nested loops.",
    },
    {
      label: "H9",
      pts: 4,
      tier: "hard",
      statement:
        "Validate email = 'a@b.com': must contain exactly one @ with text before/after and a dot after @. Print valid/invalid.",
    },
    {
      label: "H10",
      pts: 4,
      tier: "hard",
      statement: "Sum the digits of n = 4821 with a while loop. Print 15.",
    },
    {
      label: "H11",
      pts: 4,
      tier: "hard",
      statement:
        "Count words, vowels and consonants in s = 'Hi all 123' with one for loop. Print the 3 counts.",
    },
    {
      label: "H12",
      pts: 4,
      tier: "hard",
      statement:
        "Guessing game: secret = 7. Read guesses with input() in a while loop. Print 'low'/'high' hints, 'win' when equal. Count tries.",
    },
    {
      label: "H13",
      pts: 4,
      tier: "hard",
      statement:
        "Remove duplicates from s = 'programming' keeping first occurrence order, with a loop. Print 'progamin'.",
    },
    {
      label: "H14",
      pts: 4,
      tier: "hard",
      statement:
        "Print the factorial-style running product 1..6 with a for loop, printing each running value.",
    },
    {
      label: "H15",
      pts: 4,
      tier: "hard",
      statement:
        "ATM: balance = 1000. Loop input() commands 'D 200' / 'W 150' / 'Q'. Apply, reject overdraft, print balance at Q.",
    },
    {
      label: "H16",
      pts: 4,
      tier: "hard",
      statement:
        "Find the longest word in s = 'py workshop rocks today' with a for loop. Print it.",
    },
    {
      label: "H17",
      pts: 4,
      tier: "hard",
      statement:
        "Print all pairs (i,j) with i in 1..3, j in 1..3, skipping pairs where i == j (continue).",
    },
    {
      label: "H18",
      pts: 4,
      tier: "hard",
      statement:
        "Caesar shift: shift each lowercase letter of s = 'abc xyz' forward by 1 (z wraps to a) with a loop. Print result.",
    },
    {
      label: "H19",
      pts: 4,
      tier: "hard",
      statement:
        "Nested menu: outer while reads input(); 'bill' prints total of prices [50, 30, 20] summed with a for loop; 'quit' breaks.",
    },
    {
      label: "H20",
      pts: 4,
      tier: "hard",
      statement: "Diamond: print lines 1,2,3,2,1 stars wide using two for loops (up then down).",
    },
  ],
  3: [
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
      statement:
        "Sort nums = [5, 1, 4] without changing the original: print sorted(nums) then nums.",
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
      statement:
        "Flatten nested = [[1, 2], [3], [4, 5]] into one list with nested loops. Print it.",
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
  ],
};

// Passwords live in Convex (seeded). This export kept for docs only. Rotate after event.
