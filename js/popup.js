// // Hàm đóng popup
// // Hàm đóng popup
// const closePopup = () => {
//   const modal = document.querySelector('.modal-overlay');
//   if (modal) modal.remove();
// };

// // Hàm tạo cấu trúc gốc (Core)
// // Hàm tạo cấu trúc gốc (Core)
// function createBaseModal(title, message, buttonsHTML) {
//   const html = `
//     <div class="modal-overlay">
//       <div class="modal-box">
//         <button class="modal-close" onclick="closePopup()">&times;</button>
//         <h2 style="margin-top:0">${title}</h2>
//         <p style="color:#666; line-height:1.5">${message}</p>
//         <div style="margin-top:25px">${buttonsHTML}</div>
//       </div>
//     </div>`;
//   document.body.insertAdjacentHTML('beforeend', html);
// }

// // --- 2 HÀM CHÍNH BẠN YÊU CẦU ---

// /** 1. Popup OK (Thông báo) */
// // Hiển thị thông báo (chỉ có nút OK)
// function showPopupAlert(title, message) {
//   const buttons = `<button class="modal-btn btn-primary" onclick="closePopup()">OK</button>`;
//   createBaseModal(title, message, buttons);
// }

// /** 2. Popup OK/Cancel (Xác nhận) */
// // Hiển thị xác nhận (có nút OK và Cancel)
// function showPopupConfirm(title, message, onConfirm, onCancel = null) {
//   let buttonsHTML = '';

//   if (onCancel !== 'none') {
//     buttonsHTML += `<button class="modal-btn btn-secondary" id="confirmCancel">Hủy bỏ</button>`;
//   }

//   buttonsHTML += `<button class="modal-btn btn-primary" id="confirmOk">OK (Enter)</button>`;

//   createBaseModal(title, message, buttonsHTML);

//   // Xử lý sự kiện nhấn nút OK
//   // Xử lý khi nhấn Confirm
//   const handleConfirm = () => {
//     if (onConfirm) onConfirm();
//     closePopup();
//     removeKeyListeners(); // Dọn dẹp sự kiện sau khi đóng
//   };

//   // Xử lý sự kiện nhấn nút Cancel
//   // Xử lý khi nhấn Cancel
//   const handleCancel = () => {
//     if (typeof onCancel === 'function') onCancel();
//     closePopup();
//     removeKeyListeners();
//   };

//   // Gán sự kiện Click
//   document.getElementById('confirmOk').onclick = handleConfirm;
//   const cancelBtn = document.getElementById('confirmCancel');
//   if (cancelBtn) cancelBtn.onclick = handleCancel;

//   // --- LOGIC BÀN PHÍM ---
//   const keyHandler = (e) => {
//     if (e.key === 'Enter') {
//       e.preventDefault(); // Ngăn chặn hành động mặc định của Enter (như gửi form)
//       handleConfirm();
//     } else if (e.key === 'Escape') {
//       handleCancel();
//     }
//   };

//   // Lắng nghe phím bấm khi popup mở
//   window.addEventListener('keydown', keyHandler);

//   // Hàm dọn dẹp để tránh rò rỉ bộ nhớ (Memory Leak)
//   // Xóa lắng nghe sự kiện phím
//   function removeKeyListeners() {
//     window.removeEventListener('keydown', keyHandler);
//   }
// }

// window.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape') closePopup();
// });

const popup = {
  // Hàm đóng popup
  close: function () {
    const el = document.getElementById('popup-root');
    if (el) el.classList.remove('active');
    window.removeEventListener('keydown', this._keyHandler);
  },

  // Hàm hiển thị chính
  show: function (title, message, onConfirm, mode = 'full') {
    const el = document.getElementById('popup-root');
    const elTitle = document.getElementById('p-title');
    const elMsg = document.getElementById('p-msg');
    const btnOk = document.getElementById('p-btn-ok');
    const btnCancel = document.getElementById('p-btn-cancel');
    const btnX = document.getElementById('p-btn-close');

    if (!el) return console.error("Lỗi: Không tìm thấy HTML popup!");

    // Cập nhật nội dung
    elTitle.innerText = title;
    elMsg.innerText = message;

    // Chế độ 1 nút hay 2 nút
    btnCancel.classList.toggle('hidden', mode === 'none');

    // Gán sự kiện
    btnOk.onclick = () => { onConfirm?.(); this.close(); };
    btnCancel.onclick = () => this.close();
    btnX.onclick = () => this.close();

    // Hiển thị
    el.classList.add('active');

    // Gán phím tắt (Enter & Esc)
    this._keyHandler = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        btnOk.click();
      } else if (e.key === 'Escape') {
        this.close();
      }
    };
    window.addEventListener('keydown', this._keyHandler);
  }
};

// --- VÍ DỤ CÁCH GỌI ---
// popup.show("Thành công", "Đã lưu dữ liệu!", () => console.log("OK"), "none");
// popup.show("Xác nhận", "Bạn muốn thoát chứ?", () => console.log("Thoát"));



// --- CÁCH GỌI ---

// 1. Popup OK/Cancel
// popup.show("Xác nhận", "Bạn muốn xóa chứ?", () => console.log("Đã xóa"));

// 2. Popup chỉ OK (Dùng mode 'none')
// popup.show("Thành công", "Đã lưu dữ liệu!", () => console.log("Đóng"), 'none');