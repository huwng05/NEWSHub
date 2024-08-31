window.onload = function() {
    const colors = {
        news: "#EE4E4E",
        world: "#FF8A08",
        business:"#40679E",
        law:"#6C4E31",
        science:"#295F98",
        entertainment:"#FFD35A",
        sport:"#80AF81",
        education:"#F27BBD",
        health:"#6EACDA",
        life:"#538392",
        travel:"#615EFC",
        video: "#E78895",
        normal:"#3795BD",
    };

    let subject = ['news','business','law','science','world','entertainment','sport','education','health','life','travel','video']
    let subject_item = {
        news: ['Thời sự','Chính trị','Dân sinh','Giao thông'],
        world: ['Thế giới','Tư liệu','Phân tích','Quân sự'],
        video: ['Video','Nhịp sống', 'Pháp luật', 'Giải trí', 'Khoa học'],
        business:['Kinh doanh', 'Quốc tế', 'Doanh nghiệp', 'Chứng khoảng','Ebook'],
        law:['Pháp luật', 'Hồ sơ phá án', 'Tư vẫn', 'Video'],
        science:['Khoa học','Khoa học trong nước', 'Tin tức', 'Phát minh', 'Chỉ số PII'],
        entertainment:['Giải trí','Giới sao', 'Sách', 'Video', 'Phim'],
        sport:['Thể thao', 'Bóng đá', 'Lịch thi đấu', 'Marathon','Tennis'],
        education:['Giáo dục','Tin tức', 'Tuyển sinh', 'Chân dung', 'Du học'],
        health:['Sức khỏe', 'Tin tức', 'Các bệnh', 'Sống khỏe','Vaccine'],
        life:['Đời sống', 'Nhịp sống', 'Tổ ấm'],
        travel:['Du lịch', 'Điểm đến', 'Ẩm thực', 'Dấu chân'],
    };
    const contents = {
        news : {
            0:{img:`00`,title: `Vụ rơi tiêm kích F-16 giáng đòn vào quân đội Ukraine`,footer: `Thời sự`,content:`Vụ rơi F-16 không chỉ gây tổn thất lớn về người và khí tài, mà còn ảnh hưởng sĩ khí của quân đội Ukraine khi họ đang đối mặt nhiều áp lực.`},
            1:{img:`01`,title: `Dòng xe ùn ứ ở cửa ngõ Hà Nội, TP HCM trước kỳ nghỉ lễ`,footer: `Thời sự`,content: `Cửa ngõ Hà Nội, TP HCM đông đúc người, xe đổ về quê trước dịp nghỉ lễ Quốc khánh, chiều 30/8.Lúc 15h, dòng xe tấp nập, nối dài hơn 2 km trên đường Vành đai 3 trên cao đoạn qua đường Nguyễn Xiển và Nghiêm Xuân Yêm, Hà Nội.`},
            2: {img:`02`,title: `Nhiều chuyến bay còn trống chỗ dịp 2/9`,footer: `Thời sự`,content: `Khảo sát của Cục Hàng không Việt Nam cho thấy các chuyến bay sớm hoặc tối muộn dịp 2/9 còn nhiều chỗ giá rẻ, trong khi giá vé bay giờ đẹp đã tăng 20-40%.`},
            3: {img:`03`,title: `Ba nam sinh nhận huy hiệu Tuổi trẻ dũng cảm vì cứu hai người đuối nước`,footer: `Thời sự`,content: `Ba nam sinh lớp 8 Nguyễn Thành Công, Nguyễn Trung Mạnh, Nguyễn Anh Duẫn, được Trung ương Đoàn tặng huy hiệu Tuổi trẻ dũng cảm vì cứu sống hai chị em dưới sông.`},
            4: {img:`04`,title: `Đèo Bảo Lộc nguy cơ sạt lở`,footer: `Thời sự`,content: `Sau những trận mưa lớn kéo dài khiến đất đá trôi xuống, tuyến đèo Bảo Lộc dẫn lên TP Đà Lạt nguy cơ sạt lở, chính quyền đang tập trung khắc phục.`},
            5: {img:`05`,title: `Nhiều nơi mưa vào chiều tối dịp nghỉ lễ 2/9`,footer: `Thời sự`,content: `Trung tâm Dự báo Khí tượng Thủy văn quốc gia cho biết trong bốn ngày nghỉ lễ Quốc khánh 31/8-3/9, miền Bắc ban ngày trời nắng, chiều tối và đêm có mưa rào, giông.`},
            6: {img:`06`,title: `TP HCM có thêm 1.500 căn nhà ở xã hội`,footer: `Thời sự`,content: `Dự án nhà ở xã hội Lê Thành Tân Kiên ở huyện Bình Chánh hoàn thành sẽ cung cấp 1.445 căn hộ diện tích 45-50 m2 cho người thu nhập thấp.`},
        },

        business: {
            0: {img:`00`,title: `Bảo hiểm xe máy bắt buộc bồi thường gần 42 tỷ nửa đầu năm`,footer: `Kinh doanh`,content: `Tỷ lệ bồi thường bảo hiểm bắt buộc trách nhiệm dân sự của chủ xe cơ giới chiếm chưa đến 10% (gần 42 tỷ) trên doanh thu hơn 430 tỷ đồng nửa đầu năm nay.`},
            1: {img:`01`,title: `Thêm hai hãng hàng không được giao máy bay 'Made in China`,footer: `Kinh doanh`,content: `Air China và China Southern Airlines trở thành hai hãng tiếp theo tại Trung Quốc chuẩn bị vận hành máy bay chở khách C919 do nước này tự phát triển.`},
            2: {img:`02`,title: `Công ty của bầu Đức thu hơn 2.000 tỷ đồng từ bán trái cây`,footer: `Kinh doanh`,content: `Nửa đầu năm, Hoàng Anh Gia Lai (HAG) ghi nhận doanh thu từ trái cây cao kỷ lục hơn 2.000 tỷ đồng, tăng 57% so với cùng kỳ năm ngoái.`},
            3: {img:`03`,title: `Vay mua nhà với lãi suất từ 5,5%`,footer: `Kinh doanh`,content: `Ngân hàng TMCP Tiên Phong (TPBank) đang triển khai gói vay với lãi suất ưu đãi từ 5,5%, nhằm hỗ trợ khách hàng dễ dàng tiếp cận vốn đầu tư bất động sản.`},
            4: {img:`04`,title: `Lượng triệu phú tiền số tăng gần gấp đôi trong một năm`,footer: `Kinh doanh`,content: `Lượng người sở hữu tài sản tiền số từ 1 triệu USD trở lên tăng gần gấp đôi trong một năm, nhờ đồng tiền này tăng giá mạnh suốt thời gian qua.`},
            5: {img:`05`,title: `Ông Phạm Nhật Vượng tài trợ gần 3.300 tỷ đồng cho VinFast`,footer: `Kinh doanh`,content: `Chủ tịch Vingroup rót thêm gần 3.300 tỷ đồng cho VinFast dưới dạng khoản hỗ trợ cho công ty con trong nửa đầu năm 2024, theo Báo cáo tài chính kiểm toán.`},
        },

        law: {
            0: {img:`00`,title: `7 người bị cáo buộc thao túng thị trường chứng khoán`,footer: `Pháp luật`,content: `Trần Bình Minh cùng 6 người bị cáo buộc lôi kéo nhiều nhà đầu tư mua bán mã cổ phiếu CMS, đẩy giá tăng rồi bán ra, gây ảnh hưởng cung cầu và giá chứng khoán.`},
            1: {img:`01`,title: `Cựu cán bộ công an chiếm đoạt tiền của 'cát tặc' bị phạt 9 năm tù`,footer: `Pháp luật`,content: `Trịnh Văn Hưng, cựu cán bộ Bộ Công an, không thừa nhận lừa "chạy" án cho người cầm đầu đường dây khai thác cát lậu, song tòa xác định có đủ căn cứ buộc tội.`},
            2: {img:`02`,title: `Người đàn ông 'ăn vụng' đâm chết tình nhân trong cơn ghen`,footer: `Pháp luật`,content: `Nguyễn Hữu Xuân trong lúc ngoại tình đã ghen khi biết tình nhân có bạn trai mới, lao đến đâm cả hai khiến một người tử vong.`},
            3: {img:`03`,title: `Kẻ sát hại người thu mua hải sản bị phạt 26 năm tù`,footer: `Pháp luật`,content: `Nguyễn Hoàng Anh, 30 tuổi, bị xác định chém tử vong người thu mua cua, cướp tài sản, dù mâu thuẫn trước đó đã được dàn xếp.`},
            4: {img:`04`,title: `Tổng giám đốc Công ty cổ phần sữa Hà Lan Nguyễn Trung Vương bị bắt`,footer: `Pháp luật`,content: `Ông Nguyễn Trung Vương, Tổng giám đốc Công ty cổ phần sữa Hà Lan, bị cáo buộc sản xuất, kinh doanh thực phẩm kém chất lượng, chỉ tiêu chất lượng đạt dưới 70% so với công bố.`},
            5: {img:`05`,title: `111 người đòi nợ thuê kiểu 'xã hội đen' cho các ngân hàng lĩnh án`,footer: `Pháp luật`,content: `Trước buổi tuyên án Trần Văn Châu, Phó giám đốc Công ty Luật Pháp Việt và 110 bị cáo, rất đông người thân của họ tập hợp trước cổng tòa.`},
            },

        science: {
            0: {img:`00`,title: `Hầm chôn chất thải hạt nhân đầu tiên trên thế giới`,footer: `Khoa học`,content: `Phần Lan sẽ sớm trở thành nước đầu tiên trên thế giới tìm cách chôn chất thải hạt nhân trong nấm mồ sâu dưới lòng đất, nơi có thể lưu trữ nó trong 100.000 năm tới.`},
            1: {img:`01`,title: `Tận dụng tiềm năng ứng dụng công nghệ phát triển kinh tế Quảng Ngãi`,footer: `Khoa học`,content: `Bộ trưởng Khoa học và Công nghệ cho rằng Quảng Ngãi cần đẩy mạnh ứng dụng công nghệ ở các khu vực tiềm năng như đảo Lý Sơn, khu kinh tế Dung Quất, các khu công nghiệp và doanh nghiệp tại địa phương.`},
            2: {img:`02`,title: `Khai mạc Ngày hội khởi nghiệp đổi mới sáng tạo Đà Nẵng 2024`,footer: `Khoa học`,content: `Ngày hội Khởi nghiệp đổi mới sáng tạo thành phố Đà Nẵng thực hiện nhằm kết nối và thúc đẩy hệ sinh thái khởi nghiệp sáng tạo, hỗ trợ các dự án khởi nghiệp.`},
            3: {img:`03`,title: `Vinh danh 135 trí thức khoa học công nghệ tiêu biểu 2024`,footer: `Khoa học`,content: `Những cá nhân được vinh danh dựa trên thành tích xuất sắc trong hoạt động nghiên cứu khoa học, phát triển công nghệ và công tác vận động trí thức.`},
            4: {img:`04`,title: `Tận dụng nguồn nhiệt tuần hoàn để hầm than ở Miền Tây`,footer: `Khoa học`,content: `Viện Khoa học và Công nghệ Việt Nam - Hàn Quốc (Vkist) đề xuất chọn một số hộ thí điểm giải pháp tận dụng nguồn nhiệt tuần hoàn phục vụ sản xuất than để giảm phát thải khí CO, tiết kiệm chi phí.`},
            5: {img:`05`,title: `Phát hiện gene chủ đạo hỗ trợ điều trị bệnh Alzheimer`,footer: `Khoa học`,content: `TS Võ Văn Giàu, 38 tuổi, cùng cộng sự, phát hiện ra gene chủ đạo ngăn chặn tình trạng chết tế bào não, mở đường cho chẩn đoán và điều trị bệnh Alzheimer.`},
        },

        world: {
            0: {img:`00`,title: `Nga không lo Mông Cổ thực hiện lệnh bắt Tổng thống Putin`,footer: `Thế giới`,content: `Điện Kremlin khẳng định đã thảo luận kỹ lưỡng "mọi phương diện" cho chuyến thăm của Tổng thống Nga đến Mông Cổ.`},
            1: {img:`01`,title: `Cách tiêm kích F-16 Ukraine đối phó tên lửa, UAV Nga`,footer: `Thế giới`,content: `Tiêm kích F-16 được đánh giá là vũ khí hiệu quả để giúp Ukraine đánh chặn các mục tiêu nhỏ, bay thấp như tên lửa hành trình, UAV Nga.`},
            2: {img:`02`,title: `Những người Israel tuyệt vọng bên hàng rào biên giới Gaza`,footer: `Thế giới`,content: `Gia đình nhiều con tin Israel biểu tình gần biên giới, thậm chí đòi xông qua hàng rào biên giới vào Gaza, với hy vọng đưa người thân trở về.`},
            3: {img:`03`,title: `EU muốn tăng huấn luyện binh sĩ Ukraine`,footer: `Thế giới`,content: `EU muốn huấn luyện thêm nhiều binh sĩ Ukraine nhưng vẫn tranh cãi về việc có nên cung cấp hỗ trợ ngay trên lãnh thổ nước này hay không.`},
            4: {img:`04`,title: `Canh bạc của Ukraine trước thềm bầu cử tổng thống Mỹ`,footer: `Thế giới`,content: `Tổng thống Zelensky dường như muốn dốc sức cải thiện vị thế Ukraine trên chiến trường, trước khi bầu cử tổng thống Mỹ có thể đảo lộn mọi thứ.`},
            5: {img:`05`,title: `Ông Macron thừa nhận đã trao quốc tịch Pháp cho CEO Telegram`,footer: `Thế giới`,content: `Tổng thống Macron cho hay ông đã quyết định cấp quốc tịch Pháp cho CEO Telegram Pavel Durov vài năm trước, tin rằng điều này "tốt cho đất nước".`},
        },

        entertainment: {
            0: {img:`00`,title: `Chuyện tình mỹ nam Thái và minh tinh hơn anh 16 tuổi`,footer: `Giải trí`,content: `Nonkul Chanon - nam chính "Thiên tài bất hảo" - theo đuổi Aff Taksaorn, minh tinh hơn anh 16 tuổi và từng ly hôn, có một con riêng.`},
            1: {img:`01`,title: `Tài tử 'Bến Thượng Hải' tránh cám dỗ ngoại tình`,footer: `Giải trí`,content: `Diễn viên Hong Kong Lữ Lương Vỹ, đóng "Bến Thượng Hải", cho biết tránh xa các cám dỗ ở làng giải trí để giữ gia đình.`},
            2: {img:`02`,title: `Ronaldo đeo trang sức đính kim cương`,footer: `Giải trí`,content: `Cristiano Ronaldo đeo khuyên tai, cài áo đính kim cương khi nhận danh hiệu "Cầu thủ ghi nhiều bàn nhất lịch sử Champions League", ngày 29/8.`},
            3: {img:`03`,title: `Angelina Jolie khóc khi nhận tràng pháo tay tám phút`,footer: `Giải trí`,content: `Minh tinh Angelina Jolie xúc động khi khán giả đón nhận phim "Maria", có cô đóng chính, ở Liên hoan phim Venice 2024.`},
            4: {img:`04`,title: `Hyun Bin được khen 'đẹp như tạc tượng'`,footer: `Giải trí`,content: `Hyun Bin - tài tử phim "Hạ cánh nơi anh" - được khen phong độ, "đẹp như tạc tượng" khi dự sự kiện ở Seoul, Hàn Quốc, ngày 30/8.`},
            5: {img:`05`,title: `Trần Hiểu, Trần Nghiên Hy ly thân`,footer: `Giải trí`,content: `Tài tử Trung Quốc Trần Hiểu và vợ, Trần Nghiên Hy, không sống chung một năm qua, chờ làm thủ tục ly hôn.`},
        },

        sport: {
            0: {img:`00`,title: ``,footer: `Thể thao`,content: ``},
            1: {img:`01`,title: ``,footer: `Thể thao`,content: ``},
            2: {img:`02`,title: ``,footer: `Thể thao`,content: ``},
            3: {img:`03`,title: ``,footer: `Thể thao`,content: ``},
            4: {img:`04`,title: ``,footer: `Thể thao`,content: ``},
            5: {img:`05`,title: ``,footer: `Thể thao`,content: ``},
        },

        education: {
            0: {img:`00`,title: ``,footer: `Giáo dục`,content: ``},
            1: {img:`01`,title: ``,footer: `Giáo dục`,content: ``},
            2: {img:`02`,title: ``,footer: `Giáo dục`,content: ``},
            3: {img:`03`,title: ``,footer: `Giáo dục`,content: ``},
            4: {img:`04`,title: ``,footer: `Giáo dục`,content: ``},
            5: {img:`05`,title: ``,footer: `Giáo dục`,content: ``},
        },

        health: {
            0: {img:`00`,title: ``,footer: `Sức khỏe`,content: ``},
            1: {img:`01`,title: ``,footer: `Sức khỏe`,content: ``},
            2: {img:`02`,title: ``,footer: `Sức khỏe`,content: ``},
            3: {img:`03`,title: ``,footer: `Sức khỏe`,content: ``},
            4: {img:`04`,title: ``,footer: `Sức khỏe`,content: ``},
            5: {img:`05`,title: ``,footer: `Sức khỏe`,content: ``},
        },

        life: {
            0: {img:`00`,title: ``,footer: `Đời sống`,content: ``},
            1: {img:`01`,title: ``,footer: `Đời sống`,content: ``},
            2: {img:`02`,title: ``,footer: `Đời sống`,content: ``},
            3: {img:`03`,title: ``,footer: `Đời sống`,content: ``},
            4: {img:`04`,title: ``,footer: `Đời sống`,content: ``},
            5: {img:`05`,title: ``,footer: `Đời sống`,content: ``},
            6: {img:`06`,title: ``,footer: `Đời sống`,content: ``},
            7: {img:`07`,title: ``,footer: `Đời sống`,content: ``},
        },

        travel: {
            0: {img:`00`,title: ``,footer: `Du lịch`,content: ``},
            1: {img:`01`,title: ``,footer: `Du lịch`,content: ``},
            2: {img:`02`,title: ``,footer: `Du lịch`,content: ``},
            3: {img:`03`,title: ``,footer: `Du lịch`,content: ``},
            4: {img:`04`,title: ``,footer: `Du lịch`,content: ``},
            5: {img:`05`,title: ``,footer: `Du lịch`,content: ``},
            6: {img:`06`,title: ``,footer: `Du lịch`,content: ``},
            7: {img:`07`,title: ``,footer: `Du lịch`,content: ``},
        },
    }

    function addHotNews() {
        const newshubImg = document.getElementById('img_list');
        const newshubContent = document.getElementById('list_content');
        let listHTML_img = ``;
        let listHTML_content = ``;
        for(let i = 0; i <= 5; i++) {
            listHTML_img += `<li class="newshub_img_item"><img src="./image/img_news/imgs_main/${subject[i]}_05.jpg" alt=""></li>`;
            listHTML_content += `<li class="newshub_content_item">
                                    <h2 class="newshub_content_title">${contents[subject[i]][5]['title']}</h2>
                                    <p class="newshub_content_body">${contents[subject[i]][5]['content']}</p>
                                    <p class="newshub_content_footer">${contents[subject[i]][5]['footer']} <i class="hot_content_cmt fa-solid fa-comment"></i> 54</p>
                                </li>
                                `;
        }
        newshubImg.innerHTML=listHTML_img;
        newshubContent.innerHTML=listHTML_content;
    }
    addHotNews();

    function changeNewsHot() {
        const slider = document.getElementsByClassName('newshub_img')[0];
        const slides = slider.getElementsByClassName('newshub_img_item');
        const slider_content = document.getElementsByClassName('newshub_content')[0];
        const slides_content = slider_content.getElementsByClassName('newshub_content_item');
        const totalSlide = slides.length;
        const transition = 500;
        let index = 0;
        if(index == 0) {
            slides_content[index].classList.add('newshub_present')
        }
        function scrollUp() {
            slides_content[index].classList.remove('newshub_present')
            index = (index - 1) % totalSlide;
            slides_content[index].classList.add('newshub_present')
            if(index == 0) {
                document.getElementById('scroll_up').style.display = 'none';
            } 
            else {
                document.getElementById('scroll_up').style.display = 'block';
            }
            if(index == slides.length-1) {
                document.getElementById('scroll_down').style.visibility = 'hidden';
            } 
            else {
                document.getElementById('scroll_down').style.visibility = 'visible';
            }
            const offset = -index*100/slides.length;
            const offset_content = -index*50;
            slider.style.transition = `transform ${transition}ms linear`;
            slider.style.transform = `translateY(${offset}%)`;
            slider_content.style.transition = `transform ${transition}ms linear`;
            slider_content.style.transform =  `translateY(${offset_content}%)`;
        }

        function scrollDown() {
            slides_content[index].classList.remove('newshub_present')
            index = (index + 1) % totalSlide;
            slides_content[index].classList.add('newshub_present')
            if(index == slides.length-1) {
                document.getElementById('scroll_down').style.visibility = 'hidden';
            } 
            else {
                document.getElementById('scroll_down').style.visibility = 'visible';
            }
            if(index == 0) {
                document.getElementById('scroll_up').style.visibility = 'none';
            } 
            else {
                document.getElementById('scroll_up').style.display = 'block';
            }
            const offset = -index*100/slides.length;
            const offset_content = -index*50;
            slider.style.transition = `transform ${transition}ms linear`;
            slider.style.transform = `translateY(${offset}%)`;
            slider_content.style.transition = `transform ${transition}ms linear`;
            slider_content.style.transform =  `translateY(${offset_content}%)`;
        }

        document.getElementById('scroll_up').addEventListener('click',scrollUp);
        document.getElementById('scroll_down').addEventListener('click',scrollDown);
    }
    changeNewsHot();

    function scrollMenu() {
        const menu = document.getElementById('menu');
        window.addEventListener('scroll', function() {
            const scrollTop = document.documentElement.scrollTop;
            if(scrollTop > menu.offsetTop + 15) {
                menu.classList.remove('menu_scroll_delete')
                menu.classList.add('menu_scroll');
                this.document.getElementById('home').style.display = 'none';
                this.document.getElementById('new').style.display = 'flex';
                menu.style.boxShadow = '0px 6px 6px 1px var(--border-color)';
                menu.style.borderRadius = '0 0 10px 10px';
            }
            else {
                menu.classList.remove('menu_scroll');
                menu.classList.add('menu_scroll_delete')
                this.document.getElementById('home').style.display = 'block';
                this.document.getElementById('new').style.display = 'none';
                menu.style.boxShadow = '0px 1px 1px 1px var(--border-color)'
                menu.style.borderRadius = '44px';
            }
        })
    }
    scrollMenu();

    function clock() {
        function updateClock (){
            const now = new Date();
            const hour = String(now.getHours()).padStart(2, '0');
            const min = String(now.getMinutes()).padStart(2, '0');
            document.getElementById('hour').textContent = hour;
            document.getElementById('min').textContent = min;
        }
        setInterval(updateClock,60000);
        updateClock();
    }
    clock();

    function addListMenu() {
        const containers = document.getElementById('menu_footer').outerHTML;
        const container = document.getElementById('menu_container');
        let listHTML = ``;
        for(let i = 0; i < subject.length; i++) {
            listHTML +=`<ul class="menu_container_list">
                            <h3 class="menu_container_title"><a href="#" class="${subject[i]}">${subject_item[subject[i]][0]}</a></h3>
                        `;
            for(let j = 1; j < subject_item[subject[i]].length;j++) {
                listHTML += `   <li class="menu_container_item"><a href="#" class="normal">${subject_item[subject[i]][j]}</a></li>
                            `
            }
            listHTML += `</ul>`
        }
        listHTML += containers;
        container.innerHTML = listHTML;
    }
    addListMenu();

    function listMenu() {
        let count = false;
        const xmark = document.getElementById('xmark');
        const list = document.getElementsByClassName('menu_bars')[0];
        list.addEventListener('click', function() {
            if(count) {
                document.getElementsByClassName('menu_container')[0].style.display = 'none';
                count = false;
            }
            else {
                document.getElementsByClassName('menu_container')[0].style.display = 'block';
                count = true;
            }

        });

        xmark.addEventListener('click', function() {
            document.getElementsByClassName('menu_container')[0].style.display = 'none';
                count = false;
        })
    }
    listMenu();


    function addNewsMain() {
        const newhubSubject = document.getElementById('subject_main');
        let listHTML_main = ``;
        for(let i = 0; i < 3; i++) {
            listHTML_main += `<div class="newshub_topic">
                                <ul class="newshub_subjects">
                                    <li class="newshub_subjects_item"><a href="#" style="color:${colors[subject[i]]}!important">${subject_item[subject[i]][0]}</a></li>
                                    <li class="newshub_subjects_item"><a href="#" class="normal">${subject_item[subject[i]][1]}</a></li>
                                    <li class="newshub_subjects_item"><a href="#" class="normal">${subject_item[subject[i]][2]}</a></li>
                                    <li class="newshub_subjects_item"><a href="#" class="normal">${subject_item[subject[i]][3]}</a></li>
                                </ul>

                                <div class="newshub_subject">
                                    <div class="newshub_subject_content">
                                        <img class="img_main" alt="" src="./image/img_news/imgs_main/${subject[i]}_0${0}.jpg">
                                        <div class="content">
                                            <h3><a href="#" class="${subject[i]}">${contents[subject[i]][0]['title']}</a></h3>
                                            <p class="content_body"><a href="#" class="normal">${contents[subject[i]][0]['content']}</a></p>
                                            <p class="hot_content_footer">
                                                ${contents[subject[i]][0]['footer']}
                                                <i class="hot_content_cmt fa-solid fa-comment"></i>
                                                <span>54</span>
                                            </p>
                                        </div>
                                        <div class="content content_right">
                                            <h3><a href="#" class="${subject[i]}">${contents[subject[i]][1]['title']}</a></h3>
                                            <p class="content_body"><a href="#" class="normal">${contents[subject[i]][1]['content']}</a></p>
                                            <p class="hot_content_footer">
                                                ${contents[subject[i]][1]['footer']}
                                                <i class="hot_content_cmt fa-solid fa-comment"></i>
                                                <span>54</span>
                                            </p>
                                        </div>
                                    </div>

                                    <ul class="newshub_subjects_list">
                                        <li class="newshub_subjects_sup"><a href="#" class="${subject[i]}">${contents[subject[i]][2]['title']}</a></li>
                                        <li class="newshub_subjects_sup"><a href="#" class="${subject[i]}">${contents[subject[i]][3]['title']}</a></li>
                                        <li class="newshub_subjects_sup"><a href="#" class="${subject[i]}">${contents[subject[i]][4]['title']}</a></li>
                                    </ul>
                                </div>
                            </div>
                                `
        }
        newhubSubject.innerHTML = listHTML_main;

        const random = [[2,4],[1,3],[2,5],[3,2],[4,2],[3,3],[2,3],[1,2]]
        const listNews = document.getElementById('newshub_list');
        let listNewsHTML = ``;
        for(let i = 0; i < 8; i++) {
            listNewsHTML += `<li class="newshub_sp_news_item">
                            <h3><a href="#" class="${subject[random[i][0]]}">${contents[subject[random[i][0]]][random[i][1]]['title']}</a></h3>
                            <div class="news_item_content">
                                <img class="content_img" src="./image/img_news/imgs_main/${subject[random[i][0]]}_${contents[subject[random[i][0]]][random[i][1]]['img']}.jpg" alt="">
                                <div class="content_topic">
                                    <p><a href="#" class="normal">${contents[subject[random[i][0]]][random[i][1]]['content']}</a></p>
                                    <p class="hot_content_footer">
                                        ${contents[subject[random[i][0]]][random[i][1]]['footer']}
                                        <i class="hot_content_cmt fa-solid fa-comment"></i>
                                        <span>54</span>
                                    </p>
                                </div>
                            </div>
                        </li>
                        `;
        }
        listNews.innerHTML = listNewsHTML;

        let listBeside = document.getElementById('beside');
        let besideHTML = ``;
        for(let i = 0; i < 3; i++) {
            besideHTML += `<div class="newshub_beside_sections">
                                <div class="newshub_beside_subjects">
                                    <ul class="newshub_subjects">
                                        <li class="newshub_subjects_item"><a href="#" style="color:${colors[subject[i]]}!important">${subject_item[subject[i]][0]}</a></li>
                                    </ul>
                                </div>
                                <div class="newshub_beside_main_section">
                                    <img src="./image/img_news/imgs_main/${subject[i]}_0${3}.jpg" alt="img">
                                    <h3><a href="#" class="${subject[i]}">${contents[subject[i]][3]['title']}</a></h3>
                                    <p><a href="#" class="normal">${contents[subject[i]][3]['content']}</a></p>
                                </div>
                                <div class="newshub_beside_main_section">
                                    <h3><a href="#" class="${subject[i]}">${contents[subject[i]][4]['title']}</a></h3>
                                    <p><a href="#" class="normal">${contents[subject[i]][4]['content']}</a></p>
                                </div>
                            </div>
                        `
        }
        listBeside.innerHTML = besideHTML;
    }
    addNewsMain();

    function changeColorSubject() {
        let menuItems = document.getElementsByTagName('a');
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].addEventListener('mouseover', function() {
                this.style.color = colors[this.className];
            });
            menuItems[i].addEventListener('mouseout', function() {
                if(this.className != '') {
                    this.style.color = '#000';
                }
            });
        }
    }
    changeColorSubject();

    function changeColorTitle() {
        const subjectList = document.getElementsByClassName('newshub_subjects');
        for(value of subjectList) {
            let subjectItem = value.getElementsByClassName('newshub_subjects_item')[0];
            link = subjectItem.getElementsByTagName('a')[0];
            subjectItem.style.setProperty('--after-bg-color',link.style.color);
        }
    }
    changeColorTitle();
}