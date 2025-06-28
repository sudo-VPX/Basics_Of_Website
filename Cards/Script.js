// ========== No Of Crads ==========

const Card_1 = document.getElementById("Card_1");
const Card_2 = document.getElementById("Card_2");
const Card_3 = document.getElementById("Card_3");
const Card_4 = document.getElementById("Card_4");
const Card_5 = document.getElementById("Card_5");
const Card_6 = document.getElementById("Card_6");
const Card_7 = document.getElementById("Card_7");
const Card_8 = document.getElementById("Card_8");

// ========== Crads Scrolling Animation ==========

function checkScroll() {
    const triggerBottom = window.innerHeight * 0.75;

    const Card_1_Top = Card_1.getBoundingClientRect().top;
    const Card_2_Top = Card_2.getBoundingClientRect().top;
    const Card_3_Top = Card_3.getBoundingClientRect().top;
    const Card_4_Top = Card_4.getBoundingClientRect().top;
    const Card_5_Top = Card_5.getBoundingClientRect().top;
    const Card_6_Top = Card_6.getBoundingClientRect().top;
    const Card_7_Top = Card_7.getBoundingClientRect().top;
    const Card_8_Top = Card_8.getBoundingClientRect().top;


    // ========== Crad 1 Scrolling Animation ==========

    if (Card_1_Top < triggerBottom && Card_1_Top > 100) {
        Card_1.classList.add("card-visible");
        Card_1.classList.remove("Card_Scroll_Animation_Right_To_Left", "card-exit-left");
    } else if (Card_1_Top <= 100) {
        Card_1.classList.add("card-exit-left");
        Card_1.classList.remove("card-visible");
    } else {
        Card_1.classList.add("Card_Scroll_Animation_Right_To_Left");
        Card_1.classList.remove("card-visible", "card-exit-left");
    }

    // ========== Crad 2 Scrolling Animation ==========

    if (Card_2_Top < triggerBottom && Card_2_Top > 100) {
        Card_2.classList.add("card-visible");
        Card_2.classList.remove("Card_Scroll_Animation_Left_To_Right", "card-exit-right");
    } else if (Card_2_Top <= 100) {
        Card_2.classList.add("card-exit-right");
        Card_2.classList.remove("card-visible");
    } else {
        Card_2.classList.add("Card_Scroll_Animation_Left_To_Right");
        Card_2.classList.remove("card-visible", "card-exit-right");
    }

    // ========== Crad 3 Scrolling Animation ==========

    if (Card_3_Top < triggerBottom && Card_3_Top > 100) {
        Card_3.classList.add("card-visible");
        Card_3.classList.remove("Card_Scroll_Animation_Right_To_Left", "card-exit-left");
    } else if (Card_3_Top <= 100) {
        Card_3.classList.add("card-exit-left");
        Card_3.classList.remove("card-visible");
    } else {
        Card_3.classList.add("Card_Scroll_Animation_Right_To_Left");
        Card_3.classList.remove("card-visible", "card-exit-left");
    }

    // ========== Crad 4 Scrolling Animation ==========

    if (Card_4_Top < triggerBottom && Card_4_Top > 100) {
        Card_4.classList.add("card-visible");
        Card_4.classList.remove("Card_Scroll_Animation_Left_To_Right", "card-exit-right");
    } else if (Card_4_Top <= 100) {
        Card_4.classList.add("card-exit-right");
        Card_4.classList.remove("card-visible");
    } else {
        Card_4.classList.add("Card_Scroll_Animation_Left_To_Right");
        Card_4.classList.remove("card-visible", "card-exit-right");
    }

    // ========== Crad 5 Scrolling Animation ==========

    if (Card_5_Top < triggerBottom && Card_5_Top > 100) {
        Card_5.classList.add("card-visible");
        Card_5.classList.remove("Card_Scroll_Animation_Right_To_Left", "card-exit-left");
    } else if (Card_5_Top <= 100) {
        Card_5.classList.add("card-exit-left");
        Card_5.classList.remove("card-visible");
    } else {
        Card_5.classList.add("Card_Scroll_Animation_Right_To_Left");
        Card_5.classList.remove("card-visible", "card-exit-left");
    }

    // ========== Crad 6 Scrolling Animation ==========

    if (Card_6_Top < triggerBottom && Card_6_Top > 100) {
        Card_6.classList.add("card-visible");
        Card_6.classList.remove("Card_Scroll_Animation_Left_To_Right", "card-exit-right");
    } else if (Card_6_Top <= 100) {
        Card_6.classList.add("card-exit-right");
        Card_6.classList.remove("card-visible");
    } else {
        Card_6.classList.add("Card_Scroll_Animation_Left_To_Right");
        Card_6.classList.remove("card-visible", "card-exit-right");
    }

    // ========== Crad 7 Scrolling Animation ==========

    if (Card_7_Top < triggerBottom && Card_7_Top > 100) {
        Card_7.classList.add("card-visible");
        Card_7.classList.remove("Card_Scroll_Animation_Right_To_Left", "card-exit-left");
    } else if (Card_7_Top <= 100) {
        Card_7.classList.add("card-exit-left");
        Card_7.classList.remove("card-visible");
    } else {
        Card_7.classList.add("Card_Scroll_Animation_Right_To_Left");
        Card_7.classList.remove("card-visible", "card-exit-left");
    }

    // ========== Crad 8 Scrolling Animation ==========

    if (Card_8_Top < triggerBottom && Card_8_Top > 100) {
        Card_8.classList.add("card-visible");
        Card_8.classList.remove("Card_Scroll_Animation_Left_To_Right", "card-exit-right");
    } else if (Card_8_Top <= 100) {
        Card_8.classList.add("card-exit-right");
        Card_8.classList.remove("card-visible");
    } else {
        Card_8.classList.add("Card_Scroll_Animation_Left_To_Right");
        Card_8.classList.remove("card-visible", "card-exit-right");
    }
}

// ========== All Card Scrolling Animation ==========

window.addEventListener("DOMContentLoaded", () => {
    Card_1.classList.add("Card_Scroll_Animation_Right_To_Left");
    Card_2.classList.add("Card_Scroll_Animation_Left_To_Right");
    Card_3.classList.add("Card_Scroll_Animation_Right_To_Left");
    Card_4.classList.add("Card_Scroll_Animation_Left_To_Right");
    Card_5.classList.add("Card_Scroll_Animation_Right_To_Left");
    Card_6.classList.add("Card_Scroll_Animation_Left_To_Right");
    Card_7.classList.add("Card_Scroll_Animation_Right_To_Left");
    Card_8.classList.add("Card_Scroll_Animation_Left_To_Right");
    checkScroll();
});

window.addEventListener("scroll", checkScroll);