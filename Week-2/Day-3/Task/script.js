// -----------------------
// Task 1 – setTimeout
// -----------------------
function runTask1() {
    const output = document.getElementById("task1-output");
    output.innerText = "Fetching user details...";

    setTimeout(() => {
        output.innerText += "\nUser data received";

        setTimeout(() => {
            output.innerText += "\nProcessing data...";
        }, 1500);

    }, 2000);
}


// -----------------------
// Task 2 – Promise Example
// -----------------------
function runTask2() {
    const output = document.getElementById("task2-output");
    output.innerText = "Checking network...";

    const simulateFetch = new Promise((resolve, reject) => {
        let isOnline = true;

        setTimeout(() => {
            if (isOnline) resolve("Data fetched successfully");
            else reject("Network error");
        }, 1500);
    });

    simulateFetch
        .then(msg => output.innerText = msg)
        .catch(err => output.innerText = err);
}


// -----------------------
// Task 3 – Async/Await + Fetch API
// -----------------------
async function runTask3() {
    const output = document.getElementById("task3-output");
    output.innerText = "Loading posts...";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const posts = await response.json();

        let result = "Latest Posts:\n\n";

        posts.forEach(post => {
            result += `• ${post.title}\n`;
        });

        output.innerText = result;

    } catch (error) {
        output.innerText = "Error loading posts.";
    }
}
