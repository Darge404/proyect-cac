function redirigir() {
    var dropdown = document.getElementById("dropdown");
    var selectedOption = dropdown.value;

    if (selectedOption !== "") {
        window.location.href = selectedOption;
    }
}

