// Day 2 public statements. No hints or answers in this module.
import type { Question } from "./question";

export const DAY2: Question[] = [
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
    statement: "From emails = 'a@x.com,B@X.COM', split on comma and print each address lowercased.",
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
    statement: "Find the longest word in s = 'py workshop rocks today' with a for loop. Print it.",
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
];
