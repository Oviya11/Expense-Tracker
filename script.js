// Get saved income and expense from local storage
let income = Number(localStorage.getItem("income")) || 0;
let expense = Number(localStorage.getItem("expense")) || 0;

// Get saved transactions
let transactions =
JSON.parse(localStorage.getItem("transactions")) || [];

// Display income and expense
document.getElementById("income").innerText = "₹" + income;
document.getElementById("expense").innerText = "₹" + expense;

// Calculate balance
updateBalance();

// Load old transactions
transactions.forEach(function(item){
    let li = document.createElement("li");
    li.innerText = item;
    document.getElementById("list").appendChild(li);
});

// Add income
function addIncome(){

    // Get input values
    let desc = document.getElementById("desc").value;
    let amount = Number(document.getElementById("amount").value);

    // Update income
    income += amount;

    // Save income
    localStorage.setItem("income", income);

    // Display income
    document.getElementById("income").innerText = "₹" + income;

    // Update balance
    updateBalance();

    // Create transaction item
    let li = document.createElement("li");
    li.innerText = "+ " + desc + " ₹" + amount;

    document.getElementById("list").appendChild(li);

    // Save transaction
    transactions.push("+ " + desc + " ₹" + amount);

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
}

// Add expense
function addExpense(){

    // Get input values
    let desc = document.getElementById("desc").value;
    let amount = Number(document.getElementById("amount").value);

    // Update expense
    expense += amount;

    // Save expense
    localStorage.setItem("expense", expense);

    // Display expense
    document.getElementById("expense").innerText = "₹" + expense;

    // Update balance
    updateBalance();

    // Create transaction item
    let li = document.createElement("li");
    li.innerText = "- " + desc + " ₹" + amount;

    document.getElementById("list").appendChild(li);

    // Save transaction
    transactions.push("- " + desc + " ₹" + amount);

    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );
}

// Calculate balance
function updateBalance(){

    let balance = income - expense;

    // Display balance
    document.getElementById("balance").innerText = "₹" + balance;
}
