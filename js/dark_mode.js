// Dark Mode Toggle
// Lưu trạng thái dark mode vào localStorage

function initDarkMode() {
    const isDark = localStorage.getItem("darkMode") === "true";
    if (isDark) {
        document.body.classList.add("dark-mode");
    }
    updateDarkModeButton();
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDark);
    updateDarkModeButton();
}

function updateDarkModeButton() {
    const isDark = document.body.classList.contains("dark-mode");
    const btns = document.querySelectorAll(".DarkMode");
    btns.forEach(btn => {
        btn.textContent = isDark ? "LIGHT MODE" : "DARK MODE";
    });
}

// Khởi tạo dark mode khi trang load
document.addEventListener("DOMContentLoaded", initDarkMode);
