Ứng dụng mô phỏng (không hoàn toàn giống) bảng LED hiển thị tuyến trên một số xe buýt của Tổng công ty Vận tải Hà Nội.
Hiệu ứng LED chủ yếu là "hiển thị - không hiển thị" hay có thể gọi là "hiển thị luân phiên".
Hỗ trợ nhiều mode chạy khác nhau: </br>
1. Xe điện 1</br>
2. Xe điện 2</br>
3. Truyền thống</br>
4. Liên Ninh</br>
5. Hanoi BRT</br>
6. Bảo Yến</br>
Ứng dụng này được làm dưới sự trợ giúp của CHatGPT và một sinh viên mới năm nhất chưa biết gì về lập trình web.

Trình tự hiển thị:
1. Hiển thị mã tuyến, điểm đầu - điểm cuối trong 30 giây. </br> 
   55A    CẦU GIẤY - TIMES CITY
2. Hiển thị mã tuyến, logo Hanoibus trong 5 giây. </br>
   55A    H A N O I B U S
3. Hiển thị mã tuyến, tên xí nghiệp trong 5 giây.</br>
   55A      CÔNG TY CP XE ĐIỆN HÀ NỘI

{</br>
HÀM HIỂN THỊ HIỆU ỨNG</br>
TG1. hiệu ứng xóa mã tuyến trong 0.15 giây</br>
TG2. hiệu ứng xoá tên xí nghiệp trong 0.15 giây.</br>
}</br>

4. Hiển thị mã tuyến dạng căn giữa bảng LED trong 5 giây.</br>
         55A

{</br>
HÀM HIỂN THỊ HIỆU ỨNG</br>
TG3. hiệu ứng xóa mã tuyến căn giữa trong 0.25 giây.</br>
TG4. hiệu ứng hiển thị mã tuyến để chuẩn bị cho hàm tiếp theo trong 0.25 giây.</br>
}</br>

5. Hiển thị mã tuyến, logo Transerco trong 5 giây. </br>
   55A      T R A N S E R C O
</br>
TẤT CẢ CHÚNG ĐỀU CHẠY VÔ HẠN ĐẾN KHI NHẤN NÚT ĐÓNG BĂNG HOẶC XOÁ LED THÌ MỚI NGƯNG. </br>
Với các mode chạy sẽ có sự điều chỉnh về thứ tự các hàm chạy. Chi tiết hãy xem trong file hien_thi_LED.js sẽ có chú thích. </br>
Ứng dụng hỗ trợ đảo chiều tuyến, đóng băng LED, hiển thị HUY ĐỘNG RA TUYẾN, XE VỀ GARA, xóa hoàn toàn LED. </br>

Khi mới khởi động lần đầu tiên và nhấn CHẠY, sẽ không có gì hiển thị trên LED trừ mũi tên xanh, logo Hanoibus và Transerco. Hãy nhập thông tin LED bằng cách nhấn nút NHẬP. </br>
Có thể thay đổi các thông tin như Mã tuyến, điểm đầu, điểm cuối, tên xí nghiệp. Thay đổi xong nhấn NẠP LED sẽ được. Sẽ có cảnh báo khi không nhập đủ thông tin.</br>
</br>
Nếu bạn muốn trải nghiệm, hãy truy cập [tại đây](https://ledxebuyt.netlify.app).
