# Mô Phỏng Bảng LED Xe Buýt Hà Nội

Ứng dụng web mô phỏng bảng LED hiển thị thông tin tuyến trên các xe buýt của Tổng công ty Vận tải Hà Nội (Transerco) và các đơn vị vận tải công cộng khác. Ứng dụng này giúp tái hiện các hiệu ứng hiển thị quen thuộc trên đường phố Hà Nội ngay trên trình duyệt của bạn.

## Tính Năng Chính

*   **Mô phỏng chân thực**: Tái tạo các hiệu ứng LED hiển thị - ẩn, chuyển cảnh, chạy chữ.
*   **Đa dạng chế độ (Modes)**: Hỗ trợ 7 chế độ chạy khác nhau tương ứng với các loại xe và đơn vị vận hành thực tế.
*   **Tùy biến nội dung**: Cho phép người dùng tự nhập Mã tuyến, Điểm đầu, Điểm cuối, Tên xí nghiệp vận hành.
*   **Điều khiển linh hoạt**:
    *   **Đảo chiều**: Đổi vị trí điểm đầu và điểm cuối tức thì.
    *   **C.CHỮ&C.GIỮA**: Hỗ trợ dòng chữ chạy ngang với tốc độ tùy chỉnh, và căn tên tuyến ra giữa màn hình nếu chưa.
    *   **Xe ra tuyến, xe dừng phục vụ**: Hiển thị "HUY ĐỘNG RA TUYẾN" hoặc "XE DỪNG PHỤC VỤ".
    *   **Đóng băng**: Tạm dừng hiệu ứng tại thời điểm hiện tại.
    *   **Điều chỉnh tốc độ**: Thanh trượt cho phép chỉnh tốc độ chạy chữ từ 50 đến 1000 px/s.
*   **Bảng điều khiển nâng cao**: Ẩn/Hiện các nút chức năng nâng cao để giữ giao diện gọn gàng.
*   **Thông tin trạng thái**: Bảng hiển thị trạng thái thời gian thực của LED (Đang chạy, Tạm dừng, Đang chạy chữ, Mode hiện tại).

## Các Chế Độ Chạy (Mode)

Ứng dụng hỗ trợ các mode hiển thị với trình tự và thời gian khác nhau:

| Chế độ | Mô tả & Trình tự hiển thị |
| :--- | :--- |
| **1. Xe Điện 1** | Không phải mode độc lập. Đây là hiệu ứng mở rộng được sử dụng chung với các mode còn lại. Sử dụng nút bấm "XE ĐIỆN 1" để chuyển đổi qua lại giữa màn hình Thông tin tuyến và Tên xí nghiệp khi cuộn chữ. |
![](/assets/image/hdsd/matuyen+diemdaucuoi.png)
<br>Cuộn luân phiên<br>
![](/assets/image/hdsd/matuyen+xinghiep.png)
| **2. Xe Điện 2** | Phù hợp cho các tuyến xe điện Công ty cổ phần Xe điện Hà Nội hoặc tương tự.<br>1. Mã tuyến + Điểm Đ-C (30s)<br>2. Hanoibus (5s)<br>3. Hiệu ứng xóa mã tuyến chuyển cảnh<br>4. Mã tuyến căn giữa (5s)<br>5. Transerco (5s) |
![](/assets/image/hdsd/matuyen+diemdaucuoi.png)
<br>30s<br>
![](/assets/image/hdsd/matuyen+hanoibus.png)
<br>5s<br>
![](/assets/image/hdsd/hienthitrunggian1_2.png)
<br>0.2s<br>
![](/assets/image/hdsd/hienthitrunggian2.png)
<br>0.2s<br>
![](/assets/image/hdsd/hienthimatuyencangiua.png)
<br>5s<br>
![](/assets/image/hdsd/hienthitrunggian3.png)
<br>0.3s<br>
![](/assets/image/hdsd/hienthitrunggian4.png)
<br>0.3s<br>
![](/assets/image/hdsd/matuyen+transerco.png)
<br>5s<br>
<br>lặp lại liên tục<br>
| **3. Thường** | Chế độ truyền thống, đơn giản. Mô phỏng LED của các tuyến buýt thông thường của TCT.<br>1. Mã tuyến + Điểm Đ-C (30s)<br>2. Hanoibus (3s)<br>3. Mã tuyến căn giữa (5s)<br>4. Transerco (3s) |
![](/assets/image/hdsd/matuyen+diemdaucuoi.png)
<br>30s<br>
![](/assets/image/hdsd/matuyen+hanoibus.png)
<br>5s<br>

![](/assets/image/hdsd/hienthimatuyencangiua.png)
<br>5s<br>

![](/assets/image/hdsd/matuyen+transerco.png)
<br>5s<br>
<br>lặp lại liên tục<br>
| **4. Liên Ninh** | Chế độ tối giản, chỉ hiển thị thông tin tuyến. Mô phỏng LED của Xn buýt Liên Ninh.<br>1. Mã tuyến + Điểm Đ-C (30s)<br>2. Mã tuyến căn giữa (5s) |
![](/assets/image/hdsd/matuyen+diemdaucuoi.png)
<br>30s<br>

![](/assets/image/hdsd/hienthimatuyencangiua.png)
<br>5s<br>
<br>lặp lại liên tục<br>
| **5. Hanoi BRT** | Dành cho tuyến buýt nhanh BRT của Xn BRT.<br>1. Mã tuyến + Điểm Đ-C (30s)<br>2. Tên Xí Nghiệp (5s)<br>3. Mã tuyến căn giữa (5s)<br>4. Transerco (5s) |
![](/assets/image/hdsd/matuyen+diemdaucuoi.png)
<br>30s<br>
![](/assets/image/hdsd/hienthimatuyencangiua.png)
<br>5s<br>
![](/assets/image/hdsd/matuyen+transerco.png)
<br>5s<br>
<br>lặp lại liên tục<br>
| **6. Bảo Yến** | Mô phỏng 1 phần xe buýt Bảo Yến với hiệu ứng **nhấp nháy mã tuyến**.<br>1. Mã tuyến + Điểm Đ-C (30s)<br>2. Tên Xí Nghiệp (5s) |
![](/assets/image/hdsd/matuyen+diemdaucuoi.png)
<br>Luân phiên nhấp nháy, mỗi lần nhấp cách nhau 1.25s<br>
![](/assets/image/hdsd/baoyen.png)
<br>30s<br>
<br>lặp lại liên tục<br>
| **7. Demo** | Chạy lướt qua tất cả các hiệu ứng của chế độ Xe điện 1 trong thời gian ngắn (2s/bước, riêng Hiển thị mã tuyến, điểm đầu cuối chạy trong 10s) để kiểm tra. |

## Hướng Dẫn Sử Dụng Nhanh

### Bước 1: Nhập liệu
1.  Nhấn nút **NHẬP** trên giao diện chính. Nếu không thấy, bấm nút NÂNG CAO (có thể phải nhấn 2 lần) để hiện ra.
2.  Điền thông tin vào form:
    *   **Mã tuyến**: (VD: 01, 32, 20ATC...)
    *   **Điểm đầu/ Điểm giữa / Điểm cuối**: (VD: Bến xe Gia Lâm, Ga Hà Nội, Phú Sơn (Ba Vì)...)
    *   **Tên Xí nghiệp**: (VD: Xí nghiệp xe buýt Cầu Bươu, Bảo Yến...)
3.  Nhấn **LƯU** để lưu vào bộ nhớ trình duyệt, sau đó nhấn **QUAY LẠI**.

### Bước 2: Chọn Chế độ & Chạy
1.  Nhấn nút **NÂNG CAO** để mở rộng bảng điều khiển nếu chưa thấy các nút chọn chế độ.
2.  Chọn một trong các chế độ (ĐẦY ĐỦ, THƯỜNG, XE ĐIỆN 2...). Có thể chọn phần mở rộng Xe Điện 1.
3.  Nhấn nút **CHẠY** để bắt đầu hiển thị.

### Bước 3: Điều khiển trong khi chạy
*   **ĐẢO CHIỀU**: Nhấn để đảo ngược lộ trình (A -> B thành B -> A).
*   **CHẠY CHỮ**: Bật/Tắt hiệu ứng chữ chạy ngang (với các tuyến có tên dài).
*   **THỬ THANH TRƯỢT TỐC ĐỘ**: Kéo thanh trượt để tăng/giảm tốc độ chạy chữ từ 50 px/s đến 1000 px/s.
*   **ĐÓNG BĂNG**: Tạm dừng mọi hoạt động của LED tại vị trí hiện tại.
*   **XE VỀ GARA / HUY ĐỘNG**: Chuyển ngay sang trạng thái thông báo tương ứng.
*   **TẮT**: Xóa màn hình LED và dừng chạy.
*   **RELOAD**: Tải lại toàn bộ trang web (reset mọi thứ).

## Lưu ý
*   Trước khi đổi chế độ chạy khác, hệ thống sẽ tự động reset.
*   Dữ liệu (Bao gồm các thông tin khi nhập, mode chạy) được lưu hoàn toàn trong LocalStorage của trình duyệt bạn.
*   Khi điểm đầu cuối chưa được căn giữa, tắt đi bật lại LED để căn giữa.

---
*   Sản phẩm được phát triển cá nhân với mục đích học tập và giải trí. Không phải sản phẩm chính thức của Tổng công ty Vận tải Hà Nội hay bất kỳ đơn vị vận tải nào. 
*   Xin cảm ơn Tổng công ty Vận tải Hà Nội với logo Hanoibus và Transerco.
*   Trong tương lai, các xe đi vá có thể dùng sản phẩm này thay thế cho biển lật.
*   Biển lật là gì? Là tấm biển chỉ mã tuyến và tên tuyến, thỉnh thoảng có thêm biển kiểm soát.
![](/assets/image/bienlat6.png)
![](/assets/image/bienlat5.png)
![](/assets/image/bienlat4.png)