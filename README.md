# Mô Phỏng Bảng LED Xe Buýt Hà Nội

Ứng dụng web mô phỏng bảng LED hiển thị thông tin tuyến trên các xe buýt của Tổng công ty Vận tải Hà Nội (Transerco) và các đơn vị vận tải công cộng khác.

## Tính Năng Chính

* **Mô phỏng LED**: Tái tạo các hiệu ứng LED hiển thị - ẩn, chuyển cảnh, chạy chữ.
* **Đa dạng chế độ (Modes)**: Hỗ trợ 7 chế độ chạy khác nhau tương ứng với các loại xe và đơn vị vận hành thực tế.
* **Tùy biến nội dung**: Cho phép người dùng tự nhập Mã tuyến, Điểm đầu, Điểm cuối, Tên xí nghiệp vận hành.
* **Điều khiển linh hoạt**:
  * **Đảo chiều**: Đổi vị trí điểm đầu và điểm cuối tức thì.
  * **CHẠY CHỮ**: Hỗ trợ dòng chữ chạy ngang với tốc độ tùy chỉnh.
  * **Xe ra tuyến, xe dừng phục vụ**: Hiển thị "HUY ĐỘNG RA TUYẾN" hoặc "XE DỪNG PHỤC VỤ".
  * **Đóng băng**: Tạm dừng hiệu ứng tại thời điểm hiện tại.
  * **Điều chỉnh tốc độ**: Thanh trượt cho phép chỉnh tốc độ chạy chữ từ 50 đến 1000 px/s.
* **Bảng điều khiển nâng cao**: Ẩn/Hiện các nút chức năng nâng cao để giữ giao diện gọn gàng.
* **Thông tin trạng thái**: Bảng hiển thị trạng thái thời gian thực của LED (Đang chạy, Tạm dừng, Đang chạy chữ, Mode hiện tại).
* **Ngày/Đêm**: Làm tối phần còn lại của trang, trừ phần LED để nổi bật trong đêm.
* **Trải nghiệm người dùng tối ưu**:
  * **Popup & Toast**: Hệ thống thông báo và xác nhận đẹp mắt, không dùng hộp thoại mặc định.
  * **Hỗ trợ nhập liệu**: Tự động kiểm tra dữ liệu, nút xóa nhanh, và định dạng mã tuyến (VD: 55A hiển thị 55^A).

## Các Chế Độ Chạy (Mode)

Bảng tóm tắt các chế độ:

| Chế độ | Mô tả ngắn |
|------|-----------|
| **1. Xe Điện 1** | Hiệu ứng mở rộng, dùng kèm các mode khác |
| **2. Xe Điện 2** | Dành cho xe điện Hà Nội |
| **3. Thường** | Chế độ truyền thống của TCT |
| **4. Liên Ninh** | Hiển thị tối giản |
| **5. Hanoi BRT** | Dành cho tuyến BRT |
| **6. Bảo Yến** | Nhấp nháy mã tuyến |
| **7. Demo** | Trình diễn nhanh các hiệu ứng |

---

### 1. Xe Điện 1

Không phải mode độc lập. Đây là hiệu ứng mở rộng được sử dụng chung với các mode còn lại.  
Sử dụng nút bấm **"XE ĐIỆN 1"** để chuyển đổi qua lại giữa màn hình Thông tin tuyến và Tên xí nghiệp khi cuộn chữ.

Cuộn luân phiên:

![](/assets/image/hdsd/matuyen+diemdaucuoi.png)

![](/assets/image/hdsd/matuyen+xinghiep.png)

---

### 2. Xe Điện 2

Phù hợp cho các tuyến xe điện Công ty cổ phần Xe điện Hà Nội hoặc tương tự.

Trình tự:
1. Mã tuyến + Điểm Đ-C (30s)  
2. Hanoibus (5s)  
3. Hiệu ứng xóa mã tuyến chuyển cảnh  
4. Mã tuyến căn giữa (5s)  
5. Transerco (5s)  

![](/assets/image/hdsd/matuyen+diemdaucuoi.png)  
30s  

![](/assets/image/hdsd/matuyen+hanoibus.png)  
5s  

![](/assets/image/hdsd/hienthitrunggian1_2.png)  
0.2s  

![](/assets/image/hdsd/hienthitrunggian2.png)  
0.2s  

![](/assets/image/hdsd/hienthimatuyencangiua.png)  
5s  

![](/assets/image/hdsd/hienthitrunggian3.png)  
0.3s  

![](/assets/image/hdsd/hienthitrunggian4.png)  
0.3s  

![](/assets/image/hdsd/matuyen+transerco.png)  
5s  

Lặp lại liên tục.

---

### 3. Thường

Chế độ truyền thống, đơn giản. Mô phỏng LED của các tuyến buýt thông thường của TCT.

Trình tự:
1. Mã tuyến + Điểm Đ-C (30s)  
2. Hanoibus (3s)  
3. Mã tuyến căn giữa (5s)  
4. Transerco (3s)  

![](/assets/image/hdsd/matuyen+diemdaucuoi.png)  
30s  

![](/assets/image/hdsd/matuyen+hanoibus.png)  
5s  

![](/assets/image/hdsd/hienthimatuyencangiua.png)  
5s  

![](/assets/image/hdsd/matuyen+transerco.png)  
5s  

Lặp lại liên tục.

---

### 4. Liên Ninh

Chế độ tối giản, chỉ hiển thị thông tin tuyến. Mô phỏng LED của Xn buýt Liên Ninh.

![](/assets/image/hdsd/matuyen+diemdaucuoi.png)  
30s  

![](/assets/image/hdsd/hienthimatuyencangiua.png)  
5s  

Lặp lại liên tục.

---

### 5. Hanoi BRT

Dành cho tuyến buýt nhanh BRT của Xn BRT.

![](/assets/image/hdsd/matuyen+diemdaucuoi.png)  
30s  

![](/assets/image/hdsd/hienthimatuyencangiua.png)  
5s  

![](/assets/image/hdsd/matuyen+transerco.png)  
5s  

Lặp lại liên tục.

---

### 6. Bảo Yến

Mô phỏng 1 phần xe buýt Bảo Yến với hiệu ứng **nhấp nháy mã tuyến**.

![](/assets/image/hdsd/matuyen+diemdaucuoi.png)  
Luân phiên nhấp nháy, mỗi lần nhấp cách nhau 1.25s  

![](/assets/image/hdsd/baoyen.png)  
30s  

Lặp lại liên tục.

---

### 7. Demo

Chạy lướt qua tất cả các hiệu ứng của chế độ Xe điện 2 trong thời gian ngắn  
(2s/bước, riêng Hiển thị mã tuyến, điểm đầu cuối chạy trong 10s) để kiểm tra.

---

## Hướng Dẫn Sử Dụng

### 1. Nhập thông tin tuyến

1. Nhấn nút **NHẬP** trên giao diện chính.  
   - Nếu không thấy nút này, nhấn **NÂNG CAO** (có thể cần nhấn 2 lần) để hiển thị các chức năng nâng cao.
2. Điền đầy đủ các thông tin trong biểu mẫu:
   - **Mã tuyến**: Ví dụ: `01`, `32`, `20ATC`…
   - **Điểm đầu / Điểm giữa / Điểm cuối**:  
     Ví dụ: *Cầu Giấy, Ga Hà Nội, BX Giáp Bát, Phú Sơn (Ba Vì)*...
   - **Tên xí nghiệp vận hành**:  
     Ví dụ: *Xí nghiệp xe buýt Cầu Bươu*, *Bảo Yến CNG Bus*…
3. Nhấn **LƯU** để lưu dữ liệu vào bộ nhớ trình duyệt (LocalStorage).
4. Nhấn **QUAY LẠI** để trở về màn hình chính.

---

### 2. Chọn chế độ hiển thị và bắt đầu chạy

1. Nhấn **NÂNG CAO** để mở bảng điều khiển chế độ (nếu chưa hiển thị).
2. Chọn một trong các chế độ hiển thị:
   - THƯỜNG
   - XE ĐIỆN 2
   - BRT
   - LIÊN NINH
   - BẢO YẾN
   - DEMO  
   (Có thể bật thêm phần mở rộng **Xe Điện 1** nếu cần.)
3. Nhấn **CHẠY** để bắt đầu mô phỏng bảng LED.

---

### 3. Điều khiển trong quá trình chạy

Trong khi LED đang hoạt động, người dùng có thể sử dụng các nút điều khiển sau:

- **ĐẢO CHIỀU**  
  Đảo ngược lộ trình hiển thị (A → B thành B → A).

- **CHẠY CHỮ**  
  Bật hoặc tắt hiệu ứng chữ chạy ngang (phù hợp với các tuyến có tên dài).

- **THANH TRƯỢT TỐC ĐỘ**  
  Điều chỉnh tốc độ chạy chữ từ **50 px/s đến 1000 px/s**.

- **ĐÓNG BĂNG**  
  Tạm dừng toàn bộ hiệu ứng LED tại thời điểm hiện tại.

- **XE VỀ GARA / HUY ĐỘNG**  
  Chuyển nhanh sang màn hình thông báo tương ứng.

- **TẮT**  
  Xóa toàn bộ nội dung hiển thị và dừng mô phỏng LED.

- **RELOAD**  
  Tải lại trang web và đưa ứng dụng về trạng thái ban đầu.

---

### 4. Lưu ý khi sử dụng

- Mỗi khi chuyển sang một chế độ chạy khác, hệ thống sẽ tự động **reset**.
- Toàn bộ dữ liệu nhập (thông tin tuyến, chế độ chạy…) được lưu **cục bộ trong LocalStorage** của trình duyệt.
- Trong trường hợp nội dung điểm đầu – điểm cuối chưa được căn giữa đúng:
  - Tắt LED
  - Sau đó bật lại để hệ thống tự căn chỉnh.


## Cấu trúc Mã nguồn (Dành cho Nhà phát triển)

Bộ mã nguồn được tổ chức trong thư mục `js/` với các chức năng được chia nhỏ rõ ràng:

*   **`js/`**:
    *   **`dieu_khien_LED.js`**: Chứa các hàm điều khiển chung (reset, bật/tắt hiệu ứng, chuyển chế độ ngày/đêm...).
    *   **`hien_thi_LED.js`**: Chứa logic hiển thị của từng chế độ (Transerco, Hanoibus, Xe điện...).
    *   **`event_listeners.js`**: Gán sự kiện click cho các nút bấm.
    *   **`marquee.js`**: Quản lý hiệu ứng chạy chữ (marquee).
    *   **`input.js`**: Xử lý nhập liệu và validate thông tin tuyến.
    *   **`window_onload.js`**: Khởi tạo trạng thái khi tải trang (đọc từ LocalStorage).
    *   **`thu_gon_noi_dung.js`**: Xử lý ẩn/hiện bảng điều khiển.
    *   **`popup.js`**, **`speed_indicator.js`**, **`xac_nhan...js`**: Các tiện ích nhỏ khác.
*   **`css/`**: Chứa các file style cho giao diện (`main.css`, `input.css`, `popup.css`, ...).
*   **`assets/`**: Hình ảnh và icon.
*   **`routes.json`**: Dữ liệu danh sách các tuyến xe buýt (dùng cho tính năng gợi ý/tìm kiếm).

Toàn bộ code đã được thêm chú thích chi tiết để thuận tiện cho việc tìm hiểu và phát triển tiếp.

## Lưu ý

* Trước khi đổi chế độ chạy khác, hệ thống sẽ tự động reset.
* Dữ liệu được lưu hoàn toàn trong LocalStorage của trình duyệt.
* Khi điểm đầu cuối chưa được căn giữa, tắt đi bật lại LED để căn giữa.

---

* Sản phẩm được phát triển cá nhân với mục đích học tập và thử nghiệm.
* Không phải sản phẩm chính thức của Tổng công ty Vận tải Hà Nội hay bất kỳ đơn vị vận tải nào.
* Xin cảm ơn Tổng công ty Vận tải Hà Nội với logo Hanoibus và Transerco.
* Trong tương lai, các xe đi vá có thể dùng sản phẩm này thay thế cho biển lật.
* Biển lật là gì? Là tấm biển chỉ mã tuyến và tên tuyến, thỉnh thoảng có thêm biển kiểm soát.

![](/assets/image/bienlat6.png)  
![](/assets/image/bienlat5.png)  
![](/assets/image/bienlat4.png)
