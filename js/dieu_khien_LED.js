console.log(
  "%cTRANSERCO HANOIBUS",
  "COLOR: GREEN; font-size: 20px; font-family: COURIER"
);

console.log(
  "%cXin chào! 🚏🚌",
  "color: red; font-size: 50px; font-weight: bold; font-family: tahoma"
);
console.log(
  "%cLED xe buýt. Bạn có thể thao tác mọi thứ trên Dev Tools.",
  "font-size: 20px; font-family: Arial"
);

function daoChieuLED(Dau, Cuoi) {
  // đảo điểm đầu và điểm cuối
  let diemDau = document.getElementById(Dau);
  let diemCuoi = document.getElementById(Cuoi);
  let diemDauTrongPreview = document.getElementById("diemDauLuu");
  let diemCuoiTrongPreview = document.getElementById("diemCuoiLuu");
  if (diemDau && diemCuoi) {
    let temp = diemDau.innerText;
    diemDau.innerText = diemCuoi.innerText;
    diemCuoi.innerText = temp;

    let temp2 = diemDauTrongPreview.innerText;
    diemDauTrongPreview.innerText = diemCuoiTrongPreview.innerText;
    diemCuoiTrongPreview.innerText = temp2;

    console.log("Đã đổi thành công");
  }
}

// hiệu ứng chạy chữ từ phải sang trái
let isRunning = false;
let animationId = null;
let pos = 0;
let lastTime = null;
const toc_do = 200; // tốc độ px/s

function scrollText(timestamp) {
  if (!isRunning) return;

  if (!lastTime) lastTime = timestamp;
  const elapsed = (timestamp - lastTime) / 1000;
  lastTime = timestamp;

  const chaychu = document.getElementById('route-info');
  const khung = document.getElementsByClassName('NoiDungChayChu')[0];

  pos -= toc_do * elapsed;
  if (pos < -chaychu.offsetWidth) {
    pos = khung.offsetWidth;
  }

  chaychu.style.left = pos + 'px';

  animationId = requestAnimationFrame(scrollText);
}

function chayChu() {
  const khung = document.getElementsByClassName('NoiDungChayChu')[0];
  const chaychu = document.getElementById('route-info');

  if (!isRunning) {
    pos = khung.offsetWidth;
    lastTime = null;
    isRunning = true;
    animationId = requestAnimationFrame(scrollText);
    console.log("Bắt đầu chạy chữ");
    document.getElementById("isTextMoving").innerText = "YES";
  } else {
    isRunning = false;
    cancelAnimationFrame(animationId);

    //  Căn giữa dòng chữ khi dừng lại
    const centerPos = (khung.offsetWidth - chaychu.offsetWidth) / 2;
    chaychu.style.left = centerPos + 'px';
    document.getElementById("isTextMoving").innerText = "NO";
    console.log("Dừng chạy chữ");
  }
}

function batHieuUngNhay() {
  // nhấp nháy mã tuyến
  const element = document.getElementById("maTuyen");
  element.style.animation = "blink 1.25s steps(1, end) infinite";
}

function tatHieuUngNhay() {
  // tắt nhấp nháy mã tuyến
  const element = document.getElementById("maTuyen");
  element.style.animation = "none";
}

function reset() {
  // hàm xóa toàn bộ LED
  stop();

  document.getElementById("isPausing").innerText = "NO";

  const maTuyen = document.getElementById("maTuyen");
  const routeInfo = document.getElementById("route-info");
  const hanoibus = document.getElementById("hanoibus");
  const transerco = document.getElementById("transerco");
  const xiNghiep = document.getElementById("xiNghiep");
  const TuyenCanGiua = document.getElementById("MaTuyenCanGiua");
  const HuyDong = document.getElementById("HuyDongRaTuyen");
  const VeGara = document.getElementById("XeVeGara");

  maTuyen.style.display = "none";
  routeInfo.style.display = "none";
  hanoibus.style.display = "none";
  transerco.style.display = "none";
  xiNghiep.style.display = "none";
  TuyenCanGiua.style.display = "none";
  HuyDong.style.display = "none";
  VeGara.style.display = "none";
  console.log("Xóa LED thành công");
}
