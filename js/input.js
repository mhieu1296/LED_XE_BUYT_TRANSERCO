// Hiển thị thông báo (toast) trên màn hình
function showToast(type, message) {
  const container = document.getElementById('toast-container');


  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${message}</span>`;

  let iconHTML = "";
  if (type === 'success') {
    iconHTML = '<i class="fa-solid fa-circle-check"></i>';
  } else if (type === 'error') {
    iconHTML = '<i class="fas fa-times-circle"></i>';
  } else if (type === 'warning') {
    iconHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
  } else {
    iconHTML = '<i class="fa-solid fa-circle-info"></i>';
  }

  toast.innerHTML = `${iconHTML} <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "slideIn 0.4s ease reverse forwards";
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// Kiểm tra và lưu dữ liệu nhập vào localStorage
function NhapDuLieu() {
  const inputs = document.querySelectorAll("input");
  let isDayDu = true;
  for (let input of inputs) {
    const isRequired = !input.classList.contains("khongBatBuoc");

    if (isRequired && input.value.trim() === "") {
      isDayDu = false;
      input.style.borderBottom = "2px solid red";


    } else {
      input.style.borderBottom = "2px solid rgba(66, 113, 163)";
    }
  }


  if (isDayDu === true) {
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

    showToast('success', 'Đã lưu thông tin thành công!');
    document.getElementById("canhBao").style.color = "green";
  } else {
    showToast('error', 'Vui lòng nhập đầy đủ thông tin bắt buộc!');
    document.getElementById("canhBao").style.color = "red";
  }

  document.getElementsByClassName("NhapDuLieu")[3].focus();
}



// Cài đặt sự kiện click cho các nút xóa
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
        try { input.focus(); } catch (e) { }
      });
    }
  });
}

// Lấy dữ liệu từ localStorage và hiển thị lên các ô nhập
function tuyenDemo() {
  document.getElementById("maTuyenInput").value = localStorage.getItem("maTuyen");
  document.getElementById("diemDauInput").value = localStorage.getItem("diemDau");
  document.getElementById("diemGiuaInput").value = localStorage.getItem("diemGiua");
  document.getElementById("diemCuoiInput").value = localStorage.getItem("diemCuoi");
  document.getElementById("xiNghiepInput").value = localStorage.getItem("xiNghiep");
}

// Thiết lập khi DOM sẵn sàng
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupDeleteButtons);
} else {
  setupDeleteButtons();
}


let routes = [];
let selectedRoute = null;

/* ===== LOAD DATA ===== */
fetch("routes.json")
  .then(r => r.json())
  .then(data => routes = data);

/* ===== ELEMENTS ===== */
const search = document.getElementById("searchTuyenInput");
const dropdown = document.getElementById("searchDropdown");

const fields = {
  maTuyen: document.getElementById("maTuyenInput"),
  diemDau: document.getElementById("diemDauInput"),
  diemGiua: document.getElementById("diemGiuaInput"),
  diemCuoi: document.getElementById("diemCuoiInput"),
  xiNghiep: document.getElementById("xiNghiepInput")
};

/* ===== SEARCH ===== */
search.addEventListener("input", () => {
  const q = search.value.trim().toLowerCase();
  dropdown.innerHTML = "";

  if (!q) {
    dropdown.classList.add("hidden");
    return;
  }

  const matches = routes.filter(r =>
    r.maTuyen.toLowerCase().includes(q) ||
    r.diemDau.toLowerCase().includes(q) ||
    (r.diemGiua && r.diemGiua.toLowerCase().includes(q)) ||
    r.diemCuoi.toLowerCase().includes(q)
  );

  if (!matches.length) {
    dropdown.classList.add("hidden");
    return;
  }

  matches.forEach(route => {
    const item = document.createElement("div");
    item.className = "dropdown-item";
    item.textContent = `${route.maTuyen} – ${route.diemDau} → ${route.diemCuoi}`;
    item.onclick = () => selectRoute(route);
    dropdown.appendChild(item);
  });

  dropdown.classList.remove("hidden");
});

/* ===== SELECT ROUTE ===== */
// Chọn tuyến xe và điền thông tin vào các ô nhập
function selectRoute(route) {
  selectedRoute = route;

  fields.maTuyen.value = route.maTuyen;
  fields.diemDau.value = route.diemDau;
  fields.diemGiua.value = route.diemGiua ?? "";
  fields.diemCuoi.value = route.diemCuoi;
  fields.xiNghiep.value = route.xiNghiep;

  Object.values(fields).forEach(i => i.readOnly = true);

  search.value = `${route.maTuyen} – ${route.diemDau} → ${route.diemCuoi}`;
  dropdown.classList.add("hidden");
}

/* ===== DETECT CUSTOM ROUTE ===== */
Object.values(fields).forEach(input => {
  input.addEventListener("input", () => {
    if (!selectedRoute) return;

    const isCustom =
      fields.maTuyen.value !== selectedRoute.maTuyen ||
      fields.diemDau.value !== selectedRoute.diemDau ||
      fields.diemGiua.value !== (selectedRoute.diemGiua ?? "") ||
      fields.diemCuoi.value !== selectedRoute.diemCuoi ||
      fields.xiNghiep.value !== selectedRoute.xiNghiep;

    if (isCustom) {
      search.value = "Tuyến tuỳ chỉnh";
      selectedRoute = null;
      Object.values(fields).forEach(i => i.readOnly = false);
    }
  });
});

/* ===== CLICK OUTSIDE ===== */
document.addEventListener("click", e => {
  if (!search.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.add("hidden");
  }
});
