window.onload = function() {
    const colors = {
        news: "#EE4E4E",
        world: "#FF8A08",
        video: "#E78895",
        business:"#40679E",
        law:"#6C4E31",
        science:"#295F98",
        entertainment:"#FFD35A",
        sport:"#80AF81",
        education:"#F27BBD",
        health:"#6EACDA",
        life:"#538392",
        travel:"#615EFC",
        normal:"#3795BD"
    };

    function changeNewsHot() {
        const slider = document.getElementsByClassName('newshub_img')[0];
        const slides = slider.getElementsByClassName('newshub_img_item');
        const slider_content = document.getElementsByClassName('newshub_content')[0];
        const slides_content = slider_content.getElementsByClassName('newshub_content_item');
        const totalSlide = slides.length;
        const transition = 500;
        let index = 0;
        
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
            }
            else {
                menu.classList.remove('menu_scroll');
                menu.classList.add('menu_scroll_delete')
                this.document.getElementById('home').style.display = 'block';
                this.document.getElementById('new').style.display = 'none';
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
        let subject = ['news','world','video','business','law','science','entertainment','sport','education','health','life','travel']
        let subject_item = {
            news: ['Thời sự','Chính trị','Dân sinh','Giao thông'],
            world: ['Tư liệu','Phân tích','Quân sự'],
            video: ['Nhịp sống', 'Pháp luật', 'Giải trí', 'Khoa học'],
            business:['Nhịp sống', 'Pháp luật', 'Giải trí', 'Khoa học'],
            law:['Nhịp sống', 'Pháp luật', 'Giải trí', 'Khoa học'],
            science:['Nhịp sống', 'Pháp luật', 'Giải trí', 'Khoa học'],
            entertainment:['Nhịp sống', 'Pháp luật', 'Giải trí', 'Khoa học'],
            sport:['Nhịp sống', 'Pháp luật', 'Giải trí', 'Khoa học'],
            education:['Nhịp sống', 'Pháp luật', 'Giải trí', 'Khoa học'],
            health:['Nhịp sống', 'Pháp luật', 'Giải trí', 'Khoa học'],
            life:['Nhịp sống', 'Pháp luật', 'Giải trí', 'Khoa học'],
            travel:['Nhịp sống', 'Pháp luật', 'Giải trí', 'Khoa học'],
            normal:['Nhịp sống', 'Pháp luật', 'Giải trí', 'Khoa học'],
        }
        const containers = document.getElementById('menu_container').outerHTML;
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

    function changeColorSubject() {
        let menuItems = document.getElementsByTagName('a');
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].addEventListener('mouseover', function() {
                this.style.color = colors[this.className];
            });
            menuItems[i].addEventListener('mouseout', function() {
                this.style.color = '#000';
            });
        }
    }
    changeColorSubject();
}