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
    console.log("Hàm hiển thị mã tuyến + điểm đầu cuối bị dừng");
    return;
  }
  console.clear();
  console.log("Hàm mã tuyến + điểm đầu cuối chạy");

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
    console.log("Hàm mã tuyến + Hanoibus bị dừng");
    return;
  }
  console.clear();
  console.log("Hàm mã tuyến + Hanoibus chạy");

  const elements = getElements();
  if (!elements.maTuyen || !elements.hanoibus) {
    console.error("Mã tuyến và Hanoibus không tồn tại trong DOM.");
    return;
  }

  elements.maTuyen.style.visibility = "visible";
  elements.routeInfo.style.display = "none";
  elements.hanoibus.style.display = "block";
  elements.xiNghiep.style.display = "none";
  elements.TuyenCanGiua.style.display = "none";
  elements.Transerco.style.display = "none";
  elements.HuyDong.style.display = "none";
  elements.VeGara.style.display = "none";
}

function hienThiHanoibus() {
  // VD: H A N O I B U S
  if (!running) {
    console.log("Hàm hiển thị Hanoibus bị dừng");
    return;
  }
  console.clear();
  console.log("Hàm hiển thị Hanoibus chạy");

  const elements = getElements();
  if (!elements.maTuyen || !elements.hanoibus) {
    console.error("Hanoibus không tồn tại trong DOM.");
    return;
  }

  elements.maTuyen.style.display = "none";
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
    console.log("Hàm hiển thị mã tuyến + xí nghiệp bị dừng");
    return;
  }
  console.clear();
  console.log("Hàm hiển thị mã tuyến + xí nghiệp chạy");

  const elements = getElements();
  if (!elements.maTuyen || !elements.xiNghiep) {
    console.error("Mã tuyến và xí nghiệp không tồn tại trong DOM.");
    return;
  }

  elements.maTuyen.style.visibility = "visible";
  elements.routeInfo.style.display = "none";
  elements.hanoibus.style.display = "none";
  elements.xiNghiep.style.display = "flex";
  elements.TuyenCanGiua.style.display = "none";
  elements.Transerco.style.display = "none";
  elements.HuyDong.style.display = "none";
  elements.VeGara.style.display = "none";
}

// các hàm hiệu ứng trung gian
function hienThiTrungGian1_1() {
  // hiệu ứng xóa mã tuyến
  if (!running) {
    console.log("Hàm hiệu ứng xóa mã tuyến bị dừng");
    return;
  }
  console.clear();
  console.log("Hàm hiệu ứng xóa mã tuyến chạy");

  const elements = getElements();
  if (!elements.maTuyen || !elements.xiNghiep) {
    console.error("Mã tuyến và xí nghiệp không tồn tại trong DOM.");
    return;
  }

  elements.maTuyen.style.visibility = "hidden";
  elements.routeInfo.style.display = "none";
  elements.hanoibus.style.display = "none";
  elements.xiNghiep.style.display = "flex";
  elements.TuyenCanGiua.style.display = "none";
  elements.Transerco.style.display = "none";
  elements.HuyDong.style.display = "none";
  elements.VeGara.style.display = "none";
}

function hienThiTrungGian1_2() {
  // hiệu ứng xóa mã tuyến (mode xe điện 2, giữ logo Hanoibus trước khi xóa)
  if (!running) {
    console.log("Hàm hiệu ứng xóa mã tuyến (mode xe điện 2, giữ logo Hanoibus trước khi xóa) bị dừng");
    return;
  }
  console.clear();
  console.log("Hàm hiệu ứng xóa mã tuyến (mode xe điện 2, giữ logo Hanoibus trước khi xóa) chạy");

  const elements = getElements();
  if (!elements.maTuyen || !elements.xiNghiep) {
    console.error("Mã tuyến và xí nghiệp không tồn tại trong DOM.");
    return;
  }

  elements.maTuyen.style.visibility = "hidden";
  elements.routeInfo.style.display = "none";
  elements.hanoibus.style.display = "flex";
  elements.xiNghiep.style.display = "none";
  elements.TuyenCanGiua.style.display = "none";
  elements.Transerco.style.display = "none";
  elements.HuyDong.style.display = "none";
  elements.VeGara.style.display = "none";
}

function hienThiTrungGian2() {
  // hiệu ứng xóa điểm đầu, cuối
  if (!running) {
    console.log("Hàm hiệu ứng xóa điểm đầu, cuối bị dừng");
    return;
  }

  console.clear();
  console.log("Hàm hiệu ứng xóa điểm đầu, cuối chạy");

  const elements = getElements();

  elements.maTuyen.style.visibility = "hidden";
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
    console.log("Hàm hiển thị mã tuyến căn giữa bị dừng");
    return;
  }

  console.clear();
  console.log("Hàm hiển thị mã tuyến căn giữa chạy");

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
    console.log("Hàm hiệu ứng xóa mã tuyến căn giữa bị dừng");
    return;
  }

  console.clear();
  console.log("Hàm hiệu ứng xóa mã tuyến căn giữa chạy");

  const elements = getElements();
  elements.maTuyen.style.display = "flex";
  elements.maTuyen.style.visibility = "hidden";
  elements.routeInfo.style.display = "none";
  elements.hanoibus.style.display = "none";
  elements.xiNghiep.style.display = "none";
  elements.TuyenCanGiua.style.display = "none";
  elements.Transerco.style.display = "none";
  elements.HuyDong.style.display = "none";
  elements.VeGara.style.display = "none";
}

function hienThiTrungGian4() {
  // hiệu ứng hiển thị mã tuyến để chuẩn bị cho hàm hiển thị logo Transerco
  if (!running) {
    console.log("Hàm hiển thị mã tuyến để chuẩn bị cho hàm hiển thị logo Transerco bị dừng");
    return;
  }

  console.clear();
  console.log("Hàm hiển thị mã tuyến để chuẩn bị cho hàm hiển thị logo Transerco chạy");

  const elements = getElements();
  if (!elements.maTuyen) {
    console.error("Mã tuyến không tồn tại trong DOM.");
    return;
  }

  elements.maTuyen.style.visibility = "visible";
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
  elements.maTuyen.style.visibility = "visible";
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
  hienThiMaTuyenCanGiua,
  hienThiMaTuyen_Transerco,
];

// thời gian delay từng hiệu ứng mặc định
let delays = [30000, 3000, 5000, 3000]; // mode truyền thống

function chonMode(mode) {
  if (mode === "day_du") {
    // đầy đủ
    console.log("ĐẦY ĐỦ");
    document.getElementById("MODE").innerText = "ĐẦY ĐỦ";
    delays.splice(
      0,
      delays.length,
      ...[30000, 5000, 5000, 200, 200, 5000, 300, 300, 5000]
    );
    funcs.splice(
      0,
      funcs.length,
      hienThiMaTuyen_DiemDauCuoi,
      hienThiMaTuyen_Hanoibus,
      hienThiMaTuyen_XiNghiep,
      hienThiTrungGian1_1,
      hienThiTrungGian2,
      hienThiMaTuyenCanGiua,
      hienThiTrungGian3,
      hienThiTrungGian4,
      hienThiMaTuyen_Transerco
    );
  } else if (mode === "xe_dien2") {
    // đầy đủ, trừ hienThiMaTuyen_XiNghiep
    console.log("XE ĐIỆN 2");
    document.getElementById("MODE").innerText = "XE ĐIỆN 2";
    delays.splice(
      0,
      delays.length,
      ...[30000, 5000, 200, 200, 5000, 300, 300, 5000]
    );
    funcs.splice(
      0,
      funcs.length,
      hienThiMaTuyen_DiemDauCuoi,
      hienThiMaTuyen_Hanoibus,
      hienThiTrungGian1_2,
      hienThiTrungGian2,
      hienThiMaTuyenCanGiua,
      hienThiTrungGian3,
      hienThiTrungGian4,
      hienThiMaTuyen_Transerco
    );
  } else if (mode === "thuong") {
    // có hienThiMaTuyen_DiemDauCuoi, hienThiMaTuyen_Hanoibus, hienThiMaTuyenCanGiua và hienThiMaTuyen_Transerco
    console.log("THƯỜNG");
    document.getElementById("MODE").innerText = "THƯỜNG";
    delays.splice(0, delays.length, ...[30000, 3000, 5000, 3000]);
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
    document.getElementById("MODE").innerText = "LIÊN NINH";
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
    // hienThiMaTuyenCanGiua,
    // hienThiMaTuyen_Transerco
    console.log("HANOI BRT");
    document.getElementById("MODE").innerText = "HANOI BRT";
    delays.splice(0, delays.length, ...[30000, 5000, 5000, 5000]);
    funcs.splice(
      0,
      funcs.length,
      hienThiMaTuyen_DiemDauCuoi,
      hienThiMaTuyen_XiNghiep,
      hienThiMaTuyenCanGiua,
      hienThiMaTuyen_Transerco
    );
  } else if (mode === "bao_yen") {
    // có
    // hienThiMaTuyen_DiemDauCuoi,
    // hienThiMaTuyen_XiNghiep
    // và nhấp nháy mã tuyến
    console.log("BẢO YẾN");
    document.getElementById("MODE").innerText = "BẢO YẾN";
    delays.splice(0, delays.length, ...[30000, 5000]);
    funcs.splice(
      0,
      funcs.length,
      hienThiMaTuyen_DiemDauCuoi,
      hienThiMaTuyen_XiNghiep
    );
  } else if (mode === "demo") {
    // có đầy đủ hàm, nhưng các hàm chỉ chạy trong 2 giây.
    console.log("DEMO");
    document.getElementById("MODE").innerText = "DEMO";
    delays.splice(
      0,
      delays.length,
      ...[2000, 2000, 2000, 200, 200, 2000, 300, 300, 2000]
    );
    funcs.splice(
      0,
      funcs.length,
      hienThiMaTuyen_DiemDauCuoi,
      hienThiMaTuyen_Hanoibus,
      hienThiMaTuyen_XiNghiep,
      hienThiTrungGian1_1,
      hienThiTrungGian2,
      hienThiMaTuyenCanGiua,
      hienThiTrungGian3,
      hienThiTrungGian4,
      hienThiMaTuyen_Transerco
    );
  } else if (mode === "xe_ve_gara"){
    // Mode hiển thị "XE VỀ GARA", logo Hanoibus và logo Transerco

  }
}

async function start() {
  // hàm chạy LED
  if (running) return; // nếu đã chạy thì không chạy thêm nữa
  document.getElementById("isRunning").innerText = "YES";
  document.getElementById("isPausing").innerText = "NO";
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
  document.getElementById("isRunning").innerText = "NO";
  document.getElementById("isPausing").innerText = "YES";
  running = false;
}

function HuyDongRaTuyen() {
  // hàm chỉ hiển thị HUY ĐỘNG RA TUYẾN
  stop();
  reset();
  document.getElementById("HuyDongRaTuyen").style.display = "flex";  
  console.log("Mode Huy động ra tuyến");
}

function XeVeGara() {
  // hàm chỉ hiển thị XE VỀ GARA
  stop();
  reset();
  document.getElementById("XeVeGara").style.display = "flex";
  console.log("Mode XE VỀ GARA");
}
