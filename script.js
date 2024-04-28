const buttons = document.querySelectorAll(".faq-button");
const faqSections = document.querySelectorAll(".faq-section");

buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => showFAQ(index));
})

function showFAQ(n) {
    const clickedElement = faqSections[n].classList;
    clickedElement.toggle("active");
}