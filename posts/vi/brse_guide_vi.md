---
layout: markdown
title: BrSE Guidelines
---

<h1>BrSE Guidelines </h1>

* Do not remove this line (it will not be displayed)
{:toc}

# 1.Khởi đầu
## 1.1. Lời nói đầu
Tài liệu này nói về định nghĩa cũng như vai trò của BrSE theo cách hiểu của bản thân mình.

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

#### 2.2.1.5.　Giải thích cho khách hàng flow làm việc của công ty mình
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

### 2.2.2.要件定義（お客さん）
お客さんは要件定義を作成する時に、オフショア側が実施する可能性などについてBrSEに聞くことがあります。

例えば：
+ この機能はリッケイの開発メンバーが対応できるか？
+ この機能を対応すれば、どのぐらい時間がかかるか？人数は何人で済むか？

その時にオフショア側（リッケイベトナム）に確認し、お客さんに回答することになります。

### 2.2.3.基本設計（お客さん／オフショア会社）
+ 基本設計書を作成
  + PEのタスク、タスクの担当はPMの作業分担支持に従う。						
+ 基本設計書をレビュー
+ 基本設計書を翻訳
  + Comtorのタスク、タスクの担当はPMの作業分担支持に従う。						
+ テスト計画書作成
  + Testerのタスク、タスクの担当はPMの作業分担支持に従う。						
+ テスト計画書レビュー
+ テスト計画書を翻訳
  + Comtorのタスク、タスクの担当はPMの作業分担支持に従う。						

### 2.2.4.詳細設計（オフショア会社）
+ 詳細仕様書作成
  + PEのタスク、タスクの担当はPMの作業分担支持に従う。						
+ 詳細仕様書レビュー
  + PEのタスク、タスクの担当はPMの作業分担支持に従う。								
+ 詳細仕様書を翻訳
  + Comtorのタスク、タスクの担当はPMの作業分担支持に従う。						

### 2.2.5.実装（オフショア会社）
+ プログラミング
  + PEのタスク、タスクの担当はPMの作業分担支持に従う。
  + SE出身のBrSEは他のタスクの優先度をよそに、SEの課題を重視しすぎる傾向があります。全体、または他のタスクの優先度に注意を払うべきです
+ コードレビュー

### 2.2.6.単体テスト（オフショア会社）
+ 単体テスト項目書作成
  + Testerのタスク、タスクの担当はPMの作業分担支持に従う。						
+ 単体テスト項目書レビュー									
+ 単体テスト項目書翻訳
  + Comtorのタスク、タスクの担当はPMの作業分担支持に従う。						
+ 単体テスト実施
  + Testerのタスク、タスクの担当はPMの作業分担支持に従う。						
+ 単体テスト結果レビュー									
+ 単体テスト結果翻訳
  + Comtorのタスク、タスクの担当はPMの作業分担支持に従う。

### 2.2.7.結合テスト（お客さん／オフショア会社）
+ 結合テスト項目書作成
  + Testerのタスク、タスクの担当はPMの作業分担支持に従う。						
+ 結合テスト項目書レビュー									
+ 結合テスト項目書翻訳
  + Comtorのタスク、タスクの担当はPMの作業分担支持に従う。						
+ 結合テスト実施
  + Testerのタスク、タスクの担当はPMの作業分担支持に従う。						
+ 結合テスト結果レビュー									
+ 結合テスト結果翻訳
  + Comtorのタスク、タスクの担当はPMの作業分担支持に従う。						

### 2.2.8.受付（お客さん／オフショア会社）
+ 受入テスト対応
  + PMのタスク、タスクの担当はPMの作業分担支持に従う。						
+ 受入テストを翻訳
  + Comtorのタスク、タスクの担当はPMの作業分担支持に従う。						

# 3. BrSEのスキル
## 3.1. コミュニケーション
### 3.1.1. 相手
#### 3.1.1.1. お客さんと
お客さんが言ったことが理解できること

自分の意見／チームの意見、伝えたいことが伝わること

■ よくある問題

+ お客さんが伝えたことを理解できない

+ 自分の意見だけ伝えた、チームの意見を伝えなかった

+ 文字ベースのみ話せる、口頭で話せない

#### 3.1.1.2. PMと
チームメンバーの状況、説明が理解できること

お客さんの要求／自分の意見が伝わること

■ よくある問題

+ 自分のタスクのみ気にする、他のメンバーのタスクに気にしない

+ 自分のタスクのみ気にする、全体の進捗を把握していない

#### 3.1.1.3. 営業者と
現状について自分のイメージが伝わること

#### 3.1.1.4. 開発者と
技術的な問題を正確に伝わること

■ よくある問題

+ 該当する技術の話がわからない、技術の問題の解決があまりすすまない

### 3.1.2. 言語
#### 3.1.2.1. 日本語

+ お客さんとコミュニケーションする時に使う言語

+ チームメンバーがわからない／確認できない

#### 3.1.2.2. ベトナム語

+ チームメンバーとコミュニケーションする時に使う言語						

+ お客さんがわからない／確認できない						

### 3.1.3. 手法
#### 3.1.3.1. 文字ベース
■メリット

+ 後で振り返られる、確認できる

+ 流れとして、複数人が参加できる

■デメリット

+ タイピング時間がかかる

+ 言葉に表現する能力が求める

#### 3.1.3.2. 音声／ビデオチャット
■メリット

+ 情報交換が早い		

+ 相手の表情、事情が感じる		

■デメリット

+ 後で確認できない（そのため、議事録が必要）			

## 3.2. 日本語
### 3.2.1. 日常会話
お客さんとコミュニケーションをとるには、日常会話ができることが不可欠スキルです。

日常会話ができるには、言語能力は一つで、普段の日本人の会話仕方、話し方、表現仕方なでも必要です。

お客さんに業務を説明していただく時は、IT業界のお客さんならIT日本語で説明するのでそれである程度理解しやすいことがありますが、IT業界ではないお客さんは日常生活のことで説明し、日常のことがわからないとわからなくなります。

■よくある問題

お客さんの日本語がわからない

### 3.2.2. IT日本語		
お客さんはシステムについてITの用語で説明することが多いので、わからないと理解できない。

難易度はお客さんの言語にもよりますが、日本語で説明されることが多く、そのITのことを理解できたとしても、そのことの日本語で表現される用語がわからないと理解できない

■よくある問題

お客さんが言ったITの用語がわからない

### 3.2.3. 尊敬語、謙譲語		
日本の職場で、尊敬語、謙譲語はよく使われます。

外国人に対して、しらなくて間違えて利用されることは優しいお客さんにとってはある程度認められますが、ちゃんと利用できたら好評され、高く評価されます。

■よくある問題

意図しなかった自分の日本語に対して、お客さんが生意気を感じる

## 3.3. チームワーク
### 3.3.1. お客さんと
#### 3.3.1.1. お客さんの開発チームの一員としてチームワーク
1. お客さんが狙った目的を理解すること
お客さんが開発したい機能の目的、意図を理解する
↓
狙った目的に対して、全体の作業を理解した上で、自分／オフショアチームの役割を理解する

■よくある問題

オフショアや自分のタスクだけ気にして、お客さんのタスクに気にしない

2. 一員として、行動すること
狙った目的に対して、今の機能は充実しているのか、大丈夫なのかを考慮し、意見を出す。

できるかぎりお客さんの他のメンバーのタスクにお手伝い

■よくある問題

オフショアの事情がわからず、オフショアが受け取れないタスクを受けてしまう

#### 3.3.1.2.パートーナーの観点としてチームワーク
オフショア開発ができること、できないことをお客さんに説明、タスクが適切に調整されるようにする

オフショアの状況を常に更新、お客さんに共有すること

■よくある問題

SEのタスクに気にしすぎ、全体のタスクや進捗が遅くて、止まる

### 3.3.2. オフショアメンバーと
#### 3.3.2.1. オフショア作業の全体の作業を理解した上で、行動する
自分のタスクに夢中になるではなく、全体のタスク、他のタスクを理解した上で自分のタスクを対応する

※ SE出身のBrSEは開発タスクに夢中になる傾向がある。全体のタスク、また優先度に応じて対応するのは注意すべきことです

■よくある問題

SEのタスクに気にしすぎ、全体のタスクや進捗が遅くて、止まる

#### 3.3.2.2. 理解したお客さんの観点で、オフショアの作業について意見を共有、相談
タスク単体の内容だけではなく、全体的にお客さんが求める成果に向けて、現在オフショアの作業が大丈夫か、お客さんの作業とくっつけることができるかに気にして、チームと相談すること

※ 普段オフショアチームはタスク単体に専念し、全体の成果につながらないおとがあるので、BrSEが先に発見し、指摘できたら作業が効率

※ オフショア作業が全体の成果に合わせるようにするのはPMの役割ですが、普段BrSEはお客さんのことをより理解するので、意見が役に立つことが多い

■よくある問題

オフショアがやったことがお客さんの無駄になる		

単体の成果だけできたが、お客さんが求める全体の成果と遠く離れる、		

## 3.4. 議事録
### 3.4.1. お客さんと会議の議事録		
会議で決められることを記載						

後でお客さんに通知すること						

場合によってオフショアチームにも共有						

■よくある問題

+ 会議で口頭で決めたことが忘れられる		

+ 会議で決めたことがメンバーごとに認識が違う		

### 3.4.2. オフショアと会議の議事録		
会議で決められることを記載						

後でオフショアチームに共有すること						

場合によってお客さんにも共有						

■よくある問題

+ 会議で口頭で決めたことが忘れられる		

+ 会議で決めたことがメンバーごとに認識が違う		

## 3.5. SEスキル
### 3.5.1. 開発工程について知識		
各工程（要件定義→受け入れ）のソフトウェア開発工程の知識						

今の工程は何をする、前の工程に何を求める、後の工程に何を提出すべきを把握すること						

■よくある問題

今の工程に何をするか曖昧

### 3.5.2. 開発言語／フレームワーク		
現在開発される技術のことを理解した上で、オフショアメンバーが開発できるように伝えられること						

場合によって、自分でも開発できるように得るべきこと						

■よくある問題

お客さんが言った技術のことがわからない

# おしまい
これまで読んでいただきありがとうございました。

オフショア業界にはBrSEについてはドキュメントみたいな資料がまだ少ないと思いますので、少々貢献させていただきたいと思、書くことにしました。

知った限りの情報を共有したことで、この知識を皆の作業にお役に立てば幸いです。特に今後来日するベトナム人の若いBrSEにお役に立てばと思います。

自分なりにある程度数回内容を見直しましたが、まだまだ謝る日本語や表現がいっぱいあると思いますので、申し訳ありませんでした。

最後に、ちょうど今日も2020/2021の年末年始ということで、良いお年を迎えてください！

以上。