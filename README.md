Ứng dụng mô phỏng (không hoàn toàn giống) bảng LED hiển thị tuyến trên một số xe buýt của Tổng công ty Vận tải Hà Nội.
Hiệu ứng LED chủ yếu là "hiển thị - không hiển thị" hay có thể gọi là "hiển thị luân phiên".
Chủ yếu tham khảo hiệu ứng LED tuyến của Công ty Xe điện Hà Nội.
Ứng dụng này được làm dưới sự trợ giúp của CHatGPT và một sinh viên mới năm nhất chưa biết gì về lập trình web.

Trình tự hiển thị:
1. Hiển thị mã tuyến, điểm đầu - điểm cuối trong 10 giây. 
   55A    CẦU GIẤY - TIMES CITY
2. Hiển thị mã tuyến, logo Hanoibus trong 5 giây.
   55A      H A N O I B U S
3. Hiển thị mã tuyến, tên xí nghiệp trong 5 giây.
   55A      CÔNG TY CP XE ĐIỆN HÀ NỘI

{
HÀM HIỂN THỊ HIỆU ỨNG
TG1. hiệu ứng xóa mã tuyến trong 0.15 giây
TG2. hiệu ứng xoá tên xí nghiệp trong 0.15 giây.
}

4. Hiển thị mã tuyến dạng căn giữa bảng LED trong 5 giây.
         55A

{
HÀM HIỂN THỊ HIỆU ỨNG
TG3. hiệu ứng xóa mã tuyến căn giữa trong 0.25 giây.
TG4. hiệu ứng hiển thị mã tuyến để chuẩn bị cho hàm tiếp theo trong 0.25 giây.
}

5. Hiển thị mã tuyến, logo Transerco trong 5 giây.
   55A      T R A N S E R C O

TẤT CẢ CHÚNG ĐỀU CHẠY VÔ HẠN ĐẾN KHI NHẤN NÚT ĐÓNG BĂNG HOẶC XOÁ LED THÌ MỚI NGƯNG.

