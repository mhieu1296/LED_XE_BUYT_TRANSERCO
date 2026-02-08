// Xác nhận và xóa dữ liệu trong LocalStorage
function xacNhan() {
  // if (confirm("Bạn có chắc chắn muốn xóa dữ liệu tuyến trong localstorage không?")) {
  //   localStorage.clear(); location.reload()
  //   alert("Đã xóa thành công!");
  //   window.scrollTo(0, 0); // về đầu trang
  // } else {
  //   // Không làm gì, chỉ về đầu trang
  //   window.scrollTo(0, 0);
  // }
  // showPopupConfirm(
  //   "Xóa dữ liệu tuyến?",
  //   "Tất cả dữ liệu trong LocalStorage (bao gồm thông tin tuyến và mode được chọn) sẽ mất khi bạn nhấn nút Đồng ý.<br> Bạn cần nạp lại tuyến và chọn lại mode sau khi xóa.",
  //   () => {
  //     showPopupConfirm(
  //       "Xóa dữ liệu tuyến thành công!",
  //       "Trang sẽ được tải lại. LED sẽ tắt. Nhấn Chạy để hiển thị.",
  //       () => {
  //         location.reload();
  //         window.scrollTo(0, 0);
  //       },
  //       'none'
  //     );
  //     localStorage.clear();

  //   },
  //   () => {
  //     window.scrollTo(0, 0);
  //   }
  // );
  popup.show(
    "Xóa dữ liệu tuyến?",
    "Tất cả dữ liệu trong LocalStorage \n(bao gồm thông tin tuyến và mode được chọn) \nsẽ mất khi bạn nhấn nút OK.\nBạn cần nạp lại tuyến và chọn lại mode sau khi xóa.",
    () => {
      location.reload();
      window.scrollTo(0, 0);
      localStorage.clear();
    },
    () => {
      // Hành động khi nhấn Hủy bỏ ở Popup 1:
      window.scrollTo(0, 0);
    }
  );
}