# Mô Phỏng Bảng LED Xe Buýt Hà Nội

Ứng dụng web mô phỏng bảng LED hiển thị thông tin tuyến trên các xe buýt của Tổng công ty Vận tải Hà Nội (Transerco) và các đơn vị vận tải công cộng khác.

## Tính Năng Chính

* **Mô phỏng LED**: Tái tạo các hiệu ứng LED hiển thị - ẩn, chuyển cảnh, chạy chữ.
* **Đa dạng chế độ (Modes)**: Hỗ trợ 7 chế độ chạy khác nhau tương ứng với các loại xe và đơn vị vận hành thực tế.
* **Tùy biến nội dung**: Cho phép người dùng tự nhập Mã tuyến, Điểm đầu, Điểm cuối, Tên xí nghiệp vận hành.
* **Điều khiển linh hoạt**:
  * **Đảo chiều**: Đổi vị trí điểm đầu và điểm cuối tức thì.
  * **C.CHỮ&C.GIỮA**: Hỗ trợ dòng chữ chạy ngang với tốc độ tùy chỉnh, và căn tên tuyến ra giữa màn hình nếu chưa.
  * **Xe ra tuyến, xe dừng phục vụ**: Hiển thị "HUY ĐỘNG RA TUYẾN" hoặc "XE DỪNG PHỤC VỤ".
  * **Đóng băng**: Tạm dừng hiệu ứng tại thời điểm hiện tại.
  * **Điều chỉnh tốc độ**: Thanh trượt cho phép chỉnh tốc độ chạy chữ từ 50 đến 1000 px/s.
* **Bảng điều khiển nâng cao**: Ẩn/Hiện các nút chức năng nâng cao để giữ giao diện gọn gàng.
* **Thông tin trạng thái**: Bảng hiển thị trạng thái thời gian thực của LED (Đang chạy, Tạm dừng, Đang chạy chữ, Mode hiện tại).

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

## Hướng Dẫn Sử Dụng Nhanh

(Phần này giữ nguyên nội dung, chỉ chuẩn hóa xuống dòng — không thay đổi ý nghĩa.)

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
