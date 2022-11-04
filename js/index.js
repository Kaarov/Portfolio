let count = 0, size = 25;
document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("clickme").onclick = function() {
        if (count === 20) {
            alert("Wow you get 20 points :)")
            count = 0;
            size = 25;
        }
        count += 1;
        size += 3;
        document.getElementById("clickme").innerHTML = "Click me: " + count;
        document.getElementById("clickme").style.fontSize = size + "px";
    };

});
