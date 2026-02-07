console.log(
  "%cTRANSERCO HANOIBUS",
  "COLOR: GREEN; font-size: 20px; font-family: COURIER"
);

console.log(
  "%cXin chào! 🚏🚌",
  "color: red; font-size: 50px; font-weight: bold; font-family: tahoma"
);
console.log(
  "%cLED xe buýt. Chỉ dùng DevTools để debug.Không chèn mã vào đây nếu bạn không phải nhà phát triển.",
  "font-size: 20px; font-family: Arial"
);

function centerChildInParent(parentId, childId) {
  const parent = document.getElementById(parentId);
  const child = document.getElementById(childId);

  if (!parent || !child) {
    console.warn("Không tìm thấy div cha hoặc div con");
    return;
  }

  const parentWidth = parent.offsetWidth;
  const childWidth = child.offsetWidth;

  const left = (parentWidth - childWidth) / 2;

  child.style.left = left + "px";
}

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

// // hiệu ứng chạy chữ từ phải sang trái
// let isRunning = false;
// let animationId = null;
// let pos = 0;
// let lastTime = null;

// function scrollText(timestamp) {
//   if (!isRunning) return;

//   if (!lastTime) lastTime = timestamp;
//   const elapsed = (timestamp - lastTime) / 1000;
//   lastTime = timestamp;

//   const chaychu = document.getElementById('route-info');
//   const khung = document.getElementsByClassName('NoiDungChayChu')[0];

//   let toc_do = parseInt(document.getElementById("speedControl").value); // px/s
//   pos -= toc_do * elapsed; // dòng 51
//   if (pos < -chaychu.offsetWidth) {
//     pos = khung.offsetWidth;
//   }

//   chaychu.style.left = pos + 'px';

//   animationId = requestAnimationFrame(scrollText);
// }

// function chayChu() {
//   const khung = document.getElementsByClassName('NoiDungChayChu')[0];
//   const chaychu = document.getElementById('route-info');

//   if (!isRunning) {
//     pos = khung.offsetWidth;
//     lastTime = null;
//     isRunning = true;
//     animationId = requestAnimationFrame(scrollText);
//     console.log("Bắt đầu chạy chữ");
//     document.getElementById("isTextMoving").innerText = "YES";
//   } else {
//     isRunning = false;
//     cancelAnimationFrame(animationId);

//     //  Căn giữa dòng chữ khi dừng lại
//     const centerPos = (khung.offsetWidth - chaychu.offsetWidth) / 2;
//     chaychu.style.left = centerPos + 'px';
//     document.getElementById("isTextMoving").innerText = "NO";
//     console.log("Dừng chạy chữ");
//   }
// }

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
  dungLai();
  marquee.DungChayChu1();

  document.getElementById("isPausing").innerText = "NO";

  const maTuyen = document.getElementById("maTuyen");
  
  
  const hanoibus = document.getElementById("hanoibus");
  const transerco = document.getElementById("transerco");
  const xiNghiep = document.getElementById("xiNghiep");
  const TuyenCanGiua = document.getElementById("MaTuyenCanGiua");
  const HuyDong = document.getElementById("HuyDongRaTuyen");
  const VeGara = document.getElementById("XeVeGara");

  maTuyen.style.display = "none";
  document.querySelector(".NoiDungChayChu").dataset.forceHide = "true";
  hanoibus.style.display = "none";
  transerco.style.display = "none";
  xiNghiep.style.display = "none";
  TuyenCanGiua.style.display = "none";
  HuyDong.style.display = "none";
  VeGara.style.display = "none";
  console.log("Xóa LED thành công");
}


// DAY AND NIGHT MODE FUNCTIONALITY

function setElevated(element, isElevated) {
  if (!element) return;
  if (isElevated) {
    element.style.position = 'relative'; // Bắt buộc có để z-index hoạt động
    element.style.zIndex = '10000';      // Cao hơn mức 9999 của màn tối
  } else {
    element.style.position = '';
    element.style.zIndex = '';
  }
}

function toggleDayNight() {
  const overlayId = 'nightModeOverlay';
  let overlay = document.getElementById(overlayId);
  const led = document.getElementById('LED');
  const allButtons = document.querySelectorAll('.DayAndNight, .NutBam');

  if (!overlay) {
    // 1. Tạo màn tối bao phủ toàn bộ màn hình
    overlay = document.createElement('div');
    overlay.id = overlayId;
    Object.assign(overlay.style, {
      position: 'fixed',
      top: '0', left: '0', right: '0', bottom: '0',
      width: '100%', height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: '9999',
      pointerEvents: 'none' // Cho phép cuộn và tương tác xuyên qua lớp này
    });
    document.body.appendChild(overlay);

    // 2. Đưa LED lên trên lớp tối
    setElevated(led, true);

    // 3. Đưa các nút DayAndNight lên trên (để nhấn tắt được)
    document.querySelectorAll('.DayAndNight').forEach(btn => setElevated(btn, true));

  } else {
    // Tắt chế độ tối: Xóa màn tối và trả lại z-index gốc
    overlay.remove();
    setElevated(led, false);
    allButtons.forEach(btn => setElevated(btn, false));
  }
}