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
    // el.style.position = "absolute"; // BỎ: CSS sẽ xử lý dựa trên class .scrolling
    // el.style.left = "0"; // BỎ: CSS sẽ xử lý dựa trên class .scrolling
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
      currentItem.el.classList.add("scrolling"); // Kích hoạt absolute cho việc transform
      currentItem.pos = container.offsetWidth;
      currentItem.el.style.display = "flex";

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

    isRunning = true;
    lastTime = null;
    currentIndex = 0;

    // Reset vị trí bắt đầu cho CHỈ marquee đầu tiên đang được phép chạy
    hideAll();
    const enabledItems = items.filter(item => item.el.dataset.enabled === "true");

    if (enabledItems.length > 0) {
      const firstItem = enabledItems[0];
      firstItem.el.classList.add("scrolling");
      // Bắt đầu từ vị trí hiện tại (giả sử đang được căn giữa bởi CSS Flexbox)
      const containerWidth = container.offsetWidth;
      const itemWidth = firstItem.el.offsetWidth;
      firstItem.pos = (containerWidth - itemWidth) / 2;
      firstItem.el.style.transform = `translateX(${firstItem.pos}px) translateZ(0)`;
      firstItem.el.style.display = "flex";
    }

    animationId = requestAnimationFrame(animate);
  }

  // Dừng chạy chữ
  function DungChayChu1(canGiua = true) {
    isRunning = false;

    if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }

    // Xóa class scrolling và reset state từ tất cả items
    items.forEach(item => {
      item.el.classList.remove("scrolling");
      item.el.style.transform = ""; // Reset transform để centering CSS có hiệu lực
      item.pos = 0; // Reset internal pos
    });

    if (!canGiua) return;

    // Hiển thị marquee thứ nhất
    const firstItem = items[0];
    if (firstItem && firstItem.el.dataset.enabled === "true") {
      hideAll();
      firstItem.el.style.display = "flex";
      // KHÔNG CẦN TÍNH TOÁN: CSS (flexbox) sẽ tự động căn giữa vì position không còn là absolute
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

