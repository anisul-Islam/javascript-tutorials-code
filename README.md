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
<br/> <br/>



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
<br/> <br/>



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
<br/> <br/>



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
<br/> <br/>



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
<br/> <br/>

## Personal Budget Tracker Challenge (Phase 6 - loop control statement)
```js
//! 🛠 🛠 Personal Budget Tracker Challenge (Phase 6 - loop control statement)

/*
📌 Challenge Requirements:
- Ask the user for their name and store it in a variable.
- Ask the user for their total income using prompt().
- Ask the user how many expenses they have, then use a loop to collect expense amounts dynamically.
- make sure to validate all the inputs
- Perform all calculations (tax, balance, savings, financial status).
- Show the results in the console.
*/

/*
📊 Personal Budget Tracker
User: Alex
💰 Total Income: $5000
💸 Total Expenses: $2200
📉 Tax Deducted (10%): $500
💲 Net Income After Tax: $4500
🟢 Remaining Balance: $2300
💾 Savings (20% of balance): $460
⚠️ Needs Improvement. Consider reducing expenses.
*/

// Ask for user input dynamically
const userName = prompt('Enter your name: ');
const income = parseFloat(prompt('Enter your total income: '));

// Ask how many expenses the user has
const numberOfExpenses = parseInt(prompt('How many expenses do you have? '));

// validate inputes to ensure they are numbers

if (
  isNaN(income) ||
  isNaN(numberOfExpenses) ||
  income <= 0 ||
  numberOfExpenses < 0
) {
  console.log('⚠️ Invalid input. Please enter valid numbers.');
} else {
  let totalExpenses = 0;

  // collect expenses dynamically
  for (let i = 1; i <= numberOfExpenses; i++) {
    let expense = parseFloat(prompt(`Enter expense ${i}: `));

    if (isNaN(expense) || expense < 0) {
      console.log(`⚠️ Invalid input for expense ${i}, setting it it $0`);
      expense = 0;
    }
    totalExpenses += expense;
  }

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
}

```
<br/> <br/>


## Personal Budget Tracker Challenge (Phase 7 - Array)

```js
//! 🛠 🛠 Personal Budget Tracker Challenge (Phase 7 - Array)

/*
📌 Challenge Requirements:
- Ask the user how many expenses they have, then store each expense inside an array.
- Use a loop to process the array and calculate the total expenses.
*/

/*
📊 Personal Budget Tracker
User: Alex
💰 Total Income: $5000
💸 Total Expenses: $2200
📉 Tax Deducted (10%): $500
💲 Net Income After Tax: $4500
🟢 Remaining Balance: $2300
💾 Savings (20% of balance): $460
⚠️ Needs Improvement. Consider reducing expenses.
*/

// Ask for user input dynamically
const userName = prompt('Enter your name: ');
const income = parseFloat(prompt('Enter your total income: '));

// Ask how many expenses the user has
const numberOfExpenses = parseInt(prompt('How many expenses do you have? '));

// validate inputes to ensure they are numbers

if (
  isNaN(income) ||
  isNaN(numberOfExpenses) ||
  income <= 0 ||
  numberOfExpenses < 0
) {
  console.log('⚠️ Invalid input. Please enter valid numbers.');
} else {
  let totalExpenses = 0;

  // collect expenses dynamically
  for (let i = 1; i <= numberOfExpenses; i++) {
    const expenses = [];
    let expense = parseFloat(prompt(`Enter expense ${i}: `));

    if (isNaN(expense) || expense < 0) {
      console.log(`⚠️ Invalid input for expense ${i}, setting it it $0`);
      expense = 0;
    }
    expenses.push(expense);

    // Calculate total expenses using the array
    for (let index = 0; index < expenses.length; index++) {
      totalExpenses += expenses[index];
    }
  }

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
}

```

<br/> <br/>

## Personal Budget Tracker Challenge (Phase 8 - Function)

```js
//@ts-nocheck
//! 🛠 🛠 Personal Budget Tracker Challenge (Phase 8 - Function)

/*
📌 Challenge Requirements:
Use multiple small functions for:
- Getting user input (text & number)
- Handling expenses (getting expenses, calculating total expenses)
- Performing financial calculations (tax, net income, balance, savings)
- Determining financial status
- Displaying results in a structured format
*/

// Function to get user input

function getUserInput(promptMessage, isNumber = false) {
  const userInput = prompt(promptMessage);
  return isNumber ? parseFloat(userInput) : userInput;
}

function getExpenses(numberOfExpenses) {
  const expenses = [];
  // collect expenses dynamically
  for (let i = 1; i <= numberOfExpenses; i++) {
    let expense = getUserInput(`Enter expense ${i}: `, true);
    if (isNaN(expense) || expense < 0) {
      console.log(`⚠️ Invalid input for expense ${i}, setting it it $0`);
      expense = 0;
    }
    expenses.push(expense);
  }
  return expenses;
}

function calculateTotalExpenses(expenses) {
  // Calculate total expenses using the array
  let totalExpenses = 0;
  for (let index = 0; index < expenses.length; index++) {
    totalExpenses += expenses[index];
  }
  return totalExpenses;
}

function calculateTax(income, taxRate) {
  return income * taxRate;
}
function calculateNetIncome(income, tax) {
  return income - tax;
}
function calculateBalance(netIcome, totalExpenses) {
  return netIcome - totalExpenses;
}
function calculateSavings(balance, savingPercentage) {
  return balance * savingPercentage;
}
function getFinancialStatus(savings) {
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
  return finalStatus;
}

function displayResults(
  userName,
  income,
  totalExpenses,
  tax,
  netIncome,
  balance,
  savings,
  finalStatus
) {
  console.log('📊 Personal Budget Tracker App');
  console.log(`User: ${userName}`);
  console.log(`💰 Total Income: $${income}`);
  console.log(`💸 Total Expenses: $${totalExpenses}`);
  console.log(`📉 Tax Deducted (10%): $${tax}`);
  console.log(`💲 Net Income After Tax: $${netIncome}`);
  console.log(`🟢 Remaining Balance: $${balance}`);
  console.log(`💾 Savings (20% of balance): $${savings}`);
  console.log(finalStatus);

  const overspendingMessage = checkOverSpending(income, totalExpenses);
  if (overspendingMessage) {
    console.log(overspendingMessage);
  }
}

function checkOverSpending(income, totalExpenses) {
  // Check if expenses exceed income
  return totalExpenses > income
    ? '⚠️ Warning: You are spending more than your income!'
    : '';
}

// Main function to the run the budget tracker
function runBudgetTracker() {
  // Ask for user input dynamically
  const userName = getUserInput('Enter your name: ');
  const income = getUserInput('Enter your total income: ', true);

  // Ask how many expenses the user has
  const numberOfExpenses = getUserInput(
    'How many expenses do you have? ',
    true
  );

  // validate inputes to ensure they are numbers
  if (
    isNaN(income) ||
    isNaN(numberOfExpenses) ||
    income <= 0 ||
    numberOfExpenses < 0
  ) {
    console.log('⚠️ Invalid input. Please enter valid numbers.');
    return;
  } else {
    const expenses = getExpenses(numberOfExpenses);
    const totalExpenses = calculateTotalExpenses(expenses);
    // Tax deduction (10% of income)
    const tax = calculateTax(income, 0.1);

    // Net income after the tax
    const netIncome = calculateNetIncome(income, tax);

    // Calculate remaining balance
    const balance = calculateBalance(netIncome, totalExpenses);

    // Savings (20% of remaining balance)
    const savings = calculateSavings(balance, 0.2);

    // Determine the financial health status
    let finalStatus = getFinancialStatus(savings);

    displayResults(
      userName,
      income,
      totalExpenses,
      tax,
      netIncome,
      balance,
      savings,
      finalStatus
    );
  }
}

runBudgetTracker();

```
