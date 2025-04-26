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
      alert(
        "Vui lòng nhập đầy đủ Mã tuyến, điểm đầu, điểm cuối và tên xí nghiệp."
      );
      return;
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
}

window.onload = function () {
  // xóa toàn bộ LED và dừng toàn bộ hoạt động LED khi tải xong trang, sẽ kích hoạt khi chạy hàm startToggle();
  stopToggle();
  reset();

  // nhớ lại local storage
  const maTuyen = localStorage.getItem("maTuyen");
  const diemDau = localStorage.getItem("diemDau");
  const diemCuoi = localStorage.getItem("diemCuoi");
  const xiNghiep = localStorage.getItem("xiNghiep");

  if (maTuyen) {
    document.getElementById("maTuyen").innerText = maTuyen;
    document.getElementById("MaTuyenCanGiua").innerText = maTuyen;
  }
  if (diemDau) document.getElementById("diemDau").innerText = diemDau;
  if (diemCuoi) document.getElementById("diemCuoi").innerText = diemCuoi;
  if (xiNghiep) {
    document.getElementById("xiNghiep").innerText = xiNghiep;
  }
};

function chayChu() {
  const chay = document.getElementById("route-info");
  chay.classList.toggle("marquee");
}
