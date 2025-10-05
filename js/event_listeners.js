// js/event_listeners.js
// Chuyển các lời gọi hàm trong các thuộc tính onclick thành event listener
// Đảm bảo các hàm đã được định nghĩa trong các file js khác

document.addEventListener('DOMContentLoaded', function() {
  // Nút CHẠY
  document.querySelectorAll('.ChayLed').forEach(btn => {
    btn.addEventListener('click', function() {
      if (typeof start === 'function') start();
    });
  });

  // Nút RESET (TẮT)
  document.querySelectorAll('.RESET').forEach(btn => {
    btn.addEventListener('click', function() {
      if (typeof reset === 'function') reset();
    });
  });

  // Nút NÂNG CAO
  document.querySelectorAll('.Details').forEach(btn => {
    btn.addEventListener('click', function() {
      if (typeof toggleDivs === 'function') toggleDivs();
    });
  });

  // Nút ĐẢO CHIỀU
  document.querySelectorAll('.daoChieuTuyen').forEach(btn => {
    btn.addEventListener('click', function() {
      if (typeof daoChieuLED === 'function') daoChieuLED('diemDau', 'diemCuoi');
    });
  });

  // Nút ĐÓNG BĂNG
  document.querySelectorAll('.DungLed').forEach(btn => {
    btn.addEventListener('click', function() {
      if (typeof stop === 'function') stop();
    });
  });

  // Nút XE VỀ GARA
  document.querySelectorAll('.XeVeGara').forEach(btn => {
    btn.addEventListener('click', function() {
      if (typeof HuyDongRaTuyen === 'function') HuyDongRaTuyen();
    });
  });

  // Nút XE HUY ĐỘNG
  document.querySelectorAll('.HuyDongRaTuyen').forEach(btn => {
    btn.addEventListener('click', function() {
      if (typeof XeVeGara === 'function') XeVeGara();
    });
  });

  // Nút CHẠY CHỮ
  document.querySelectorAll('.TEST').forEach(btn => {
    btn.addEventListener('click', function() {
      if (typeof chayChu === 'function') chayChu();
    });
  });

  // Mode chạy
  document.querySelectorAll('.DAYDU').forEach(btn => {
    btn.addEventListener('click', function() {
      if (typeof chonMode === 'function'){
        stop();
        reset();
        alert("Đổi mode thành công. LED sẽ tắt. Nhấn Chạy để hiển thị.");
        chonMode('day_du');
      }
      if (typeof tatHieuUngNhay === 'function'){
        tatHieuUngNhay();
      }
    });
  });
  document.querySelectorAll('.XEDIEN2').forEach(btn => {
    btn.addEventListener('click', function() {
      if (typeof chonMode === 'function'){
        stop();
        reset();
        alert("Đổi mode thành công. LED sẽ tắt. Nhấn Chạy để hiển thị.");
        chonMode('xe_dien2');
      }
      if (typeof tatHieuUngNhay === 'function'){
        tatHieuUngNhay();
      }
    });
  });
  document.querySelectorAll('.THUONG').forEach(btn => {
    btn.addEventListener('click', function() {
      if (typeof chonMode === 'function'){
        stop();
        reset();
        alert("Đổi mode thành công. LED sẽ tắt. Nhấn Chạy để hiển thị.");
        chonMode('thuong');
      }
      if (typeof tatHieuUngNhay === 'function'){
        tatHieuUngNhay();
      }
    });
  });
  document.querySelectorAll('.LIENNINH').forEach(btn => {
    btn.addEventListener('click', function() {
      if (typeof chonMode === 'function'){
        stop();
        reset();
        alert("Đổi mode thành công. LED sẽ tắt. Nhấn Chạy để hiển thị.");
        chonMode('lien_ninh');
      }
      if (typeof tatHieuUngNhay === 'function'){
        tatHieuUngNhay();
      }
    });
  });
  document.querySelectorAll('.HANOIBRT').forEach(btn => {
    btn.addEventListener('click', function() {
      if (typeof chonMode === 'function'){
        stop();
        reset();
        alert("Đổi mode thành công. LED sẽ tắt. Nhấn Chạy để hiển thị.");
        chonMode('hanoibrt');
      }
      if (typeof tatHieuUngNhay === 'function'){
        tatHieuUngNhay();
      }
    });
  });
  document.querySelectorAll('.BAOYEN').forEach(btn => {
    btn.addEventListener('click', function() {
      if (typeof chonMode === 'function'){
        stop();
        reset();
        alert("Đổi mode thành công. LED sẽ tắt. Nhấn Chạy để hiển thị.");
        chonMode('bao_yen');
      }
      if (typeof batHieuUngNhay === 'function'){
        batHieuUngNhay();
      }
    });
  });
  document.querySelectorAll('.DEMO').forEach(btn => {
    btn.addEventListener('click', function() {
      if (typeof chonMode === 'function'){
        stop();
        reset();
        alert("Đổi mode thành công. LED sẽ tắt. Nhấn Chạy để hiển thị.");
        chonMode('demo');
      }
      if (typeof tatHieuUngNhay === 'function'){
        tatHieuUngNhay();
      }
    });
  });

  // Nút màu nền
  const colorIds = ['xanhduong', 'xanhla', 'cam', 'vang', 'tim', 'hong', 'do'];
  colorIds.forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', function() {
        if (typeof setColor === 'function') setColor(colorIds.indexOf(id));
      });
    }
  });

  // Nút NHẬP
  document.querySelectorAll('.NhapDuLieu').forEach(btn => {
    if (btn.tagName === 'BUTTON') {
      btn.addEventListener('click', function() {
        if (btn.innerText === 'XÓA' && typeof xacNhan === 'function') xacNhan();
      });
    }
  });
});
