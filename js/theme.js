const background_color = [
  "rgba(94,153,223,255)", // xanh dương hòa bình
  "rgba(182, 255, 228, 1)", // xanh lá buýt gom, xe điện, CNG
  "rgba(252, 146, 104, 1)", // cam xe đi sân bay Nội Bài
  "rgba(252,254,156,255)", // vàng
  "rgb(181, 185, 255)", // tím
  "rgb(255, 156, 238)", // hồng
  "rgba(208,103,102,255)" // đỏ
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
  } else if (index === 3) {
    document.getElementById("backgroundColor").innerText = "VÀNG";
  } else if (index === 4) {
    document.getElementById("backgroundColor").innerText = "TÍM";
  } else if (index === 5) {
    document.getElementById("backgroundColor").innerText = "HỒNG";
  } else if (index === 6) {
    document.getElementById("backgroundColor").innerText = "ĐỎ";
  }
}

// nhớ lại màu nền
document.addEventListener("DOMContentLoaded", function () {
  const savedColor = localStorage.getItem("savedBackground");
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
  }
});
