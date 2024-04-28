const buttons = document.querySelectorAll(".faq-button");

buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => showFAQ(index));
})

function showFAQ(n) {
    const elements = document.querySelectorAll(".faq-section");
    const clickedElement = elements[n].classList;

    clickedElement.toggle("active");
}