---
layout: markdown
title: Cyber Attack
---
<h1>Cyber Attack</h1>

* Do not remove this line (it will not be displayed)
{:toc}


# Mở đầu 
Cyber Attack là các hoạt động phá hoại, ăn cắp dữ liệu, làm hỏng dữ liệu hướng đến các hệ thống máy tính, server hoặc máy tính cá nhân

Về phân loại theo đối tượng thì cũng có những loại tấn công hướng đến những doanh nghiệp, tổ chức cá nhân cụ thể, nhưng cũng có những loại tấn công không phân biệt đối tượng mà trên diện rộng.

Về phân loại theo mục đích thì cũng có loại tấn công hướng đến mục đích trục lợi kiếm tiền, nhưng cũng có loại chỉ để cho vui.

Để thực hiện bài dịch/bài viết này mình đã tham khảo ở đây 
https://cybersecurity-jp.com/cybersecurity-guide/14651

# Xu hướng mục đích và đối tượng tấn công của cyber attack
Trong những năm gần đây mục tiêu của cyber attack rất đa dạng.

Nhiều nhất có thể nói đến là các mục tiêu sau :
+ Trục lợi kiếm tiền bất chính
+ Đơn thuần chỉ thoả mãn thú vui cá nhân
+ Mục tiêu nhắm đến các tổ chức chính phủ, doanh nghiệp nhằm hạ giá thương hiệu, thay đổi chiến lược kinh doanh, gây biến động giá cổ phiếu, lấy cắp thông tin kinh doanh sản xuất. Hơn thế nữa cũng có xu hướng tấn công với mục tiêu chính trị hay xã hội.

Người ta cho rằng người tấn công trong các trường hợp trên thường là tội phạm, tổ chức tội phạm, do thám, điệp viên kinh tế, tổ chức hacker, hay những nhân viên công ty (dù đã nghỉ việc) với mục đích xấu.

Gần đây thì cùng với việc những tool để thực hiện cyber attack thường có thể dễ dàng mua bán hoặc có được từ darkweb thì có xu hướng nổi bật cho thấy độ tuổi của tội phạm cũng ngày càng trẻ hoá đi.

Do vậy có thể nói ngày nay việc cần nắm được mục tiêu hay đặc trưng của những kiểu tội phạm này hay nói cách khác nhận biết, phán đoán được đâu là mục tiêu dễ tấn công là việc rất cần thiết để từ đó đưa ra được những đối sách bảo mật hiệu quả và cần thiết.

# Các loại Cyber Attack
## Loại tấn công có mục tiêu 
### Targeted Attacks 
Đây là loại tấn công mà kẻ tấn công đã xác định cụ thể đối tượng tổ chức cũng như lớp cá nhân định tấn công.

Với loại tấn công này thì kẻ tấn công sẽ giả là người quen hay là đối tác của kẻ tấn công mà gửi đến những tập tin có virus, dẫn dụ đến những trang web độc hại, nhằm mục đích lây lan malware và máy tính hay thiết bị smartphone của đối tượng.

### Ransomeware 
Ransomeware là 1 kiểu của malware mà nó sẽ lấy dữ liệu của người dùng làm "con tin", để thả con tin ra hay nói cách khác là để hồi phục dữ liệu thì người dùng phải trả "tiền chuộc" (ransom).

Đa số các loại ransomeware thường giả dạng phần mềm hợp pháp để xâm nhập vào máy tính. Sau khi đã xâm nhập, chúng mã hoá dữ liệu máy tính, thay đổi password, làm người dùng không thể truy cập bình thường vào dữ liệu nữa.

Khi user truy cập dữ liệu sẽ hiện ra thông báo không thể mở được, để có thể hồi phục lại dữ liệu thì user cần trả 1 khoản phí tương ứng đến địa chỉ nhất định.

### Waltering Hole Attack
Đây là loại tấn công mà kẻ tấn công sẽ làm giả trang web mà người dùng thường truy cập. Trên trang web làm giả đó có thiết lập sẵn các chương trình độc hại nhằm lan truyền virus vào máy người dùng khi người dùng bị dẫn dụ truy cập đến.

Sở dĩ gọi là Waltering Hole Attack bởi vì hình thức này giống như loài sư tử săn mồi trong tự nhiên. Chúng rình rập chờ con mồi đến các vũng nước (waltering hole) rồi bắt đầu tấn công.

### Clickjacking
Clickjacking loại tấn công mà kẻ tấn công lợi dụng kẽ hở của web browser để tấn công user truy cập website đó.

Cụ thể, kẻ tấn công sẽ làm các nút và link trở nên trong suốt, làm user với thao tác bình thường cũng vô tình kích hoạt các nút và link đó.

### Drive-By Download
Đây là kiểu tấn công mà kẻ tấn công sẽ làm các website mà khi user truy cập vào sẽ tự động download các phần mềm độc hại về máy.

Về cách thức thì đây khá giống với Waltering Hole Attack, tuy nhiên Drive-By Download không lựa chọn đối tượng tấn công cụ thể như Waltering Hole Attack mà có phạm vi phát tán rộng hơn. 

## Loại tấn công gây tăng tải hệ thống
### Dos/DDos (Denial of Service)
Nếu nói tấn công Dos thì kẻ tấn công và đối tượng quan hệ tỉ lệ là 1-1 thì tấn công DDos là kiểu tấn công phân tán n-1, khi kẻ tấn công phân tán tấn công ra nhiều máy tính khác nhau, mỗi máy gọi là 1 bot (botnet)

Tấn công DDos khó chống đỡ ở điểm là không thể biết hết được các các bot nằm ở đâu trước thời điểm xảy ra tấn công. Do vậy nên không thể ngăn chặn hết các botnet ở thời điểm bị tấn công.

### F5 Touch
"F5 Touch" hay còn gọi là "Tấn công F5", "Tấn công F5 liên tục". Đây là kiểu tấn công khá cổ lỗ, đơn giản là chỉ ấn F5 trên bàn phím liên tục để tải lại trang.

Kẻ tấn công chỉ cần xác định trang web cần tấn công, truy cập vào 1 một trang rồi F5 trang liên tục. Trang web sẽ bị tăng tải lên, dẫn đến khả năng treo cũng như ngừng hệ thống.

## Loại tấn công nhắm vào điểm yếu của OS / Phần mềm / Website
### Zero Day Attack
Đây là loại tấn công nhắm vào các lỗi, điểm yếu của phần mềm trước khi bản vá của nó được công bố.

Vốn dĩ trước đây người ta hay nói Zero Day Attack là kiểu tấn công nhắm vào các lỗi phần mềm mà chỉ kẻ tấn công mới biết, tuy nhiên gần đây Zero Day Attack thường được nói đến nhiều kể cả trong trường hợp chính nhà phát hành cũng biết và công bố rồi tuy nhiên bản vá vẫn chưa được công bố và tấn công xảy ra vào trước thời điểm đó.

Gọi là Zero Day Attack bởi đặc điểm mà tấn công xảy trước thời điểm bản vá được tung ra là 1 ngày nào đó (One Day). Trước 1 ngày nào đó (One Day) là Zero Day (Không biết là ngày nào) :).

### SQL Injection
Với các hệ thống website thì thường bên sau đó là một cơ sở dữ liệu, phía server sẽ thực hiện các câu truy vấn dựa vào thông tin nhập từ người dùng, truy vấn ở đây bao gồm cả thêm mới và cập nhật database.

Tại thời điểm đó, nếu hệ thống Website không được bảo mật tốt, kẻ tấn công có thể thực hiện câu lệnh SQL ngoài ý muốn của nhà phát triển chỉ từ việc thao tác với browser. Giống như sự tiêm nhiễm SQL vào hệ thống nên gọi là SQL Injection.

### OS Command Injection
Tương tự như SQL Injection ở trên, chỉ khác là thay vì câu lệnh SQL thì kẻ tấn công lây nhiễm vào vào hệ thống OS Command, dẫn đến thực hiện đọc file, xoá file ... bất chính

### Cross site scripting (XSS)
Đây là kiểu tấn công thường nhằm vào các nội dung mà các nội dung này sau đó sẽ được chuyển thành giao diện website, ví dụ như blog hoặc các trang đăng tin.

Ví dụ: kẻ tấn công nhắm vào các trang đăng tin (mà người dùng có thể viết tin đăng lên). Thay vì các tin thông thường thì kẻ tấn công đưa vào các đoạn script độc hại mà khi người dùng mở tin này lên sẽ kích hoạt các đoạn script này.

### Buffer overflow attack
Tấn công buffer overflow là kiểu tấn công dựa vào những bug liên quan đến xử lý nhập liệu của OS cũng như ứng dụng, ví dụ như gửi lên hệ thống với lượng dữ liệu quá khả năng xử lý, gây ra xử lý sai phía server.

Tấn công BOF thường được nhắc đến với đối tượng là stack trong memory, tuy nhiên ngoài ra cũng có trường hợp với bộ nhớ heap hay liên quan đến việc chiếm quyền của root trong UNIX trong thời điểm hệ thống bị quá tải do overflow ở trên.

### Session Hijacking
Session Hijacking là 1 kiểu tấn công mà kẻ tấn công nhắm vào dữ liệu phiên (session) làm việc giữa client và server.

Session Hijacking thường được nói đến với những hình thức sau :
+ Kẻ tấn công làm giả server, đánh cắp thông tin mật của client.
+ Kẻ tấn công làm giả client, thâm nhập vào server

Session Hijacking cũng được phân loại thành TCP Session Hijacking, UDP Session Hijacking, Web Session Hijacking

### Backdoor
Tấn công Backdoor ta có thể hiểu theo nghĩa đen là "cửa sau", "cửa phụ", trong giới security thì có thể hiểu là việc thâm nhập vào hệ thống máy tính một cách bất hợp pháp.

Về phân loại thì cũng có nhiều kiểu tấn công backdoor, cũng có kiểu là kẻ tấn công bằng cách nào đó tự tạo ra cửa xâm nhập vào hệ thống, cũng có kiểu là kẻ tấn công lợi dụng những lỗ hổng đã có của chương trình được tạo ra. 

### Rootkit attack
Rootkit là kiểu tấn công mà về cách thức và mục đích cũng tương tự như việc gửi malware đến đối tượng bị tấn công, nhưng khác ở điểm là malware ở đây được đi thành từng bộ (kit). 

Rootkit nguy hiểm ở chỗ là bộ malware này khi được thực thi có thể thực hiện những hành vi sau :

+ Dấu đi log kẻ tấn công đã xâm nhập vào hệ thống
+ Tạo ra backdoor cho phép kẻ tấn công xâm nhập lại lần nữa
+ Tạo ra các command làm giả hay che dấu việc hệ thống đã bị xâm nhập.


## Loại tấn công nhắm đến password
### Brute force attack
Brute force attack là kiểu tấn công mà kẻ tấn công sẽ thử xâm nhập account của người dùng thông qua việc thử nhập toàn bộ các password có thể.

Ví dụ giả sử kẻ tấn công biết password của đối tượng có 6 ký tự, kẻ tấn công sẽ thử tất cả các mẫu có 6 ký tự có thể, từ aaaaaa, aaaaab,... đến zzzzzz

Ngày nay nếu thử thủ công thì sẽ khá mất thời gian, nên hacker thường dùng các tool tự động thử password với thời gian chạy không giới hạn.

### Password list attack
Password list là kiểu tấn công mà trước đó kẻ tấn công đã biết password của đối tượng ở 1 hệ thống khác, và hắn sẽ thử password đó vào hệ thống đang nhắm đến.

Ngày nay thường user có xu hướng sử dụng chung một password cho chung tất cả các service mà mình dùng, hacker lợi dụng điểm đó để khi đã biết password ở một service sẽ dùng nó để xâm nhập vào account user ở các service khác, mà với mục đích cuối cùng là ăn cắp thông tin cá nhân cũng như trục lợi bất chính.

Gọi là password list bởi giống như hacker đã có 1 list các password có thể có của người dùng, hắn chỉ việc thử 1 trong list đó với service của user đang dùng nhắm đến.



