let profileMenu = document.getElementById("profileMenu");

function toggleMenu() {
    profileMenu.classList.toggle("open-menu");
}

let sideActivity = document.getElementById("sidebaractivity");
let morelink = document.getElementById("showMoreLink");

function toggleActivity() {
    sidebaractivity.classList.toggle("open-activity");

    if (sideActivity.classList.contains("open-activity")) {
        morelink.innerHTML = "Show less <b>-</b>";
    } else {
        morelink.innerHTML = "Show more <b>+</b>";
    }
}