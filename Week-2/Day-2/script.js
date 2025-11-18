// -------------------------
// Task 1 – map() + filter()
// -------------------------
function runTask1() {
    const prices = [120, 250, 300, 450, 600];

    const filtered = prices.filter(p => p > 250);
    const discounted = filtered.map(p => p * 0.9);

    document.getElementById("task1-output").innerHTML =
        `Original: ${prices}<br>
         Filtered (>250): ${filtered}<br>
         Discounted (10% off): ${discounted}`;
}

// -------------------------
// Task 2 – reduce()
// -------------------------
function runTask2() {
    const expenses = [
        { category: "Food", amount: 300 },
        { category: "Transport", amount: 150 },
        { category: "Shopping", amount: 400 },
    ];

    const total = expenses.reduce((sum, item) => sum + item.amount, 0);

    document.getElementById("task2-output").innerText =
        `Total Expense: ₹${total}`;
}

// -------------------------
// Task 3 – map(), filter(), reduce()
// -------------------------
function runTask3() {
    const scores = [45, 80, 90, 35, 60, 75];

    const passing = scores.filter(s => s >= 50);
    const bonus = passing.map(s => s + 10);
    const total = bonus.reduce((sum, s) => sum + s, 0);

    document.getElementById("task3-output").innerHTML =
        `Passing: ${passing}<br>
         After Bonus: ${bonus}<br>
         Total Score: ${total}`;
}
