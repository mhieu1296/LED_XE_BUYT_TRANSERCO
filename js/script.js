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

let running = false;

function getElements() {
  // lấy elements để điều khiển trạng thái hiển thị của từng elements
  return {
    maTuyen: document.getElementById("maTuyen"),
    routeInfo: document.getElementById("route-info"),
    hanoibus: document.getElementById("hanoibus"),
    xiNghiep: document.getElementById("xiNghiep"),
    TuyenCanGiua: document.getElementById("MaTuyenCanGiua"),
    Transerco: document.getElementById("transerco"),
    HuyDong: document.getElementById("HuyDongRaTuyen"),
    VeGara: document.getElementById("XeVeGara"),
  };
}

function hienThiMaTuyen_DiemDauCuoi() {
  // VD: 55A    CẦU GIẤY - TIMES CITY
  if (!running) {
    console.log("Hàm 1 bị dừng");
    return;
  }
  console.clear();
  console.log("Hàm 1 chạy");

  const elements = getElements();
  if (!elements.maTuyen || !elements.routeInfo || !elements.hanoibus) {
    console.error("Lỗi: Một hoặc nhiều phần tử không tồn tại trong DOM.");
    return;
  }

  elements.maTuyen.style.display = "flex";
  elements.routeInfo.style.display = "flex";
  elements.hanoibus.style.display = "none";
  elements.xiNghiep.style.display = "none";
  elements.TuyenCanGiua.style.display = "none";
  elements.Transerco.style.display = "none";
  elements.HuyDong.style.display = "none";
  elements.VeGara.style.display = "none";

  setTimeout(() => {
    if (running) {
      console.clear();
      console.log("Hàm 1 xong, chuyển sang hàm 2");
      hienThiMaTuyen_Hanoibus();
    }
  }, 10000);
}

function hienThiMaTuyen_Hanoibus() {
  // VD: 55A      H A N O I B U S
  if (!running) {
    console.log("Hàm 2 bị dừng");
    return;
  }
  console.clear();
  console.log("Hàm 2 chạy");

  const elements = getElements();
  if (!elements.maTuyen || !elements.routeInfo || !elements.hanoibus) {
    console.error("Lỗi: Một hoặc nhiều phần tử không tồn tại trong DOM.");
    return;
  }

  elements.maTuyen.style.display = "flex";
  elements.routeInfo.style.display = "none";
  elements.hanoibus.style.display = "flex";
  elements.xiNghiep.style.display = "none";
  elements.TuyenCanGiua.style.display = "none";
  elements.Transerco.style.display = "none";
  elements.HuyDong.style.display = "none";
  elements.VeGara.style.display = "none";

  setTimeout(() => {
    if (running) {
      console.clear();
      console.log("Hàm 2 xong, chuyển sang hàm 3");
      hienThiMaTuyen_XiNghiep();
    }
  }, 5000);
}

function hienThiMaTuyen_XiNghiep() {
  // VD: 55A      CÔNG TY CP XE ĐIỆN HÀ NỘI
  if (!running) {
    console.log("Hàm 3 bị dừng");
    return;
  }
  console.clear();
  console.log("Hàm 3 chạy");

  const elements = getElements();
  if (!elements.maTuyen || !elements.routeInfo || !elements.hanoibus) {
    console.error("Lỗi: Một hoặc nhiều phần tử không tồn tại trong DOM.");
    return;
  }

  elements.maTuyen.style.display = "flex";
  elements.routeInfo.style.display = "none";
  elements.hanoibus.style.display = "none";
  elements.xiNghiep.style.display = "flex";
  elements.TuyenCanGiua.style.display = "none";
  elements.Transerco.style.display = "none";
  elements.HuyDong.style.display = "none";
  elements.VeGara.style.display = "none";

  setTimeout(() => {
    if (running) {
      console.clear();
      console.log("Hàm 3 xong, chuyển sang hàm TG1");
      hienThiTrungGian1();
    }
  }, 5000);
}

// các hàm hiệu ứng trung gian
function hienThiTrungGian1() {
  // hiệu ứng xóa mã tuyến
  if (!running) {
    console.log("Hàm TG1 bị dừng");
    return;
  }
  console.clear();
  console.log("Hàm TG1 chạy");

  const elements = getElements();
  if (!elements.maTuyen || !elements.routeInfo || !elements.hanoibus) {
    console.error("Lỗi: Một hoặc nhiều phần tử không tồn tại trong DOM.");
    return;
  }

  elements.maTuyen.style.display = "none";
  elements.routeInfo.style.display = "none";
  elements.hanoibus.style.display = "none";
  elements.xiNghiep.style.display = "flex";
  elements.TuyenCanGiua.style.display = "none";
  elements.Transerco.style.display = "none";
  elements.HuyDong.style.display = "none";
  elements.VeGara.style.display = "none";

  setTimeout(() => {
    if (running) {
      console.clear();
      console.log("Hàm TG1 xong, chuyển sang hàm TG2");
      hienThiTrungGian2();
    }
  }, 150);
}

function hienThiTrungGian2() {
  // hiệu ứng xóa điểm đầu, cuối
  if (!running) {
    console.log("Hàm TG2 bị dừng");
    return;
  }

  console.clear();
  console.log("Hàm TG2 chạy");

  const elements = getElements();
  if (!elements.maTuyen || !elements.routeInfo || !elements.hanoibus) {
    console.error("Lỗi: Một hoặc nhiều phần tử không tồn tại trong DOM.");
    return;
  }

  elements.maTuyen.style.display = "none";
  elements.routeInfo.style.display = "none";
  elements.hanoibus.style.display = "none";
  elements.xiNghiep.style.display = "none";
  elements.TuyenCanGiua.style.display = "none";
  elements.Transerco.style.display = "none";
  elements.HuyDong.style.display = "none";
  elements.VeGara.style.display = "none";

  setTimeout(() => {
    if (running) {
      console.clear();
      console.log("Hàm TG2 xong, chuyển sang hàm 4");
      hienThiMaTuyenCanGiua();
    }
  }, 150);
}

function hienThiMaTuyenCanGiua() {
  // VD:      55A
  if (!running) {
    console.log("Hàm 4 bị dừng");
    return;
  }

  console.clear();
  console.log("Hàm 4 chạy");

  const elements = getElements();
  if (!elements.maTuyen || !elements.routeInfo || !elements.hanoibus) {
    console.error("Lỗi: Một hoặc nhiều phần tử không tồn tại trong DOM.");
    return;
  }

  elements.maTuyen.style.display = "none";
  elements.routeInfo.style.display = "none";
  elements.hanoibus.style.display = "none";
  elements.xiNghiep.style.display = "none";
  elements.TuyenCanGiua.style.display = "flex";
  elements.Transerco.style.display = "none";
  elements.HuyDong.style.display = "none";
  elements.VeGara.style.display = "none";
  setTimeout(() => {
    if (running) {
      console.clear();
      console.log("Hàm 4 xong, chuyển sang hàm TG3");
      hienThiTrungGian3();
    }
  }, 5000);
}

// các hàm hiệu ứng trung gian
function hienThiTrungGian3() {
  // hiệu ứng xóa mã tuyến căn giữa
  if (!running) {
    console.log("Hàm TG3 bị dừng");
    return;
  }

  console.clear();
  console.log("Hàm TG3 chạy");

  const elements = getElements();
  if (!elements.maTuyen || !elements.routeInfo || !elements.hanoibus) {
    console.error("Lỗi: Một hoặc nhiều phần tử không tồn tại trong DOM.");
    return;
  }

  elements.maTuyen.style.display = "none";
  elements.routeInfo.style.display = "none";
  elements.hanoibus.style.display = "none";
  elements.xiNghiep.style.display = "none";
  elements.TuyenCanGiua.style.display = "none";
  elements.Transerco.style.display = "none";
  elements.HuyDong.style.display = "none";
  elements.VeGara.style.display = "none";

  setTimeout(() => {
    if (running) {
      console.clear();
      console.log("Hàm TG3 xong, chuyển sang hàm TG4");
      hienThiTrungGian4();
    }
  }, 250);
}

function hienThiTrungGian4() {
  // hiệu ứng hiển thị mã tuyến để chuẩn bị cho hàm 5
  if (!running) {
    console.log("Hàm TG4 bị dừng");
    return;
  }

  console.clear();
  console.log("Hàm TG4 chạy");

  const elements = getElements();
  if (!elements.maTuyen || !elements.routeInfo || !elements.hanoibus) {
    console.error("Lỗi: Một hoặc nhiều phần tử không tồn tại trong DOM.");
    return;
  }

  elements.maTuyen.style.display = "block";
  elements.routeInfo.style.display = "none";
  elements.hanoibus.style.display = "none";
  elements.xiNghiep.style.display = "none";
  elements.TuyenCanGiua.style.display = "none";
  elements.Transerco.style.display = "none";
  elements.HuyDong.style.display = "none";
  elements.VeGara.style.display = "none";
  setTimeout(() => {
    if (running) {
      console.clear();
      console.log("Hàm TG4 xong, chuyển sang hàm 5");
      hienThiMaTuyen_Transerco();
    }
  }, 250);
}

function hienThiMaTuyen_Transerco() {
  // VD: 55A      T R A N S E R C O
  if (!running) {
    console.log("Hàm 5 bị dừng");
    return;
  }

  console.clear();
  console.log("Hàm 5 chạy");

  const elements = getElements();
  if (!elements.maTuyen || !elements.routeInfo || !elements.hanoibus) {
    console.error("Lỗi: Một hoặc nhiều phần tử không tồn tại trong DOM.");
    return;
  }

  elements.maTuyen.style.display = "flex";
  elements.routeInfo.style.display = "none";
  elements.hanoibus.style.display = "none";
  elements.xiNghiep.style.display = "none";
  elements.TuyenCanGiua.style.display = "none";
  elements.Transerco.style.display = "flex";
  elements.HuyDong.style.display = "none";
  elements.VeGara.style.display = "none";

  setTimeout(() => {
    if (running) {
      console.clear();
      console.log("Hàm 5 xong, chuyển sang hàm 1");
      hienThiMaTuyen_DiemDauCuoi();
    }
  }, 5000);
}

function startToggle() {
  // Hàm chạy LED
  if (running) return; // Nếu đã chạy thì không khởi động lại
  running = true;
  console.log("Bắt đầu chạy");
  hienThiMaTuyen_DiemDauCuoi();
}

function stopToggle() {
  running = false;
  console.log("Đã đóng băng LED");
}

function HuyDongRaTuyen() {
  // hàm chỉ hiển thị HUY ĐỘNG RA TUYẾN
  stopToggle();
  reset();
  const maTuyen = document.getElementById("maTuyen");
  const routeInfo = document.getElementById("route-info");
  const hanoibus = document.getElementById("hanoibus");
  const xiNghiep = document.getElementById("xiNghiep");
  const TuyenCanGiua = document.getElementById("MaTuyenCanGiua");
  const Transerco = document.getElementById("transerco");
  const HuyDong = document.getElementById("HuyDongRaTuyen");

  maTuyen.style.display = "none";
  routeInfo.style.display = "none";
  hanoibus.style.display = "none";
  TuyenCanGiua.style.display = "none";
  Transerco.style.display = "none";
  xiNghiep.style.display = "none";
  HuyDong.style.display = "flex";
  console.log("Mode Huy động ra tuyến");
}

function XeVeGara() {
  // hàm chỉ hiển thị XE VỀ GARA
  stopToggle();
  reset();
  const maTuyen = document.getElementById("maTuyen");
  const routeInfo = document.getElementById("route-info");
  const hanoibus = document.getElementById("hanoibus");
  const xiNghiep = document.getElementById("xiNghiep");
  const TuyenCanGiua = document.getElementById("MaTuyenCanGiua");
  const Transerco = document.getElementById("transerco");
  const VeGara = document.getElementById("XeVeGara");

  maTuyen.style.display = "none";
  routeInfo.style.display = "none";
  hanoibus.style.display = "none";
  xiNghiep.style.display = "none";
  TuyenCanGiua.style.display = "none";
  Transerco.style.display = "none";
  VeGara.style.display = "flex";
  console.log("Mode Xe về Gara");
}

function reset() {
  // hàm xóa toàn bộ LED
  stopToggle();
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

  document.getElementById("maTuyen").innerText = maTuyen;
  document.getElementById("diemDau").innerText = diemDau;
  document.getElementById("diemCuoi").innerText = diemCuoi;
  document.getElementById("xiNghiep").innerText = xiNghiep;
  document.getElementById("MaTuyenCanGiua").innerText = maTuyen;

  // Lưu vào localStorage
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

  if (maTuyen) document.getElementById("maTuyen").innerText = maTuyen;
  if (diemDau) document.getElementById("diemDau").innerText = diemDau;
  if (diemCuoi) document.getElementById("diemCuoi").innerText = diemCuoi;
  if (xiNghiep) {
    document.getElementById("xiNghiep").innerText = xiNghiep;
    document.getElementById("MaTuyenCanGiua").innerText = maTuyen;
  }
};

function underConstruction() {
  const button = document.getElementsByClassName("TangCuongTuyen");
  button[0].addEventListener("click", function () {
    alert("Tính năng đang được xây dựng");
  });
}
