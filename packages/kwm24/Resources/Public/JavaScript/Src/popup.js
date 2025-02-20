document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitButton");
    const popup = document.getElementById("popupMessage");
    const closePopup = document.getElementById("closePopup");
    const form = document.getElementById("contactForm");

    if (submitButton && popup && form) {
        submitButton.addEventListener("click", function (event) {
            event.preventDefault(); // Verhindert das direkte Absenden des Formulars
            popup.classList.remove("hidden"); // Zeigt das Pop-up an
        });

        closePopup.addEventListener("click", function () {
            popup.classList.add("hidden"); // Schließt das Pop-up
            form.submit(); // Sendet das Formular erst nach dem Schließen des Pop-ups
        });
    }
});
