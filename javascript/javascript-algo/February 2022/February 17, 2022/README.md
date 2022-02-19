[Coding Meetup #10 - Higher-Order Functions Series - Create usernames](https://www.codewars.com/kata/coding-meetup-number-10-higher-order-functions-series-create-usernames)

Given the following input array:

var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];
write a function that adds the username property to each object in the input array:

[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
    username: 'emilyn1990' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
    username: 'nore2000' }
]
The value of the username property is composed by concatenating:

firstName in lower-case;
first letter of the lastName in lower-case; and
the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.
Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer.
Lastname will always be one upper-cased letter followed by dot, e.g. 'N.'
Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter.




This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.

Here is the full list of the katas in the Coding Meetup series:

Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

Coding Meetup #2 - Higher-Order Functions Series - Greet developers

Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?

Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer

Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages

Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?

Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer

Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?

Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?

Coding Meetup #10 - Higher-Order Functions Series - Create usernames

Coding Meetup #11 - Higher-Order Functions Series - Find the average age

Coding Meetup #12 - Higher-Order Functions Series - Find GitHub admins

Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?

Coding Meetup #14 - Higher-Order Functions Series - Order the food

Coding Meetup #15 - Higher-Order Functions Series - Find the odd names

Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details