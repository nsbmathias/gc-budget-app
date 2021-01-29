// selectors
let updateBudgetButton = document.querySelector("#update_budget");
let addExpenseButton = document.querySelector("#add_expense");
let monthlyBudget = document.querySelector("#monthly_budget");
let incomeInput = document.querySelector("#income_input");
let remainingBalance = document.querySelector("#remaining_balance");
let amountInput = document.querySelector("#amount_input");
let nameInput = document.querySelector("#name_input");
let expenseList = document.querySelector("#expense_list");
let totalExpenses = document.querySelector("#total_expenses");

//events
updateBudgetButton.onclick = updateBudget;
addExpenseButton.onclick = addExpense;

//variables
let monthlyIncome = 0;
let expenses = [];
let expenseTotal = 0;
let balance = 0;

//function
function updateBudget(event) {
    event.preventDefault();
    monthlyIncome = incomeInput.value;
    monthlyBudget.innerText = "$" + monthlyIncome
    updateBalance();
}

function updateBalance() {
    balance = monthlyIncome - expenseTotal;
    remainingBalance.innerText = "$" + balance;
}

function addExpense(event) {
    event.preventDefault();
    let expense = {
        name: nameInput.value,
        amount: amountInput.value
    };
    let newExpense = document.createElement("p");
    newExpense.innerText = expense.name + ": $" + expense.amount;
    expenseList.appendChild(newExpense)
    expenseAmount = parseInt(amountInput.value);
    expenses.push(expenseAmount);
    updateExpenseTotal();
}

function updateExpenseTotal() {
    expenseTotal = 0;
    for (let i = o; i < expenses.length; i++) {
        expenseTotal = expenseTotal + expeses[i];
    }
    totalExpenses.innerText = $ + expenseTotal;
    updateBalance();
}