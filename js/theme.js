const background_color = [
  "rgba(167, 228, 255, 1)", // xanh dương hòa bình
  "rgba(182, 255, 228, 1)", // xanh lá buýt gom, xe điện, CNG
  "rgba(252, 146, 104, 1)", // cam xe đi sân bay Nội Bài
];

function setColor(index) {
  const color = background_color[index];
  document.body.style.backgroundColor = color; //đặt màu nền
  localStorage.setItem("savedBackground", color); // lưu màu vào localStorage
  if (index === 0) {
    document.getElementById("backgroundColor").innerText = "XANH DƯƠNG";
  } else if (index === 1) {
    document.getElementById("backgroundColor").innerText = "XANH LÁ";
  } else if (index === 2) {
    document.getElementById("backgroundColor").innerText = "CAM";
  }
}

// nhớ lại màu nền
document.addEventListener("DOMContentLoaded", function () {
  const savedColor = localStorage.getItem("savedBackground");
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
  }
});
