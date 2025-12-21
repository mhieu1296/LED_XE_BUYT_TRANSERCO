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

  const items = Array.from(elements).map(el => ({
    el,
    pos: 0
  }));

  let isRunning = false;
  let lastTime = null;
  let currentIndex = 0;
  let animationId = null;

  // ===== UTILS =====
  function getSpeed() {
    const input = document.getElementById("speedControl");
    return input ? parseInt(input.value, 10) || 50 : 50;
  }

  function hideAll() {
    items.forEach(item => {
      item.el.style.display = "none";
    });
  }

  // ===== ANIMATION LOOP (SOURCE OF TRUTH = data-enabled) =====
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
      currentItem.el.style.left = currentItem.pos + "px";
    }

    // Di chuyển
    currentItem.pos -= speed * elapsed;

    // ===== KHI CHẠY HẾT =====
    if (currentItem.pos < -currentItem.el.offsetWidth) {

      // CHỈ 1 MARQUEE → LẶP LẠI CHÍNH NÓ
      if (enabledItems.length === 1) {
        currentItem.pos = container.offsetWidth;
        currentItem.el.style.left = currentItem.pos + "px";
      }
      // >= 2 MARQUEE → CHUYỂN LƯỢT
      else {
        currentIndex = (currentIndex + 1) % enabledItems.length;
        hideAll();
      }
    } else {
      currentItem.el.style.left = currentItem.pos + "px";
    }

    animationId = requestAnimationFrame(animate);
  }

  // ===== CONTROL =====
  function ChayChu1() {
    if (isRunning) return;

    currentIndex = 0;
    lastTime = null;
    isRunning = true;

    animationId = requestAnimationFrame(animate);
  }

  // function DungChayChu1() {
  //   isRunning = false;
  //   if (animationId) {
  //     cancelAnimationFrame(animationId);
  //     animationId = null;
  //   }
  // }

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
      firstItem.el.style.left = firstItem.pos + "px";
    }
  }


  function coChayChuHayKhong() {
    return isRunning === true;
  }

  function show(id) {
    const item = items.find(i => i.el.id === id);
    if (!item) return;

    item.el.dataset.enabled = "true";
  }

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

  console.log("Marquee engine READY (state-driven)");

});

