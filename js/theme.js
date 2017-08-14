let menuItems = document.querySelectorAll("li a");

for (let element of menuItems) {
    element.addEventListener("mouseover", function () {
        element.parentNode.style.backgroundColor = "#1E0B00";
        // console.log(element.parentNode);
    });

    element.addEventListener("mouseout", function () {
        element.parentNode.style.backgroundColor = "transparent";
    });
}
