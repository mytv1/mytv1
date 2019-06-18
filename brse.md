---
layout: markdown
title: Chia sẻ kinh nghiệm về BrSE kiêm PM dự án nhỏ outsource với khách hàng Nhật Bản
---
<h1>Chia sẻ kinh nghiệm về BrSE kiêm PM dự án nhỏ outsource với khách hàng Nhật Bản</h1>

* Do not remove this line (it will not be displayed)
{:toc}

Hôm nay mình xin chia sẻ những suy nghĩ cũng như đánh giá của mình về công việc BrSE.

Về lý do viết thì mình làm BrSE cũng tầm 1,2 năm rồi nên cũng muốn viết 1 bài đúc kết kinh nghiệm đã có, một phần cũng muốn chia sẻ đến các bạn nhập môn BrSE hay là các em khoá sau băn khoăn về công việc BrSE, giúp mọi người có thêm thông tin để đánh giá.

Bản thân mình kinh nghiệm cũng không nhiều và cũng nhiều chỗ mình suy đoán thôi nên mọi người cân nhắc chỉ tham khảo thôi ^^

# 0. Lịch sử kinh nghiệm
+ 3.5 năm ở Nhật: 
  2 năm chuyên Web Backend Developer
  1.5 năm BrSE + Developer
+ Ngôn ngữ lập trình: Python, PHP, Ruby ...
+ Framework : Django, Laravel ...
+ Tiếng Nhật : N2 JLPT
+ Quy mô dự án đội phát triển : 2~5 người
+ Chuyên môn : Công nghệ thông tin

Về kinh nghiệm kỹ thuật thì mình có blog nhỏ ở đây : https://kipalog.com/users/TranMy/mypage

Nếu nói BrSE có 2 hướng là chuyên về quản lý và chuyên về kỹ thuật thì chắc mình là chuyên về kỹ thuật.

Các dự án mình làm đều là dự án nhỏ nên đánh giá của mình có thể chỉ có giá trị với dự án nhỏ còn dự án lớn thì mình cũng không chắc.

Về thuật ngữ KH (Khách hàng) mà mình dùng trong bài viết, thì các dự án mình tham gia đều có đội kỹ sư Nhật riêng và giao tiếp của mình chủ yếu với đội kỹ sư của họ chứ không phải là người ra yêu cầu thực sự, do đó KH ở đây ý mình là đội kỹ sư của họ.
Giao tiếp với kỹ sư người Nhật dễ hơn rất nhiều so với giao tiếp với "khách hàng cuối", bởi vì ta có thể dùng thuật ngữ kỹ thuật để truyền đạt ý hiểu được, và cùng là kỹ sư đánh giá được thông tin của nhau dễ hơn, dễ hiểu và tin tưởng nhau hơn.

Đầu tiên thì mình xin định nghĩa vai trò BrSE một cách đơn giản:

# 1. Vai trò của BrSE
Công việc của BrSE là người ở giữa, phiên dịch để đội khách hàng Nhật nắm được tình hình của đội phát triển Việt Nam, và đội Việt Nam hiểu yêu cầu của khách Nhật. 

Về giá trị của BrSE thì hiện tại ở Nhật thì nếu ta nói nhân lực ngành nào cũng cần cũng đúng, nhưng nếu xét số liệu thì mình cảm giác so với tỉ lệ khách Nhật và developer Việt Nam thì BrSE có vẻ vẫn chiếm tỉ lệ nhỏ nên hiếm hơn bình thường.

Về tầm quan trọng của BrSE, ví dụ dự án có 3 khách Nhật, 1 BrSE, 3 Developer Việt:
+ Khách Nhật vai trò là hiểu và đảm bảo spec và thường ở 1 công ty rất nhiều người, nếu 1 người nghỉ thì mình thấy thực tế thay người khác vào làm quen dự án 1 đến vài tháng là được. 
+ Developer nghỉ thì công ty hoặc là thay người khác, hoặc thoả thuận với bên KH giảm scope dự án lại, nói chung là có nhiều cách xoay sở được, có thể đi chậm hơn nhưng vẫn đi được. 
+ Nhưng BrSE nghỉ thì do tỉ lệ ít nên khó thay thế, mà không có ít nhất 1 người thì dự án rất khó chạy.

Nói yếu tố thị trường ở đây tức là nếu thị trường có nhiều BrSE (hoặc là google dịch thực sự đủ tốt) thì dễ thay thế hơn, độ hiếm và mức độ quan trọng sẽ giảm.

Để dễ hình dung vai trò của BrSE thì mình xin so sánh với một vai khá gần với BrSE là Comtor, để ta có thể nhìn tương đối xem BrSE có vai trò khác như thế nào:

# 2. Điểm khác giữa BrSE và Comtor
## 2.1. Lợi thế BrSE
BrSE khác với Comtor ở chỗ BrSE 1 phần cũng là SE, có thể hiểu được các vấn đề kỹ thuật. Điều này có 1 số ý nghĩa sau :

### Giảm chi phí, tăng tính chính xác khi Communication về vấn đề kỹ thuật
Ví dụ khi KH (khách hàng) yêu cầu rằng ta cần thực hiện dự án bằng Javascript. Nếu không phải SE (Software Engineer) thì rất dễ nghe nhầm Javascript với Java là 2 ngôn ngữ lập trình hoàn toàn khác nhau. Từ đó dẫn đến hệ quả là tuyển nhầm cho dự án toàn các developer Java chẳng hạn.

Hoặc ví dụ khi KH yêu cầu ta "sửa lỗi api 500 abc ở trang admin" chẳng hạn. Là SE thì ta biết được khi nói trang admin thường là nói đến trang quản trị đặc biệt có nhiều quyền mà người dùng thường không có, nếu không phải SE thì có khả năng nhầm với "trang quản lý". Với trang web bán hàng, thường có trang quản lý xuất nhập các mặt hàng và giá. Giả sử mà cả 2 trang đều có lỗi này thì có thể rất dễ nhầm giữa 2 trang.

### Giảm chi phí tiền xử lý
Mình lấy ví dụ nếu chỉ đơn thuần dịch thì ta sẽ có flow như sau :
- Khách --> Comtor : Bạn hãy xử lý vấn đề X này cho tôi nhé?
- Comtor --> Khách : Tôi hiểu rồi, tôi sẽ nói với developer
- Comtor --> Developer : Bạn xử lý cho mình vấn đề X này nhé. (OK)
- Developer tìm hiểu 15p
- Developer --> Comtor : Bạn hỏi KH về môi trường xảy ra và tên nhánh, nội dung biến môi trường cho mình nhé?
- Comtor --> Khách : (Hỏi lại như trên)
- Khách --> Comtor : Thông tin là A, B, C nhé.
- Comtor --> Developer : (Truyền đạt lại)
- Developer thực hiện

Lấy trung bình mỗi giai đoạn giao tiếp cần 5p, tổng có 7 giai đoạn, vậy tổng thời gian từ khi có vấn đề đến khi thực hiện = 15 + 5x7 = 50p

Với BrSE thì trong nhiều trường hợp ta có thể cải thiện được thành flow thế này :
- Khách --> BrSE : Bạn hãy xử lý vấn đề X này cho tôi nhé?
- BrSE --> Khách : Tôi hiểu rồi.
- BrSE tìm hiểu 15p
- BrSE --> Khách : Bạn cho mình thông tin môi trường xảy ra và tên nhánh, nội dung biến môi trường cho mình nhé?
- Khách --> BrSE : Thông tin là A, B, C nhé.
- BrSE --> Developer : Nhờ bạn xử lý cho mình vấn đề X, các thông tin liên quan là A,B,C nhé.
- Developer thực hiện

So sánh với flow ở trên thì ta thấy đã cắt được 2 trao đổi, tổng = 15 + 5x5 = 40p, giảm được 10p = 20% thời gian.

Ở đây có 3 điểm đặc biệt làm cho điều này có ý nghĩa đối với dự án nhỏ :
- ~80% các vấn đề kỹ thuật độ sâu thường ở mức tổng quát, BrSE đủ khả năng tự phán đoán được mà không cần hỏi Developer.
- Mặc dù ở trên cắt giảm được chỉ 10p, nhưng tần suất những trao đổi thế này trong project là thường xuyên, nên tính tổng lại là đáng kể.
- Ở trên là cắt giảm được 20%, nhưng nhiều trường hợp còn đạt được tỉ suất cao hơn.

## 2.2. Lợi thế của Comtor
So với BrSE thì mình nghĩ là các bạn Comtor hiểu biết nghiệp vụ và kỹ năng xã hội tốt hơn, nếu khách hàng của dự án không phải là đội kỹ sư người Nhật như mình mà là user Nhật bình thường không hiểu kỹ thuật thì Comtor có lẽ tỏ ra ưu thế hơn.

## 2.3 Kết luận
Comtor hay BrSE hợp với dự án hơn thì có lẽ là tuỳ dự án, và cũng tuỳ theo năng lực của từng cá nhân cụ thể. Mình biết những bạn học kỹ thuật nhưng rất giỏi ngôn ngữ (cả Anh cả Nhật) và hiểu biết xã hội như Comtor, hay các bạn không học kỹ thuật, chỉ học ngôn ngữ ở đại học nhưng vẫn tự học kỹ thuật, làm PM cho dự án v.v... Dự án thực tế cần người giỏi không chỉ 1 kỹ năng, nên mình nghĩ ta không cần quan trọng mình làm vai gì, mà là mình có những năng lực gì, đến đâu và phù hợp với dự án như thế nào.

Tiếp theo mình xin chia sẻ những điều mình thấy cần chú ý khi bắt đầu công việc BrSE

# 3. Những chú ý khi bắt đầu công việc BrSE (với dự án nhỏ và vừa)
## 3.1. Sẵn sàng thay các vai khác trong dự án, nội dung công việc không cố định
Với dự án nhỏ quy mô 3-5 người thì mình thấy BrSE thuờng kiêm luôn cả Tester, tìm hiểu vấn đề, quản lý dự án v.v... 

Với dự án lớn thì có lẽ là ngân sách là thoải mái để tìm người chuyên môn cao cho một vị trí, nhưng dự án nhỏ ngân sách nhỏ thì một người trung gian đảm nhiệm nhiều vai trò tỏ ra hiệu quả hơn.

Một cách hình tượng thì nếu so với bóng đá thì BrSE có lẽ là tiền vệ trung tâm, công việc chính của tiền vệ là kết nối giữa 2 tuyến hậu vệ và tiền đạo, nhưng khi cần thiết thì có thể tham gia cả tấn công lẫn phòng thủ.

Mình thấy vấn đề thường gặp với đặc điểm này đó là khi BrSE cảm thấy không phù hợp hay không muốn làm những công việc ngoài chuyên môn SE và tiếng nhật, kiểu như "mình BrSE mà cứ bị bắt làm tester....". Mình cũng không chắc đây là vấn đề mặt nhân sự hay là mặt dự án, nhưng để giải quyết thì có lẽ cần bàn bác với cả đội dự án và phía công ty chủ quản (nếu outsourcing), tuy nhiên mình nghĩ đối với dự án mà nói thì khả năng thay vai của BrSE là rất có ý nghĩa, bạn làm được thì bạn cũng xứng đáng nhận được cảm ơn từ quản lý dự án.

## 3.2. Vai trò ứng biến theo hoàn cảnh project và công ty
Với khả năng thay vai trò ở trên thì từ góc độ công ty, công ty có thể điều chỉnh tỉ lệ tham gia dự án của BrSE để tăng tổng lợi ích.

Ví dụ nếu đang trạng thái có 2 dự án, 1 BrSE, 8 Developer (thiếu BrSE) thì có thể chia thành mỗi dự án 4 Developer và BrSE làm cả 2 mỗi cái 0.5.
Còn nếu trạng thái là 1 dự án, 1 BrSE 1 Developer (thiếu Developer) thì có thể điều chỉnh để BrSE làm 0.5 BrSE và 0.5 Developer.

Tức là với vai trò là BrSE thì ta nên hiểu rằng có thể sẽ nhiều lúc phải cân nhắc vì lợi ích của dự án và công ty nói chung mà vai trò bị thay đổi. Như vậy mình thấy về mặt cá nhân cũng không hẳn là không tốt, có được kiến thức nhiều mảng khác nhau là điều cũng rất thú vị mà cũng là cơ hội không dễ có được khi làm SE.

Ngoài ra những chú ý chung ở trên, nếu là BrSE xuất thân kỹ thuật SE như mình thì mình có chú ý riêng như sau :
## 3.3. Mỗi dự án một khác
Khi bắt đầu một công việc mới thì thói quen thông thường là ta sẽ đi hỏi xin kinh nghiệm các đàn anh đi trước, bạn bè đồng nghiệp, cấp trên đã có kinh nghiệm làm.
Đây là thói quen tốt và rất cơ bản, nhưng theo mình thì nếu hỏi thì nên hỏi 10-20 người thay vì 2 đến 3 người, vì thường mình thấy mỗi người sẽ trả lời một phần trong bức tranh, mà mỗi dự án lại là 1 bức tranh khác.

Để hình dung thì giống như nếu tính "những điều BrSE cần biết khi làm dự án" tổng là 100 điều thì hỏi người A sẽ nhận được trả là 1,4,5,6, hỏi người B nhận được 2,4,96,97. Vấn đề là dự án cần 1,4,44,100, để biết được những cái đó thì ta phải hỏi thêm rất nhiều người khác để biết thêm 44, 100

Nếu hỏi vì sao dự án cho BrSE rất đa dạng thì có lẽ là do đặc thù yêu cầu công việc cho BrSE khác với SE chỉ làm với ngôn ngữ hay OS sở trường. Đối với BrSE thì yêu cầu chuyên môn ở mức độ ít sâu hơn cũng được, chuyên môn thì dành cho SE ở phía sau, làm được như vậy thì hiệu suất cả công ty cao hơn. 

Mỗi dự án lại là một ngôn ngữ, một framework, một OS, một đội khách hàng với tính cách khác nhau v.v..., kỹ thuật khác nhau cũng tác động làm tính chất dự án khác nhau.

Cần chú ý bởi vì BrSE xuất thân SE thì ta thường có thói quen giải quyết vấn đề dựa trên những kiến thức stable - tĩnh, ví dụ như đọc document API, đọc tutorial v.v... đọc hiểu 1 lần thì có thể dùng xuyên suốt mấy năm sau được. Nhưng khi làm dự án với vai trò BrSE thì các dự án nhỏ thì mỗi dự án liên quan đến một lĩnh vực và cấu trúc dự án cũng khác nhau, để làm quen dự án mới thì cần có tâm lý chuẩn bị và sẵn sàng với những kiến thức hoàn toàn khác với những gì đã biết.

## 3.4. Cần khả năng "giải quyết vấn đề thực tế bằng kỹ thuật" ngoài "giải quyết vấn đề kỹ thuật"
Các vấn đề khách hàng truyền đạt cho BrSE thường có mức độ trừu tượng cao hơn các vấn đề khi ta còn làm SE.

* A. Nếu trước là SE thì ta hay gặp yêu cầu ví dụ thế này : "Em thêm nút/link này vào giao diện X chỗ này nhé?"
* B. Còn giờ nếu là BrSE thì ta có thể gặp yêu cầu thế này : "Bây giờ chúng tôi đang muốn làm chức năng A này, các bạn làm được không?"

Ta có thể thấy vấn đề A đã khá cụ thể về mặt kỹ thuật và hầu như khá chắc chắn làm được, vấn đề B thì từ đó sẽ tách ra thành các task con mà có thể 1 trong các task con đó chính là A, nhưng người hỏi cũng chưa chắc chắn làm được, hay nói cách khác là trừu tượng hơn A. Vấn đề ở đây là ta cần có khả năng đánh giá tính khả thi của B và tách được B thành các task con A đó.

Để làm được việc này thì đơn giản nhất là ta cần có hoặc là kinh nghiệm hoặc là thông tin.
Kinh nghiệm tức là trước đó mình từng làm hệ thống tương tự rồi, lần này mình cũng làm tham khảo theo đó. Thông tin tức là tuy nghiệp vụ đó mình chưa phát triển bao giờ, nhưng mình có một chút chuyên môn về nghiệp vụ đó rồi, hoặc là mình tham khảo các nghiệp vụ khác thì thấy thường là nó sẽ làm như thế C, D này.

Tức là ta sẽ cần phải tích luỹ kinh nghiệm và kiến thức về các lĩnh vực nghiệp vụ đến một mức độ nhất định, ngoài việc tích luỹ kiến thức kỹ thuật.

## 3.5. Cần truyền đạt không chỉ công việc mà cả cảm xúc.
Trước đây thì đôi khi mình nghĩ đơn giản BrSE chỉ cần truyền đạt nội dung công việc là đủ, nghĩ lại nếu chỉ như vậy thì e là dự án có thể vẫn chạy được nhưng không chạy hiệu quả được.

Mình ở bên Nhật ngồi cạnh khách người Nhật thì có thể nghe trực tiếp họ truyền đạt, cảm xúc, giọng điệu khi nói mình đều cảm nhận được. Ví dụ độ gấp, độ quan trọng của task mình nghe họ nói trực tiếp cảm thấy rất hiểu và muốn khắc phục cùng với họ. Vấn đề ở chỗ là lẽ ra thì ta cũng cần truyền tải toàn bộ "nội dung" đó cả công việc cả cảm xúc đến developer thì thông thường ta chỉ làm được mỗi phần công việc, như vậy thì không đủ.

Để giải quyết vấn đề này thì theo mình nên làm được 2 việc sau :
* a. Hoặc là message text thật là nhiều, hoặc là chat video. 
Message text có giới hạn thông tin thì ta message thật nhiều cho đủ.
Chat video thì ta truyền đạt bằng hình ảnh và âm thanh, dễ bao gồm cả cảm xúc.

* b. Developer tích cực nắm bắt thông tin khách hàng.
Tức là developer thay vì suy nghĩ là "hiểu nội dung task là được" thì giờ là "sẵn sàng nghe về nội dung task và các thông tin liên quan nếu có. Và BrSE có nói nhiều 1 chút thì cũng tích cực nắm bắt chứ không đơn thuần là chỉ hiểu nội dung công việc.

Liên quan đến phần truyền đạt cảm xúc này thì mình thấy còn 1 điểm nữa cần lưu ý, đó là thông thường nếu không để ý thì BrSE dễ mắc vấn đề là chỉ truyền đạt sự gấp gáp, quan trọng của task mà không truyền đạt được sự đánh giá, cảm ơn của khách hàng khi hoàn thành task. Như vậy thì rất dễ làm cho Developer cảm thấy bị áp lực trong thời gian dài, hoặc là BrSE nói dối (lúc nào cũng giục là điều khá bất thường). Ngược lại nhận được lời khen ngợi hay tán dương thì thực hiện công việc cũng vui vẻ hơn, BrSE ta nhận điều đó thì KH rồi và cũng cần có trách nhiệm truyền đạt lại điều đó cho Developer phía sau.

Đến đây thì mình xin hết phần lưu ý. Dù mình có một số lưu ý như vậy nhưng thực tế thường ta sẽ làm quen dần dần, bạn đọc không cần lo lắng quá :)

Tiếp theo mình xin chia sẻ đánh giá của mình về những kỹ năng mà 1 BrSE cần có:

# 4. Các kỹ năng chính
## 4.1. Tiếng Nhật
Tối thiểu : JLPT N2 hoặc JLPT N3 giao tiếp nghe nói tốt

Mình nghĩ trong tất cả kỹ năng cần có thì đây là kỹ năng quan trọng nhất. Trình độ tiếng Nhật của BrSE là một trong những nút thắt cổ chai của dự án, tiếng Nhật của BrSE giống như kênh đào Panama nối Đại Tây Dương với Thái Bình Dương, tất cả tàu thuyền spec, bug, tính năng của dự án đều phải đi qua. Bản thân tự mình trải nghiệm thấy BrSE mà tiếng nhật yếu thì làm việc thực sự khó :) 

### Các cấp độ tiếng Nhật của BrSE theo thứ tự tăng dần
**i. Nghe hiểu được khái quát spec :**

  Đa phần là truyền tải nguyên yêu cầu khách đến đội phát triển, truyền tải có chút sai sót nhưng vẫn truyền đạt được những ý cơ bản.

**ii. Nghe hiểu được spec và giải thích được vấn đề kỹ thuật/trạng thái dự án để khách hàng hiểu :**

  Bằng cấp độ trên + khả năng giải thích vấn đề/trạng thái của đội phát triển đến khách hàng. 

  Yêu cầu thêm từ i:
  * tiếng Nhật IT
  * khả năng diễn đạt (theo phong cách Nhật)

**iii. Có thể góp ý thảo luật cải thiện spec, đóng vai trò ngang hàng với thành viên đội khách hàng :**

  Yêu cầu thêm từ ii:
  * kiến thức văn hoá Nhật và kiến thức xã hội bằng tiếng Nhật : cấp độ này yêu cầu mình sẽ phải thường giải thích và bàn bạc với khách về spec, mà nói về spec thì mindset phải như một user thực sự, tức là những gì người Nhật biết thì mình cũng biết. Ví dụ như nếu làm website về nước hoa chẳng hạn, để đến mức độ trao đổi về spec được thì mình phải dùng và hiểuYêu cầu thêm từ ii:
  * kiến thức văn hoá Nhật và kiến thức xã hội bằng tiếng Nhật : cấp độ này yêu cầu mình sẽ phải thường giải thích và bàn bạc với khách về spec, mà nói về spec thì mindset phải như một user thực sự, tức là những gì người Nhật biết thì mình cũng biết. Ví dụ như nếu làm website về nước hoa chẳng hạn, để đến mức độ trao đổi về spec được thì mình phải dùng và hiểu đa số các loại nước hoa nổi tiếng ở Nhật.

**iv. Có thể tư vấn spec. Tự quyết định được và thuyết phục được spec đó :**

  Vai trò này tương đương với vai trò khách hàng ở 3 cấp độ trên. Còn khách hàng trong trường hợp này là người bị thuyết phục và trả tiền.

  Yêu cầu thêm từ iii :
  * kiến thức văn hoá Nhật và kiến thức xã hội bằng tiếng Nhật phong phú gấp cấp iii n lần.

## 4.2. Kỹ thuật
Tối thiểu : 
* Kiến thức cơ bản về domain CNTT mà project yêu cầu
* Tiếng Anh Toeic > 600

Khác với tiếng nhật chỉ có một số domain về ngôn ngữ như từ vựng, kanji, ngữ pháp thì các domain riêng lẻ của CNTT rất nhiều : phần mềm, phần cứng, website, mobile app, blockchain, AI ..., không thể nắm hết tất cả trong khoảng thời gian đại học được, nên xác định thế nào là cơ bản là vấn đề tương đối, và nên đánh giá theo domain mà project đó yêu cầu.

Kinh nghiệm của mình khi chuẩn bị năng lực kỹ thuật cho một dự án đó là làm thử tutorial và đọc document liên quan đến kỹ thuật đó vài tuần. Ví dụ dự án website thì ta tự làm 1 website, nếu project về mobile app thì có thể tự tạo 1 project hello world trên OS đó.

# 5. Các kỹ năng phụ
## 5.1. Kỹ năng xã hội
### 5.1.1. Kỹ năng mềm
Kỹ năng mềm ý mình bao gồm các kỹ năng đối nhân xử thế như giao tiếp, chào hỏi, để ý, quan tâm giúp đỡ mọi người trong team, khách hàng, đi nhậu, đá bóng cùng v.v...
Đây là kỹ năng mình thấy vai trò nào cũng cần nói chung chứ không chỉ BrSE.

Đối với dự án, kỹ năng mềm giúp cho trao đổi thông tin trong dự án trở nên dễ dàng hơn. BrSE có kỹ năng mềm tốt sẽ làm cho mọi người trong dự án cảm thấy thoải mái khi chia sẻ thông tin cùng, các bên có sự tin tưởng và phối hợp ăn ý với nhau hơn.

Ví dụ thoải mái đến mức độ bạn phát triển việt nam có thể nói "thứ 2 tuần sau mình đi xe từ quê ra nên xin nghỉ buổi sáng nhé" thay vì "sáng thứ 2 mình nghỉ buổi sáng", khách hàng bảo "mai anh lên viện khám chút, đến muộn vài tiếng nhé" thay vì "mai anh nghỉ sáng nhé". Những thông tin liên quan không phải là không có giá trị, bạn developer đi xe máy cả trăm cây buổi sáng lên công ty, đến đã mệt rồi thì mình không nên đến phát giao 1 đống task logic nặng đầu, anh khách hàng đi khám về mà kết quả xấu thì khả năng là tâm trạng không tốt, dự án nên xem xét điều chỉnh giảm việc 1 chút hôm đó chẳng hạn.

Hoặc đôi khi nhờ đó mà ta có những thông tin quan trọng ảnh hưởng nhiều đến dự án, đi uống bia cùng mới biết bạn dev có thể tự làm design 1 số ảnh đơn giản, anh khách trước du học người ngoài tiếng anh rất tốt chẳng hạn v.v... Những thông tin đó thì với môi trường ở Nhật thì thường ở văn phòng mọi người tránh nói các vấn đề cá nhân nên chỉ họp dự án thôi thì không biết được.

### 5.1.2. Kỹ năng xử lý tình huống
BrSE cho dự án nhỏ thì thường kiêm làm luôn PM nên những kỹ năng xử lý tình huống ở đây chủ yếu liên quan đến công việc của PM.
Nếu trước đây ta chỉ cần xử lý những task phát triển thì giờ xử lý cả ví dụ những tình huống như sau :
* Từ đội phát triển:
  * Giữa chừng dự án đổi người
  * Member phát triển nghỉ đúng thời điểm gấp
  * Lịch nghỉ lễ của việt nam và nhật khác nhau, tính chia task trước vào ngày nghỉ
  * Mình ở bên Nhật đang nghỉ lễ Nhật nhưng lúc đội đội phát triển đang làm, thỉnh thoảng cũng vào xem có vấn đề gì mắc không.

* Từ phía khách hàng:
  * Giải thích về tình trạng/kỹ năng member phát triển ảnh hưởng đến dự án
  * Đánh giá khả năng đội phát triển nếu nhận task khó hơn, thời gian phase bị điều chỉnh ngắn lại
  * Ước lượng nhanh thời gian làm task của member

## 5.2. Kỹ năng kỹ thuật phụ
### 5.2.1. Excel hoặc Spreadsheet
Dự án thực tế mình rất hay đóng cả vai tester, phải làm các phép tính thống kê, những trường hợp này mình thấy dùng formula của Excel hay function của Spreadsheet cực kỳ tiện.

Ví dụ như khi task là kiểm tra chức năng vừa mới phát triển, đưa thông tin giá 100 sản phẩm ra màn hình đã đúng công thức chưa chẳng hạn.
Thông thường để làm task này thì ta có thể vào database bằng command line hoặc tool, select ra vài cột sản phẩm liên quan, copy từng số ra rồi thực hiện cộng trừ nhân chia, cuối cùng là xem số tính ra đã khớp với hiển thị chưa. Xong rồi thì lại làm tương tự với vài sản phẩm khác.

Đối với trường hợp này thì thay vì phải cộng trừ lại từng cột thì ta có thể chỉ cần tạo 1 formula sẵn cố định, rồi copy dữ liệu cho đúng cột là có thể tiết kiệm được rất nhiều công sức cho các sản phẩm sau.

Ngoài ra thì trường hợp này nếu thông thạo sql ta có thể làm hiệu quả hơn nữa bằng cách xuất kết quả sql dưới dạng csv, bật csv bằng excel và tạo cột formula ở cạnh, ta có thể tính cho cả nghìn sản phẩm trong vài phút.

### 5.2.2. Regular Expression (Regex)
Đây là kỹ năng mà chắc chỉ BrSE xuất thân từ SE mới biết, và khá cơ bản với SE.

Regex là kỹ năng mình đã dùng rất nhiều từ khi còn thuần SE, cho đến giờ chuyển sang "1 nửa BrSE" thì vẫn còn dùng, và mình nghĩ sẽ còn tiếp tục vì thấy phạm vi áp dụng rất rộng.

Regex là gì bạn có thể search google để tìm hiểu rõ hơn.

Với SE thì sự tiện lợi của kỹ năng này có lẽ quá rõ ràng, với BrSE thì có lẽ ứng dụng vào các task điều tra bug (調査) là nhiều.

Ví dụ khi ta có 1 bug ở là ở giao diện hiển thị text "SE" thay vì "BrSE", nhưng trước khi sửa thì KH muốn ta báo cáo là tổng cộng có bao nhiêu chỗ, ở vị trí giao diện nào xuất hiện. Khách OK thì ta mới bắt đầu sửa. Và trong source có cả "BrSE" và "SE" với số lượng nhiều không định trước.

Thông thường để làm task này thì ta sẽ dùng editor search cả source code xem chỗ nào có từ khóa "SE", tuy nhiên vấn đề ở chỗ là search "SE" thông thường thì ra kết quả bao gồm cả "BrSE", kết quả cả mấy trăm dòng, không thể filter bằng mắt thường hết được.

Với regex ta có thể xử lý đơn giản với pattern "(?<!Br)SE", chỉ thị search từ SE mà không đi trước bởi "Br", từ đó nhìn ra tên file template, tìm ra giao diện hiển thị nó v.v...

### 5.2.3. Command Line
Một trong những công việc mình hay phải làm khi thực hiện task "điều tra bug" với vai trò BrSE đó là vào server phát triển kiểm tra. Công việc này tức là mình sẽ ssh vào server develop hoặc staging, vào kiểm tra log lỗi và đánh giá sơ bộ nguyên nhân rồi sau đó mới chuyển cho develop ở việt nam xử lý tiếp.

Nếu hỏi vì sao BrSE làm việc này mà không phải SE làm thì:
+ Thứ nhất là server được config giới hạn IP mà phía Việt Nam không access được
+ Thứ hai là các bạn Developer thường đang bận làm dở task tính năng, chuyển sang làm task khác không tiện, mình thì BrSE task phát triển nhỏ hơn không có task nào dài thì dễ chuyển hơn.
+ Team ít người, không có vị trí riêng cho DevOp.

Nếu dự án nhỏ thì thường phạm vi xử lý công việc cũng không nhiều, ta có thể dùng tool ssh rồi thao tác trên đó là đủ, không cần đến kỹ năng này.

Mình đề cập đến kỹ năng này vì xét đến trường hợp dự án lớn hoặc là một số task độ phức tạp cao hơn, ví dụ như:
a. Copy toàn bộ log định dạng tên aabbcc trong folder A được tạo từ ngày X,Y,Z và nén vào một file, chuyển về host
b. Trong file X lấy ra dòng log có định dạng aabbcc

Ở task thứ nhất thì khó ở chỗ là folder A rất nặng, nếu nhẹ thì dùng tool copy nguyên về host rồi xử lý tiếp sau cũng không sao, nếu nặng ví dụ đến vài chục GB chẳng hạn, thì copy cả sẽ tốn thời gian chưa kể dung lượng tải.
Task thứ hai khó ở chỗ vị trí các log bị phân tán trong file chứ không tuần tự, không thể copy thủ công cả 1 đoạn bao hết được.

Trường hợp này thì mình nghĩ khó dùng tool được vì các tool có lẽ không thiết kế độ sâu đến những thao tác mức độ đó, nhưng nếu dùng command line thì ta có thể làm như sau :
a. Sử dụng command find + grep để tìm, dùng tar để nén
https://stackoverflow.com/a/18339633

b. Dùng grep với regex cho format aabbcc

Đối với công việc trước giờ mình làm thì command line thực sự rất hữu ích nhưng nói chung cũng tuỳ vào tính chất dự án, dự án mobile app chẳng hạn thì có thể không cần dùng.

### 5.2.4. Sử dụng Editor
Nếu bạn là BrSE xuất thân từ SE thì Editor là tool rất quen thuộc rồi nhưng nếu bạn xuất thân Comtor thì mình nghĩ học dùng 1 editor nào đó sẽ có ích rất nhiều khi xử lý liên quan đến tìm kiếm trong source code.

Ví dụ đôi khi ta chỉ muốn tìm file template view để lấy ra text tiếng nhật trong màn hình thôi chẳng hạn, thông thuờng nếu phải mở từng folder một, mở từng cái ra xem thì rất mất thời gian. Trường hợp này ta dùng editor mở cả dự án rồi search trên đó là được.

Đến đây mình xin kết thúc phần các kỹ năng mình đề xuất nên có khi làm BrSE. Tiếp theo mình xin chia sẻ kinh nghiệm xử lý một số tình huống mà một BrSE có thể sẽ hay gặp khi làm dự án.

# 6. Xử lý tình huống
6.1. Tiếng Nhật mình khách không hiểu, tiếng Nhật khách mình không hiểu.
Đây chắc là tình huống dễ xảy ra và hay xảy ra nhất với BrSE?

+ Xử lý tạm thời : hỏi lại
Giả sử trường hợp khách nói về việc A mà mình không nghe ra thì có thể hỏi lại với những cái mình biết là có phải A1, A2 không, khách sẽ trả lời là A1 nhưng khác chỗ này, chỗ kia, 2 bên tiếp tục trao đổi đến khi mình hiểu A. 
Cũng có thể nhờ khách nói lại lần nữa, tuy nhiên cách này làm phiền họ hơn là cách hỏi A1,A2 ở trên nên mình nghĩ nên tránh.

Trường hợp tiếng Nhật mình khách không hiểu thì mình dùng cách nói khác để mô tả vấn đề.

+ Xử lý căn bản : rèn luyện tiếng Nhật
Đầu tư học tiếng Nhật thôi! (Đây là cái nói dễ hơn làm...)

Xử lý cho trường hợp này mình nghĩ cũng đơn giản, chỉ chú ý là nên rút kinh nghiệm được nhanh và nhớ được cho lần sau, không nên để phải hỏi lại.

## 6.2. Bị khách quát
Trường hợp thế này mình cũng nghe nhiều lần từ bạn bè cũng có mà đàn anh cũng có, thường mình thấy là dễ xẩy ra khi giao tiếp với "khách hàng cuối" hơn, còn với SE người Nhật thì thấy dễ hiểu nhau được thông cảm hơn.

Vấn đề này có lẽ thuộc về mặt đối nhân xử thế, là kiến thức thông thường hơn chứ không riêng gì BrSE nên mình ban đầu cũng không định bao gồm vào bài viết nhưng thấy cũng hay xảy ra mà mức độ ảnh hưởng cũng tương đối nên cũng quyết định viết.

Về cách xử lý thì chắc hẳn là bình tĩnh trao đổi với khách xem vấn đề ở đâu, xác định đúng vấn đề rồi thì tập trung vào giải quyết, có thể dành thêm resource để tập trung xử lý chỗ đó.

Cách và hướng xử lý thì có lẽ mọi người đều biết, mình chỉ muốn chia sẻ thêm những gì mình nghĩ. Đó là mình thấy nếu được thì ta cũng nên có phần cố gắng hiểu tâm trạng khách hàng.

Có ông bạn mình kể làm ở công ty sản phẩm có đội sale người Nhật, đội sale Nhật đó nhiều khi bị khách quát vì chất lượng sản phẩm bàn giao không như hợp đồng, quát rất thậm tệ, bên trong suýt khóc nhưng bên ngoài vẫn cố niềm nở chịu đựng. Tức là bản thân phía khách có thể cũng đang gặp khó, họ còn bị đối tác Nhật khác tạo áp lực kinh khủng hơn, tuy rất khó chịu với mình nhưng phía họ còn chịu áp lực hơn nhiều.

Ngoài ra thì đối với khách không chuyên kỹ thuật, việc đội phát triển thuê mà không làm được việc như hợp đồng đã thoả thuận, BrSE thì hỏi nhưng trả lời chậm thì có lẽ dễ nghi ngờ đến lừa đảo. Tức là tâm trạng khách ở đây không phải là họ đang cố ép mình làm mà là họ tức giận vì thấy đang bị lừa. Đối với mình thì thấy bị nghi ngờ là lừa đảo là cảm giác rất nhục nhã, so với đó cảm giác phải làm thêm giờ mỗi ngày cũng không đáng kể lắm :)

Dù sao thì ta cũng nên cố gắng hợp tác với khách khắc phục, chủ động horensou và tránh xẩy ra những vấn đề này ngay khi nhận thấy có khả năng, có thể ngay từ giai đoạn hợp đồng.

## 6.3. Xuất hiện task mất nhiều thời gian Communication nhiều giữa 2 bên
Mình xin lấy ví dụ về một dự án mình đã làm mà phía khách đảm nhiệm Frontend, phía đội việt nam đảm nhiệm Backend. Ở frontend gọi API đến Backend trả về kết quả hiển thị.

Vấn đề phát sinh khi mà ở task đó phía frontend nói họ gửi dữ liệu đúng format mà không được xử lý thành công, bên backend lại nói là đã cấu hình xử lý kiểm tra nhiều lần là nhận đúng format rồi, nói chung là 2 bên không xác định được là lỗi ở đâu. Sau đó thì 2 bên đưa ra rất nhiều giả thuyết và thử nghiệm kiểm tra xem đúng nguyên nhân không, thử đi thử lại chắc phải mất cả tuần cho task này nhưng vẫn chưa tìm ra được.

Điểm khó ở đây là phía frontend không có kinh nghiệm server nên không tự dựng server local để tự check được, bên backend thì có kinh nghiệm làm mobile app nhưng cũng bận không có thời gian cài đặt môi trường, môi trường mobile app dùng XCode cấu hình cũng hơi phức tạp một chút.

Mình thì chuyên backend nên cài đặt server backend trên local được, lại ở phía Nhật ngồi ngay cạnh developer frontend khách hàng nên nhờ họ hướng dẫn dựng mobile app cũng rất tiện, nên mình đề xuất là để task đó mình xử lý.

Dựng cả 2 môi trường lên so sánh thì mình phát hiện vấn đề là do phía frontend encode64 file ảnh gửi lên server có vấn đề. Hàm encode64 thì đúng nhưng dữ liệu bị biến đổi khi gửi lên đến server do hàm gửi của angular js có tự động escape khi gửi lên, cái này phải override hàm gửi của angular js thì mới biết được. Sau đó thì mình cũng sửa luôn và vấn đề cũng xong ở đó.

Tức là mình thấy có nhiều tình huống mà thay vì đơn thuần dịch nội dung cho cả 2 bên trao đổi với nhau thì mất rất nhiều thời gian, BrSE có lợi thể hiểu cả 2 bên có thể trực tiếp tham gia vào thay cả 2 bên giải quyết luôn được.

Có lẽ công việc BrSE còn rất nhiều các xử lý tình huống khác nữa nhưng tạm thời mình xin dừng ở đây, có dịp sẽ bổ sung sau :)

# Kết

Có thể bạn đọc thấy chia sẻ của mình hơi ôm đồm nhiều mảng nên hơi khó nắm bắt, có lẽ chia ra thành từng phần nhỏ chia vào nhiều bài thì dễ đọc hiểu hơn, tiếc là mình không có nhiều thời gian để viết nhiều bài nên tạm thời tóm tắt hết vào 1 bài, có thể sau có thời gian mình sẽ tách ra và đi sâu hơn :)

Ngoài ra mình cũng rất hoan nghênh góp ý cũng như chia sẻ từ mọi người :)

Chia sẻ của mình về công việc BrSE đến đây là hết, hi vọng là cung cấp thêm được thông tin có ích với mọi người :)
