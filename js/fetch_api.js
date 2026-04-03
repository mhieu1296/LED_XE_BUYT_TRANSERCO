const routeSearch = document.getElementById('routeSearch');
const searchDropdown = document.getElementById('searchDropdown');

// Các ô input cần đổ dữ liệu vào
const inputs = {
    maTuyen: document.getElementById('maTuyenInput'),
    diemDau: document.getElementById('diemDauInput'),
    diemGiua: document.getElementById('diemGiuaInput'),
    diemCuoi: document.getElementById('diemCuoiInput'),
    xiNghiep: document.getElementById('xiNghiepInput')
};

let debounceTimer;

// Hàm gọi API
async function searchRoute(query) {
    if (!query.trim()) {
        hideDropdown();
        return;
    }

    try {
        // Gọi API với param maTuyen là nội dung nhập từ ô tìm kiếm
        const response = await fetch(`http://127.0.0.1:5000/api/tuyen?maTuyen=${encodeURIComponent(query)}`);

        if (response.ok) {
            const data = await response.json();
            // Xử lý nếu API trả về một mảng hoặc một đối tượng duy nhất
            const results = Array.isArray(data) ? data : [data];
            renderDropdown(results);
        } else {
            console.warn("API trả về lỗi:", response.status);
            hideDropdown();
        }
    } catch (error) {
        console.error("Lỗi gọi API:", error);
        hideDropdown();
    }
}

// Hàm hiển thị nội dung vào Dropdown
function renderDropdown(results) {
    searchDropdown.innerHTML = ''; // Xóa nội dung cũ

    if (results.length === 0) {
        hideDropdown();
        return;
    }

    results.forEach(data => {
        // Bỏ qua nếu dữ liệu không có các trường cần thiết (ví dụ maTuyen null)
        if (!data || !data.maTuyen) return;

        const item = document.createElement('div');
        item.className = 'dropdown-item';

        // Hiển thị theo dòng
        item.innerHTML = `
            <div style="font-weight: bold; color: #4271a3;">Tuyến ${data.maTuyen}</div>
            <div style="font-size: 12px; color: #666;">${data.diemDau || ''} ➔ ${data.diemCuoi || ''}</div>
            <div style="font-size: 11px; font-style: italic;">Xí nghiệp: ${data.xiNghiep || ''}</div>
        `;

        // Sự kiện khi click vào item
        item.addEventListener('click', () => {
            fillData(data);
            hideDropdown();
        });

        searchDropdown.appendChild(item);
    });

    searchDropdown.classList.remove('hidden');
}

// Hàm điền dữ liệu vào các ô input
function fillData(data) {
    inputs.maTuyen.value = data.maTuyen || '';
    inputs.diemDau.value = data.diemDau || '';
    inputs.diemGiua.value = data.diemGiua || '';
    inputs.diemCuoi.value = data.diemCuoi || '';
    inputs.xiNghiep.value = data.xiNghiep || '';

    // Cập nhật lại chính ô tìm kiếm
    routeSearch.value = data.maTuyen;
}

function hideDropdown() {
    searchDropdown.classList.add('hidden');
}

// Lắng nghe sự kiện nhập liệu
routeSearch.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        searchRoute(e.target.value);
    }, 400); // Chờ 400ms sau khi ngừng gõ mới gọi API
});

// Đóng dropdown khi click ra ngoài
document.addEventListener('click', (e) => {
    if (!routeSearch.contains(e.target) && !searchDropdown.contains(e.target)) {
        hideDropdown();
    }
});