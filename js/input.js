function NhapDuLieu() {
  // Lấy tất cả các input trong div NhapDuLieu
  const inputs = document.querySelectorAll(".NhapDuLieu input");
  // Kiểm tra xem có ô nào bị bỏ trống không
  for (let input of inputs) {
    if (input.value.trim() === "") {
      document.getElementById("canhBao").innerText =
        "HÃY NHẬP ĐẦY ĐỦ CÁC TRƯỜNG!";
      return;
    } else {
      document.getElementById("canhBao").innerText = "ĐÃ NHẬP ĐỦ";
    }
  }

  // Gán giá trị từ input vào localDrage để gán vào khi load trang (window_onload.js)
  const maTuyen = inputs[0].value;
  const diemDau = inputs[1].value;
  const diemCuoi = inputs[2].value;
  const xiNghiep = inputs[3].value;

  localStorage.setItem("maTuyen", maTuyen);
  localStorage.setItem("diemDau", diemDau);
  localStorage.setItem("diemCuoi", diemCuoi);
  localStorage.setItem("xiNghiep", xiNghiep);
  localStorage.setItem("MaTuyenCanGiua", maTuyen);
  console.log("Đã nhập đầy đủ thông tin.");
  document.getElementById("canhBao").innerText = "ĐÃ NHẬP ĐỦ";
}
