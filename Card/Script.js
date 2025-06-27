const card1 = document.getElementById("Card_1");
const card2 = document.getElementById("Card_2");

function checkScroll() {
    const triggerBottom = window.innerHeight * 0.8;

    const card1Top = card1.getBoundingClientRect().top;
    const card2Top = card2.getBoundingClientRect().top;

    if (card1Top < triggerBottom && card1Top > 100) {
        card1.classList.add("card-visible");
        card1.classList.remove("Card_Scroll_Animation_Right_To_Left", "card-exit-left");
    } else if (card1Top <= 100) {
        card1.classList.add("card-exit-left");
        card1.classList.remove("card-visible");
    } else {
        card1.classList.add("Card_Scroll_Animation_Right_To_Left");
        card1.classList.remove("card-visible", "card-exit-left");
    }

    if (card2Top < triggerBottom && card2Top > 100) {
        card2.classList.add("card-visible");
        card2.classList.remove("Card_Scroll_Animation_Left_To_Right", "card-exit-right");
    } else if (card2Top <= 100) {
        card2.classList.add("card-exit-right");
        card2.classList.remove("card-visible");
    } else {
        card2.classList.add("Card_Scroll_Animation_Left_To_Right");
        card2.classList.remove("card-visible", "card-exit-right");
    }
}

window.addEventListener("DOMContentLoaded", () => {
    card1.classList.add("Card_Scroll_Animation_Right_To_Left");
    card2.classList.add("Card_Scroll_Animation_Left_To_Right");
    checkScroll();
});

window.addEventListener("scroll", checkScroll);
