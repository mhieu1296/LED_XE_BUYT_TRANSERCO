window.onload = function () {
  // xóa toàn bộ LED và dừng toàn bộ hoạt động LED khi tải xong trang, sẽ kích hoạt khi chạy hàm startToggle();
  stop();
  reset();

  document.getElementById("isPausing").innerText = "NO";

  // nhớ lại local storage
  const maTuyen = localStorage.getItem("maTuyen");
  const diemDau = localStorage.getItem("diemDau");
  const diemCuoi = localStorage.getItem("diemCuoi");
  const xiNghiep = localStorage.getItem("xiNghiep");

  document.getElementById("maTuyen").innerText = maTuyen;
  document.getElementById("diemDau").innerText = diemDau;
  document.getElementById("diemCuoi").innerText = diemCuoi;
  document.getElementById("xiNghiep").innerText = xiNghiep;
  document.getElementById("MaTuyenCanGiua").innerText = maTuyen;

  document.getElementById("maTuyenLuu").innerText = maTuyen;
  document.getElementById("diemDauLuu").innerText = diemDau;
  document.getElementById("diemCuoiLuu").innerText = diemCuoi;
  document.getElementById("xiNghiepLuu").innerText = xiNghiep;
};
