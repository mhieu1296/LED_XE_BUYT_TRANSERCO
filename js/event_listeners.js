// js/event_listeners.js
// Chuyển các lời gọi hàm trong các thuộc tính onclick thành event listener
// Đảm bảo các hàm đã được định nghĩa trong các file js khác



document.addEventListener('DOMContentLoaded', function () {
  // Nút CHẠY và TẮT: disable/enable lẫn nhau
  const chayBtns = document.querySelectorAll('.ChayLed');
  const tatBtns = document.querySelectorAll('.RESET');

  function setChayTatState(state) {
    // state: 'chay' hoặc 'tat'
    if (state === 'chay') {
      chayBtns.forEach(b => b.disabled = true);
      tatBtns.forEach(b => b.disabled = false);
    } else if (state === 'tat') {
      tatBtns.forEach(b => b.disabled = true);
      chayBtns.forEach(b => b.disabled = false);
    }
  }

  chayBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      if (typeof start === 'function') {
        start();
        marquee.DungChayChu1();
      }
      setChayTatState('chay');
    });
  });
  tatBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      if (typeof reset === 'function') reset();
      setChayTatState('tat');
    });
  });

  // Khởi tạo: CHẠY enable, TẮT disable
  setChayTatState('tat');

  // nút reload trang
  document.querySelectorAll('.RESTART').forEach(btn => {
    btn.addEventListener('click', function () {
      location.reload();
    });
  });

  // Nút NÂNG CAO
  document.querySelectorAll('.Details').forEach(btn => {
    btn.addEventListener('click', function () {
      if (typeof toggleDivs === 'function') toggleDivs();
    });
  });

  // Nút ĐẢO CHIỀU
  document.querySelectorAll('.daoChieuTuyen').forEach(btn => {
    btn.addEventListener('click', function () {
      if (typeof daoChieuLED === 'function') daoChieuLED('diemDau', 'diemCuoi');
    });
  });

  // Nút ĐÓNG BĂNG
  document.querySelectorAll('.DungLed').forEach(btn => {
    btn.addEventListener('click', function () {
      if (typeof stop === 'function') dungLai();
    });
  });

  // Nút XE VỀ GARA
  document.querySelectorAll('.XeVeGara').forEach(btn => {
    btn.addEventListener('click', function () {
      if (typeof XeVeGara === 'function') {
        stop();
        reset();
        setChayTatState('tat');
        XeVeGara();
      }
    });
  });

  // Nút XE HUY ĐỘNG
  document.querySelectorAll('.HuyDongRaTuyen').forEach(btn => {
    btn.addEventListener('click', function () {
      if (typeof HuyDongRaTuyen === 'function') {
        stop();
        reset();
        setChayTatState('tat');
        HuyDongRaTuyen();
      }
    });
  });

  // Nút CHẠY CHỮ
  let onOff = false; // trạng thái luân phiên

  document.querySelectorAll('.CHAYCHU').forEach(btn => {
    btn.addEventListener('click', function () {
      if (onOff === false) {
        marquee.ChayChu1();
        document.getElementById("isTextMoving").innerText = "YES";
        console.log(onOff);
      } else {
        marquee.DungChayChu1();
        document.getElementById("isTextMoving").innerText = "NO";
        console.log(onOff);
      }
      onOff = !onOff;
    });
  });

  // Mode chạy
  let isA = false;

  const selectedForXD1 = "rgb(155, 206, 237)";
  const unselectedForXD1 = "rgba(17, 205, 142)";
  const XEDIEN1 = document.getElementsByClassName("XEDIEN1")[0];

  document.querySelectorAll('.XEDIEN1').forEach(btn => {
    btn.addEventListener('click', function () {

      if (!window.marquee) {
        console.warn("marquee engine chưa sẵn sàng");
        return;
      }
      const temp = document.getElementById("MODE").innerText;
      if (isA) {
        marquee.hide("xiNghiep");
        marquee.show("route-info");
        console.log("ẩn");
        XEDIEN1.style.backgroundColor = unselectedForXD1;
      } else {
        marquee.show("xiNghiep");
        // marquee.show("route-info");
        console.log("hiện");
        XEDIEN1.style.backgroundColor = selectedForXD1;
      }

      isA = !isA;

      if (typeof tatHieuUngNhay === 'function') {
        tatHieuUngNhay();
      }
    });
  });





  // XEDIEN1.style.backgroundColor  = selected;
  // XEDIEN2.style.backgroundColor  = selected;
  // THUONG.style.backgroundColor   = selected;
  // LIENNINH.style.backgroundColor = selected;
  // HANOIBRT.style.backgroundColor = selected;
  // BAOYEN.style.backgroundColor   = selected;
  // DEMO.style.backgroundColor     = selected;

  document.querySelectorAll('.XEDIEN2').forEach(btn => {
    btn.addEventListener('click', function () {
      if (typeof chonMode === 'function') {
        dungLai();
        reset();
        alert("Đổi mode thành công. LED sẽ tắt. Nhấn Chạy để hiển thị.");
        chonMode('xe_dien2');

        
        setChayTatState('tat');
      }
      if (typeof tatHieuUngNhay === 'function') {
        tatHieuUngNhay();
      }
    });
  });
  document.querySelectorAll('.THUONG').forEach(btn => {
    btn.addEventListener('click', function () {
      if (typeof chonMode === 'function') {
        dungLai();
        reset();
        alert("Đổi mode thành công. LED sẽ tắt. Nhấn Chạy để hiển thị.");
        chonMode('thuong');

        
        

        setChayTatState('tat');
      }
      if (typeof tatHieuUngNhay === 'function') {
        tatHieuUngNhay();
      }
    });
  });
  document.querySelectorAll('.LIENNINH').forEach(btn => {
    btn.addEventListener('click', function () {
      if (typeof chonMode === 'function') {
        dungLai();
        reset();
        alert("Đổi mode thành công. LED sẽ tắt. Nhấn Chạy để hiển thị.");
        chonMode('lien_ninh');

        
        

        setChayTatState('tat');
      }
      if (typeof tatHieuUngNhay === 'function') {
        tatHieuUngNhay();
      }
    });
  });
  document.querySelectorAll('.HANOIBRT').forEach(btn => {
    btn.addEventListener('click', function () {
      if (typeof chonMode === 'function') {
        dungLai();
        reset();
        alert("Đổi mode thành công. LED sẽ tắt. Nhấn Chạy để hiển thị.");
        chonMode('hanoibrt');


        setChayTatState('tat');
      }
      if (typeof tatHieuUngNhay === 'function') {
        tatHieuUngNhay();
      }
    });
  });
  document.querySelectorAll('.BAOYEN').forEach(btn => {
    btn.addEventListener('click', function () {
      if (typeof chonMode === 'function') {
        dungLai();
        reset();
        alert("Đổi mode thành công. LED sẽ tắt. Nhấn Chạy để hiển thị.");
        chonMode('bao_yen');

        setChayTatState('tat');
      }
      if (typeof tatHieuUngNhay === 'function') {
        batHieuUngNhay();
      }
    });
  });
  document.querySelectorAll('.DEMO').forEach(btn => {
    btn.addEventListener('click', function () {
      if (typeof chonMode === 'function') {
        dungLai();
        reset();
        alert("Đổi mode thành công. LED sẽ tắt. Nhấn Chạy để hiển thị.");
        chonMode('demo');

        setChayTatState('tat');
      }
      if (typeof tatHieuUngNhay === 'function') {
        tatHieuUngNhay();
      }
    });
  });

  // Nút NHẬP
  document.querySelectorAll('.NhapDuLieu').forEach(btn => {
    if (btn.tagName === 'BUTTON') {
      btn.addEventListener('click', function () {
        if (btn.innerText === 'XÓA' && typeof xacNhan === 'function') xacNhan();
      });
    }
  });
});
