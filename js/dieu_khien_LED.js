console.log(
  "%cTRANSERCO HANOIBUS",
  "COLOR: GREEN; font-size: 20px; font-family: COURIER"
);

console.log(
  "%cXin chào! 🚏🚌",
  "color: red; font-size: 50px; font-weight: bold; font-family: tahoma"
);
console.log(
  "%cLED xe buýt xin chào những người yêu xe buýt Hà Nội và Tổng Công ty Vận tải Hà Nội! Bạn có thể thao tác mọi thứ trên Dev Tools.",
  "font-size: 20px; font-family: Arial"
);

function daoChieuLED(Dau, Cuoi) {
  // đảo điểm đầu và điểm cuối
  let diemDau = document.getElementById(Dau);
  let diemCuoi = document.getElementById(Cuoi);
  if (diemDau && diemCuoi) {
    let temp = diemDau.innerText;
    diemDau.innerText = diemCuoi.innerText;
    diemCuoi.innerText = temp;
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
        "HÃY NHẬP TẤT CẢ CÁC TRƯỜNG";
      return;
    } else {
      document.getElementById("canhBao").innerText = "ĐÃ NHẬP ĐỦ";
    }
  }

  // Gán giá trị từ input vào các thẻ <p> tương ứng
  const maTuyen = inputs[0].value;
  const diemDau = inputs[1].value;
  const diemCuoi = inputs[2].value;
  const xiNghiep = inputs[3].value;

  // lưu localstorage
  localStorage.setItem("maTuyen", maTuyen);
  localStorage.setItem("diemDau", diemDau);
  localStorage.setItem("diemCuoi", diemCuoi);
  localStorage.setItem("xiNghiep", xiNghiep);
  localStorage.setItem("MaTuyenCanGiua", maTuyen);
  console.log("Đã nhập đầy đủ thông tin.");
  document.getElementById("canhBao").innerText = "ĐÃ NHẬP ĐỦ";
}

function xoaInput() {
  // xóa nội dung các input form
  const inputs = document.querySelectorAll(".NhapDuLieu input");

  for (let input of inputs) {
    input.value = "";
  }
}

function chayChu() {
  // chạy chữ từ trái sang phải
  const chay = document.getElementById("route-info");
  chay.classList.toggle("marquee");
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
