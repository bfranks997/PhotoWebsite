const darkModeButton = document.querySelector('.darkmode');
let currentTheme = localStorage.getItem("currentTheme");

darkModeButton.addEventListener('click', () => {
    console.log(document.getElementById("theme").href);
    if (currentTheme === "true") {
        console.log('Enabling lightmode');
        document.getElementById("theme").href = "styles.css";
        localStorage.setItem("currentTheme", "false");
        currentTheme = "false"; // Update currentTheme variable
        darkModeButton.textContent = "Light Mode";
    } else {
        console.log('Enabling darkmode');
        document.getElementById("theme").href = "darkmode.css";
        localStorage.setItem("currentTheme", "true");
        currentTheme = "true"; // Update currentTheme variable
        darkModeButton.textContent = "Dark Mode";
    }
});

window.onload = () => {
    console.log("window loaded and darkmode is ", currentTheme);
    if (currentTheme === "true") {
        console.log('Initializing darkmode');
        document.getElementById("theme").href = "darkmode.css";
        darkModeButton.textContent = "Light Mode";
    } else {
        console.log('Initializing lightmode');
        document.getElementById("theme").href = "styles.css";
        localStorage.setItem("currentTheme", "false");
        currentTheme = "false"; // Update currentTheme variable
    }
};