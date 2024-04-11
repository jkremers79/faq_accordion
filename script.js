function showFaq(clickedButton, text) {

    const element = document.querySelector(text).classList;
    const button = document.querySelector(clickedButton).classList

    if (element.contains("hidden")) {
        element.remove("hidden");
        button.add("active");
    }

    else {
        element.add("hidden");
        button.remove("active");
    }

}


const firstButton = document.querySelector(".firstFaqButton");
firstButton.addEventListener("click", () => showFaq(".firstFaqButton", ".firstFAQ"));

const secondButton = document.querySelector(".secondFaqButton");
secondButton.addEventListener("click", () => showFaq(".secondFaqButton", ".secondFAQ"));

const thirdButton = document.querySelector(".thirdFaqButton");
thirdButton.addEventListener("click", () => showFaq(".thirdFaqButton", ".thirdFAQ"));

const fourthButton = document.querySelector(".fourthFaqButton");
fourthButton.addEventListener("click", () => showFaq(".fourthFaqButton", ".fourthFAQ"));