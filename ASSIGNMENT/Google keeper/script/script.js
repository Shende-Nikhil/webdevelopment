let addNotesBtn = document.getElementById("add-notes-button");
let popup = document.querySelector(".add-notes-pop-up");
let closeBtn = document.querySelector(".add-notes-form .close");

addNotesBtn.addEventListener("click", () => {
    popup.style.display = "flex"; // show popup
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none"; // hide popup
});
