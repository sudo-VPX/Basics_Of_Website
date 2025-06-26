// ===================================== Licence Given By VPX - JS =====================================
//
//
// Licence is Given To - [Your User Name]
// Place Where Code is Used - [Where You Are Using This Code]
// Licence is Given By - VPX
// Any Price For Licence - No
// Permissoin To use File - https://github.com/sudo-VPX/Basics_Of_Website/tree/main/Card/Script.js
// How File Looks or OutPut - https://sudo-VPX.github.io/Basics_Of_Website/Card
// [Why Need Licence - Describe Your Problem , Optional]
//
// Note - the Text With []  is Only Text Can Be Changed or Removed By User who is Using This Code in Licence Only 
//
// Vaid Till - Check Validity on github.com/sudo-VPX under That Go to SECURITY.md section Check There
// To Direct Click Licence then Click To https://github.com/sudo-VPX/Basics_Of_Website/blob/main/SECURITY.md
//
// This File is Made By =======>  Vikrant Pathania or sudo-VPX
//
//
// ======================================= Thank You For Your Time =======================================

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
