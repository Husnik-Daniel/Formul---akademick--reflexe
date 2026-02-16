const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", function () {
    resetBtn.classList.add("clicked");
    setTimeout(() => resetBtn.classList.remove("clicked"), 500);
});
