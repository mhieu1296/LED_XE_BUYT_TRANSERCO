function NhapDuLieu() {
  const inputs = document.querySelectorAll("input");

  for (let input of inputs) {
    const isRequired = !input.classList.contains("khongBatBuoc");
    
    if (isRequired && input.value.trim() === "") {
      // Báo lỗi bằng cách đổi border của chính input lỗi
      input.style.borderBottom = "2px solid red";
    } else {
      // Trả lại màu cũ nếu đã nhập rồi
      input.style.borderBottom = "2px solid rgb(17, 205, 142)";
    }
  }

  // Gán giá trị từ input vào localStorage để gán vào khi load trang (window_onload.js)
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
  alert("Đã nhập đầy đủ thông tin.");
}

function setupDeleteButtons() {
  const rows = document.querySelectorAll('table tr');
  rows.forEach((tr) => {
    const deleteImg = tr.querySelector('img[src*="delete.png"]');
    const input = tr.querySelector('input[type="text"]');
    if (deleteImg && input) {
      deleteImg.style.cursor = 'pointer';
      deleteImg.addEventListener('click', () => {
        input.value = '';
        const warning = document.getElementById('canhBao');
        if (warning) warning.innerText = '';
        try { input.focus(); } catch (e) {}
      });
    }
  });
}

// Thiết lập khi DOM sẵn sàng
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupDeleteButtons);
} else {
  setupDeleteButtons();
}
