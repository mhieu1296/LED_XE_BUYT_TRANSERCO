document.addEventListener("DOMContentLoaded", function () {

  const container = document.querySelector(".NoiDungChayChu");
  if (!container) {
    console.warn("Không tìm thấy .NoiDungChayChu");
    return;
  }

  const elements = container.querySelectorAll(".marquee");
  if (elements.length === 0) {
    console.warn("Không có div .marquee nào");
    return;
  }

  const items = Array.from(elements).map(el => {
    // Tối ưu hóa GPU bằng will-change
    el.style.willChange = "transform";
    // Đảm bảo position absolute để transform hoạt động mượt
    el.style.position = "absolute";
    // el.style.top = "0"; // BỎ DÒNG NÀY: Để CSS tự động căn giữa theo vertical (flex align-items: center)
    el.style.left = "0"; // Reset left về 0, dùng transform để di chuyển
    return {
      el,
      pos: 0
    };
  });

  let isRunning = false;
  let lastTime = null;
  let currentIndex = 0;
  let animationId = null;

  // ===== UTILS =====
  // Lấy tốc độ chạy chữ từ input
  function getSpeed() {
    const input = document.getElementById("speedControl");
    return input ? parseInt(input.value, 10) || 50 : 50;
  }

  // Ẩn tất cả các thẻ marquee
  function hideAll() {
    items.forEach(item => {
      item.el.style.display = "none";
    });
  }

  // ===== ANIMATION LOOP (SOURCE OF TRUTH = data-enabled) =====
  // Vòng lặp animation để di chuyển chữ
  function animate(timestamp) {
    if (!isRunning) return;

    if (!lastTime) lastTime = timestamp;
    const elapsed = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    const speed = getSpeed();

    // LẤY MARQUEE ĐƯỢC PHÉP CHẠY
    const enabledItems = items.filter(item => {
      if (item.el.dataset.enabled !== "true") {
        // BỊ DISABLE → ẨN NGAY
        item.el.style.display = "none";
        return false;
      }
      return true;
    });

    if (enabledItems.length === 0) {
      isRunning = false;
      return;
    }

    // Đảm bảo index hợp lệ
    if (currentIndex >= enabledItems.length) {
      currentIndex = 0;
    }

    const currentItem = enabledItems[currentIndex];

    // Render marquee hiện tại (chỉ khi được phép)
    if (currentItem.el.style.display === "none") {
      hideAll();
      currentItem.pos = container.offsetWidth;
      currentItem.el.style.display = "flex";

      // BẢN GỐC: currentItem.el.style.left = currentItem.pos + "px";
      // TỐI ƯU: Sử dụng translateX để GPU xử lý
      currentItem.el.style.transform = `translateX(${currentItem.pos}px) translateZ(0)`;
    }

    // Di chuyển
    currentItem.pos -= speed * elapsed;

    // ===== KHI CHẠY HẾT =====
    if (currentItem.pos < -currentItem.el.offsetWidth) {

      // CHỈ 1 MARQUEE → LẶP LẠI CHÍNH NÓ
      if (enabledItems.length === 1) {
        currentItem.pos = container.offsetWidth;
        // BẢN GỐC: currentItem.el.style.left = currentItem.pos + "px";
        currentItem.el.style.transform = `translateX(${currentItem.pos}px) translateZ(0)`;
      }
      // >= 2 MARQUEE → CHUYỂN LƯỢT
      else {
        currentIndex = (currentIndex + 1) % enabledItems.length;
        hideAll();
      }
    } else {
      // BẢN GỐC: currentItem.el.style.left = currentItem.pos + "px";
      // TỐI ƯU: translateZ(0) kích hoạt 3D acceleration giúp chữ đỡ mờ
      currentItem.el.style.transform = `translateX(${currentItem.pos}px) translateZ(0)`;
    }

    animationId = requestAnimationFrame(animate);
  }

  // ===== CONTROL =====
  // Bắt đầu chạy chữ
  function ChayChu1() {
    if (isRunning) return;

    currentIndex = 0;
    lastTime = null;
    isRunning = true;

    animationId = requestAnimationFrame(animate);
  }

  // Dừng chạy chữ
  function DungChayChu1(canGiua = true) {
    isRunning = false;

    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }

    if (!canGiua) return;

    // ===== CĂN GIỮA MARQUEE THỨ NHẤT =====
    const firstItem = items[0];
    if (!firstItem) return;

    // Chỉ căn giữa nếu marquee này được phép hiển thị
    if (firstItem.el.dataset.enabled === "true") {
      const containerWidth = container.offsetWidth;
      const itemWidth = firstItem.el.offsetWidth;

      // Hiển thị marquee thứ nhất
      hideAll();
      firstItem.el.style.display = "flex";

      // Tính vị trí căn giữa
      firstItem.pos = (containerWidth - itemWidth) / 2;

      // BẢN GỐC: firstItem.el.style.left = firstItem.pos + "px";
      // TỐI ƯU: Sử dụng transform để giữ sự đồng nhất và mượt mà
      firstItem.el.style.transform = `translateX(${firstItem.pos}px) translateZ(0)`;
    }
  }


  // Kiểm tra xem chữ có đang chạy không
  function coChayChuHayKhong() {
    return isRunning === true;
  }

  // Hiển thị một thẻ marquee cụ thể
  function show(id) {
    const item = items.find(i => i.el.id === id);
    if (!item) return;

    item.el.dataset.enabled = "true";
  }

  // Ẩn một thẻ marquee cụ thể
  function hide(id) {
    const item = items.find(i => i.el.id === id);
    if (!item) return;

    item.el.dataset.enabled = "false";
    item.el.style.display = "none";
  }

  // ===== EXPORT =====
  window.marquee = {
    ChayChu1,
    DungChayChu1,
    coChayChuHayKhong,
    show,
    hide
  };

  console.log("Marquee engine OPTIMIZED (GPU accelerated)");

});

