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

function chayChu() {
  const chay = document.getElementById("route-info");
  const isRunning = chay.classList.toggle("marquee");

  // Nếu đang chạy thì in YES, nếu không thì in NO
  document.getElementById("isTextMoving").innerText = isRunning ? "YES" : "NO";
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
  const xiNghiep = document.getElementById("xiNghiep");
  const TuyenCanGiua = document.getElementById("MaTuyenCanGiua");
  const HuyDong = document.getElementById("HuyDongRaTuyen");
  const VeGara = document.getElementById("XeVeGara");

  maTuyen.style.display = "none";
  routeInfo.style.display = "none";
  hanoibus.style.display = "none";
  xiNghiep.style.display = "none";
  TuyenCanGiua.style.display = "none";
  HuyDong.style.display = "none";
  VeGara.style.display = "none";
  console.log("Xóa LED thành công");
}
