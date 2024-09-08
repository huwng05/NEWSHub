window.onload = function() {
    const colors = window.colors;
    const subject  = window.subject;
    const subject_item = window.subject_item;
    const contents = window.contents;
    function addHotNews() {
        try {
            const newshubImg = document.getElementById('img_list');
            const newshubContent = document.getElementById('list_content');
            let listHTML_img = ``;
            let listHTML_content = ``;
            for(let i = 0; i <= 10; i++) {
                let random = window.getRandom();
                listHTML_img += `<li class="newshub_img_item"><img src="${contents[subject[random[0]]][random[1]]['img']}" alt=""></li>`;
                listHTML_content += `<li class="newshub_content_item">
                                        <h2 class="newshub_content_title">${contents[subject[random[0]]][random[1]]['title']}</h2>
                                        <p class="newshub_content_body">${contents[subject[random[0]]][random[1]]['content']}</p>
                                        <p class="newshub_content_footer">${contents[subject[random[0]]][random[1]]['footer']} <i class="hot_content_cmt fa-solid fa-comment"></i> 54</p>
                                    </li>
                                    `;
            }
            newshubImg.innerHTML=listHTML_img;
            newshubContent.innerHTML=listHTML_content;
        }
        catch(error) {}
    }
    addHotNews();

    function changeNewsHot() {
        try {
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
        catch (error){

        }
    }
    changeNewsHot();

    function scrollMenu() {
        try {
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
        } catch (error) {}
    }
    scrollMenu();

    function clock() {
        try {
            function updateClock (){
                const now = new Date();
                const hour = String(now.getHours()).padStart(2, '0');
                const min = String(now.getMinutes()).padStart(2, '0');
                document.getElementById('hour').textContent = hour;
                document.getElementById('min').textContent = min;
            }
            setInterval(updateClock,60000);
            updateClock();   
        } catch(error) {}
    }
    clock();

    function addListMenu() {
        try {
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
        } catch(error) {}
    }
    addListMenu();

    function listMenu() {
        try {
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
        } catch(error) {}
    }
    listMenu();


    function addNewsMain() {
        try {
            const newhubSubject = document.getElementById('subject_main');
            let randomSubjet = [];
            window.getRandomSubject(randomSubjet, 3, 11);
            let randomNews = [];
            window.getRandomSubject(randomNews, 3, 10);
            console.log("ok");
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
                                            <img class="img_main" alt="" src="${contents[subject[i]][0]['img']}_0${0}.jpg">
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
        } catch(error) {}
    }
    addNewsMain();

    function addListMain() {
        try {
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
        } catch (error) {}
    }
    addListMain();
    
    function addSupportNews() {
        try {
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
        } catch(error) {}
    }
    addSupportNews();

    function answer() {
        try {
            let ansList = document.getElementsByClassName('answer');
            let ansOpinion = document.getElementsByClassName('your_opinion')
            for(let i = 0; i < ansList.length; i++) {
                ansList[i].addEventListener('click',function() {
                    let currentDisplay = window.getComputedStyle(ansOpinion[i]).display;
                    if(currentDisplay == 'none') {
                        ansOpinion[i].style.display = 'flex';
                        
                    }
                    if(currentDisplay == 'flex') {
                        ansOpinion[i].style.display = 'none';     
                    }
                })
            }
        }
        catch(error) {
            
        }
    }
    answer();

    function changeColorSubject() {
        try {
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
        } catch(error) {}
    }
    changeColorSubject();

    function changeColorTitle() {
        try {
            const subjectList = document.getElementsByClassName('newshub_subjects');
            for(value of subjectList) {
                let subjectItem = value.getElementsByClassName('newshub_subjects_item')[0];
                link = subjectItem.getElementsByTagName('a')[0];
                subjectItem.style.setProperty('--after-bg-color',link.style.color);
            }
        } catch(error) {}
    }
    changeColorTitle();
}