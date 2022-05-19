/*function toggleMenu() {
    document.getElementByClassName("navigation")[0].classList.toggle("responsive");
}*/



//this following code is from the lesson
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

let modifiedTime = new Date(document.lastModified);
let timeDisplayed = `Last Updated: ${modifiedTime}`;
document.querySelector("#lastUpdate").innerHTML = timeDisplayed;
console.log(modifiedTime);


//document.querySelector(
//    "#lastModified"
//   ).textContent = `Last Modification:${document.lastMotified}`;

// function toggleMenu(){
//     console.log("It worked")
// }