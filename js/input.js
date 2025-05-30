function NhapDuLieu() {
  const inputs = document.querySelectorAll("input");

  for (let input of inputs) {
    const isRequired = !input.classList.contains("khongBatBuoc");

    if (isRequired && input.value.trim() === "") {
      document.getElementById("canhBao").innerText = "NHẬP ĐỦ CÁC TRƯỜNG CÓ * !";
      return;
    }
  }

  // Gán giá trị từ input vào localDrage để gán vào khi load trang (window_onload.js)
  const maTuyen = inputs[0].value;
  const diemDau = inputs[1].value;
  const diemGiua = inputs[2].value;
  const diemCuoi = inputs[3].value;
  const xiNghiep = inputs[4].value;

  localStorage.setItem("maTuyen", maTuyen);
  localStorage.setItem("diemDau", diemDau);
  localStorage.setItem("diemGiua", diemGiua);
  localStorage.setItem("diemCuoi", diemCuoi);
  localStorage.setItem("xiNghiep", xiNghiep);
  localStorage.setItem("MaTuyenCanGiua", maTuyen);
  console.log("Đã nhập đầy đủ thông tin.");
  document.getElementById("canhBao").innerText = "ĐÃ NHẬP ĐỦ";
}
