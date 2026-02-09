// Ẩn/Hiện nội dung (thu gọn/mở rộng)
function toggleDivs() {
  const divs = document.getElementsByClassName("hiddenDiv");
  for (let i = 0; i < divs.length; i++) {
    const div = divs[i];
    // Dùng getComputedStyle để lấy style thực tế (kể cả từ CSS)
    const computedDisplay = window.getComputedStyle(div).display;
    if (computedDisplay === "none") {
      div.style.display = "flex";
    } else {
      div.style.display = "none";
    }
  }
}