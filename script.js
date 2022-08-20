const diego = document.getElementById(`name`);
let i=1

diego.addEventListener("click", function() {
    if (i === 1) {
    alert("More of a night mode kind of person?");
    document.body.style.backgroundColor = "black";
    i=2;
} else if (i === 2) {
    alert("More of a dark mode kind of person?");
    document.body.style.backgroundColor = "#0B0C10";
    i=1;
}
})





