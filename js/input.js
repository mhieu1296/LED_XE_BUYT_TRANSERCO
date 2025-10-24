function NhapDuLieu() {
  const inputs = document.querySelectorAll("input");

  for (let input of inputs) {
    const isRequired = !input.classList.contains("khongBatBuoc");

    if (isRequired && input.value.trim() === "") {
      document.getElementById("canhBao").innerText = "NHẬP ĐỦ CÁC TRƯỜNG CÓ * !";
      return;
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
  document.getElementById("canhBao").innerText = "ĐÃ NHẬP ĐỦ";
}

// giảm cỡ chữ cho nhánh tuyến (mã tuyến)
function toggleFontSize(paragraphId, button) {
      const selection = window.getSelection();
      if (!selection.rangeCount) return;

      const range = selection.getRangeAt(0);
      const p = document.getElementById(paragraphId);

      // Kiểm tra phần được chọn có nằm trong p không
      if (!p.contains(range.commonAncestorContainer)) return;

      // Nếu đã giảm trước đó, phục hồi
      if (range.startContainer.parentNode.dataset.originalFontSize) {
        const parent = range.startContainer.parentNode;
        parent.style.fontSize = parent.dataset.originalFontSize;
        delete parent.dataset.originalFontSize;
        button.textContent = "Giảm cỡ chữ";
        selection.removeAllRanges();
        return;
      }

      // Tạo span mới để áp dụng style
      const span = document.createElement('span');

      // Lưu font-size gốc để hồi phục
      const computedStyle = window.getComputedStyle(range.startContainer.parentNode);
      span.dataset.originalFontSize = computedStyle.fontSize;

      // Giảm font-size 20%
      const newSize = parseFloat(computedStyle.fontSize) * 0.8 + "px";
      span.style.fontSize = newSize;

      // Bọc vùng chọn bằng span
      range.surroundContents(span);

      button.textContent = "Hồi phục cỡ chữ";
      selection.removeAllRanges();
    }

