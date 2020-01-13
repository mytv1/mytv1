var transNames = [
    {
        'vi': ['A', 'Á'],
        'ja': ['ア'],
        'romaji': ['a']
    },
    {
        'vi': ['An', 'Ân'],
        'ja': ['アン'],
        'romaji': ['an']
    },
    {
        'vi': ['Ái'],
        'ja': ['アイ'],
        'romaji': ['ai']
    },
    {
        'vi': ['Anh', 'Ảnh', 'Ánh'],
        'ja': ['アイン'],
        'romaji': ['ain']
    },
    {
        'vi': ['Âu'],
        'ja': ['アーウ'],
        'romaji': ['a-u']
    },
    {
        'vi': ['Ba', 'Bá'],
        'ja': ['バ'],
        'romaji': ['ba']
    },
    {
        'vi': ['Bạch', 'Bách'],
        'ja': ['バック'],
        'romaji': ['bakku']
    },
    {
        'vi': ['Bành'],
        'ja': ['バン'],
        'romaji': ['ban']
    },
    {
        'vi': ['Bao', 'Bảo'],
        'ja': ['バオ'],
        'romaji': ['bao']
    },
    {
        'vi': ['Bắc', 'Bác'],
        'ja': ['バック'],
        'romaji': ['bakku']
    },
    {
        'vi': ['Ban', 'Băng', 'Bằng'],
        'ja': ['バン'],
        'romaji': ['ban']
    },
    {
        'vi': ['Bế', 'bé'],
        'ja': ['ベ'],
        'romaji': ['be']
    },
    {
        'vi': ['Bích'],
        'ja': ['ビック'],
        'romaji': ['bikku']
    },
    {
        'vi': ['Biên', 'Biển'],
        'ja': ['ビエン'],
        'romaji': ['bien']
    },
    {
        'vi': ['Bình', 'Bính'],
        'ja': ['ビン'],
        'romaji': ['bin']
    },
    {
        'vi': ['Bối', 'Bội'],
        'ja': ['ボイ'],
        'romaji': ['bon']
    },
    {
        'vi': ['Bông'],
        'ja': ['ボン'],
        'romaji': ['boi']
    },
    {
        'vi': ['Bùi'],
        'ja': ['ブイ'],
        'romaji': ['bui']
    },
    {
        'vi': ['Can', 'Căn', 'Cán', 'Cấn'],
        'ja': ['カン'],
        'romaji': ['kan']
    },
    {
        'vi': ['Cảnh', 'Cánh', 'Canh'],
        'ja': ['カイン'],
        'romaji': ['kain']
    },
    {
        'vi': ['Chánh'],
        'ja': ['チャイン'],
        'romaji': ['chain']
    },
    {
        'vi': ['Chiểu'],
        'ja': ['チエウ'],
        'romaji': ['chieu']
    },
    {
        'vi': ['Chinh', 'chính'],
        'ja': ['チン'],
        'romaji': ['chin']
    },
    {
        'vi': ['Chuẩn'],
        'ja': ['ツアン'],
        'romaji': ['tuan']
    },
    {
        'vi': ['Cao'],
        'ja': ['カオ'],
        'romaji': ['kao']
    },
    {
        'vi': ['Cẩm', 'cam', 'cầm'],
        'ja': ['カム'],
        'romaji': ['kamu']
    },
    {
        'vi': ['Cát'],
        'ja': ['カット'],
        'romaji': ['katto']
    },
    {
        'vi': ['Công'],
        'ja': ['コン'],
        'romaji': ['kon']
    },
    {
        'vi': ['Cúc'],
        'ja': ['クック'],
        'romaji': ['kukku']
    },
    {
        'vi': ['Cư', 'cử', 'cự', 'cứ'],
        'ja': ['ク'],
        'romaji': ['ku']
    },
    {
        'vi': ['Cung', 'Củng'],
        'ja': ['クーン'],
        'romaji': ['ku-n']
    },
    {
        'vi': ['Cửu'],
        'ja': ['キュウ'],
        'romaji': ['kyuu']
    },
    {
        'vi': ['Cương', 'Cường'],
        'ja': ['クオン'],
        'romaji': ['kuon']
    },
    {
        'vi': ['Châu'],
        'ja': ['チャウ'],
        'romaji': ['chau']
    },
    {
        'vi': ['Chu'],
        'ja': ['ヅ'],
        'romaji': ['du']
    },
    {
        'vi': ['Chung'],
        'ja': ['チュン'],
        'romaji': 'chun'
    },
    {
        'vi': ['Chi', 'Tri'],
        'ja': ['チー'],
        'romaji': ['chi-']
    },
    {
        'vi': ['Chiến'],
        'ja': ['チェン'],
        'romaji': ['chixen']
    },
    {
        'vi': ['Da', 'Dạ'],
        'ja': ['ザ'],
        'romaji': ['da']
    },
    {
        'vi': ['Danh', 'Dân'],
        'ja': ['ヅアン'],
        'romaji': ['duan']
    },
    {
        'vi': ['Diễm', 'Diêm'],
        'ja': ['ジエム'],
        'romaji': ['jiemu']
    },
    {
        'vi': ['Diễn', 'Dien'],
        'ja': ['ジエン'],
        'romaji': ['jien']
    },
    {
        'vi': ['Diệp'],
        'ja': ['ジエップ'],
        'romaji': ['jieppu']
    },
    {
        'vi': ['Diệu'],
        'ja': ['ジェウ'],
        'romaji': ['jeu']
    },
    {
        'vi': ['Doãn'],
        'ja': ['ゾアン'],
        'romaji': ['doan']
    },
    {
        'vi': ['Doanh'],
        'ja': ['ゾアイン'],
        'romaji': ['doain']
    },
    {
        'vi': ['Dư', 'Dự'],
        'ja': ['ズ'],
        'romaji': ['zu']
    },
    {
        'vi': ['Duẩn'],
        'ja': ['ヅアン'],
        'romaji': ['duan']
    },
    {
        'vi': ['Dục', 'Dực'],
        'ja': ['ズック'],
        'romaji': ['zukku']
    },
    {
        'vi': ['Dung', 'Dũng'],
        'ja': ['ズン'],
        'romaji': ['zun']
    },
    {
        'vi': ['Dương', 'Dưỡng'],
        'ja': ['ヅオン'],
        'romaji': ['duon']
    },
    {
        'vi': ['Duy'],
        'ja': ['ヅウィ'],
        'romaji': ['duui']
    },
    {
        'vi': ['Duyên', 'Duyền'],
        'ja': ['ヅエン'],
        'romaji': ['Duen']
    },
    {
        'vi': ['Duyệt'],
        'ja': ['ヅエット'],
        'romaji': ['duetto']
    },
    {
        'vi': ['Đắc'],
        'ja': ['ダック'],
        'romaji': ['dakku']
    },
    {
        'vi': ['Đại'],
        'ja': ['ダイ'],
        'romaji': ['dai']
    },
    {
        'vi': ['Đàm', 'Đảm', 'Đam', 'Đạm'],
        'ja': ['ダム'],
        'romaji': ['damu']
    },
    {
        'vi': ['Đan', 'Đàn', 'Đán', 'Đản'],
        'ja': ['ダン'],
        'romaji': ['dan']
    },
    {
        'vi': ['Đang', 'Đăng', 'Đặng', 'Đằng'],
        'ja': ['ダン'],
        'romaji': ['dan']
    },
    {
        'vi': ['Đào', 'Đạo', 'Đảo'],
        'ja': ['ダオ'],
        'romaji': ['dao']
    },
    {
        'vi': ['Đạt'],
        'ja': ['ダット'],
        'romaji': ['datto']
    },
    {
        'vi': ['Đậu'],
        'ja': ['ダオウ'],
        'romaji': ['daou']
    },
    {
        'vi': ['Đích', 'Đích'],
        'ja': ['ディック'],
        'romaji': ['dhikku']
    },
    {
        'vi': ['Điểm', 'Điềm'],
        'ja': ['ディエム'],
        'romaji': ['diemu']
    },
    {
        'vi': ['Điền', 'Điện'],
        'ja': ['ディエン'],
        'romaji': ['dien']
    },
    {
        'vi': ['Điệp'],
        'ja': ['ディエップ'],
        'romaji': ['dieppu']
    },
    {
        'vi': ['Đinh', 'Đình', 'Định'],
        'ja': ['ディン'],
        'romaji': ['dhin']
    },
    {
        'vi': ['Đỗ', 'Đô'],
        'ja': ['ド'],
        'romaji': ['do']
    },
    {
        'vi': ['Đoan', 'Đoàn'],
        'ja': ['ドアン'],
        'romaji': ['doan']
    },
    {
        'vi': ['Đôn', 'Đồn'],
        'ja': ['ドン'],
        'romaji': ['don']
    },
    {
        'vi': ['Đông', 'Đồng', 'Động'],
        'ja': ['ドン'],
        'romaji': ['don']
    },
    {
        'vi': ['Đức'],
        'ja': ['ドゥック'],
        'romaji': ['dwukku']
    },
    {
        'vi': ['Gấm'],
        'ja': ['グアム'],
        'romaji': ['guamu']
    },
    {
        'vi': ['Giang', 'Giáng', 'Giảng'],
        'ja': ['ジャン'],
        'romaji': ['jyan']
    },
    {
        'vi': ['Giao', 'giáo'],
        'ja': ['ジャ'],
        'romaji': ['jan']
    },
    {
        'vi': ['Giáp'],
        'ja': ['ジャップ'],
        'romaji': ['jappu']
    },
    {
        'vi': ['Gia'],
        'ja': ['ジャオ'],
        'romaji': 'jao'
    },
    {
        'vi': ['Hà', 'Hạ'],
        'ja': ['ハ'],
        'romaji': ['ha']
    },
    {
        'vi': ['Hàn', 'Hân', 'Hán'],
        'ja': ['ハン'],
        'romaji': ['han']
    },
    {
        'vi': ['Hai', 'Hải'],
        'ja': ['ハイ'],
        'romaji': ['hai']
    },
    {
        'vi': ['Hạnh', 'Hanh', 'Hành'],
        'ja': ['ハン', 'ハイン'],
        'romaji': ['han', 'hain']
    },
    {
        'vi': ['Hằng'],
        'ja': ['ハン'],
        'ja': ['han']
    },
    {
        'vi': ['Hậu'],
        'ja': ['ホウ'],
        'romaji': ['hou']
    },
    {
        'vi': ['Hào', 'Hạo', 'Hảo'],
        'ja': ['ハオ'],
        'romaji': ['hao']
    },
    {
        'vi': ['Hiền', 'Hiển', 'Hiến', 'Hiên', 'Hiện'],
        'ja': ['ヒエン'],
        'romaji': ['hien']
    },
    {
        'vi': ['Hiếu', 'Hiểu'],
        'ja': ['ヒエウ'],
        'romaji': ['hieu']
    },
    {
        'vi': ['Hiệp'],
        'ja': ['ヒエップ'],
        'romaji': ['hieppu']
    },
    {
        'vi': ['Hinh', 'Hình'],
        'ja': ['ヒイン'],
        'romaji': ['hiin']
    },
    {
        'vi': ['Hoa', 'Hòa', 'Hóa', 'Hỏa', 'Họa'],
        'ja': ['ホア'],
        'romaji': ['hoa']
    },
    {
        'vi': ['Học'],
        'ja': ['ホック'],
        'romaji': ['hokku']
    },
    {
        'vi': ['Hoài'],
        'ja': ['ホアイ'],
        'romaji': ['hoai']
    },
    {
        'vi': ['Hoan', 'Hoàn', 'Hoàng', 'Hoán', 'Hoạn'],
        'ja': ['ホアン', 'ホーアン'],
        'romaji': ['hoan']
    },
    {
        'vi': ['Hoạch'],
        'ja': ['ホアック'],
        'romaji': ['hoakku']
    },
    {
        'vi': ['Hồ', 'hổ', 'hộ', 'Hố'],
        'ja': ['ホ'],
        'romaji': ['ho']
    },
    {
        'vi': ['Hồi', 'Hợi', 'Hối'],
        'ja': ['ホイ'],
        'romaji': ['hoi']
    },
    {
        'vi': ['Hồng'],
        'ja': ['ホン'],
        'romaji': ['hon']
    },
    {
        'vi': ['Hợp'],
        'ja': ['ホップ'],
        'romaji': ['hoppu']
    },
    {
        'vi': ['Hữu', 'Hựu'],
        'ja': ['フュ'],
        'romaji': ['fu']
    },
    {
        'vi': ['Huệ', 'Huê', 'Huế'],
        'ja': ['フエ'],
        'romaji': ['fue']
    },
    {
        'vi': ['Huy'],
        'ja': ['フィ'],
        'romaji': ['fi']
    },
    {
        'vi': ['Hùng', 'Hưng'],
        'ja': ['フン', 'ホウン'],
        'romaji': ['fun', 'Houn']
    },
    {
        'vi': ['Huân', 'Huấn'],
        'ja': ['ホウアン'],
        'romaji': ['Houan']
    },
    {
        'vi': ['Huyên', 'Huyền'],
        'ja': ['フェン', 'ホウエン'],
        'romaji': ['fen', 'houen']
    },
    {
        'vi': ['Huỳnh', 'Huynh'],
        'ja': ['フイン'],
        'romaji': ['fin']
    },
    {
        'vi': ['Hứa'],
        'ja': ['ホウア'],
        'romaji': ['houa']
    },
    {
        'vi': ['Hương', 'Hường'],
        'ja': ['フォン', 'ホウオン'],
        'romaji': ['fon', 'houon']
    },
    {
        'vi': ['Kiêm', 'Kiểm'],
        'ja': ['キエム'],
        'romaji': ['kiemu']
    },
    {
        'vi': ['Kiệt'],
        'ja': ['キエット'],
        'romaji': ['kietto']
    },
    {
        'vi': ['Kiều'],
        'ja': ['キイエウ'],
        'romaji': ['kieu']
    },
    {
        'vi': ['Kim'],
        'ja': ['キム'],
        'romaji': ['kimu']
    },
    {
        'vi': ['Kỳ', 'Kỷ', 'Kỵ'],
        'ja': ['キ'],
        'romaji': ['ki']
    },
    {
        'vi': ['Kha', 'Khả', 'Khá'],
        'ja': ['カー'],
        'romaji': ['ka-']
    },
    {
        'vi': ['Khai', 'Khải', 'Khái'],
        'ja': ['カーイ', 'クアイ'],
        'romaji': ['ka-i', 'kuai']
    },
    {
        'vi': ['Khanh', 'Khánh'],
        'ja': ['カイン', 'ハイン'],
        'romaji': ['kain', 'hain']
    },
    {
        'vi': ['Khang'],
        'ja': ['クーアン'],
        'romaji': ['ku-an']
    },
    {
        'vi': ['Khổng'],
        'ja': ['コン'],
        'romaji': ['kon']
    },
    {
        'vi': ['Khôi'],
        'ja': ['コイ', 'コーイ', 'コイー'],
        'romaji': ['koi']
    },
    {
        'vi': ['Khuất'],
        'ja': ['クアット'],
        'romaji': ['kuatto']
    },
    {
        'vi': ['Khương'],
        'ja': ['クゥン'],
        'romaji': ['kuxon']
    },
    {
        'vi': ['Khuê'],
        'ja': ['クエ'],
        'romaji': ['kue']
    },
    {
        'vi': ['Khoa'],
        'ja': ['クォア'],
        'romaji': ['kuxoa']
    },
    {
        'vi': ['Ma', 'Mã', 'Mạ'],
        'ja': ['マ'],
        'romaji': ['ma']
    },
    {
        'vi': ['Mạc', 'Mác'],
        'ja': ['マク'],
        'romaji': ['makku']
    },
    {
        'vi': ['Mai'],
        'ja': ['マイ'],
        'romaji': ['mai']
    },
    {
        'vi': ['Mạnh'],
        'ja': ['マイン'],
        'romaji': ['main']
    },
    {
        'vi': ['Mẫn'],
        'ja': ['マン'],
        'romaji': ['man']
    },
    {
        'vi': ['Minh'],
        'ja': ['ミン'],
        'romaji': ['min']
    },
    {
        'vi': ['Mịch'],
        'ja': ['ミック'],
        'romaji': ['mikku']
    },
    {
        'vi': ['My', 'Mỹ'],
        'ja': ['ミ', 'ミー'],
        'romaji': ['mi']
    },
    {
        'vi': ['La', 'Lã', 'Lả'],
        'ja': ['ラ'],
        'romaji': ['ra']
    },
    {
        'vi': ['Lan'],
        'ja': ['ラン'],
        'romaji': ['ran']
    },
    {
        'vi': ['Lập'],
        'ja': ['ラップ'],
        'romaji': ['rappu']
    },
    {
        'vi': ['Lành', 'Lãnh'],
        'ja': ['ライン'],
        'romaji': ['rain']
    },
    {
        'vi': ['Lai', 'Lai', 'Lài'],
        'ja': ['：ライ'],
        'romaji': ['rai']
    },
    {
        'vi': ['Lâm', 'Lam'],
        'ja': ['ラム'],
        'romaji': ['ramu']
    },
    {
        'vi': ['Len', 'Lên'],
        'ja': ['レン'],
        'romaji': ['ren']
    },
    {
        'vi': ['Lê', 'Lễ', 'Lệ'],
        'ja': ['レ'],
        'romaji': ['re']
    },
    {
        'vi': ['Linh', 'Lĩnh'],
        'ja': ['リン'],
        'romaji': ['rin']
    },
    {
        'vi': ['Liễu'],
        'ja': ['リエウ'],
        'romaji': ['rieu']
    },
    {
        'vi': ['Liên'],
        'ja': ['リエン'],
        'romaji': ['rien']
    },
    {
        'vi': ['Loan'],
        'ja': ['ロアン'],
        'romaji': ['roan']
    },
    {
        'vi': ['Long'],
        'ja': ['ロン'],
        'romaji': ['ron']
    },
    {
        'vi': ['Lộc'],
        'ja': ['ロック'],
        'romaji': ['roku']
    },
    {
        'vi': ['Lụa', 'Lúa'],
        'ja': ['ルア'],
        'romaji': ['rua']
    },
    {
        'vi': ['Luân', 'Luận'],
        'ja': ['ルアン'],
        'romaji': ['ruan']
    },
    {
        'vi': ['Lương', 'Lượng'],
        'ja': ['ルオン'],
        'romaji': ['ruon']
    },
    {
        'vi': ['Lưu', 'Lựu'],
        'ja': ['リュ'],
        'romaji': ['ryu']
    },
    {
        'vi': ['Luyến', 'Luyện'],
        'ja': ['ルーェン'],
        'romaji': ['ru-xen']
    },
    {
        'vi': ['Lục', 'Lự'],
        'ja': ['ルック'],
        'romaji': ['rukku']
    },
    {
        'vi': ['Ly', 'Lý'],
        'ja': ['リ'],
        'romaji': ['ri']
    },
    {
        'vi': ['Nam'],
        'ja': ['ナム'],
        'romaji': ['namu']
    },
    {
        'vi': ['Ninh'],
        'ja': ['ニン'],
        'romaji': ['nin']
    },
    {
        'vi': ['Nông'],
        'ja': ['ノオン'],
        'romaji': ['noon']
    },
    {
        'vi': ['Nữ'],
        'ja': ['ヌ'],
        'romaji': ['nu']
    },
    {
        'vi': ['Nga', 'Ngà'],
        'ja': ['ガー', 'グア'],
        'romaji': ['ga', 'gua']
    },
    {
        'vi': ['Ngân', 'Ngần'],
        'ja': ['ガン'],
        'romaji': ['gan']
    },
    {
        'vi': ['Ngô', 'Ngộ', 'Ngổ'],
        'ja': ['ゴー'],
        'romaji': ['go']
    },
    {
        'vi': ['Ngoan'],
        'ja': ['グアン'],
        'romaji': ['guann']
    },
    {
        'vi': ['Ngọc'],
        'ja': ['ゴック'],
        'romaji': ['gokku']
    },
    {
        'vi': ['Nguyễn', 'Nguyên', 'Nguyện'],
        'ja': ['グエン'],
        'romaji': ['guen']
    },
    {
        'vi': ['Nguyệt'],
        'ja': ['グエット'],
        'romaji': ['guetto']
    },
    {
        'vi': ['Nha', 'Nhã'],
        'ja': ['ニャ'],
        'romaji': ['nya']
    },
    {
        'vi': ['Nhân', 'Nhẫn', 'Nhàn'],
        'ja': ['ニャン'],
        'romaji': ['niyan']
    },
    {
        'vi': ['Nhật', 'Nhất'],
        'ja': ['ニャット'],
        'romaji': ['niyatto']
    },
    {
        'vi': ['Nhi', 'Nhỉ'],
        'ja': ['ニー'],
        'romaji': ['ni-']
    },
    {
        'vi': ['Nhiên'],
        'ja': ['ニエン'],
        'romaji': ['nien']
    },
    {
        'vi': ['Nho'],
        'ja': ['ノー'],
        'romaji': ['no-']
    },
    {
        'vi': ['Như', 'Nhu'],
        'ja': ['ヌー'],
        'romaji': ['nu-']
    },
    {
        'vi': ['Nhung'],
        'ja': ['ヌウン'],
        'romaji': ['nuun']
    },
    {
        'vi': ['Nghi'],
        'ja': ['ギー'],
        'romaji': ['gi-']
    },
    {
        'vi': ['Nghĩa'],
        'ja': ['ギエ'],
        'romaji': ['gie']
    },
    {
        'vi': ['Nghiêm'],
        'ja': ['ギエム'],
        'romaji': ['giemu']
    },
    {
        'vi': ['Phạm'],
        'ja': ['ファム'],
        'romaji': ['famu']
    },
    {
        'vi': ['Phan', 'Phạn'],
        'ja': ['ファン'],
        'romaji': ['fan']
    },
    {
        'vi': ['Phát'],
        'ja': ['ファット'],
        'romaji': ['fatto']
    },
    {
        'vi': ['Phi', 'Phí'],
        'ja': ['フィ'],
        'romaji': ['fi']
    },
    {
        'vi': ['Phú', 'Phù', 'Phụ'],
        'ja': ['フー'],
        'romaji': ['fu']
    },
    {
        'vi': ['Phúc'],
        'ja': ['フック'],
        'romaji': ['fukku']
    },
    {
        'vi': ['Phùng', 'Phụng'],
        'ja': ['フウン'],
        'romaji': ['fuun']
    },
    {
        'vi': ['Phương'],
        'ja': ['フオン'],
        'romaji': ['fuon']
    },
    {
        'vi': ['Phước'],
        'ja': ['フォック'],
        'romaji': ['fokku']
    },
    {
        'vi': ['Phong', 'Phòng', 'Phóng'],
        'ja': ['フォン'],
        'romaji': ['fon']
    },
    {
        'vi': ['Quân', 'Quang', 'Quảng', 'Quan', 'Quản', 'Quán'],
        'ja': ['クアン'],
        'romaji': ['kuan']
    },
    {
        'vi': ['Quách'],
        'ja': ['クァック'],
        'romaji': ['kuxakkau']
    },
    {
        'vi': ['Quế'],
        'ja': ['クエ'],
        'romaji': ['kue']
    },
    {
        'vi': ['Quốc'],
        'ja': ['コック', 'コク'],
        'romaji': ['kokku', 'koku']
    },
    {
        'vi': ['Quý', 'Quy', 'Quỳ'],
        'ja': ['クイ'],
        'romaji': ['kui']
    },
    {
        'vi': ['Quỳnh'],
        'ja': ['クーイン', 'クイン'],
        'romaji': ['kuin']
    },
    {
        'vi': ['Quyên', 'Quyền'],
        'ja': ['クェン'],
        'romaji': ['kuxen']
    },
    {
        'vi': ['Quyết'],
        'ja': ['クエット'],
        'romaji': ['kuetto']
    },
    {
        'vi': ['Sa'],
        'ja': ['サ'],
        'romaji': ['sam']
    },
    {
        'vi': ['San', 'Sản'],
        'ja': ['サン'],
        'romaji': ['san']
    },
    {
        'vi': ['Sam', 'Sâm'],
        'ja': ['サム'],
        'romaji': ['samu']
    },
    {
        'vi': ['Sơn'],
        'ja': ['ソン'],
        'romaji': ['son']
    },
    {
        'vi': ['Song'],
        'ja': ['ソーン'],
        'romaji': ['so-n']
    },
    {
        'vi': ['Sinh'],
        'ja': ['シン'],
        'romaji': ['shin']
    },
    {
        'vi': ['Tạ', 'Tá', 'Tả'],
        'ja': ['タ'],
        'romaji': ['ta']
    },
    {
        'vi': ['Tài', 'Tại'],
        'ja': ['タイ'],
        'romaji': ['tai']
    },
    {
        'vi': ['Tân', 'Tấn', 'Tăng'],
        'ja': ['タン'],
        'romaji': ['tan']
    },
    {
        'vi': ['Tâm'],
        'ja': ['タム'],
        'romaji': ['tamu']
    },
    {
        'vi': ['Tao', 'Tào', 'Táo', 'Tảo'],
        'ja': ['タオ'],
        'romaji': ['tao']
    },
    {
        'vi': ['Tiếp', 'Tiệp'],
        'ja': ['ティエップ'],
        'romaji': ['thieppu']
    },
    {
        'vi': ['Tiến', 'Tiên', 'Tiển'],
        'ja': ['ティエン'],
        'romaji': ['thien']
    },
    {
        'vi': ['Tỷ', 'tỉ', 'ti'],
        'ja': ['ティ'],
        'romaji': ['thi']
    },
    {
        'vi': ['Tin', 'Tín', 'Tính', 'Tình', 'Tịnh'],
        'ja': ['ティン'],
        'romaji':'thin'
    },
    {
        'vi': ['Tiêu', 'Tiều', 'Tiếu', 'Tiếu'],
        'ja': ['ティエウ'],
        'romaji': ['thieu']
    },
    {
        'vi': ['Tô'],
        'ja': ['ト'],
        'romaji': ['to']
    },
    {
        'vi': ['Tống'],
        'ja': ['トン'],
        'romaji': ['ton']
    },
    {
        'vi': ['Toan', 'Toàn', 'Toán', 'Toản'],
        'ja': ['トゥアン'],
        'romaji': ['twuan']
    },
    {
        'vi': ['Tú'],
        'ja': ['ツー', 'トゥ'],
        'romaji': ['Toxu']
    },
    {
        'vi': ['Tuân', 'Tuấn'],
        'ja': ['トゥアン'],
        'romaji': 'twuan'
    },
    {
        'vi': ['Tuệ'],
        'ja': ['トゥエ'],
        'romaji': ['twue']
    },
    {
        'vi': ['Tuyên', 'Tuyền'],
        'ja': 'トゥエン',
        'romaji': 'twuen'
    },
    {
        'vi': ['Tư', 'Tứ', 'Tử', 'Tự'],
        'ja': ['トゥ'],
        'romaji': ['twu']
    },
    {
        'vi': ['Tùng'],
        'ja': ['トゥン'],
        'romaji': ['twunn']
    },
    {
        'vi': ['Tuyết'],
        'ja': ['トゥエット'],
        'romaji': ['twuetto']
    },
    {
        'vi': ['Tường', 'Tưởng'],
        'ja': ['トゥオン'],
        'romaji': ['toxuon']
    },
    {
        'vi': ['Thái'],
        'ja': ['タイ'],
        'romaji': ['tai']
    },
    {
        'vi': ['Thân'],
        'ja': ['タン'],
        'romaji': ['tan']
    },
    {
        'vi': ['Thanh', 'Thành', 'Thạnh', 'Thánh', 'Thảnh'],
        'ja': ['タイン', 'タン'],
        'romaji': ['tain', 'tan']
    },
    {
        'vi': ['Thạch'],
        'ja': ['タック'],
        'romaji': ['takku']
    },
    {
        'vi': ['Thăng', 'Thắng'],
        'ja': ['タン'],
        'romaji': ['tan']
    },
    {
        'vi': ['Thắm', 'Thẩm'],
        'ja': ['タム'],
        'romaji': ['tamu']
    },
    {
        'vi': ['Thao', 'Thạo', 'Thạo', 'Thảo'],
        'ja': ['タオ'],
        'romaji': ['tao']
    },
    {
        'vi': ['Thoa'],
        'ja': ['トーア', 'トア'],
        'romaji': ['to-a', 'toa']
    },
    {
        'vi': ['Thoan', 'Thoản'],
        'ja': ['トアン'],
        'romaji': ['toan']
    },
    {
        'vi': ['Thoại', 'Thoải', 'Thoái'],
        'ja': ['トアイ'],
        'romaji': ['toai']
    },
    {
        'vi': ['Thế', 'Thể'],
        'ja': ['テー'],
        'romaji': ['te-']
    },
    {
        'vi': ['Thị', 'Thi', 'Thy'],
        'ja': ['ティ', 'ティー'],
        'romaji': ['thi', 'thi-']
    },
    {
        'vi': ['Thinh', 'Thịnh'],
        'ja': ['ティン'],
        'romaji': ['thin']
    },
    {
        'vi': ['Thiệp'],
        'ja': ['ティエップ'],
        'romaji': ['thieppu']
    },
    {
        'vi': ['Thiên', 'Thiện'],
        'ja': ['ティエン'],
        'romaji': ['thien']
    },
    {
        'vi': ['Thiêm', 'Thiệm'],
        'ja': ['ティエム'],
        'romaji': ['thiemu']
    },
    {
        'vi': ['Thích'],
        'ja': ['ティック'],
        'romaji': ['thikku']
    },
    {
        'vi': ['Thọ', 'thơ', 'tho'],
        'ja': ['トー'],
        'romaji': ['to-']
    },
    {
        'vi': ['Thông', 'Thống'],
        'ja': ['トーン'],
        'romaji': ['to-n']
    },
    {
        'vi': ['Thu', 'Thụ'],
        'ja': ['トゥー'],
        'romaji': ['tou-']
    },
    {
        'vi': ['Thục'],
        'ja': ['トウック'],
        'romaji': ['toukku']
    },
    {
        'vi': ['Thuận', 'Tuân'],
        'ja': ['トゥアン'],
        'romaji': ['toxuan']
    },
    {
        'vi': ['Thuy', 'Thùy', 'Thúy', 'Thụy'],
        'ja': ['トゥイ'],
        'romaji': ['toui']
    },
    {
        'vi': ['Thuỷ'],
        'ja': ['トゥイ'],
        'romaji': ['toui']
    },
    {
        'vi': ['Thư'],
        'ja': ['トゥー'],
        'romaji': ['tou-']
    },
    {
        'vi': ['Thương', 'Thường', 'Thưởng', 'Thượng'],
        'ja': ['トゥオン'],
        'romaji': ['toxuon']
    },
    {
        'vi': ['Trà'],
        'ja': ['チャ', 'ツア'],
        'romaji': ['cha', 'tsua']
    },
    {
        'vi': ['Trang', 'Tráng'],
        'ja': ['チャン', 'ツアン'],
        'romaji': ['chan', 'tsuan']
    },
    {
        'vi': ['Trân', 'Trần', 'Trấn'],
        'ja': ['チャン', 'ツアン'],
        'romaji': ['chan', 'tsuan']
    },
    {
        'vi': ['Trâm', 'Trầm'],
        'ja': ['チャム'],
        'romaji': ['chamu']
    },
    {
        'vi': ['Trí', 'Chi', 'Tri'],
        'ja': ['チー'],
        'romaji': ['chi-']
    },
    {
        'vi': ['Triển'],
        'ja': ['チエン'],
        'romaji': ['chien']
    },
    {
        'vi': ['Triết'],
        'ja': ['チエット'],
        'romaji': ['chietto']
    },
    {
        'vi': ['Trọng'],
        'ja': ['チョン'],
        'romaji': ['chon']
    },
    {
        'vi': ['Triệu'],
        'ja': ['チエウ'],
        'romaji': ['chieu']
    },
    {
        'vi': ['Trinh', 'Trịnh', 'Trình'],
        'ja': ['チン'],
        'romaji': ['chin']
    },
    {
        'vi': ['Trung'],
        'ja': ['ツーン'],
        'romaji': ['tsu-n']
    },
    {
        'vi': ['Trúc'],
        'ja': ['ツック'],
        'romaji': ['　tsukku']
    },
    {
        'vi': ['Trương', 'Trường'],
        'ja': ['チュオン'],
        'romaji': ['chuon']
    },
    {
        'vi': ['Văn', 'Vận', 'Vân', 'Vấn'],
        'ja': ['ヴァン'],
        'romaji': ['van']
    },
    {
        'vi': ['Vĩnh', 'Vinh'],
        'ja': ['ヴィン'],
        'romaji': ['vinn']
    },
    {
        'vi': ['Vi', 'Vĩ'],
        'ja': ['ヴィ'],
        'romaji': ['vi']
    },
    {
        'vi': ['Việt', 'Viết'],
        'ja': ['ヴィエット'],
        'romaji': ['vietto']
    },
    {
        'vi': ['Võ'],
        'ja': ['ヴォ'],
        'romaji': ['vo']
    },
    {
        'vi': ['Vũ'],
        'ja': ['ヴー'],
        'romaji': ['vu-']
    },
    {
        'vi': ['Vui'],
        'ja': ['ヴーイ'],
        'romaji': ['vui']
    },
    {
        'vi': ['Vương', 'Vượng', 'Vường'],
        'ja': ['ヴオン'],
        'romaji': ['vuon']
    },
    {
        'vi': ['Uông'],
        'ja': ['ウオン'],
        'romaji': ['uon']
    },
    {
        'vi': ['Ứng', 'Ưng'],
        'ja': ['ウン'],
        'romaji': ['un']
    },
    {
        'vi': ['Uyên', 'Uyển'],
        'ja': ['ウエン'],
        'romaji': ['uen']
    },
    {
        'vi': ['Xuân', 'Xoan'],
        'ja': ['スアン'],
        'romaji': ['suan']
    },
    {
        'vi': ['Xuyến', 'Xuyên'],
        'ja': ['スエン'],
        'romaji': ['suen']
    },
    {
        'vi': ['Y', 'Ỷ', 'Ý'],
        'ja': ['イー'],
        'romaji': ['i-']
    },
    {
        'vi': ['Yên', 'Yến'],
        'ja': ['イェン'],
        'romaji': ['ixen']
    }
]

export default transNames;