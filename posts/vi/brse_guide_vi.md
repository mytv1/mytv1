---
layout: markdown
title: BrSE Guidelines
---

<h1>BrSE Guidelines </h1>

* Do not remove this line (it will not be displayed)
{:toc}

# 1.Khởi đầu
## 1.1. Lời nói đầu
Hiện nay Outsourcing hay Offshore là một công việc đóng góp rất nhiều vào phát triển kinh tế và giao lưu văn hoá của Việt Nam và Nhật Bản.

Đóng góp một vai trò quan trọng trong đó là vai trò của BrSE, đối với các bạn mới bắt đầu vào công việc BrSE có thể sẽ cần nhiều tài liệu để hiểu về công việc này, mình xin đóng góp một phần trong số tài liệu đó.

Vậy hi vọng tài liệu này sẽ có ích cho công việc của các bạn.

Vậy mình xin bắt đầu!

Trước khi đi vào nói về về vai trò BrSE, mình xin giải thích trước một số khái niệm liên quan trong một dự án Outsource IT, đây cũng là tiền đề để ta nắm rõ hơn nội dung các phần sau.

## 1.2. Một số khái niệm liên quan
### 1.2.1. Project Offshore là gì?
Offshore là khái niệm đặc trưng cho thị trường Nhật Bản, nói đến việc thực hiện project nhưng với một phần nhân lực nằm ở nước ngoài.

Nước ngoài ở đây nhiều phần là Ấn Độ, Trung Quốc hoặc Việt Nam.

Bài viết của mình chỉ đề cập với ngữ cảnh nội dung project là về IT và thị trường là Việt Nam.

#### Thành phần tham gia

1. Khách hàng
2. Nhân viên kinh doanh（Sale）
3. Quản lý dự án（PM）
4. Kỹ sư cầu nối（BrSE）
5. Phiên dịch viên（Comtor）
6. Lập trình viên（PE）
7. Nhân viên kiểm thử（Tester)

### 1.2.2. Phạm vi dự án
Mình định nghĩa phạm vi dự án theo số lượng thành viên công ty offshore tham gia như sau :

+ Nhỏ： 1-3
+ Vừa： 4-10
+ Lớn： >10

\* Không bao gồm người bên phía khách hàng

**Chú ý**

+ Vai trò của từng thành viên tham gia dự án có thể thay đổi theo quy mô của dự án.
  + Ví dụ BrSE trong project nhỏ thì thường kiêm nhiệm cả PM.
+ Đối với mình thì trước giờ chỉ đảm nhiệm project nhỏ và vừa.
+ Trong tài liệu này nếu không có chú thích gì thêm thì mặc định áp dụng chỉ với proẹct nhỏ và vừa (Project lớn có thể khác)

### 1.2.3. Process phát triển
Trong tài liệu này mình chỉ xét với Process Water Flow, các process khác như Align, Scrum thì không nói đến nhưng hi vọng các bạn có thể tham khảo để áp dụng.

## 1.3. Vai trò từng thành viên tham gia dự án
### 1.3.1. Khách hàng
Khách hàng là đối tác, tác nhân trả tiền cho công ty Outsource để thực hiện project.

**Vai trò đảm nhiệm**

1. Trả tiền
  + Nói đến vai trò trả tiền ở đây không phải có ý là ta quan tâm đến tiền là chính, mà là vì khách hàng là người trả tiền/khoản tiền đó cũng rất quan trọng với khách hàng nên ta cần phải biết trân trọng điều đó mà cố gắng hoàn thành công việc cho tốt.
2. Giới thiệu về dự án（Ban đầu）
3. Xử lý phần công việc giai đoạn đầu （上流工程）
  + Phân tích yêu cầu
  + Thiết kế hệ thống / Thiết kế cơ bản
  + Thiết kế ngoài / Thiết kế giao diện

**Chú ý**
+ Phạm vi công việc đảm nhiệm có thể khác nhau theo từng dự án, tuy nhiên thường các công ty Outsource thường đảm nhiệm công việc giai đoạn sau （下流工程）, khách hàng Nhật thường đảm nhiệm công việc giai đoạn đầu.

### 1.3.2. Nhân viên kinh doanh（Sale）
**Vai trò đảm nhiệm**

Nhân viên kinh doanh đảm nhiệm việc trao đổi, xác nhận với khách hàng các
thông tin dưới

1. Phạm vi Project, khái quát Project
2. Cách thức thanh toán, chi tiết thanh toán
3. Thêm giảm nhân sự
4. Thành lập hợp đồng giữa 2 bên
5. Theo dõi tiến độ thực hiện dự án

### 1.3.3. Quản lý dự án（PM）

PM là viết tắt của Project Manager, người thực hiện quản lý dự án

**Vai trò đảm nhiệm**

1. Quản lý phạm vi (scope)
  + Nắm được mong muốn của khách hàng, phạm vi công việc cần thực hiện

2. Quản lý thời gian (time)
  + Quản lý việc tạo lập kế hoạch thực hiện, ước lượng thực hiện

3. Quản lý chi phí (cost)
  + Trong phạm vi chi phí đã xác nhận với khách hàng mà điều chỉnh nhân sự, nguồn lực cho hợp lý

4. Quản lý chất lượng (Quantity)
  + Quản lý và thực hiện việc thực hiện sản phẩm theo đúng mong muốn về chất lượng của khách hàng.

5. Quản lý nhân sự
  + Quản lý, vận hành, đảm bảo nhân lực thực hiện được project

**Chú ý**
+ Theo PMBOK thì lĩnh vực công việc của PM rất nhiều, ở trên chỉ là 1 phần trong đó

+ Với project vừa và nhỏ thì vai trò PM bị thay đổi theo dự án nhiều.

### 1.3.4. BrSE（Bridge System Engineer)

Người đảm nhiệm việc giải thích cho người phát triển ở phía Việt Nam nội dung dự án về mặt kỹ thuật.

**Vai trò đảm nhiệm**

1. Giải thích về nội dung task, yêu cầu, mong muốn của khách hàng
2. Để hoàn thành được task, yêu cầu khách hàng mong muốn, giải thích cụ thể các vấn đề liên quan
+ Cấu trúc, cấu thành, hoạt động các module trong hệ thống
+ Nghiệp vụ

3. Trao đổi với khách hàng

\* Trong các dự án vừa và nhỏ, BrSE thường kiêm cả PM

### 1.3.5. PE（Người phát triển）
**Vai trò đảm nhiệm**

Người đảm nhiệm thực hiện task theo từng công đoạn

+ Thiết kế chi tiết / Thiết kế trong
+ Coding
+ Test đơn

\* Phạm vi đảm nhiệm cũng có khác theo từng project

**Chú ý**
+ Người phát triển chủ yếu làm việc ở Việt Nam.
+ Trong tài liệu này không nói đến người phát triển làm việc tại Nhật.

### 1.3.6. Comtor（Communicator）
**Vai trò đảm nhiệm**

+ Trường hợp không có BrSE： Vai trò tương tự BrSE
+ Trường hợp có BrSE： Thảo luận với BrSE để phân chia công việc

**Chú ý**
+ Thông thường thì Comtor thường không am hiểu về kỹ thuật
+ Ngược lại có khi Comtor am hiểu về văn hoá, nắm được nội dung task hơn BrSE

### 1.3.7. Nhân viên kiểm thử（Tester)
**Vai trò đảm nhiệm**

+ Tạo tài liệu kiểm thử, thực hiện kiểm thử nghiệp vụ hệ thống trên các thành phần đã được đội phát triển hoàn thành.
+ Xác nhận xem hoạt động thực tế có giống với mô tả nghiệp vụ không, có vấn đề gì không

**Thêm**

+ Chủ yếu làm việc tại Việt Nam, đôi khi có làm việc ngắn hạn với khách hàng tại Nhật Bản

## 1.4. Thể chế
**Thể chế phổ biến**

![オフショア体制](/mytv1/assets/images/offshore-organization-vi.jpg)

**Chú ý**
+ Thông thường khách hàng Nhật làm việc tại Nhật Bản, đội offshore tại Việt Nam.

+ Số lượng các thành viên trong ảnh chỉ mang tính minh hoạ.


# 2. Vai trò BrSE
## 2.1. Khái lược vai trò BrSE
### 2.1.1. Mong muốn vai trò từ công ty chủ quản
(Dưới đây là mình suy đoán từ kinh nghiệm cá nhân cũng như cảm nhận từ bạn bè)

+ Là người trung gian giao tiếp giữa khách hàng và đội offshore
+ Thường xuyên báo cáo để khách hàng nắm được tiến độ đội offshore
+ Giải thích đề đội offshore nắm được yêu cầu phát triển của khách hàng, không có vướng mắc gì.
+ Bàn bạc với các 2 bên, điều chỉnh hợp lý để công việc trôi chảy

### 2.1.2. Vai trò đối với khách hàng
+ Nắm được yêu cầu dự án, truyền đạt đến đội offshore
  + Hiểu rõ nội dung phát triển, thường xuyên trao đổi về từng yêu cầu để có thể truyền đạt đến phía offshore chính xác
  + Nắm được và truyền đạt cả những thay đổi yêu cầu
+ Nắm được hoạt động của hệ thống cũ
  + Để đội phát triển của thể phát triển hệ thống mới tích hợp được vào hệ thống cũ
+ Thường xuyên báo cáo, nắm được tình trạng project
  + Tiến độ, trạng thái các task, vấn đề các task

### 2.1.3. Vai trò đối với đội Offshore
+ Nắm được yêu cầu dự án, truyền đạt đến đội offshore
  + Giống 2.1.2
+ Nắm được hoạt động của hệ thống cũ
  + Giống 2.1.2
+ Truyền đạt, bàn bạc đến khách hàng khó khăn của đội phát triển
  + Ví dụ như các vấn đề khúc mắc về kỹ thuật khó giải quyết, hay những vấn đề khác nằm ngoài dự tính của khách hàng.

### 2.1.4. Vai trò đối với nhân viên kinh doanh
+ Chia sẻ thông tin
  + Thông thường thì nhân viên kinh doanh chỉ trao đổi với PM là đủ, tuy nhiên tuỳ trường hợp mà cần thiết nghe thông tin từ BrSE. Thường là các xác nhận về tiến độ, schedule
  + Nhân viên kinh doanh thường hỏi các vấn đề như có/không gia hạn hợp đồng, biến động nhân sự, có khả năng có hợp đồng mới không v.v.. tức là không phải là vấn đề về mặt kỹ thuật. Vậy nên cần chú ý trả lời theo quan điểm kinh doanh.

### 2.1.5. Vai trò tuỳ cơ ứng biến（Tuỳ theo project）
+ Vai trò PM
  + Với project nhỏ thì thường công việc PM không nhiều như các project vừa hay lớn, ngoài ra thì khi PM và BrSE là một thì phía khách hàng trao đổi thông tin thuận tiện hơn, nên khi đó BrSE đảm nhiệm luôn cả vai trò PM.
  + Trường hợp này thì có thể nói là BrSE kiêm nhiệm PM hay là PM kiêm nhiệm BrSE thế nào cũng đúng.
+ Vai trò SE
  + Với project nhỏ thì đôi khi công việc BrSE ít mà công việc SE lại nhiều, hoặc là hoàn cảnh project cần ưu tiên task mà khi đó thì BrSE ưu tiên thực hiện công việc với vai trò là SE.

## 2.2. Cụ thể vai trò theo từng công đoạn phát triển
### 2.2.1. Chung cho tất cả công đoạn
#### 2.2.1.1. Đánh giá cá nhân về khả năng thực hiện task
Trong tất cả các giai đoạn phát triển phần mềm thì một trong những câu hỏi dành cho BrSE từ khách hàng nhiều nhất đó là yêu cầu này/task này có thể thực hiện được không.

Với câu hỏi/xác nhận như vậy thì vốn dĩ ta cần phải xác nhận với đội offshore - người sẽ thực hiện task đó thì mới chắc chắn tính khả thi được. Tuy nhiên nếu lúc nào cũng phải xác nhận như vậy thì sẽ khá mất thời gian, nên BrSE cần có năng lực tự trả lời được theo đánh giá cá nhân.

Khác với việc là "xác nhận với phía offshore rồi mới trả lời" thì đây là yêu cầu cần trả lời khách hàng ngay.

**Chú ý**
+ Trong những trường hợp như vậy thì cần chỉ rõ đó là đánh giá cá nhân, nếu cần đánh giá chắc chắn hơn thì cần chờ xác nhận với đội offshore

#### 2.2.1.2. Hỗ trợ khách hàng hoàn thiện định nghĩa yêu cầu/tài liệu
Để định nghĩa được yêu cầu cũng như tạo tài liệu yêu cầu nghiệp vụ thì không phải là ta cứ viết nguyên yêu cầu gốc rễ vào là được, mà là từ yêu cầu gốc rễ đó thì để thực hiện được có nhiều phương án, ta cần chọn ra phương án được cho làm hợp lý nhất.

Mà để đánh giá được yêu cầu đó có hợp lý hay không thì một yếu tố để đánh giá đó là khả năng hiện thực hoá, mà khả năng hiện thực hoá này một phần phụ thuộc vào công ty Outsource.

Tức là nếu BrSE có cơ hội tham gia vào giai đoạn định nghĩa yêu cầu hoặc tạo tài liệu thì nhất thiết nên tư vấn được cho khách hàng khả năng đội offshore có thực hiện được yêu cầu đó không.

Nếu không được như vậy thì sau giai đoạn định nghĩa yêu cầu, bước vào giai đoạn phát triển có thể phát hiện thấy yêu cầu không thể thực hiện được, phải làm lại yêu cầu đó là việc dễ xảy ra.

**Chú ý**
+ Với khách hàng không có chuyên môn về IT thì cần hỗ trợ khách hàng nhiệt tình nhất có thể

+ Tuỳ trường hợp mà có thể bàn với đội nhà rồi mới trả lời khách hàng.

#### 2.2.1.3. Cổng thông tin trao đổi giữa các bên（Vai trò chính）
+ Nhiệm vụ cơ bản là truyền đạt yêu cầu từ khách hàng đến đội offshore và ngược lại truyền đạt thắc mắc, câu hỏi, khó khăn từ đội offshore đến khách hàng

**Chú ý**
+ <b>Nhất thiết cần note lại nội dung trao đổi giữa các bên</b>
  + Thực tế những vấn đề phát sinh từ việc không note lại nội dung đã xác nhận rất nhiều, ví dụ như đội offshore implement những tính năng không cần thiết theo nghiệp vụ, hay sai với nghiệp vụ.
  + Nhờ vào việc note lại nội dung đã trao đổi mà sau này còn có thể xem, chỉnh sửa lại

#### 2.2.1.4. Tạo tài liệu giải thích cho đội offshore
Thông thường thì BrSE chỉ cần dịch lại tài liệu phía khách hàng đã tạo là đội offshore có thể nắm được yêu cầu, tuy nhiên trong một số trường hợp thì như vậy vẫn chưa đủ.

Với những yêu cầu có liên quan đến văn hoá, tập quán, thường thức của xã hội Nhật Bản, thì ngoài bản thân yêu cầu ta có thể cần dịch và truyền đạt cả những thông tin trên.

**Ví dụ tài liệu giải thích**

+ Khái quát về công ty khách hàng
+ Hệ thống siêu thị, cửa hàng, quán ăn ở Nhật Bản
+ Hệ thống tàu điện ở Nhật
+ Lịch sử phát triển project, project đã được phát triển, vận hành từ khi nào, qua những giai đoạn thế nào

**Chú ý**
+ Trường hợp cần xác nhận từ khách hàng thì thực hiện xác nhận trước
+ Cần xem xét độ cần thiết các mục cần truyền đạt trên chính sách bảo mật thông tin của khách hàng

#### 2.2.1.5. Giải thích cho khách hàng flow làm việc của công ty mình
Phía khách hàng quan tâm không chỉ là về input, output mà bao gồm cả trình tự làm việc, nội dung chi tiết các công đoạn nhỏ.

**Ví dụ：**
+ Flow làm việc nội bộ công ty : ai coding, ai review code, ai dịch, ai đánh giá cuối
+ Những kinh nghiệm làm dự án có nội dung tương tự phía offshore, khi đó phía offshore đã biết làm những gì, chưa biết làm những gì

\* Có thể hỏi thông tin trên qua chính đội offshore, hoặc PM của team.

#### 2.2.1.6. Thiết lập cuộc họp giữa 3 bên
(3 bên ở đây bao gồm : BrSE - Khách hàng - Đội Offshore)

Trong công việc đôi khi phát sinh những vấn đề, những bug mà thời gian dài vẫn chưa giải quyết được, hay việc thay đổi yêu cầu quan trọng, khi đó thì chỉ đơn thuần xác nhận 2 bên (Khách hàng - BrSE hay BrSE - Đội Offshore) đôi khi là chưa đầy đủ thông tin.

Trong trường hợp như vậy thì cần thiết họp 3 bên, BrSE là người xác nhận lịch của khách hàng và đội offshore để tổ chức.

#### 2.2.1.7. Thực hiện task của vai trò khác (PM, PE, Comtor)
Vai trò chính của BrSE là đầu mối thông tin giữa khách hàng và đội Offshore, tuy nhiên khi đã thực hiện xong vai trò này thì cũng cần hỗ trợ các thành viên ở các vai trò khác.

Cụ thể task phụ thuộc vào tình hình dự án cũng như phán đoán của PM khi đó.

Thông thường BrSE chính là người xuất thân từ hoặc là PE hoặc là từ Comtor, nên các task của SE (Implement) hay Comtor (Translate) cơ bản là BrSE có thể thực hiện được. Đôi khi BrSE đảm nhiệm cả task của PM.

Trên đây mình đã trình bày vai trò của BrSE chung cho tất cả công đoạn của dự án, tiếp theo mình sẽ trình bày vai trò riêng theo từng công đoạn.

#### 2.2.1.8. Nắm được thể chế và vai trò từng thành viên trong thể chế
Trong thể chế ở phần 1.4, ta đã nói đến một ví dụ đơn giản là BrSE chỉ giao tiếp với 1 bên khách hàng :
+ a. Công ty Outsource (BrSE) <---> Khách hàng A

Trong thực tế thể chế có thể phức tạp hơn nhiều ví dụ như :

+ b. Công ty Outsource (BrSE) <---> Đối tác B (của A)  <--->  Khách hàng A <---> End User
+ c. Công ty Outsource (BrSE) <---> Đối tác B' (của A)  <---> Đối tác B (của A) <--->  Khách hàng A <---> End User

Một dự án trong thực tế nếu ở quy mô lớn thì thường bên trả tiền (Stack Holder - A) họ sẽ thuê 1 hoặc 2 nhà thầu chính (B), các nhà thầu chính sẽ dựa vào kinh phí được trả từ Stack Holder để trả cho các nhà thầu phụ (B'). Các công ty Outsource trong thể chế này tuỳ thuộc vào năng lực mà có thể là B hoặc B' hoặc B'' ... 

Những dự án có thể chế như vậy thì thể chế giao tiếp cũng phức tạp hơn, BrSE thông thường chỉ cần giao tiếp với bên thuê mình là được, nhưng đôi khi cũng có trao đổi với cả bên thuê bên thuê mình, thậm chí cả với End User.

Tuỳ thuộc vào tính chất dự án mà độ khó cho BrSE sẽ thay đổi, tuy nhiên điều quan trọng ở đây là BrSE cần nắm được thể chế để biết được trách nhiệm từng bên cụ thể là gì, cũng như vai trò của mình với bên đó như thế nào.

**Ví dụ**

Giả sử ta đang làm việc với thể chế c (ở trên), BrSE được cho phép trao đổi với cả B', B, A và End User.

Một thời điểm trong dự án, trong giao đổi giữa 5 bên thì End User đưa ra một yêu cầu công việc thuộc phạm vi của công ty Outsource.

Trường hợp đó BrSE có thể mắc sai lầm là nhận luôn yêu cầu đó để bàn giao cho team thực hiện.

Với trường hợp này thì ta cần hiểu rằng tuy End User đóng vai trò rất quan trọng trong dự án, tuy nhiên bên trả tiền cho công ty Outsource - cũng như bên mà công ty Outsource có trách nhiệm duy nhất là B', bất kỳ yêu cầu nào được đưa vào thực hiện đều phải có sự xác nhận của B'.

Nói cách khác, theo mình thì trường hợp này BrSE cần xác nhận với B' là yêu cầu của End User có cần thiết đưa vào thực hiện không, nếu B' đồng ý thì ta sẽ bàn giao tiếp cho team offshore thực hiện.

Tức là BrSE cần nắm rõ thể chế và bên mà mình có trách nhiệm để đưa ra quyết định hợp lý.

### 2.2.2. Định nghĩa yêu cầu（Khách hàng）
Trong giai đoạn định nghĩa yêu cầu, khách hàng là người thực hiện tạo tài liệu yêu cầu, khi đó phía khách hàng sẽ hỏi BrSE về việc những yêu cầu này phía offshore có thể thực hiện được không

Ví dụ：
+ Tính năng này đội Offshore có thể thực hiện được không?
+ Tính năng này nếu thực hiện thì mất khoảng bao nhiêu thời gian, cần bao nhiêu nhân lực?

Những lúc thế này thì thường BrSE sẽ xác nhận với đội Offshore trước rồi trả lời lại khách hàng.

### 2.2.3. Thiết kế cơ bản/hệ thống（Khách hàng／Công ty offshore）
+ Tạo tài liệu thiết kế cơ bản
  + Đây là task của PE, trao đổi với PM trước khi thực hiện
+ Review tài liệu thiết kế cơ bản
+ Dịch tài liệu thiết kế cơ bản
  + Đây là task của Comtor, trao đổi với PM trước khi thực hiện
+ Tạo kế hoạch test
  + Đây là task của Tester, trao đổi với PM trước khi thực hiện
+ Review kế hoạch test
+ Dịch kế hoạch test
  + Đây là task của Comtor, trao đổi với PM trước khi thực hiện

### 2.2.4. Thiết kế chi tiết（Công ty offshore）
+ Tạo tài liệu thiết kế chi tiết
  + Đây là task của PE, trao đổi với PM trước khi thực hiện
+ Review tài liệu thiết kế chi tiết
  + Đây là task của PE, trao đổi với PM trước khi thực hiện
+ Dịch tài liệu thiết kế chi tiết
  + Đây là task của Comtor, trao đổi với PM trước khi thực hiện

### 2.2.5. Implement（Công ty offshore）
+ Programing
  + Đây là task của PE, trao đổi với PM trước khi thực hiện

\* BrSE xuất thân từ SE thường có xu hướng ưu tiên các task SE hơn task BrSE, BrSE cần chú ý thực hiện công việc của mình, ưu tiên công việc toàn thể hơn.

+ Review code
  + Đây là task của PE, trao đổi với PM trước khi thực hiện

### 2.2.6. Test đơn（Công ty offshore）
+ Tạo tài liệu test đơn
  + こちらはTesterのタスク。タスクの担当はPMの作業分担支持に従う。
  + Đây là task của PE, trao đổi với PM trước khi thực hiện
+ Review tài liệu test đơn
+ Dịch tài liệu test đơn
  + Đây là task của Comtor, trao đổi với PM trước khi thực hiện
+ Thực hiện test đơn
  + Đây là task của Tester, trao đổi với PM trước khi thực hiện
+ Review kết quả test đơn
+ Dịch tài liệu test đơn
  + Đây là task của Comtor, trao đổi với PM trước khi thực hiện

### 2.2.7. Test tích hợp（Khách hàng／Công ty offshore）
+ Tạo tài liệu test tích hợp
  + Đây là task của Tester, trao đổi với PM trước khi thực hiện
+ Review tài liệu test tích hợp
+ Dịch tài liệu test tích hợp
  + Đây là task của Comtor, trao đổi với PM trước khi thực hiện
+ Thực hiện test tích hợp
  + Đây là task của Tester, trao đổi với PM trước khi thực hiện
+ Review kết quả test tích hợp
+ Dịch kết quả test tích hợp
  + Đây là task của Comtor, trao đổi với PM trước khi thực hiện

### 2.2.8. Tiếp nhận sản phẩm（Khách hàng／Công ty offshore）
+ Tạo tài liệu test tiếp nhận sản phẩm
+ Thực hiện test tiếp nhận
  + Đây là task của PM, trao đổi với PM trước khi thực hiện
+ Dịch kết quả test tiếp nhận
  + Đây là task của Comtor, trao đổi với PM trước khi thực hiện

# 3. Kỹ năng BrSE
## 3.1. Communication
### 3.1.1. Đối tượng
#### 3.1.1.1. Với khách hàng
BrSE cần lý giải được vấn đề mà khách hàng truyền đạt.

BrSE cần truyền đạt được đến khách hàng ý kiến, đánh giá từ phía team offshore.

**Vấn đề hay gặp**
+ **Không hiểu được vấn đề khách hàng truyền đạt (Vấn đề quan trọng)**
+ Chỉ truyền đạt ý kiến bản thân mình, không truyền đạt ý kiến của team offshore
+ Chỉ trao đổi được bằng text với khách hàng, không thể trao đổi qua lời nói.

#### 3.1.1.2. Với PM
BrSE cần hiểu được tình trạng hiện tại của team từ truyền đạt của PM.

Truyền đạt đến khách hàng ý kiến, mong muốn của PM cũng như đại diện team offshore

**Vấn đề hay gặp**
+ Khi giao tiếp BrSE chỉ chú ý đến task của mình, không chú ý đến task của member khác
+ Khi giao tiếp BrSE chỉ chú ý đến task của mình, không chú ý đến tiến độ toàn thể

#### 3.1.1.3. Với nhân viên kinh doanh
BrSE cần truyền đạt được trạng thái hiện tại của project cũng như các vấn đề về mặt hợp đồng

#### 3.1.1.4. Với người phát triển

BrSE cần truyền đạt được các vấn đề, giải thích được cụ thể về mặt kỹ thuật

**Vấn đề hay gặp**
+ Vấn đề kỹ thuật liên quan bản thân cũng không hiểu được, dẫn đến giải quyết vấn đề cũng bị chậm lại

### 3.1.2. Ngôn ngữ
#### 3.1.2.1. Tiếng Nhật

+ Tiếng Nhật là ngôn ngữ sử dụng khi giao tiếp với khách hàng
+ Đội phát triển cơ bản không hiểu cũng như không xác nhận được
  + --> Do đó cần dịch sang tiếng Việt hoàn chỉnh, tránh đề team phải dùng google translate

#### 3.1.2.2. Tiếng Việt

+ Tiếng Việt là ngôn ngữ sử dụng khi giao tiếp với team Offshore
+ Khách hàng không hiểu cũng như không xác nhận được.

### 3.1.3. Phương thức
#### 3.1.3.1. Nhập liệu (text)
**Lợi điểm**
+ Sau này có thể nhìn lại xác nhận lại, đánh giá lại được
+ Trao đổi theo một dòng, nhiều người có thể tham gia trao đổi được.

**Nhược điểm**
+ Tốn thời gian gõ
+ Cần năng lực diễn đạt qua văn chương

#### 3.1.3.2. Voice/Video
**Lợi điểm**
+ Trao đổi thông tin nhanh
+ Thông qua sắc mặt, giọng nói có thể nắm được cảm xúc, thái độ của đối phương

**Nhược điểm**
+ Sau này không kiểm chứng lại được nội dung đã trao đổi (Vậy nên cần note lại nội dung họp)

### 3.1.4. Nội dung
#### 3.1.4.1. Truyền đạt được cả ý nghĩa nội hàm
BrSE cần chú ý nội dung cần truyền đạt không chỉ là nội dung người muốn truyền đạt nêu, mà còn bao gồm nội dung người nhận truyền đạt cần phải biết.

Nếu truyền đạt về spec về hệ thống thì ta không chỉ cần nêu spec là gì, mà còn cần giải thích cho developer hiểu vì sao spec như vậy, có mục đích gì.

Ví dụ, giả sử ta cần truyền đạt thiết kế bảng như sau đến developer:

Table 1 : company

```
CREATE TABLE company {
  id int primary key auto increment
}
```

Table 2 : employee

```
CREATE TABLE employee {
  id int primary key auto increment
  company_id int
}
```

Đây là một ví dụ đơn giản, 2 bảng thể hiện cho 2 model công ty và nhân viên, mỗi nhân viên đều thuộc một công ty.

Nhìn vào thiết kế này ta thấy có một điểm đó là hiện tại `employee`.`company_id` không có ràng buộc khoá ngoài đến `company.id`.

Nếu ta chỉ truyền đạt đơn thuần ý nghĩa 2 bảng này đến developer, developer sẽ thắc mắc vì sao không có khoá ngoài, nguyên nhân có thể như sau :

+ khách hàng quên đặt khoá ngoài
+ thiết kế không đặt khoá ngoài là có mục đích riêng

Ví dụ trong trường hợp này, trước khi developer đặt câu hỏi, BrSE cần phải truyền đạt rằng bảng `employee` được batch import từ hệ thống khác, có trường hợp tồn tại `company_id` không có sẵn trong `company` nếu đặt khoá khoá chính thì sẽ không import được chẳng hạn.

Tức là BrSE nên hiểu được không chỉ là nội dung spec, mà còn cả ý nghĩa của spec, và truyền đạt được cả hai đến developer.

#### 3.1.4.2. Truyền đạt cần rõ ràng, tránh gây nhầm lẫn
Trong IT có rất nhiều thuật ngữ hay cách nói dễ gây nhầm lẫn, chưa kể dự án càng phức tạp thì khả năng nhầm này càng tăng lên. Để developer hiểu được chính xác vấn đề thì BrSE cần truyền đạt cũng phải chính xác.

Giả sử khách hàng nói "Trang quản lý đang có bug ấn nút gửi bị lỗi".

Trong bối cảnh trang web có 2 trang là `/admin` - trang quản trị hệ thống và `/manage` - trang quản lý cho hội viên thì khái niệm "quản lý" này rất dễ gây nhầm.

Trong trường hợp trên BrSE cần truyền đạt đến developer là "Trang quản trị hệ thống `/admin` đang có bug ấn nút gửi ở vị trí XYZ bị lỗi. Nội dung lỗi là ABC" mới đầy đủ.

## 3.2. Tiếng Nhật
### 3.2.1. Tiếng nhật giao tiếp thường ngày
Khi giao tiếp với khách hàng thì tiếng nhật thông dụng thường ngày là kỹ năng không thể thiếu.

Kỹ năng giao tiếp tiếng Nhật thường ngày đòi hỏi không chỉ về năng lực ngôn ngữ, mà bao gồm cả cách giao tiếp, cách nói chuyện, cách biểu hiện như người Nhật

**Chú ý**
+ Khi nghe khách hàng giải thích về nghiệp vụ, với khách hàng là người trong giới IT thì nội dung giải thích có thể sẽ dễ hiểu hơn bởi khách hàng dùng nhiều thuật ngữ IT thông dụng. Tuy nhiên với khách hàng chuyên môn nghiệp vụ khác thì họ sẽ giải thích bằng tiếng Nhật giao tiếp thường ngày, nên nếu ta không hiểu được thì sẽ không làm việc được.

**Vấn đề hay gặp**
+ Không hiểu được tiếng Nhật của khách hàng

### 3.2.2. Tiếng Nhật IT
Khách hàng khi giải thích về hệ thống thì sẽ dùng rất nhiều thuật ngữ về IT, nên nếu không hiểu tiếng nhật IT thì cũng không lý giải được.

Độ khó của tiếng Nhật IT cũng phụ thuộc vào ngôn ngữ mà khách hàng sử dụng, về lý thuyết thì họ có thể dùng tiếng Anh hoặc tiếng Nhật, tuy nhiên thực tế thì đa số dùng tiếng Nhật. Nên kể cả BrSE có hiểu được nội dung đó bằng tiếng Anh đi nữa nhưng nếu không thể hiểu bằng từ tiếng Nhật tương ứng thì vẫn không hiểu được.

**Vấn đề hay gặp**
+ Không hiểu tiếng Nhật IT của khách hàng

### 3.2.3. Tôn kính ngữ, khiêm nhường ngữ
Trong môi trường làm việc tại Nhật Bản thì tôn kính ngữ, khiêm nhường ngữ được dùng rất nhiều

Theo mình thấy thì nếu khách hàng là người dễ tính, đối với người nước ngoài nếu thỉnh thoảng dùng từ sai thì cũng có thể ở mức độ nào đó chấp nhận được. Tuy nhiên nếu dùng ngôn ngữ cẩn thận, chính xác thì sẽ được đánh giá cao hơn.

**Vấn đề hay gặp**
+ Khi truyền đạt vấn đề, vốn dĩ ta không có ý định khiếm nhã nhưng bởi cách biểu đạt của từ ngữ đã dùng mà khách hàng có cảm giác mất thiện cảm.

### 3.2.4. Dịch tài liệu
#### 3.2.4.1. Quản lý tài liệu dịch
Dịch tài liệu là một công việc thiết yếu của BrSE. Với project nhỏ, tài liệu ít, không đáng kể thì công việc dịch và quản lý đơn giản hơn, nhưng với project trung vài đại thì việc quản lý thế nào nếu ta cân nhắc thì hiệu suất công việc sẽ tốt hơn.

Theo mình thì quản lý tài liệu vốn dĩ là công việc của PM, nên ta cần ưu tiên ý kiến của PM trước, hoặc nên bàn bạc với PM và các developer để đưa ra phương án tối ưu nhất. Nếu trong project có comtor thì có thể comtor sẽ giúp BrSE dịch tài liệu.

Dưới đây mình xin nêu 2 cách quản lý mà mình đã kinh nghiệm trải qua.

Giả sử ta có một bộ tài liệu như sau:


```
(要件定義書)
機能1
機能2

(設計書)
機能1の設計書
機能2の設計書
```

<div>
  <table class="table">
    <tr>
      <th scope="col">Cách dịch</th>
      <th scope="col">Dịch thuần</th>
      <th scope="col">Dịch tài liệu song ngữ</th>
    </tr>
    <tr>
      <td>Phương hướng</td>
      <td>Dịch thành tài liệu riêng bằng tiếng Việt</td>
      <td>Dịch thành tài liệu nội dung vừa tiếng việt, vừa tiếng nhật</td>
    </tr>
    <tr>
      <td>Ví dụ kết quả sau khi dịch</td>
      <td>
        Định nghĩa yêu cầu (Thư mục)<br>
        Tính năng 1 (Tài liệu)<br>
        Tính năng 2 (Tài liệu)<br>
        Thiết kế (Thư mục)<br>
        Tính năng 1 (Tài liệu)<br>
        Tính năng 2 (Tài liệu)<br>
      </td>
      <td>
        要件定義書_Định nghĩa yêu cầu(Thư mục)<br>
        機能1_Tính năng 1 (Tài liệu)<br>
        機能2_Tính năng 2 (Tài liệu)<br>
        設計書_Thiết kế (Thư mục)<br>
        機能1_Tính năng 1 (Tài liệu)<br>
        機能2_Tính năng 2 (Tài liệu)<br>
      </td>
    </tr>
    <tr>
      <td>Ưu điểm</td>
      <td>+ Developer dễ nhìn, dễ đọc</td>
      <td>+ Dễ đối chiếu tài liệu<br> + Không cần quản lý version</td>
    </tr>
    <tr>
      <td>Khuyết điểm</td>
      <td>+ Khó đối chiếu với tài liệu gốc<br>+ Cần quản lý version</td>
      <td>+ Developer khó đọc</td>
    </tr>
  </table>
</div>

#### 3.2.4.2.Đánh dấu mã tài liệu bằng tiếng Anh
Thứ nhất là BrSE thì ta cần nhận thức cơ bản là developer không biết tiếng Nhật, cũng như không phân biệt được các tài liệu với nhau.

Thứ hai là nếu chỉ dịch đơn thuần Nhật - Việt, thì khi tham chiếu cùng 1 tài liệu ở 2 phiên bản ngôi ngữ thì ta sẽ phải dựa vào ngữ nghĩa của chúng để phân biệt.

Thứ ba là tuỳ ngữ cảnh và kiến thức của người dịch mà kết quả cũng có thể khác nhau, ví dụ cùng là từ 背景 nhưng có người dịch là "bối cảnh", người dịch là "hoàn cảnh". Nếu cùng tồn tại cả 2 tài liệu "bối cảnh" và "hoàn cảnh" thì sẽ khó phân biệt đâu là tài liệu dịch của "背景".

Ta có thể giải quyết ba vấn đề trên bằng việc đánh dấu tài liệu bằng mã tiếng anh, ví dụ :

Tài liệu gốc :

```
RE_要件定義書 (RE = requirement)
RE001_機能1
RE002_機能2
DE_設計書 (DE = design)
DE001_機能1の設計書
DE002_機能2の設計書
```

Tài liệu dịch :

```
RE_Định nghĩa yêu cầu
RE001_Tính năng 1
RE001_Tính năng 2
DE_Tài liệu thiết kế
DE001_Tính năng 1
DE002_Tính năng 2
```

Như ví dụ trên, ta có thể phân biệt các tài liệu bản gốc - bản dịch bằng RE001 hoặc DE002, dù là phiên bản nhật hay việt thì đều chung mã nên rất dễ nhìn.

## 3.3. Teamwork
### 3.3.1. Với khách hàng
#### 3.3.1.1. Làm việc với vai trò là một thành viên trong team phát triển của khách hàng
##### 3.3.1.1.1.1. Không chỉ task của bản thân mình, mà task của khách hàng cũng nắm được.

Trong công việc thì không phải ta hoàn thành phần việc của mình là xong, mà kể cả phần mình xong rồi, phần người khác xong rồi, cả 2 phần có gắn kết được với nhau không cũng là vấn đề quan trọng.

Do vậy nên BrSE không chỉ chú ý đến task của bản thân mình, của đội offshore mà còn cần chú ý đến task liên quan của khách hàng, từ đó đảm bảo rằng tất cả các task gắn kết với nhau, đảm bảo công việc chung được thực hiện.

Trong phạm vi có thể, BrSE nên hỗ trợ khách hàng cũng như đội phát triển của khách hàng thực hiện task.

**Vấn đề hay gặp**
+ BrSE chỉ chú đến task của bản thân và đội offshore, không quan tâm đến task của khách hàng

##### 3.3.1.1.1.2. Làm việc với vai trò không chỉ là nhân viên công ty Offshore, mà cả với vai trò là một thành viên phát triển của khách hàng

Vốn dĩ BrSE là nhân viên của công ty Offshore, nên chỉ hiểu vấn đề trên quan điểm của công ty Offshore thì cũng không sai. Tuy nhiên để hiểu thấu được công việc thì mình nghĩ cần hiểu được quan điểm của khách hàng.

Cùng là một vấn đề, tuy nhiên nếu thay đổi quan điểm từ công ty Offshore sang quan điểm của khách hàng thì nguyên nhân cũng như cách giải quyết vấn đề cũng có khi thay đổi. Trên quan điểm của công ty Offshore thì vấn đề đã được giải quyết rồi, nhưng với khách hàng thì chưa, vấn đề vẫn còn đang nan giải, những tình huống như vậy thực tế rất nhiều.

Do vậy nên để giải quyết triệt để vấn đề, BrSE nên có khả năng nhìn nhận trên quan điểm của cả khách hàng.

#### 3.3.1.2. Làm việc với vai trò là đối tác của khách hàng
BrSE cần giải thích cho khách hàng hiểu những cái mà phía offshore làm được/không làm được, từ đó mà điều chỉnh, phân phối thực hiện task cho hợp lý.

**Vấn đề hay gặp**
+ BrSE không nắm được tình hình phía offshore, tiếp nhận cả những task khó mà phía offshore khó thực hiện.

### 3.3.2. Với team offshore
#### 3.3.2.1. Ưu tiên lợi ích chung và team Offshore

BrSE không được chỉ chăm chăm vào task của mình mà không để ý để toàn thể task, task của các member offshore khác.

\* Với những BrSE xuất thân thì SE thì hay có xu hướng là hay tập trung quá độ vào task SE mà không để ý đến toàn thể task. BrSE cần lưu ý đến lợi ích của toàn thể dự án mà có phân phối độ ưu tiên cho phù hợp.

**Vấn đề hay gặp**
+ BrSE tập trung quá độ vào task SE, sao nhãng tiến độ chung toàn dự án.

#### 3.3.2.2. Không chỉ nội dung từng task đơn lẻ mà còn nắm được sự gắn kết của các task, toàn thể
BrSE cần không chỉ nắm được nội dung task đơn lẻ, mà phải nắm được ý nghĩa toàn thể của task, mục tiêu cuối cùng của dự án là gì. Hướng đến mục tiêu đó thì các task đơn lẻ hoàn thành xong có thể gắn kết để đạt được mục tiêu đó không, vấn đề đó cũng cần thường xuyên cân nhắc và bàn bạc với team.

\* Thông thường đội offshore hay quá coi trọng nội dung của một task đơn lẻ, đôi khi những task đơn không thực sự liên kết để hướng tới kết quả chung. BrSE cần sớm nhìn nhận và chỉ ra được những điểm đó.

\* Vốn dĩ vai trò này thuộc về phạm trù quản lý task, là công việc của PM hơn là BrSE, tuy nhiên BrSE thường có vai trò hiểu khách hàng hơn, nên đóng góp ý kiến của BrSE nhiều khi rất có ý nghĩa.

**Vấn đề hay gặp**
+ Thành quả phía offshore làm bị mất giá trị.
+ Thành quả phía offshore làm hoàn thiện ở mức độ đơn lẻ, không thực sự đóng góp vào hướng tới mục tiêu chung.

## 3.4. Ghi log cuộc họp
### 3.4.1. Ghi log cuộc họp với khách hàng
Đây là kỹ năng ghi lại nội dung đã nêu trong cuộc họp với khách hàng.

Nội dung họp sau đó gửi lại đến khách hàng.

Tuỳ trường hợp mà cũng gửi đến cho đội offshore.

**Vấn đề hay gặp**
+ Nội dung cuộc họp không được ghi log lại, sau này khi thực hiện bị quên đi
+ Nội dung họp với khách hàng khác với nội dung đã truyền đạt đến team offshore.

### 3.4.2. Ghi log cuộc họp với team offshore
Đây là kỹ năng ghi lại nội dung đã nêu trong cuộc họp với team offshore.
Nội dung sau đó gửi lại đến team offshore.

Tuỳ trường hợp mà cũng gửi đến cho khách hàng.

**Vấn đề hay gặp**
+ Nội dung cuộc họp không được ghi log lại, sau này khi thực hiện bị quên đi
+ Nội dung đã nói trong cuộc họp không được ghi log lại, sau này khi thực hiện thì nhận thức khác với khi đã họp

## 3.5. Kỹ năng SE
Nói đến kỹ năng SE thì phạm vi rất rộng, nhưng ở đây mình chỉ liệt kê ra những kỹ năng mình có để ý đến khi làm BrSE

### 3.5.1. Hiểu về quy trình phát triển phần mềm
BrSE cần hiểu về quy trình phát triển một phần mềm, để từ đó biết được hiện tại dự án đang ở giai đoạn nào, giai đoạn hiện tại cần output nào của giai đoạn trước, cũng như output gì đến giai đoạn sau.

Khi dự án mới khởi động, nếu BrSE không biết nhiều về quy trình phần mềm thì sẽ khá lúng túng. Việc hiểu quy trình phần mềm sẽ giúp BrSE có tự tin xuyên suốt dự án.

**Vấn đề hay gặp**
+ Giai đoạn hiện tại cần làm gì BrSE cũng không rõ

### 3.5.2. Nắm được framework, ngôn ngữ phát triển
BrSE cần nắm được đặc trưng kỹ thuật dùng để phát triển, từ đó truyền đạt đến offshore member được chính xác.

Tuỳ trường hợp mà BrSE cũng cần tham gia vào phát triển, sửa, khi đó những kiến thức này là không thể thiếu.

**Vấn đề hay gặp**
+ Vấn đề kỹ thuật khách hàng đề cập tới BrSE không hiểu, cũng như không truyền đạt đến member offshore được.

# Kết
Cảm ơn các bạn đã đọc đến đây.

Trong giới offshore hiện tại mình thấy cũng không nhiều tài liệu mô tả về công việc BrSE, nên hi vọng được đóng góp vào sự phát triển của giới offshore.

Mình chỉ chia sẻ được những gì mà mình biết, nhưng hi vọng và có ích cho công việc của các bạn. Đặc biệt là các bạn kỹ sư người Việt có dự định sắp sang Nhật làm BrSE.

Ngoài ra thì mình đã có xem lại nội dung và chỉnh sửa vài lần, tuy nhiên cách viết cũng như nội dung có lẽ vẫn còn rất nhiều thiếu sót, hi vọng các bạn thông cảm.

Mình rất hoan nghênh các đóng góp, comment, góp ý để tài liệu được hoàn thiện cũng như có ích hơn đến mọi người, mọi người xin cứ thoải mái góp ý ạ ^^

Hết

<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v9.0&appId=686440048712187&autoLogAppEvents=1" nonce="nCQ7ohIk"></script>
<div class="fb-comments" data-href="https://www.facebook.com/tran.my.77/posts/3923899980967557" data-width="500" data-numposts="10"></div>