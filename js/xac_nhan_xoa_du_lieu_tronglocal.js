function xacNhan() {
    if (confirm("Bạn có chắc chắn muốn xóa dữ liệu tuyến trong localstorage không?")) {
      localStorage.clear(); location.reload()
      alert("Đã xóa thành công!");
      window.scrollTo(0, 0); // về đầu trang
    } else {
      // Không làm gì, chỉ về đầu trang
      window.scrollTo(0, 0);
    }
}