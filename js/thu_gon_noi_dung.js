// Ẩn/Hiện nội dung (thu gọn/mở rộng)
function toggleDivs() {
  const divs = document.getElementsByClassName("hiddenDiv");
  for (let i = 0; i < divs.length; i++) {
    const div = divs[i];
    if (div.style.display === "flex") {
      div.style.display = "none";
    } else {
      div.style.display = "flex";
    }
  }
}