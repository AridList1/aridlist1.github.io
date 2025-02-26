document.addEventListener("DOMContentLoaded", function () {
    const lightModeToggle = document.getElementById("theme-toggle");
    lightModeToggle.addEventListener("click", toggleLightMode);

    const lightModePreference = localStorage.getItem("lightMode");
    if (lightModePreference === "enabled") {
        document.documentElement.classList.add("light-mode");
        lightModeToggle.checked = false;
    } else {
        document.documentElement.classList.remove("light-mode");
        lightModeToggle.checked = true;
    }
});

function toggleLightMode() {
    document.documentElement.classList.toggle("light-mode");
    const isLightModeEnabled = document.documentElement.classList.contains('light-mode');
    if (isLightModeEnabled) {
        localStorage.setItem("lightMode", "enabled");
    } else {
        localStorage.setItem("lightMode", "disabled");
    }
}