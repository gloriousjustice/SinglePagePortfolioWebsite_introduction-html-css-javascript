document.addEventListener("DOMContentLoaded", () => {
    const recommendationForm = document.getElementById("rec-form");
    const recommendationList = document.getElementById("recommendation-list");
    const completionModal = document.getElementById("success-modal");
    const dismissModalButton = document.getElementById("close-modal");

    recommendationForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const clientName = document.getElementById("rec-name").value.trim();
        const recommendationContent = document.getElementById("rec-text").value.trim();

        if (clientName === "" || recommendationContent === "") {
            return;
        }

        const tileContainer = document.createElement("div");
        tileContainer.classList.add("recommendation-tile");

        const quotePara = document.createElement("p");
        quotePara.classList.add("recommendation-quote");
        quotePara.textContent = `"${recommendationContent}"`;

        const authorHeading = document.createElement("h4");
        authorHeading.classList.add("recommendation-author");
        authorHeading.textContent = `- ${clientName}`;

        tileContainer.appendChild(quotePara);
        tileContainer.appendChild(authorHeading);
        recommendationList.appendChild(tileContainer);

        recommendationForm.reset();
        showPopup();
    });

    function showPopup() {
        completionModal.style.display = "flex";
    }

    dismissModalButton.addEventListener("click", () => {
        completionModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === completionModal) {
            completionModal.style.display = "none";
        }
    });
});
