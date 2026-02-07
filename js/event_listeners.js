document.addEventListener('DOMContentLoaded', function () {
    // Nút CHẠY và TẮT: disable/enable lẫn nhau
    const chayBtns = document.querySelectorAll('.ChayLed');
    const tatBtns = document.querySelectorAll('.RESET');

    function setChayTatState(state) {
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
                if (window.marquee) marquee.DungChayChu1();
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

    // Nút NGÀY/ĐÊM
    document.querySelectorAll('.DayAndNight').forEach(btn => {
        btn.addEventListener('click', toggleDayNight);
    });

    // NHÓM NÚT BẤM (Xử lý Hover nổi lên trên màn tối)
    // Sửa lỗi: Phải dùng forEach để gán sự kiện cho từng nút
    document.querySelectorAll('.NutBam').forEach(btn => {
        btn.addEventListener('mouseenter', function () {
            if (document.getElementById('nightModeOverlay')) {
                if (typeof setElevated === 'function') setElevated(this, true);
            }
        });

        btn.addEventListener('mouseleave', function () {
            if (document.getElementById('nightModeOverlay')) {
                if (!this.classList.contains('DayAndNight')) {
                    if (typeof setElevated === 'function') setElevated(this, false);
                }
            }
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
            if (typeof dungLai === 'function') {
                dungLai();
            }
        });
    });

    // Nút XE VỀ GARA
    document.querySelectorAll('.XeVeGara').forEach(btn => {
        btn.addEventListener('click', function () {
            if (typeof XeVeGara === 'function') {
                if (typeof stop === 'function') stop();
                if (typeof reset === 'function') reset();
                setChayTatState('tat');
                XeVeGara();
            }
        });
    });

    // Nút XE HUY ĐỘNG
    document.querySelectorAll('.HuyDongRaTuyen').forEach(btn => {
        btn.addEventListener('click', function () {
            if (typeof HuyDongRaTuyen === 'function') {
                if (typeof stop === 'function') stop();
                if (typeof reset === 'function') reset();
                setChayTatState('tat');
                HuyDongRaTuyen();
            }
        });
    });

    // Nút CHẠY CHỮ
    let onOff = false; 
    document.querySelectorAll('.CHAYCHU').forEach(btn => {
        btn.addEventListener('click', function () {
            if (!window.marquee) return;
            if (onOff === false) {
                marquee.ChayChu1();
                document.getElementById("isTextMoving").innerText = "YES";
            } else {
                marquee.DungChayChu1();
                document.getElementById("isTextMoving").innerText = "NO";
            }
            onOff = !onOff;
        });
    });

    // Mode chạy XEDIEN1
    let isA = false;
    const selectedForXD1 = "rgba(66, 113, 163)";
    const unselectedForXD1 = "rgba(128, 128, 128, 0.808)";

    document.querySelectorAll('.XEDIEN1').forEach(btn => {
        btn.addEventListener('click', function () {
            if (!window.marquee) return;
            if (isA) {
                marquee.hide("xiNghiep");
                marquee.show("route-info");
                this.style.color = unselectedForXD1;
                this.style.borderColor = unselectedForXD1;
                this.style.borderStyle = "none";
            } else {
                marquee.show("xiNghiep");
                this.style.color = selectedForXD1;
                this.style.borderColor = selectedForXD1;
                this.style.borderStyle = "solid";
            }
            isA = !isA;
            if (typeof tatHieuUngNhay === 'function') tatHieuUngNhay();
        });
    });

    // Các Mode chạy (XEDIEN2, THUONG, LIENNINH, HANOIBRT, BAOYEN, DEMO)
  const modes = ['.XEDIEN2', '.THUONG', '.LIENNINH', '.HANOIBRT', '.BAOYEN', '.DEMO'];
  const modeNames = ['xe_dien2', 'thuong', 'lien_ninh', 'hanoibrt', 'bao_yen', 'demo'];

  modes.forEach((selector, index) => {
    document.querySelectorAll(selector).forEach(btn => {
      btn.addEventListener('click', function () {
        if (typeof chonMode === 'function') {
          if (typeof dungLai === 'function') dungLai();
          if (typeof reset === 'function') reset();
          
          alert("Đổi mode thành công. LED sẽ tắt. Nhấn Chạy để hiển thị.");
          chonMode(modeNames[index]);
          setChayTatState('tat');
        }

        // Logic riêng cho hiệu ứng nhảy
        if (selector === '.BAOYEN') {
          if (typeof batHieuUngNhay === 'function') batHieuUngNhay();
        } else {
          if (typeof tatHieuUngNhay === 'function') tatHieuUngNhay();
        }
      });
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