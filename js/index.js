let count = 0, size = 25;
document.getElementById("clickme").onclick = function() {
    if (count === 50) {
        alert("Wow you get 50 points :)")
        count = 0;
        size = 25;
    }
    count += 1;
    size += 2;
    document.getElementById("clickme").innerHTML = "Click me: " + count;
    document.getElementById("clickme").style.fontSize = size + "px";
};