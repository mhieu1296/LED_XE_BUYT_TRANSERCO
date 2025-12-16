# Mô Phỏng Bảng LED Xe Buýt Hà Nội

Ứng dụng web mô phỏng bảng LED hiển thị thông tin tuyến trên các xe buýt của Tổng công ty Vận tải Hà Nội (Transerco) và các đơn vị vận tải công cộng khác. Ứng dụng này giúp tái hiện các hiệu ứng hiển thị quen thuộc trên đường phố Hà Nội ngay trên trình duyệt của bạn.

##  Tính Năng Chính

*   **Mô phỏng chân thực**: Tái tạo các hiệu ứng LED hiển thị - ẩn, chuyển cảnh, chạy chữ.
*   **Đa dạng chế độ (Modes)**: Hỗ trợ 7 chế độ chạy khác nhau tương ứng với các loại xe và đơn vị vận hành thực tế.
*   **Tùy biến nội dung**: Cho phép người dùng tự nhập Mã tuyến, Điểm đầu, Điểm cuối, Tên xí nghiệp vận hành.
*   **Điều khiển linh hoạt**:
    *   **Đảo chiều**: Đổi vị trí điểm đầu và điểm cuối tức thì.
    *   **Chạy chữ (Marquee)**: Hỗ trợ dòng chữ chạy ngang khi nội dung quá dài hoặc muốn gây chú ý.
    *   **Xe ra tuyến, xe về gara**: Hiển thị "HUY ĐỘNG RA TUYẾN" hoặc "XE VỀ GARA".
    *   **Đóng băng**: Tạm dừng hiệu ứng tại thời điểm hiện tại.

##  Các Chế Độ Chạy (Modes)

Ứng dụng hỗ trợ các mode hiển thị với trình tự và thời gian khác nhau:

| Chế độ | Mô tả & Trình tự hiển thị |
| :--- | :--- |
| **1. Đầy Đủ** | Chế độ mặc định đầy đủ nhất.<br>1. Mã tuyến + Điểm Đ-C (30s)<br>2. Hanoibus (5s)<br>3. Tên Xí Nghiệp (5s)<br>4. Mã tuyến căn giữa (5s)<br>5. Transerco (5s) |
| **2. Xe Điện 2** | Tương tự chế độ Đầy Đủ nhưng bỏ qua bước hiển thị tên Xí nghiệp. (Phù hợp cho LED của các tuyến buýt của Công ty Xe điện Hà Nội, trừ tuyến 34 mới) <br>Phù hợp cho các tuyến xe điện VinBus hoặc tương tự. |
| **3. Thường** | Chế độ truyền thống, đơn giản. Mô phỏng LED của các tuyến buýt thông thường của TCT <br>1. Mã tuyến + Điểm Đ-C (30s)<br>2. Hanoibus (3s)<br>3. Mã tuyến căn giữa (5s)<br>4. Transerco (3s) |
| **4. Liên Ninh** | Chế độ tối giản, chỉ hiển thị thông tin tuyến. Mô phỏng LED của Xn buýt Liên Ninh (trước khi thay toàn bộ sang xe điện) <br>1. Mã tuyến + Điểm Đ-C (30s)<br>2. Mã tuyến căn giữa (5s) |
| **5. Hanoi BRT** | Dành cho tuyến buýt nhanh BRT.<br>1. Mã tuyến + Điểm Đ-C (30s)<br>2. Tên Xí Nghiệp (5s)<br>3. Mã tuyến căn giữa (5s)<br>4. Transerco (5s) |
| **6. Bảo Yến** | Mô phỏng 1 phần xe buýt Bảo Yến với hiệu ứng **nhấp nháy mã tuyến**.<br>1. Mã tuyến + Điểm Đ-C (30s)<br>2. Tên Xí Nghiệp (5s) |
| **7. Demo** | Chạy lướt qua tất cả các hiệu ứng của chế độ Đầy Đủ trong thời gian ngắn (2s/bước). |

## Hướng Dẫn Sử Dụng Nhanh

### Bước 1: Nhập liệu
1.  Nhấn nút **NHẬP** trên giao diện chính.
2.  Điền thông tin vào form:
    *   **Mã tuyến**: (VD: 01, 32, 55A...)
    *   **Điểm đầu / Điểm cuối**: (VD: Bến xe Gia Lâm, Bến xe Yên Nghĩa...)
    *   **Tên Xí nghiệp**: (VD: Xí nghiệp xe buýt Hà Nội, Bảo Yến...)
3.  Nhấn **LƯU** để lưu vào bộ nhớ trình duyệt, sau đó nhấn **QUAY LẠI**.

### Bước 2: Chọn Chế độ & Chạy
1.  Chọn một trong các chế độ bên dưới (ĐẦY ĐỦ, THƯỜNG, XE ĐIỆN 2...).
2.  Nhấn nút **CHẠY** để bắt đầu hiển thị.

### Bước 3: Điều khiển trong khi chạy
*   **ĐẢO CHIỀU**: Nhấn để đảo ngược lộ trình (A → B thành B → A).
*   **CHẠY CHỮ**: Bật/Tắt hiệu ứng chữ chạy ngang.
*   **ĐÓNG BĂNG**: Tạm dừng mọi hoạt động của LED.
*   **XE VỀ GARA / HUY ĐỘNG**: Chuyển ngay sang trạng thái thông báo tương ứng.
*   **TẮT / RESET**: Xóa màn hình LED và dừng chạy.

##  Lưu ý
*   Trước khi đổi chế độ chạy khác, hãy nhấn **ĐÓNG BĂNG** -> **TẮT** (hoặc **RESET**) để đảm bảo hiệu ứng cũ dừng hoàn toàn.
*   Dữ liệu được lưu hoàn toàn trong LocalStorage. Có thể truy ngược ra.
---
*Sản phẩm được phát triển cá nhân với mục đích học tập và giải trí. Không phải sản phẩm chính thức của Transerco hay bất kỳ đơn vị vận tải nào.*
