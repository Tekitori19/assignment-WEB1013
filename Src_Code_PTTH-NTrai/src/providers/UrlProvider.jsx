import { useContext, createContext, useState } from "react";

export const URLContext = createContext()

const Pictures = [
  {
    id: 0,
    url: 'https://images.unsplash.com/photo-1706459006208-6c7ea1a5cfe8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1682685797769-481b48222adf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    url: 'https://plus.unsplash.com/premium_photo-1701207573559-1f14f4f94c3c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1706271952260-a846f6df1048?q=80&w=1349&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1706449511874-6a0ca25fa750?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

const Data = [
  {
    "id": 0,
    "url": 'https://images.unsplash.com/photo-1706459006208-6c7ea1a5cfe8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%,3D%3D',
    "title": "Khai giảng năm học mới 2024-2025",
    "content": `Buổi lễ khai giảng năm học mới 2024-2025 của trường Trung học Phổ thông
     Nguyễn Trãi đã được tổ chức vào sáng hôm nay với một không khí trang trọng và đầy sôi động.
     Sự kiện quan trọng này đã thu hút sự tham gia của các đồng chí lãnh đạo từ Sở Giáo dục và Đào tạo, 
     cùng với sự hiện diện của các vị đại biểu uy tín. Không chỉ có vậy, toàn bộ đội ngũ cán bộ, giáo viên 
     và học sinh của trường cũng đã tham dự để chia sẻ niềm vui và hân hoan trong ngày khai trường trọng đại này.`,
    "author": "Ban Giám hiệu",
    "date": "2024-08-28",
    "tags": ["khai giảng", "năm học mới"]
  },
  {
    "id": 1,
    "url": 'https://images.unsplash.com/photo-1682685797769-481b48222adf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    "title": "Học sinh trường THPT Nguyễn Trãi đạt giải cao trong kỳ thi học sinh giỏi cấp tỉnh",
    "content": `Trong kỳ thi học sinh giỏi cấp tỉnh của năm học 2024-2025, Trường Trung học Phổ thông Nguyễn Trãi
     đã chứng tỏ sự kiên trì, nỗ lực và năng lực vượt trội của các em học sinh. Với một sự chuẩn bị kỹ lưỡng và tinh 
     thần thi đua cao cả, các em đã vượt qua hàng trăm đối thủ để đạt
      được kết quả ấn tượng: 1 giải Nhất, 2 giải Nhì, 3 giải Ba và 5 giải Khuyến khích.

    Đằng sau những thành tích này là hàng ngày các em đã dồn hết tâm huyết vào 
    việc học tập và rèn luyện, không ngừng vươn lên với mục tiêu tự cao và hoàn thiện bản thân. 
    Đồng thời, đội ngũ giáo viên của trường cũng đã đóng góp không nhỏ bằng cách tận tâm hướng dẫn, 
    truyền đạt kiến thức và kỹ năng cho các em, giúp họ phát triển toàn diện không chỉ trong học tập mà còn trong 
    những phẩm chất nhân văn và tinh thần đồng đội.
    
    Thành tựu này không chỉ là niềm vinh dự cho các em học sinh mà còn là minh chứng rõ ràng cho sự đồng lòng,
     sự đoàn kết và sự phấn đấu của cả cộng đồng trường. Nó là kết quả của một quá trình dài, đòi hỏi sự kiên nhẫn, 
     sự hy sinh và sự cam kết không ngừng nghỉ từ tất cả các bên liên quan. Chúng ta hãy cùng chia sẻ niềm vui và tự hào 
     trước thành tích này, và tiếp tục khích lệ, ủng hộ và khuyến khích các em học sinh tiếp tục phấn đấu và vươn lên mới.`,
    "author": "Ban Giám hiệu",
    "date": "2024-11-15",
    "tags": ["học sinh giỏi", "kỳ thi"]
  },
  {
    "id": 2,
    "url": 'https://plus.unsplash.com/premium_photo-1701207573559-1f14f4f94c3c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    "title": "Hoạt động ngoại khóa của trường THPT Nguyễn Trãi",
    "content": `Ngoài việc tập trung vào việc học tập, Trường Trung học Phổ thông Nguyễn Trãi cũng rất chú trọng đến việc tổ chức các hoạt động ngoại khóa nhằm giúp học sinh phát triển 
    toàn diện. Nhận thức rằng sự phát triển không chỉ đến từ kiến thức học thuật mà còn từ sự trải nghiệm, kỹ năng sống và tinh thần đồng đội, nhà trường đã xây dựng và phát triển một
    loạt các hoạt động ngoại khóa đa dạng và phong phú.

    Các hoạt động ngoại khóa này không chỉ giúp học sinh nâng cao kiến thức và kỹ năng, mà còn khuyến khích sự sáng tạo, sự tự tin và lòng tự trọng. Từ các hoạt động văn hóa nghệ thuật, 
    thể thao đến các chương trình xã hội và tình nguyện, học sinh được khuyến khích tham gia và phát triển bản thân theo nhiều phong cách và lĩnh vực khác nhau.
    
    Những trải nghiệm từ các hoạt động ngoại khóa này không chỉ giúp học sinh có cơ hội khám phá và phát triển sở thích cá nhân mà còn tạo ra một môi trường học tập tích cực, sôi động và 
    đa chiều. Đồng thời, chúng cũng góp phần xây dựng tinh thần đoàn kết và tình bạn trong cộng đồng học đường.
    
    Qua việc chú trọng tổ chức các hoạt động ngoại khóa này, nhà trường không chỉ thể hiện cam kết với sự phát triển toàn diện của học sinh mà còn gửi đi thông điệp về ý nghĩa và giá trị 
    của một giáo dục không chỉ trong sách vở mà còn trong cuộc sống hàng ngày.`,
    "author": "Ban Giám hiệu",
    "date": "2024-12-05",
    "tags": ["hoạt động ngoại khóa"]
  },
  {
    "id": 3,
    "url": 'https://images.unsplash.com/photo-1706271952260-a846f6df1048?q=80&w=1349&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    "title": "Ký ức học trò",
    "content": `Những năm tháng học trò thật sự là quãng thời gian đẹp nhất trong cuộc đời mỗi người. Đó không chỉ là những kỷ niệm về những giờ học, bài kiểm tra hay những buổi ra chơi cùng bạn bè, mà còn là hành trình đầy ý nghĩa và giá trị, đánh dấu sự bắt đầu của việc khám phá và hình thành bản thân.

    Trong những năm tháng này, chúng ta không chỉ được trang bị kiến thức mà còn được dạy dỗ về những giá trị nhân văn, lòng trung thành và tinh thần đoàn kết. Bên cạnh sự hướng dẫn của thầy cô, chúng ta cũng có cơ hội xây dựng và củng cố mối quan hệ bạn bè, mối liên kết đầy ý nghĩa và sự ủng hộ không điều kiện.
    
    Thời gian học trò không chỉ là những giờ học căng thẳng mà còn là thời gian của niềm vui, trò cười và những trải nghiệm đáng nhớ. Đó là thời gian chúng ta dễ dàng quên đi những lo âu, căng thẳng của cuộc sống để tận hưởng từng khoảnh khắc trong sự hài lòng và sự mãn nguyện.
    
    Với mỗi người, những năm tháng học trò đều để lại những dấu ấn sâu sắc và khoảnh khắc đáng nhớ, là nền tảng cho sự phát triển và trưởng thành sau này. Đó là khoảng thời gian quý báu, mà không chỉ là kỷ niệm mà còn là nguồn cảm hứng vô tận trong cuộc sống.`,
    "author": "Nguyễn Văn A",
    "date": "2024-01-10",
    "tags": ["ký ức", "học trò"]
  },
  {
    "id": 4,
    "url": 'https://images.unsplash.com/photo-1706449511874-6a0ca25fa750?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    "title": "Lời khuyên cho học sinh cuối cấp",
    "content": `Năm học cuối cấp thực sự là giai đoạn quan trọng đối với mỗi học sinh. Đây là thời điểm quyết định, khi chúng ta đối diện trực tiếp với kỳ thi THPT Quốc gia, một bước ngoặt quan trọng trong hành trình học tập của mình.

    Trong giai đoạn này, sự tập trung ôn luyện trở nên cực kỳ cần thiết. Các em cần phải xác định rõ mục tiêu của mình, lập kế hoạch hợp lý và tận dụng mọi cơ hội để nắm vững kiến thức, rèn luyện kỹ năng và làm quen với cấu trúc của kỳ thi. Đồng thời, việc duy trì sức khỏe tinh thần và thể chất cũng không thể bỏ qua, bởi vì chỉ khi cả hai mặt này được cân bằng, chúng ta mới có thể hoàn thành nhiệm vụ một cách hiệu quả nhất.
    
    Sự hỗ trợ từ gia đình, thầy cô và bạn bè cũng rất quan trọng trong giai đoạn này. Hãy tận dụng những nguồn lực xung quanh để học tập, thảo luận và giải đáp mọi thắc mắc. Đừng ngần ngại nhờ đến sự giúp đỡ khi cần thiết và cùng nhau hỗ trợ, động viên lẫn nhau vượt qua mọi khó khăn.
    
    Dù có thách thức nào, hãy nhớ rằng mỗi bước tiến về phía trước đều đánh dấu sự tiến bộ và sự chuẩn bị tốt hơn cho tương lai. Hãy tin tưởng vào bản thân và không ngừng nỗ lực, vì chỉ có bằng sự cố gắng không ngừng, chúng ta mới có thể đạt được những thành công lớn lao trong cuộc sống.`,
    "author": "Cô giáo Bích Liên",
    "date": "2024-05-15",
    "tags": ["lời khuyên", "học sinh cuối cấp"]
  },
  {
    "id": 5,
    "url": 'https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=1316&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    "title": "Ngày hội hiến máu tình nguyện",
    "content": `Nhằm hưởng ứng và đáp lại lời kêu gọi của Đoàn Thanh niên Cộng sản Hồ Chí Minh về việc hỗ trợ cộng đồng thông qua việc hiến máu tình nguyện, sáng nay, Trường Trung học Phổ thông Nguyễn Trãi đã tổ chức một sự kiện đặc biệt - Ngày hội hiến máu tình nguyện.

    Đây không chỉ là một hoạt động ý nghĩa mà còn là cơ hội để các thành viên của cộng đồng trường góp phần vào công cuộc cứu người, giúp đỡ những người đang gặp khó khăn do thiếu máu. Sự kiện đã thu hút sự tham gia tích cực từ học sinh, giáo viên và nhân viên của trường, tạo nên một không khí đoàn kết và sôi động.
    
    Việc hiến máu không chỉ là cách tốt nhất để cứu sống người khác mà còn là cơ hội để mỗi người thể hiện lòng nhân ái, tình đồng đội và trách nhiệm với cộng đồng. Đồng thời, qua hoạt động này, các em học sinh cũng được giáo dục về ý thức nhân văn và tinh thần xã hội, từ đó phát triển những phẩm chất tốt đẹp trong bản thân.
    
    Ngày hội hiến máu tình nguyện không chỉ là sự kiện mang lại lợi ích sức khỏe mà còn là dịp để toàn thể cộng đồng trường thể hiện tinh thần đoàn kết và lòng nhân ái, góp phần xây dựng một xã hội văn minh, nhân văn và phát triển bền vững.`,
    "author": "Ban Chấp hành Đoàn trường",
    "date": "2024-03-20",
    "tags": ["hiến máu", "tình nguyện"]
  },
  {
    "id": 6,
    "url": 'https://plus.unsplash.com/premium_photo-1705091306854-9085d0074911?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    "title": "Giao lưu văn nghệ chào mừng Ngày Nhà giáo Việt Nam",
    "content": `Nhân dịp kỷ niệm Ngày Nhà giáo Việt Nam 20/11, tối qua, Trường Trung học Phổ thông Nguyễn Trãi đã tổ chức một chương trình giao lưu văn nghệ sôi động và ý nghĩa, nhằm gửi đến những lời tri ân và lòng biết ơn đến tất cả các thầy cô giáo, những người đã cống hiến hết mình cho sự nghiệp giáo dục và nuôi dưỡng tâm hồn cho thế hệ trẻ.

    Chương trình đã thu hút sự tham gia nhiệt tình từ cả học sinh và đội ngũ giáo viên, với những tiết mục văn nghệ đa dạng và phong phú. Từ những tiết mục ca nhạc, vũ đạo sôi động đến những tiết mục hài hước, dí dỏm, tất cả đều tạo nên một không khí vui tươi và ấm áp.
    
    Qua chương trình giao lưu văn nghệ này, không chỉ là dịp để các em học sinh thể hiện tài năng và sự sáng tạo của mình, mà còn là cơ hội để cả trường thể hiện lòng biết ơn và tôn vinh công lao của các nhà giáo. Đồng thời, chương trình cũng mang lại những giây phút giải trí và thư giãn sau những ngày học tập và làm việc căng thẳng.
    
    Qua mỗi tiết mục biểu diễn, mỗi lời chúc mừng và mỗi tấm thẻ hoa được trao, chúng ta càng thêm nhận ra giá trị to lớn của người thầy, người cô trong cuộc sống của mỗi chúng ta. Chương trình giao lưu văn nghệ đã là một cách tuyệt vời để tôn vinh họ và thể hiện lòng biết ơn sâu sắc từ cả trái tim của toàn bộ cộng đồng trường.`,
    "author": "Ban Giám hiệu",
    "date": "2024-11-19",
    "tags": ["văn nghệ", "Ngày Nhà giáo Việt Nam"]
  },
  {
    "id": 7,
    "url": 'https://images.unsplash.com/photo-1680432534527-16a94195daf8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    "title": "Tìm hiểu về văn hóa truyền thống Việt Nam",
    "content": `Nhằm mục đích giáo dục và truyền đạt tinh thần yêu nước và lòng tự hào dân tộc cho học sinh, Trường Trung học Phổ thông Nguyễn Trãi đã tổ chức một buổi chuyên đề đặc biệt, tập trung vào việc tìm hiểu về văn hóa truyền thống Việt Nam.

    Buổi chuyên đề này không chỉ là cơ hội để học sinh hiểu rõ hơn về lịch sử và văn hóa đất nước mình mà còn là dịp để họ cảm nhận và tôn vinh những giá trị văn hóa sâu sắc của dân tộc Việt Nam. Từ những nét văn hóa đặc trưng như áo dài, đền chùa, đến những truyền thống, nghệ thuật dân gian, mỗi tiết mục trong buổi chuyên đề đều được trình bày một cách sinh động và sâu sắc.
    
    Cùng với việc tìm hiểu về văn hóa truyền thống, buổi chuyên đề còn tạo ra một không gian trao đổi, thảo luận giữa học sinh và giáo viên, từ đó mở ra những góc nhìn mới, khám phá sâu hơn về bản sắc văn hóa của dân tộc Việt Nam. Đồng thời, qua các hoạt động thực tế như trải nghiệm trang phục truyền thống, thưởng thức các món ăn dân dã, học sinh cũng có cơ hội trải nghiệm và gần gũi hơn với di sản văn hóa độc đáo của quê hương.
    
    Buổi chuyên đề về văn hóa truyền thống Việt Nam không chỉ là một hoạt động giáo dục mà còn là cơ hội để góp phần xây dựng và nuôi dưỡng tình yêu quê hương, tình yêu dân tộc trong lòng các em học sinh. Đồng thời, nó cũng là bước đi quan trọng trong việc gìn giữ và phát huy giá trị văn hóa truyền thống của dân tộc Việt Nam.`,
    "author": "Cô giáo Thu Hà",
    "date": "2024-10-10",
    "tags": ["văn hóa", "truyền thống"]
  },
]

const UrlProvider = ({ children }) => {
  const [datas, setDatas] = useState(Data)

  return (
    <URLContext.Provider value={{ datas }}>
      {children}
    </URLContext.Provider>
  )
}

export default UrlProvider;

export const useURLContext = () => useContext(URLContext)
