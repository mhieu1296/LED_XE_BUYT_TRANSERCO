Ứng dụng mô phỏng (không hoàn toàn giống) bảng LED hiển thị tuyến trên một số xe buýt của Tổng công ty Vận tải Hà Nội.
Hiệu ứng LED chủ yếu là "hiển thị - không hiển thị" hay có thể gọi là "hiển thị luân phiên".
Chủ yếu tham khảo hiệu ứng LED tuyến của Công ty Xe điện Hà Nội.
Ứng dụng này được làm dưới sự trợ giúp của CHatGPT và một sinh viên mới năm nhất chưa biết gì về lập trình web.

Trình tự hiển thị:
1. Hiển thị mã tuyến, điểm đầu - điểm cuối trong 10 giây. </br> 
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
Ứng dụng hỗ trợ đảo chiều tuyến, đóng băng LED, hiển thị HUY ĐỘNG RA TUYẾN, XE VỀ GARA, xóa hoàn toàn LED. </br>

Tuyến mặc định: 92       NHỔN- PHÚ SƠN của XN BUS 10-10. </br>
Có thể thay đổi các thông tin như Mã tuyến, điểm đầu, điểm cuối, tên xí nghiệp. Thay đổi xong nhấn NẠP LED sẽ được. Sẽ có cảnh báo khi không nhập đủ thông tin.</br>
</br>
Nếu bạn muốn trải nghiệm, hãy truy cập [tại đây](https://ledxebuyt.netlify.app).
