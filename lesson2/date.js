/*var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();*/

/*function dateFunction(){
    document.getElementID("demo").innerHTML = "paragraph change";
}*/


let modifiedTime = new Date(document.lastModified);
let timeDisplayed = `Last Updated: ${modifiedTime}`;
document.querySelector("#lastUpdate").innerHTML = timeDisplayed;
console.log(modifiedTime);