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

function NhapDuLieu() {
  // Lấy tất cả các input trong div NhapDuLieu
  const inputs = document.querySelectorAll(".NhapDuLieu input");
  // Kiểm tra xem có ô nào bị bỏ trống không
  for (let input of inputs) {
    if (input.value.trim() === "") {
      document.getElementById("canhBao").innerText =
        "HÃY NHẬP ĐẦY ĐỦ CÁC TRƯỜNG!";
      return;
    } else {
      document.getElementById("canhBao").innerText = "ĐÃ NHẬP ĐỦ";
    }
  }

  // Gán giá trị từ input vào localDrage để gán vào khi load trang (window_onload.js)
  const maTuyen = inputs[0].value;
  const diemDau = inputs[1].value;
  const diemCuoi = inputs[2].value;
  const xiNghiep = inputs[3].value;

  localStorage.setItem("maTuyen", maTuyen);
  localStorage.setItem("diemDau", diemDau);
  localStorage.setItem("diemCuoi", diemCuoi);
  localStorage.setItem("xiNghiep", xiNghiep);
  localStorage.setItem("MaTuyenCanGiua", maTuyen);
  console.log("Đã nhập đầy đủ thông tin.");
  document.getElementById("canhBao").innerText = "ĐÃ NHẬP ĐỦ";
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
