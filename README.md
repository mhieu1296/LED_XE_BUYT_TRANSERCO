Ứng dụng mô phỏng (không hoàn toàn giống) bảng LED hiển thị tuyến trên một số xe buýt của Tổng công ty Vận tải Hà Nội.
Hiệu ứng LED chủ yếu là "hiển thị - không hiển thị" hay có thể gọi là "hiển thị luân phiên".
Hỗ trợ nhiều mode chạy khác nhau: </br>
1. Đầy đủ (1, 2, 3, TG1, TG2, 4, TG3, TG4, 5)</br>
2. Xe điện 2 (1, 2, TG1, TG2, 4, TG3, TG4, 5)</br>
3. Truyền thống (1, 2, 4, 5). Đây là mode mặc định</br>
4. Liên Ninh (1, 4)</br>
5. Hanoi BRT (1, 3, 4, 5)</br>
6. Bảo Yến (nhấp nháy mã tuyến) (1, 3)</br>
Ứng dụng này được làm dưới sự trợ giúp của ChatGPT và một sinh viên mới năm nhất (tính từ thời điểm commit lần đầu) chưa biết gì quá to tát về lập trình web.

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
Với các mode chạy sẽ có sự điều chỉnh về thứ tự các hàm chạy. </br>
Ứng dụng hỗ trợ đảo chiều tuyến, đóng băng LED, hiển thị HUY ĐỘNG RA TUYẾN, XE VỀ GARA, xóa hoàn toàn LED. Hỗ trợ chạy chữ khi bảng LED quá nhỏ. </br>
Có hỗ trợ preview mã tuyến - tên tuyến, và các trạng thái như bật/tắt, dừng/chạy, chạy chữ hay không, tên mode đang chạy. </br>
Có nhiều màu nền khác nhau.</br>
</br>

Hướng dẫn sử dụng nhanh: </br>
Bước 1: Vào trang, lướt xuống nhấn vào nút Nhập. </br>
Bước 2: Nhập mã tuyến, điểm đầu / giữa (optional) / cuối và xí nghiệp vận hành. Nhấn LƯU sau đó QUAY LẠI. </br>
Bước 3: Chọn mode và nhấn nút CHẠY. Trong quá trình chạy, có thể đảo chiều hoặc cho chạy chữ. </br>
Lưu ý: trước khi đổi mode, hiển thị XE HUY ĐỘNG / XE VỀ GARA, phải nhấn nút ĐÓNG BĂNG -> TẮT rồi mới được đổi mode. </br>
Có thể thay đổi các thông tin như Mã tuyến, điểm đầu, điểm cuối, tên xí nghiệp. Thay đổi xong nhấn LƯU sẽ được. Sẽ có cảnh báo khi không nhập đủ thông tin.</br>
Khi mới khởi động lần đầu tiên và nhấn CHẠY, sẽ không có gì hiển thị trên LED trừ mũi tên xanh, logo Hanoibus và Transerco. Hãy nhập thông tin LED bằng cách nhấn nút NHẬP.  </BR>
</br>
Nếu bạn muốn trải nghiệm, hãy truy cập [tại đây](https://ledxebuyt.netlify.app). </br>
LƯU Ý: ỨNG DỤNG NÀY KHÔNG PHẢI CỦA TRANSERCO VÀ CÁC DOANH NGHIỆP VẬN TẢI CÔNG CỘNG. ĐÂY CHỈ LÀ SẢN PHẨM CÁ NHÂN.
</br> Các ông đi qua, các bà đi lại thấy code xấu quá thì giơ cao đánh khẽ cháu thôi nha. Cháu đưa ý tưởng, và cùng sự hỗ trợ của ChatGPT, và sự điều chỉnh logic đã tạo nên sản phẩm này. Thôi thì cũng gọi là vibe coding cũng được nha".
