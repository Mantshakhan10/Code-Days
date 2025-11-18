document.getElementById("newUserBtn").addEventListener("click", loadUser);

async function loadUser() {
    try {
        const response = await fetch("https://randomuser.me/api");
        const data = await response.json();
        const user = data.results[0];

        document.getElementById("userImg").src = user.picture.large;
        document.getElementById("userName").textContent = user.name.first + " " + user.name.last;
        document.getElementById("userEmail").textContent = user.email;

    } catch (error) {
        console.error("Error loading user", error);
    }
}

// Load one user on page start
loadUser();
