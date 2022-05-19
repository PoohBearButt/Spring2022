/*function toggleMenu() {
    document.getElementByClassName("navigation")[0].classList.toggle("responsive");
}*/



//this following code is from the lesson
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;



// function toggleMenu(){
//     console.log("It worked")
// }