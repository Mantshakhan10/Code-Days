document.getElementById("loadUsersBtn").addEventListener("click", loadMultipleUsers);

async function loadMultipleUsers() {
    try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const data = await response.json();

        const container = document.getElementById("usersContainer");
        container.innerHTML = ""; // clear old cards

        data.results.forEach(user => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${user.picture.large}" alt="">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>${user.email}</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Error fetching users", error);
    }
}
