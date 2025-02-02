const input = document.querySelector("input#name-input");
const spanOutput = document.querySelector("span#name-output");
input.addEventListener("input", (event) => {
    const trimmedValue = event.target.value.trim();
    if (trimmedValue === "") {
        spanOutput.textContent = "Anonymous"
    } else {
        spanOutput.textContent = trimmedValue;
    }
})