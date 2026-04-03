/**
 * Float Transition Module
 * Hiệu ứng float từ dưới lên trên khi chuyển đổi nội dung trong .NoiDungChayChu
 * 
 * Quy tắc:
 * - Nếu container trống → nội dung mới float lên từ dưới, dừng ở giữa
 * - Nếu container đã có nội dung → nội dung cũ float lên biến mất + nội dung mới float lên dừng ở giữa (đồng thời)
 * - Tốc độ: 100px/s, gia tốc = 0
 */

const floatTransition = (function () {
    const SPEED = 200; // px/s
    let activeAnimationId = null;

    /**
     * Thực hiện hiệu ứng float transition
     * @param {Function} showCallback - Hàm setup nội dung mới (gọi trước khi animate)
     */
    function apply(showCallback) {
        const container = document.querySelector(".NoiDungChayChu");
        const modeEl = document.getElementById("MODE");
        const currentMode = modeEl ? modeEl.innerText.trim() : "";

        // CHỈ áp dụng hiệu ứng trong mode XE ĐIỆN 2 và DEMO
        if (!container || (currentMode !== "XE ĐIỆN 2" && currentMode !== "DEMO")) {
            showCallback();
            return;
        }

        // Hủy animation cũ nếu đang chạy
        if (activeAnimationId) {
            cancelAnimationFrame(activeAnimationId);
            activeAnimationId = null;
        }

        // Xóa clone cũ nếu còn sót
        container.querySelectorAll(".float-clone").forEach(el => el.remove());

        const containerHeight = container.offsetHeight;

        // ===== BƯỚC 1: Snapshot nội dung cũ =====
        // Tìm các phần tử con đang hiển thị (visible) trong container
        const visibleChildren = Array.from(container.children).filter(child => {
            if (child.classList.contains("float-clone")) return false;
            const style = window.getComputedStyle(child);
            return style.display !== "none" && child.dataset.forceHide !== "true";
        });

        let oldClone = null;
        const hasOldContent = visibleChildren.length > 0;

        if (hasOldContent) {
            // Tạo wrapper clone chứa snapshot nội dung cũ
            oldClone = document.createElement("div");
            oldClone.className = "float-clone float-clone-old";
            oldClone.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
        pointer-events: none;
        will-change: transform;
      `;

            // Clone từng phần tử đang hiển thị
            visibleChildren.forEach(child => {
                const cloned = child.cloneNode(true);
                // Giữ nguyên computed style quan trọng
                cloned.style.position = child.style.position || "";
                cloned.style.transform = child.style.transform || "";
                cloned.style.display = "flex"; // Force visible for clones
                cloned.style.visibility = "visible";
                oldClone.appendChild(cloned);
            });

            container.appendChild(oldClone);
        }

        // ===== BƯỚC 2: Setup nội dung mới =====
        showCallback();

        // ===== BƯỚC 3: Tạo wrapper cho nội dung mới =====
        // Tìm các phần tử mới đang hiển thị (không phải clone)
        const newVisibleChildren = Array.from(container.children).filter(child => {
            if (child.classList.contains("float-clone")) return false;
            const style = window.getComputedStyle(child);
            return style.display !== "none";
        });

        // Nếu không có nội dung mới, chỉ cần cleanup
        if (newVisibleChildren.length === 0) {
            if (oldClone) oldClone.remove();
            return;
        }

        // Tạo wrapper cho nội dung mới
        const newWrapper = document.createElement("div");
        newWrapper.className = "float-clone float-clone-new";
        newWrapper.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
      pointer-events: none;
      will-change: transform;
      transform: translateY(${containerHeight}px);
    `;

        // Di chuyển nội dung mới vào wrapper
        newVisibleChildren.forEach(child => {
            const cloned = child.cloneNode(true);
            cloned.style.position = child.style.position || "";
            cloned.style.transform = child.style.transform || "";
            cloned.style.display = "flex"; // Force visible for clones
            cloned.style.visibility = "visible";
            newWrapper.appendChild(cloned);
            // Ẩn bản gốc tạm thời
            child.dataset.hiddenByFloat = "true";
            child.style.visibility = "hidden";
        });

        container.appendChild(newWrapper);

        // ===== BƯỚC 4: Animation loop =====
        let lastTime = null;
        let oldOffset = 0;             // offset hiện tại của nội dung cũ (bắt đầu 0, giảm dần → lên trên)
        let newOffset = containerHeight; // offset hiện tại của nội dung mới (bắt đầu = containerHeight, giảm → 0)

        function animateFrame(timestamp) {
            if (!lastTime) lastTime = timestamp;
            const elapsed = (timestamp - lastTime) / 1000;
            lastTime = timestamp;

            const delta = SPEED * elapsed;
            let done = true;

            // Di chuyển nội dung cũ lên trên
            if (oldClone) {
                oldOffset -= delta;
                if (oldOffset <= -containerHeight) {
                    oldClone.remove();
                    oldClone = null;
                } else {
                    oldClone.style.transform = `translateY(${oldOffset}px)`;
                    done = false;
                }
            }

            // Di chuyển nội dung mới lên
            if (newWrapper) {
                newOffset -= delta;
                if (newOffset <= 0) {
                    newOffset = 0;
                    newWrapper.style.transform = `translateY(0px)`;
                } else {
                    newWrapper.style.transform = `translateY(${newOffset}px)`;
                    done = false;
                }
            }

            if (!done) {
                activeAnimationId = requestAnimationFrame(animateFrame);
            } else {
                // Animation hoàn tất → cleanup
                cleanup();
            }
        }

        function cleanup() {
            // Hiện lại các phần tử gốc
            Array.from(container.children).forEach(child => {
                if (child.dataset.hiddenByFloat === "true") {
                    child.style.visibility = "";
                    delete child.dataset.hiddenByFloat;
                }
            });

            // Xóa các clone
            container.querySelectorAll(".float-clone").forEach(el => el.remove());
            activeAnimationId = null;
        }

        activeAnimationId = requestAnimationFrame(animateFrame);
    }

    /**
     * Hủy animation đang chạy và cleanup
     */
    function cancel() {
        if (activeAnimationId) {
            cancelAnimationFrame(activeAnimationId);
            activeAnimationId = null;
        }
        const container = document.querySelector(".NoiDungChayChu");
        if (container) {
            // Hiện lại các phần tử bị ẩn
            Array.from(container.children).forEach(child => {
                if (child.dataset.hiddenByFloat === "true") {
                    child.style.visibility = "";
                    delete child.dataset.hiddenByFloat;
                }
            });
            // Xóa clone
            container.querySelectorAll(".float-clone").forEach(el => el.remove());
        }
    }

    return { apply, cancel };
})();
