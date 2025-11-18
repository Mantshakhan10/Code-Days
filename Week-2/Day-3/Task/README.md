# Week 2 – Day 3 Task: Asynchronous JavaScript Tasks

This folder contains tasks focused on asynchronous JavaScript, including callbacks, Promises, and async/await.

---

## Task 1 – Simulate API Call using setTimeout

### Description
A simple simulation of an API call using `setTimeout` to show asynchronous behavior.

### Features
- Logs **"Fetching user details..."**
- After 2 seconds, logs **"User data received"**
- Extension: Add another nested timeout for **"Processing Data..."**

---

## Task 2 – Promise Example

### Description
A Promise that simulates a network fetch. It resolves or rejects based on the `isOnline` flag.

### Behaviors
- If online → logs **"Data fetched successfully"**
- If offline → logs **"Network error"**
- Handled using `.then()` and `.catch()`

---

## Task 3 – Async/Await with Fetch

### Description
Uses `async/await` to fetch the latest 5 posts from the JSONPlaceholder API.

### Steps
1. Fetch data from the API  
2. Convert the response to JSON  
3. Log the posts  
4. Handle errors using try/catch  

---

## Skills Practiced
- Callbacks (`setTimeout`)
- Promises (`resolve`, `reject`)
- Async/Await
- Fetch API
- Error handling

