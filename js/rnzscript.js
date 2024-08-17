function clickButton(activeButtonId) {
    document.getElementById("btnA").style.color = "white";
    document.getElementById("btnB").style.color = "white";
    document.getElementById("btnC").style.color = "white";
    document.getElementById("btnD").style.color = "white";


    document.getElementById(activeButtonId).style.color = "red";
}