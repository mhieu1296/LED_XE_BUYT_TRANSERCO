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
  if (!elements.maTuyen || !elements.routeInfo) {
    console.error("Mã tuyến, điểm đầu và điểm cuối không tồn tại trong DOM.");
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
  if (!elements.maTuyen || !elements.hanoibus) {
    console.error("Mã tuyến và Hanoibus không tồn tại trong DOM.");
    return;
  }

  elements.maTuyen.style.display = "flex";
  elements.routeInfo.style.display = "none";
  elements.hanoibus.style.display = "block";
  elements.xiNghiep.style.display = "none";
  elements.TuyenCanGiua.style.display = "none";
  elements.Transerco.style.display = "none";
  elements.HuyDong.style.display = "none";
  elements.VeGara.style.display = "none";
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
  if (!elements.maTuyen || !elements.xiNghiep) {
    console.error("Mã tuyến và xí nghiệp không tồn tại trong DOM.");
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
  if (!elements.maTuyen || !elements.xiNghiep) {
    console.error("Mã tuyến và xí nghiệp không tồn tại trong DOM.");
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
}

function hienThiTrungGian1() {
  // hiệu ứng xóa mã tuyến
  if (!running) {
    console.log("Hàm TG1 bị dừng");
    return;
  }
  console.clear();
  console.log("Hàm TG1 chạy");

  const elements = getElements();
  if (!elements.xiNghiep) {
    console.error("Xí nghiệp không tồn tại trong DOM.");
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

  elements.maTuyen.style.display = "none";
  elements.routeInfo.style.display = "none";
  elements.hanoibus.style.display = "none";
  elements.xiNghiep.style.display = "none";
  elements.TuyenCanGiua.style.display = "none";
  elements.Transerco.style.display = "none";
  elements.HuyDong.style.display = "none";
  elements.VeGara.style.display = "none";
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
  if (!elements.TuyenCanGiua) {
    console.error("Mã tuyến căn giữa không tồn tại trong DOM.");
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
}

function hienThiTrungGian3() {
  // hiệu ứng xóa mã tuyến căn giữa
  if (!running) {
    console.log("Hàm TG3 bị dừng");
    return;
  }

  console.clear();
  console.log("Hàm TG3 chạy");

  const elements = getElements();
  elements.maTuyen.style.display = "none";
  elements.routeInfo.style.display = "none";
  elements.hanoibus.style.display = "none";
  elements.xiNghiep.style.display = "none";
  elements.TuyenCanGiua.style.display = "none";
  elements.Transerco.style.display = "none";
  elements.HuyDong.style.display = "none";
  elements.VeGara.style.display = "none";
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
  if (!elements.maTuyen) {
    console.error("Mã tuyến không tồn tại trong DOM.");
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
  if (!elements.maTuyen || !elements.Transerco) {
    console.error("Mã tuyến và Transerco không tồn tại trong DOM.");
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
}

// danh sách hiệu ứng
let funcs = [
  hienThiMaTuyen_DiemDauCuoi,
  hienThiMaTuyen_Hanoibus,
  hienThiMaTuyen_XiNghiep,
  hienThiTrungGian1,
  hienThiTrungGian2,
  hienThiMaTuyenCanGiua,
  hienThiTrungGian3,
  hienThiTrungGian4,
  hienThiMaTuyen_Transerco,
];

// thời gian delay từng hiệu ứng mặc định
let delays = [30000, 5000, 0, 0, 0, 5000, 0, 0, 5000]; // mode truyền thống

function chonMode(mode) {
  if (mode === "xe_dien") {
    // đầy đủ
    console.log("XE ĐIỆN");
    document.getElementById("ModeDangChay").innerText =
      "MODE ĐANG CHẠY: XE ĐIỆN";
    delays.splice(
      0,
      delays.length,
      ...[30000, 5000, 5000, 150, 150, 5000, 250, 250, 5000]
    );
    funcs.splice(
      0,
      funcs.length,
      hienThiMaTuyen_DiemDauCuoi,
      hienThiMaTuyen_Hanoibus,
      hienThiMaTuyen_XiNghiep,
      hienThiTrungGian1,
      hienThiTrungGian2,
      hienThiMaTuyenCanGiua,
      hienThiTrungGian3,
      hienThiTrungGian4,
      hienThiMaTuyen_Transerco
    );
  } else if (mode === "xe_dien2") {
    // đầy đủ, trừ hienThiMaTuyen_XiNghiep
    console.log("XE ĐIỆN 2");
    document.getElementById("ModeDangChay").innerText =
      "MODE ĐANG CHẠY: XE ĐIỆN 2";
    delays.splice(
      0,
      delays.length,
      ...[30000, 5000, 150, 5000, 250, 250, 5000]
    );
    funcs.splice(
      0,
      funcs.length,
      hienThiMaTuyen_DiemDauCuoi,
      hienThiMaTuyen_Hanoibus,
      hienThiTrungGian2,
      hienThiMaTuyenCanGiua,
      hienThiTrungGian3,
      hienThiTrungGian4,
      hienThiMaTuyen_Transerco
    );
  } else if (mode === "truyen_thong") {
    // có hienThiMaTuyen_DiemDauCuoi, hienThiMaTuyen_Hanoibus, hienThiMaTuyenCanGiua và hienThiMaTuyen_Transerco
    console.log("TRUYỀN THỐNG");
    document.getElementById("ModeDangChay").innerText =
      "MODE ĐANG CHẠY: TRUYỀN THỐNG";
    delays.splice(0, delays.length, ...[30000, 5000, 5000, 5000]);
    funcs.splice(
      0,
      funcs.length,
      hienThiMaTuyen_DiemDauCuoi,
      hienThiMaTuyen_Hanoibus,
      hienThiMaTuyenCanGiua,
      hienThiMaTuyen_Transerco
    );
  } else if (mode === "lien_ninh") {
    // có hienThiMaTuyen_DiemDauCuoi và hienThiMaTuyenCanGiua
    console.log("LIÊN NINH");
    document.getElementById("ModeDangChay").innerText =
      "MODE ĐANG CHẠY: LIÊN NINH";
    delays.splice(0, delays.length, ...[30000, 5000]);
    funcs.splice(
      0,
      funcs.length,
      hienThiMaTuyen_DiemDauCuoi,
      hienThiMaTuyenCanGiua
    );
  } else if (mode === "hanoibrt") {
    // có
    // hienThiMaTuyen_DiemDauCuoi,
    // hienThiMaTuyen_XiNghiep,
    // hienThiMaTuyen_Transerco
    // console.log("HANOI BRT");
    document.getElementById("ModeDangChay").innerText =
      "MODE ĐANG CHẠY: HANOI BRT";
    delays.splice(0, delays.length, ...[30000, 5000, 5000]);
    funcs.splice(
      0,
      funcs.length,
      hienThiMaTuyen_DiemDauCuoi,
      hienThiMaTuyen_XiNghiep,
      hienThiMaTuyen_Transerco
    );
  } else if (mode === "bao_yen") {
    // có
    // hienThiMaTuyen_DiemDauCuoi,
    // hienThiMaTuyen_XiNghiep
    // và nhấp nháy mã tuyến
    console.log("BẢO YẾN");
    document.getElementById("ModeDangChay").innerText =
      "MODE ĐANG CHẠY: BẢO YẾN";
    delays.splice(0, delays.length, ...[30000, 5000]);
    funcs.splice(
      0,
      funcs.length,
      hienThiMaTuyen_DiemDauCuoi,
      hienThiMaTuyen_XiNghiep
    );
  }
}

async function start() {
  // hàm chạy hiệu ứng
  if (running) return; // nếu đã chạy thì không chạy thêm nữa
  running = true;

  let index = 0;

  while (running) {
    funcs[index](); // chạy hàm
    await new Promise((resolve) => setTimeout(resolve, delays[index]));
    index = (index + 1) % funcs.length;
  }
}

function stop() {
  // hàm dừng chạy
  running = false;
}

function HuyDongRaTuyen() {
  // hàm chỉ hiển thị HUY ĐỘNG RA TUYẾN
  stop();
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
  stop();
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
  stop();
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

window.onload = function () {
  // xóa toàn bộ LED và dừng toàn bộ hoạt động LED khi tải xong trang, sẽ kích hoạt khi chạy hàm startToggle();
  stop();
  reset();
};
