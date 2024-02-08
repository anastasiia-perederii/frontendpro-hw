function myFocusFunction() {
    document.querySelector(".userName").hidden = true;
}
function myBlurFunction() {
    document.querySelector(".userName").hidden = false;
}

document.getElementById("myInput").addEventListener("focus", myFocusFunction, true);
document.getElementById("myInput").addEventListener("blur", myBlurFunction, true);
