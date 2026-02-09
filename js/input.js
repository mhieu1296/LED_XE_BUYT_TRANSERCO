// Kiểm tra và lưu dữ liệu nhập vào localStorage
function NhapDuLieu() {
  // Lấy các input theo ID thay vì index
  const maTuyenInput = document.getElementById("maTuyenInput");
  const diemDauInput = document.getElementById("diemDauInput");
  const diemGiuaInput = document.getElementById("diemGiuaInput");
  const diemCuoiInput = document.getElementById("diemCuoiInput");
  const xiNghiepInput = document.getElementById("xiNghiepInput");

  const requiredInputs = [maTuyenInput, diemDauInput, diemCuoiInput, xiNghiepInput];
  let isDayDu = true;

  // Kiểm tra các input bắt buộc
  requiredInputs.forEach(input => {
    if (input.value.trim() === "") {
      isDayDu = false;
      input.style.borderBottom = "2px solid red";
    } else {
      input.style.borderBottom = "2px solid rgba(66, 113, 163)";
    }
  });

  // diemGiua không bắt buộc, chỉ reset border
  diemGiuaInput.style.borderBottom = "2px solid rgba(66, 113, 163)";

  if (isDayDu === true) {
    const maTuyen = maTuyenInput.value;
    const diemDau = diemDauInput.value;
    const diemGiua = diemGiuaInput.value;
    const diemCuoi = diemCuoiInput.value;
    const xiNghiep = xiNghiepInput.value;

    localStorage.setItem("maTuyen", maTuyen);
    localStorage.setItem("diemDau", diemDau);
    localStorage.setItem("diemGiua", diemGiua);
    localStorage.setItem("diemCuoi", diemCuoi);
    localStorage.setItem("xiNghiep", xiNghiep);
    localStorage.setItem("MaTuyenCanGiua", maTuyen);

    showToast('success', 'Đã lưu thông tin thành công!');
    try { document.getElementById("canhBao").style.color = "green"; } catch (e) { }
  } else {
    showToast('error', 'Vui lòng nhập đầy đủ thông tin bắt buộc!');
    try { document.getElementById("canhBao").style.color = "red"; } catch (e) { }
  }
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

// ===== ROUTE SEARCH LOGIC =====
let routesData = [];

document.addEventListener("DOMContentLoaded", () => {
  setupDeleteButtons();

  const routeSearch = document.getElementById("routeSearch");
  const searchDropdown = document.getElementById("searchDropdown");
  const maTuyenInput = document.getElementById("maTuyenInput");
  const diemDauInput = document.getElementById("diemDauInput");
  const diemGiuaInput = document.getElementById("diemGiuaInput");
  const diemCuoiInput = document.getElementById("diemCuoiInput");
  const xiNghiepInput = document.getElementById("xiNghiepInput");

  // Load routes.json
  fetch("routes.json")
    .then(response => {
      if (!response.ok) throw new Error("Không tải được file JSON");
      return response.json();
    })
    .then(data => {
      routesData = data;
    })
    .catch(error => console.error("Lỗi load JSON:", error));

  // Format tên tuyến để hiển thị
  function formatRouteName(route) {
    return route.maTuyen + ": " +
      [route.diemDau, route.diemGiua, route.diemCuoi]
        .filter(Boolean)
        .join(" - ");
  }

  // Lưu danh sách matches hiện tại và index được chọn
  let currentMatches = [];
  let selectedIndex = -1;

  // Tìm kiếm và hiển thị dropdown
  if (routeSearch) {
    routeSearch.addEventListener("input", () => {
      const query = routeSearch.value.trim().toLowerCase();
      searchDropdown.innerHTML = "";
      selectedIndex = -1;

      if (!query) {
        searchDropdown.classList.add("hidden");
        currentMatches = [];
        return;
      }

      // Filter routes theo mã tuyến, điểm đầu, điểm giữa, điểm cuối
      currentMatches = routesData.filter(r =>
        r.maTuyen.toLowerCase().includes(query) ||
        r.diemDau.toLowerCase().includes(query) ||
        (r.diemGiua && r.diemGiua.toLowerCase().includes(query)) ||
        r.diemCuoi.toLowerCase().includes(query)
      );

      if (currentMatches.length === 0) {
        searchDropdown.classList.add("hidden");
        return;
      }

      currentMatches.forEach((route, index) => {
        const item = document.createElement("div");
        item.className = "dropdown-item";
        item.textContent = formatRouteName(route);
        item.addEventListener("click", () => selectRoute(route));
        item.addEventListener("mouseenter", () => {
          selectedIndex = index;
          updateHighlight();
        });
        searchDropdown.appendChild(item);
      });

      searchDropdown.classList.remove("hidden");
    });

    // Keyboard navigation
    routeSearch.addEventListener("keydown", (e) => {
      const items = searchDropdown.querySelectorAll(".dropdown-item");
      if (items.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % items.length;
        updateHighlight();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + items.length) % items.length;
        updateHighlight();
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < currentMatches.length) {
          selectRoute(currentMatches[selectedIndex]);
        }
      } else if (e.key === "Escape") {
        searchDropdown.classList.add("hidden");
        selectedIndex = -1;
      }
    });

    // Cập nhật highlight cho item được chọn
    function updateHighlight() {
      const items = searchDropdown.querySelectorAll(".dropdown-item");
      items.forEach((item, index) => {
        if (index === selectedIndex) {
          item.classList.add("highlighted");
          item.scrollIntoView({ block: "nearest" });
        } else {
          item.classList.remove("highlighted");
        }
      });
    }

    // Focus vào search -> hiện dropdown nếu có text
    routeSearch.addEventListener("focus", () => {
      if (routeSearch.value.trim() && searchDropdown.children.length > 0) {
        searchDropdown.classList.remove("hidden");
      }
    });
  }

  // Chọn tuyến -> điền vào các input
  function selectRoute(route) {
    maTuyenInput.value = route.maTuyen || "";
    diemDauInput.value = route.diemDau || "";
    diemGiuaInput.value = route.diemGiua || "";
    diemCuoiInput.value = route.diemCuoi || "";
    xiNghiepInput.value = route.xiNghiep || "";

    routeSearch.value = formatRouteName(route);
    searchDropdown.classList.add("hidden");
  }

  // Khi sửa bất kỳ input nào -> xóa search
  const allInputs = [maTuyenInput, diemDauInput, diemGiuaInput, diemCuoiInput, xiNghiepInput];
  allInputs.forEach(input => {
    if (input) {
      input.addEventListener("input", () => {
        routeSearch.value = "";
      });
    }
  });

  // Click bên ngoài -> ẩn dropdown
  document.addEventListener("click", (e) => {
    if (!routeSearch.contains(e.target) && !searchDropdown.contains(e.target)) {
      searchDropdown.classList.add("hidden");
    }
  });
});
