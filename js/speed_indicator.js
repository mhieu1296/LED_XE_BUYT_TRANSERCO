// Hiển thị tốc độ chạy chữ
function speedIndicator() {
    const speedControl = document.getElementById("speedControl");
    const speedValue = document.getElementById("speedValue");

    speedControl.addEventListener("input", () => {
        speedValue.textContent = `${speedControl.value} px/s`;
    });
}
window.addEventListener("load", speedIndicator);