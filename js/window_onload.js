console.log("window_onload.js START");

function toSuperscript(str) {
  return str.replace(/^(\d+)([a-zA-Z]+)/, "$1<sup>$2</sup>");
}

window.onload = function () {
  // xóa toàn bộ LED và dừng toàn bộ hoạt động LED khi tải xong trang, sẽ kích hoạt khi chạy hàm chạy
  stop();
  reset();

  

  document.getElementById("isPausing").innerText = "NO";

  // nhớ lại local storage
  const maTuyen = localStorage.getItem("maTuyen");
  const diemDau = localStorage.getItem("diemDau");
  const diemGiua = localStorage.getItem("diemGiua");
  const diemCuoi = localStorage.getItem("diemCuoi");
  const xiNghiep = localStorage.getItem("xiNghiep");
  
  document.getElementById("maTuyen").innerHTML = toSuperscript(maTuyen);
  document.getElementById("diemDau").innerText = diemDau;

  chonMode(localStorage.getItem("mode") || "thuong");
  // document.getElementById("diemGiua").innerText = diemGiua;
  if (diemGiua && diemGiua.trim() !== "") {
    document.getElementById("diemGiua").innerText = diemGiua;
  } else {
    document.getElementById("mui_ten_xanh2").style.display = "none";
    document.getElementById("diemGiua").style.display = "none";
  }
  document.getElementById("diemCuoi").innerText = diemCuoi;
  document.getElementById("xiNghiep").innerText = xiNghiep;
  document.getElementById("MaTuyenCanGiua").innerText = toSuperscript(maTuyen);

  document.getElementById("maTuyenLuu").innerText = maTuyen;
  document.getElementById("diemDauLuu").innerText = diemDau;
  // document.getElementById("diemGiuaLuu").innerText = diemGiua;
    if (diemGiua && diemGiua.trim() !== "") {
    document.getElementById("diemGiuaLuu").innerText = diemGiua;
  } else {
    document.getElementById("mui_ten1").style.display = "none";
    document.getElementById("diemGiuaLuu").style.display = "none";
  }
  document.getElementById("diemCuoiLuu").innerText = diemCuoi;
  document.getElementById("xiNghiepLuu").innerText = xiNghiep;
  

  
  

};
