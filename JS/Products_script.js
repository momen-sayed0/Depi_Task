function init() {
    document.getElementById("searchInput").addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            const searchTerm = event.target.value.toLowerCase();
            const productCards = document.querySelectorAll(".product-card");
            productCards.forEach(card => {
                const productName = card.querySelector(".product-name").textContent.toLowerCase();
                card.style.display = productName.includes(searchTerm) ? "block" : "none";
            });
        }
    });

    document.getElementById("logoutBtn").addEventListener("click", () => {
        window.location.href = "index.html";
    });
}

window.onload = init;