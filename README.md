# Budget tracker App Challenge

## Personal Budget Tracker Challenge (Phase 1 - print with Console)

```js
//! 🛠 Personal Budget Tracker Challenge (Phase 1 - print with Console)
// Challenge Overview:Create a basic personal budget tracker that allows users to  displays their name, income amount and expenses amount using the console. Later, we will extend this project by adding variables, operators, functions, arrays, objects, and DOM manipulation.
// 📌 Challenge Requirements:
/*
Use console.log() to:
Display the user’s name.
Display the income, expenses.
Format the output neatly.
*/

// solution of Challenge 1
console.log('Anisul Islam');
console.log('3500 euros');
console.log('3200 euros');
```

##  Personal Budget Tracker Challenge (Phase 2 - Variables, Data Types)

```js

//! 🛠 Personal Budget Tracker Challenge (Phase 2 - Variables, Data Types)
// Challenge Overview:Create a basic personal budget tracker that allows users to enter their income and expenses, and then displays using the console. Later, we will extend this project by adding operators, functions, arrays, objects, and DOM manipulation.

// 📌 Challenge Requirements:
/*
Declare variables for:
User's name (string)
Income amount (number)
Expense amount (number)
Use console.log() to:
Display the user’s name.
Show the income, expenses.
Format the output neatly.
*/

// Declare variables
let userName = 'Anisul Islam'; // String
let income = 3500; // Number
let expenses = 3200; // Number

// Display the budget details in console
console.log('📊 Personal Budget Tracker');
console.log(userName);
console.log(income);
console.log(expenses);
```

## Personal Budget Tracker Challenge (Phase 3 - Operators: calculate the remaining balance)

```js


//! 🛠 Personal Budget Tracker Challenge (Phase 3 - Operators: calculate the remaining balance)
// Challenge Overview:Create a basic personal budget tracker that allows users to enter their incomes and expenses, and then displays their remaining balance using the console. Later, we will extend this project by adding functions, arrays, objects, and DOM manipulation.

// 📌 Challenge Requirements:
/*
Declare variables for:
User's name (string)
single Income amount (number)
multiple Expense amount (number)
Remaining balance (calculated)
Use console.log() to:
Display the user’s name.
Show the income, expenses, and balance.
Format the output neatly.
Add comments to explain calculation
*/

// Declare variables
let userName = 'John Doe'; // String
let income = 5000; // Number
let expenses1 = 3000; // Number
let expenses2 = 3000; // Number
let balance = income - expenses1 - expenses2; // Calculation

// Display the budget details in console
console.log('📊 Personal Budget Tracker');
console.log('User: ' + userName);
console.log('💰 Total Income: $' + income);
console.log('💸 Total Expenses: $' + expenses);
console.log('🟢 Remaining Balance: $' + balance);

```

## Personal Budget Tracker Challenge (Phase 4 - Arithmetic operators)

```js
//! 🛠 Personal Budget Tracker Challenge (Phase 4 - Arithmetic operators)
/*
📌 Challenge Requirements:
Use arithmetic operators (+, -, *, /, %) to:
- Calculate total expenses by summing multiple expenses such as rent, groceries, transport, entertainment.
- Apply tax deduction (e.g., 10% of income).
- Calculate savings percentage (e.g., 20% of remaining balance).
- Update console output to display the new calculations.
*/

/*
🎯 Expected Console Output:
📊 Personal Budget Tracker
User: John Doe
💰 Total Income: $5000
💸 Total Expenses: $2300
📉 Tax Deducted (10%): $500
💲 Net Income After Tax: $4500
🟢 Remaining Balance: $2200
💾 Savings (20% of balance): $440 
*/

const userName = 'Anisul Islam';
const income = 5000;

// Multiple expenses
let rent = 1200;
let groceries = 600;
let transport = 200;
let entertainment = 300;

// calculate the expenses
let totalExpenses = rent + groceries + transport + entertainment;

// Tax deduction (10% of income)
let tax = income * 0.1;

// Net income after the tax
let netIcome = income - tax;

// Calculate remaining balance
let balance = netIcome - totalExpenses;

// Savings (20% of remaining balance)
let savings = balance * 0.2;

console.log('📊 Personal Budget Tracker App');
console.log('User: ' + userName);
console.log('💰 Total Income: $' + income);
console.log('💸 Total Expenses: $' + totalExpenses);
console.log('📉 Tax Deducted (10%): $' + tax);
console.log('💲 Net Income After Tax: $' + netIcome);
console.log('🟢 Remaining Balance: $' + balance);
console.log('💾 Savings (20% of balance): $' + savings);

```

## Personal Budget Tracker Challenge (Phase 5 - conditional control statement)

```js
  //! 🛠 Personal Budget Tracker Challenge (Phase 5 - conditional control statement)
/*
📌 Challenge Requirements:
Use if,else, relational operators:

Use if-else conditions to categorize the user’s financial status based on savings:

Excellent: If savings ≥ $1000
Good: If savings are between $500 - $999
Needs Improvement: If savings are between $100 - $499
Critical: If savings < $100
Use if-else conditions to determine if the user is overspending:

Show a warning if expenses are greater than income.
Enhance Console Output to display the user’s financial health status.
*/

/*
🎯 Expected Console Output:
📊 Personal Budget Tracker
User: John Doe
💰 Total Income: $5000
💸 Total Expenses: $2300
📉 Tax Deducted (10%): $500
💲 Net Income After Tax: $4500
🟢 Remaining Balance: $2200
💾 Savings (20% of balance): $440
*/

// '⚠️ Warning: You are spending more than your income!';

const userName = 'Anisul Islam';
const income = 5000;

// Multiple expenses
const rent = 4200;
const groceries = 600;
const transport = 200;
const entertainment = 300;

// calculate the expenses
const totalExpenses = rent + groceries + transport + entertainment;

// Tax deduction (10% of income)
const tax = income * 0.1;

// Net income after the tax
const netIcome = income - tax;

// Calculate remaining balance
const balance = netIcome - totalExpenses;

// Savings (20% of remaining balance)
const savings = balance * 0.2;

// Determine the financial health status
let finalStatus = '';
if (savings >= 1000) {
  finalStatus = '💰 Excellent! You are saving well!';
} else if (savings >= 500) {
  finalStatus = '✅ Good! You have a decent savings amount.';
} else if (savings >= 100) {
  finalStatus = '⚠️ Needs Improvement. Consider reducing expenses.';
} else {
  finalStatus = '🚨 Critical! Your savings are too low!';
}

// Check if expenses exceed income
let overspendingMessage = '';
if (totalExpenses > income) {
  overspendingMessage = '⚠️ Warning: You are spending more than your income!';
}

console.log('📊 Personal Budget Tracker App');
console.log(`User: ${userName}`);
console.log(`💰 Total Income: $${income}`);
console.log(`💸 Total Expenses: $${totalExpenses}`);
console.log(`📉 Tax Deducted (10%): $${tax}`);
console.log(`💲 Net Income After Tax: $${netIcome}`);
console.log(`🟢 Remaining Balance: $${balance}`);
console.log(`💾 Savings (20% of balance): $${savings}`);
console.log(finalStatus);
if (overspendingMessage) {
  console.log(overspendingMessage);
}

```
