document.addEventListener("DOMContentLoaded", function () {
    const suggestions = document.getElementById("suggestions");
    const button = document.querySelector(".clipart-button");
    const searchBar = document.getElementById("search_bar");

    function goToPaintingPage() {
        if (suggestions.children.length === 1) {
            const suggestionText = suggestions.children[0].textContent.trim();
            if (suggestionText !== "") {
                const formattedText = suggestionText.toLowerCase().replace(/\s+/g, "-");
                window.location.href = `../paintings/HTML/${formattedText}.html`;
            }
        }
    }

    searchBar.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            goToPaintingPage();
        }
    });

    button.addEventListener("click", function () {
        goToPaintingPage();
    });
});
