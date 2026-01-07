function NhapDuLieu() {
  const inputs = document.querySelectorAll("input");
  let isDayDu = true;
  for (let input of inputs) {
    const isRequired = !input.classList.contains("khongBatBuoc");
    
    if (isRequired && input.value.trim() === "") {
      isDayDu = false;
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

  if (isDayDu === true) {
    document.getElementById("canhBao").innerText = "Đã lưu thông tin thành công!";
    document.getElementById("canhBao").style.color = "green";
  } else {
    document.getElementById("canhBao").innerText = "Vui lòng nhập đầy đủ thông tin bắt buộc!";
    document.getElementById("canhBao").style.color = "red";
  }
  
  document.getElementsByClassName("NhapDuLieu")[3].focus();
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

function tuyenDemo(){
  document.getElementById("maTuyenInput").value = "20ATC";
  document.getElementById("diemDauInput").value = "NHỔN";
  document.getElementById("diemGiuaInput").value = "QL32";
  document.getElementById("diemCuoiInput").value = "MINH CHÂU";
  document.getElementById("xiNghiepInput").value = "XÍ NGHIỆP XE BUÝT 10-10 HÀ NỘI";
}

// Thiết lập khi DOM sẵn sàng
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupDeleteButtons);
} else {
  setupDeleteButtons();
}
