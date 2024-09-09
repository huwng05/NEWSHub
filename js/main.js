window.onload = function() {
    const colors = window.colors;
    const subject  = window.subject;
    const subject_item = window.subject_item;
    const contents = window.contents;
    const linkWeb = "./readNews.html";
    const linkSubject = "./subject.html";
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
                                        <h2 class="newshub_content_title"><a href="${linkWeb}" data-index="${random[1]}" class="${subject[random[0]]}">${contents[subject[random[0]]][random[1]]['title']}</a></h2>
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
                const offset_content = -index*100/slides_content.length;
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
            const onTop = document.getElementById('goTopBtn');
            window.addEventListener('scroll', function() {
                const scrollTop = document.documentElement.scrollTop;
                if(scrollTop > menu.offsetTop + 15) {
                    menu.classList.remove('menu_scroll_delete')
                    menu.classList.add('menu_scroll');
                    this.document.getElementById('home').style.display = 'none';
                    this.document.getElementById('new').style.display = 'flex';
                    menu.style.boxShadow = '0px 6px 6px 1px var(--border-color)';
                    menu.style.borderRadius = '0 0 10px 10px';
                    onTop.style.display = 'block';
                }
                else {
                    menu.classList.remove('menu_scroll');
                    menu.classList.add('menu_scroll_delete')
                    this.document.getElementById('home').style.display = 'block';
                    this.document.getElementById('new').style.display = 'none';
                    menu.style.boxShadow = '0px 1px 1px 1px var(--border-color)'
                    menu.style.borderRadius = '44px';
                    onTop.style.display = 'none';
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
                                <h3 class="menu_container_title"><a href="${linkSubject}" class="${subject[i]}">${subject_item[subject[i]][0]}</a></h3>
                            `;
                for(let j = 1; j < subject_item[subject[i]].length;j++) {
                    listHTML += `   <li class="menu_container_item"><a href="${linkSubject}" class="${subject[i]}">${subject_item[subject[i]][j]}</a></li>
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


    let randomSubjet = window.getRandomSubject(6, 11);            
    let randomNews =  window.getRandomSubject(5, 10);  
    function addNewsMain() {
        try {
            const newhubSubject = document.getElementById('subject_main');    
            let listHTML_main = ``;
            for(let i = 0; i < 3; i++) {
                listHTML_main += `<div class="newshub_topic">
                                    <ul class="newshub_subjects">
                                        <li class="newshub_subjects_item"><a href="${linkSubject}" class="${subject[randomSubjet[i]]}">${subject_item[subject[randomSubjet[i]]][0]}</a></li>
                                        <li class="newshub_subjects_item"><a href="${linkSubject}" class="${subject[randomSubjet[i]]}">${subject_item[subject[randomSubjet[i]]][1]}</a></li>
                                        <li class="newshub_subjects_item"><a href="${linkSubject}" class="${subject[randomSubjet[i]]}">${subject_item[subject[randomSubjet[i]]][2]}</a></li>
                                        <li class="newshub_subjects_item"><a href="${linkSubject}" class="${subject[randomSubjet[i]]}">${subject_item[subject[randomSubjet[i]]][3]}</a></li>
                                    </ul>
    
                                    <div class="newshub_subject">
                                        <div class="newshub_subject_content">
                                            <img class="img_main" alt="" src="${contents[subject[randomSubjet[i]]][randomNews[0]]['img']}">
                                            <div class="content">
                                                <h3><a href="${linkWeb}" data-index="${randomNews[0]}" class="${subject[randomSubjet[i]]}">${contents[subject[randomSubjet[i]]][randomNews[0]]['title']}</a></h3>
                                                <p class="content_body"><a class="normal">${contents[subject[randomSubjet[i]]][randomNews[0]]['content']}</a></p>
                                                <p class="hot_content_footer">
                                                    ${contents[subject[randomSubjet[i]]][randomNews[0]]['footer']}
                                                    <i class="hot_content_cmt fa-solid fa-comment"></i>
                                                    <span>54</span>
                                                </p>
                                            </div>
                                            <div class="content content_right">
                                                <h3><a data-index="${randomNews[1]}" href="${linkWeb}" class="${subject[randomSubjet[i]]}">${contents[subject[randomSubjet[i]]][randomNews[1]]['title']}</a></h3>
                                                <p class="content_body"><a class="normal">${contents[subject[randomSubjet[i]]][randomNews[1]]['content']}</a></p>
                                                <p class="hot_content_footer">
                                                    ${contents[subject[randomSubjet[i]]][randomNews[1]]['footer']}
                                                    <i class="hot_content_cmt fa-solid fa-comment"></i>
                                                    <span>54</span>
                                                </p>
                                            </div>
                                        </div>
    
                                        <ul class="newshub_subjects_list">
                                            <li class="newshub_subjects_sup"><a data-index="${randomNews[2]}" href="${linkWeb}" class="${subject[randomSubjet[i]]}">${contents[subject[randomSubjet[i]]][randomNews[2]]['title']}</a></li>
                                            <li class="newshub_subjects_sup"><a data-index="${randomNews[3]}" href="${linkWeb}" class="${subject[randomSubjet[i]]}">${contents[subject[randomSubjet[i]]][randomNews[3]]['title']}</a></li>
                                            <li class="newshub_subjects_sup"><a data-index="${randomNews[4]}" href="${linkWeb}" class="${subject[randomSubjet[i]]}">${contents[subject[randomSubjet[i]]][randomNews[4]]['title']}</a></li>
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
            const listNews = document.getElementById('newshub_list');
            let listNewsHTML = ``;
            for(let i = 0; i < 8; i++) {
                let random = window.getRandom();
                listNewsHTML += `<li class="newshub_sp_news_item">
                                <h3><a data-index=${random[1]} href="${linkWeb}" class="${subject[random[0]]}">${contents[subject[random[0]]][random[1]]['title']}</a></h3>
                                <div class="news_item_content">
                                    <img class="content_img" src="${contents[subject[random[0]]][random[1]]['img']}" alt="">
                                    <div class="content_topic">
                                        <p><a class="normal">${contents[subject[random[0]]][random[1]]['content']}</a></p>
                                        <p class="hot_content_footer">
                                            ${contents[subject[random[0]]][random[1]]['footer']}
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
            for(let i = 3; i < 6; i++) {
                besideHTML += `<div class="newshub_beside_sections">
                                    <div class="newshub_beside_subjects">
                                        <ul class="newshub_subjects">
                                            <li class="newshub_subjects_item"><a href="${linkSubject}" class="${subject[randomSubjet[i]]}">${subject_item[subject[randomSubjet[i]]][0]}</a></li>
                                        </ul>
                                    </div>
                                    <div class="newshub_beside_main_section">
                                        <img src="${contents[subject[randomSubjet[i]]][randomNews[0]]['img']}" alt="img">
                                        <h3><a data-index="${randomNews[0]}" href="${linkWeb}" class="${subject[randomSubjet[i]]}">${contents[subject[randomSubjet[i]]][randomNews[0]]['title']}</a></h3>
                                        <p><a class="normal">${contents[subject[randomSubjet[i]]][randomNews[0]]['content']}</a></p>
                                    </div>
                                    <div class="newshub_beside_main_section">
                                        <h3><a data-index="${randomNews[1]}" href="${linkWeb}" class="${subject[randomSubjet[i]]}">${contents[subject[randomSubjet[i]]][randomNews[1]]['title']}</a></h3>
                                        <p><a class="normal">${contents[subject[randomSubjet[i]]][randomNews[1]]['content']}</a></p>
                                    </div>
                                </div>
                            `
            }
            listBeside.innerHTML = besideHTML;
        } catch(error) {}
    }
    addSupportNews();

    function search() {
        try {
            const input = document.getElementById('input');
            const btnSearch = document.getElementById('btnSearch');
            const select = document.getElementById('select');
            const resultsSearch = document.getElementById('resultSearch')
            let results = [];
            function calSorce(text, keyword) {
                let sorce = 0;
                let lowerText = text.toLowerCase();
                let lowerKey = keyword.toLowerCase();
                keywordIndex = lowerText.indexOf(lowerKey);
                if(keywordIndex!== -1 ) sorce +=lowerText.length - keywordIndex;
                return sorce
            }
    
            function searchArticle(keyword) {
                if(select.value!=='all') {
                    for(let i = 0; i < 10; i++) {
                        let title = contents[select.value][i]['title'];
                        let article = contents[select.value][i]['content'];
                        let titleSorce = calSorce(title,keyword);
                        let articleSorce = calSorce(article, keyword)
                        if(titleSorce*0.7 + articleSorce*0.3 !== 0) {
                            results.push({
                                subject: subject.indexOf(select.value),
                                article: i,
                                sorce: titleSorce*0.7 + articleSorce*0.3,
                            })
                        }
                    }
                }
                else {
                    for(let i in contents) {
                        for (let j in contents[i]) {
                            let title = contents[i][j]['title'];
                            let article = contents[i][j]['content'];
                            let titleSorce = calSorce(title,keyword);
                            let articleSorce = calSorce(article, keyword);
                            if(titleSorce*0.7 + articleSorce*0.3 !== 0) {
                                results.push({
                                    subject: i,
                                    article: j,
                                    sorce: titleSorce*0.7 + articleSorce*0.3,
                                })
                            }
                        }
                    }
                }
                return;
            }
    
            btnSearch.addEventListener('click', function() {
                results = [];
                searchArticle(input.value);
                results.sort(function(a,b) {
                    return b.sorce - a.sorce;
                })
                let listHTML = ``;
                for(let i=0; i < results.length; i++) {
                    listHTML+= `<li class="search_li">
                                    <div class="search_content">
                                            <h3><a class="${results[i]['subject']}" data-index="${results[i]['article']}" href="${linkWeb}">${contents[results[i]['subject']][results[i]['article']]['title']}</a></h3>
                                            <p><a class="normal">${contents[results[i]['subject']][results[i]['article']]['content']}</a></p>
                                    </div>
                                    <img src="${contents[results[i]['subject']][results[i]['article']]['img']}" alt="">
                                </li>
                                `
                }
                resultsSearch.innerHTML = listHTML;
                addSubjectnews();
                window.changeColorSubject();
                window.changeColorTitle();
                window.saveIndex();
            })
    
            input.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    results = [];
                    searchArticle(input.value);
                    results.sort(function(a,b) {
                        return b.sorce - a.sorce;
                    })
                    let listHTML = ``;
                    console.log(results[0]['subject']);
                    for(let i=0; i < results.length; i++) {
                        listHTML+= `<li class="search_li">
                                        <div class="search_content">
                                                <h3><a class="${results[i]['subject']}" data-index="${results[i]['article']}" href="${linkWeb}">${contents[results[i]['subject']][results[i]['article']]['title']}</a></h3>
                                                <p><a class="normal">${contents[results[i]['subject']][results[i]['article']]['content']}</a></p>
                                        </div>
                                        <img src="${contents[results[i]['subject']][results[i]['article']]['img']}" alt="">
                                    </li>
                                    `
                    }
                    resultsSearch.innerHTML = listHTML;
                    addSubjectnews();
                    window.changeColorSubject();
                    window.changeColorTitle();
                    window.saveIndex();
                }
            });
        }
        catch(error) {}
    }
    search();

    function addContent() {
        try {
            const title = document.getElementsByClassName('newshub_read_title')[0];
            const footer = document.getElementsByClassName('subject_header')[0];
            const content = document.getElementsByClassName('content_normal');
            const picture = document.getElementById('picture');
            title.textContent = contents[subject[localStorage.getItem("subject")]][localStorage.getItem("article")]['title'];
            footer.textContent = contents[subject[localStorage.getItem("subject")]][localStorage.getItem("article")]['footer'];
            content[0].textContent = contents[subject[localStorage.getItem("subject")]][localStorage.getItem("article")]['content']
            content[1].textContent = contents[subject[localStorage.getItem("subject")]][localStorage.getItem("article")]['content1']
            content[2].textContent = contents[subject[localStorage.getItem("subject")]][localStorage.getItem("article")]['content2']
            content[3].textContent = contents[subject[localStorage.getItem("subject")]][localStorage.getItem("article")]['content3']
            content[4].textContent = contents[subject[localStorage.getItem("subject")]][localStorage.getItem("article")]['content4']
            content[5].textContent = contents[subject[localStorage.getItem("subject")]][localStorage.getItem("article")]['content5']
            content[6].textContent = contents[subject[localStorage.getItem("subject")]][localStorage.getItem("article")]['content6']
            content[7].textContent = contents[subject[localStorage.getItem("subject")]][localStorage.getItem("article")]['content7']
            content[8].textContent = contents[subject[localStorage.getItem("subject")]][localStorage.getItem("article")]['content8']
            content[9].textContent = contents[subject[localStorage.getItem("subject")]][localStorage.getItem("article")]['content9']
            picture.src = contents[subject[localStorage.getItem("subject")]][localStorage.getItem("article")]['img'];
        }
        catch(error) {}
    }
    addContent();

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
        catch(error) {}
    }
    answer();

    function addSubjectnews() {
        try {
            const subjectMain = document.getElementById("subjectMain");
            subjectMain.innerHTML = `<li class="newshub_subjects_item"><a href="${linkSubject}" class="${subject[localStorage.getItem("subject")]}">${subject_item[subject[localStorage.getItem("subject")]][0]}</a></li>
                                            <li class="newshub_subjects_item"><a href="${linkSubject}" class="${subject[localStorage.getItem("subject")]}">${subject_item[subject[localStorage.getItem("subject")]][1]}</a></li>
                                            <li class="newshub_subjects_item"><a href="${linkSubject}" class="${subject[localStorage.getItem("subject")]}">${subject_item[subject[localStorage.getItem("subject")]][2]}</a></li>
                                            <li class="newshub_subjects_item"><a href="${linkSubject}" class="${subject[localStorage.getItem("subject")]}">${subject_item[subject[localStorage.getItem("subject")]][3]}</a></li>
                                    `;
            let random = window.getRandomSubject(8, 10);
            const section1 = document.getElementById("section1");
            section1.innerHTML = `<div class="newshub_sub_left">
                                        <img src="${contents[subject[localStorage.getItem("subject")]][random[0]]['img']}" alt="">
                                        <div class="subject_content">
                                            <h3><a href="${linkWeb}" data-index="${random[0]}" class="${subject[localStorage.getItem("subject")]}">${contents[subject[localStorage.getItem("subject")]][random[0]]['title']}</a></h3>
                                            <p><a href="#" class="normal">${contents[subject[localStorage.getItem("subject")]][random[0]]['content']}</a></p>
                                        </div>
                                    </div>
                                    <ul class="newshub_sub_right">
                                        <li class="sub_right_item">
                                            <img src="${contents[subject[localStorage.getItem("subject")]][random[1]]['img']}" alt="">
                                            <h3><a href="${linkWeb}" data-index="${random[1]}" class="${subject[localStorage.getItem("subject")]}">${contents[subject[localStorage.getItem("subject")]][random[1]]['title']}</a></h3>
                                            <p><a href="#" class="normal">${contents[subject[localStorage.getItem("subject")]][random[1]]['content']}</a></p>
                                        </li>
                                        <li class="wall"></li>
                                        <li class="sub_right_item">
                                            <img src="${contents[subject[localStorage.getItem("subject")]][random[2]]['img']}" alt="">
                                            <h3><a href="${linkWeb}" data-index="${random[2]}" class="${subject[localStorage.getItem("subject")]}">${contents[subject[localStorage.getItem("subject")]][random[2]]['title']}</a></h3>
                                            <p><a href="#" class="normal">${contents[subject[localStorage.getItem("subject")]][random[2]]['content']}</a></p>
                                        </li>
                                        <li class="wall"></li>
                                        <li class="sub_right_item">
                                            <img src="${contents[subject[localStorage.getItem("subject")]][random[3]]['img']}" alt="">
                                            <h3><a href="${linkWeb}" data-index="${random[3]}" class="${subject[localStorage.getItem("subject")]}">${contents[subject[localStorage.getItem("subject")]][random[3]]['title']}</a></h3>
                                            <p><a href="#" class="normal">${contents[subject[localStorage.getItem("subject")]][random[3]]['content']}</a></p>
                                        </li>
                                    </ul>
                                        `
            let section2 = document.getElementById("section2");
            section2.innerHTML = `<div class="newshub_sub_top">
                                        <img src="${contents[subject[localStorage.getItem("subject")]][random[4]]['img']}" alt="">
                                        <div class="subject_content">
                                           <h3><a href="${linkWeb}" data-index="${random[4]}" class="${subject[localStorage.getItem("subject")]}">${contents[subject[localStorage.getItem("subject")]][random[4]]['title']}</a></h3>
                                            <p><a class="normal">${contents[subject[localStorage.getItem("subject")]][random[4]]['content']}</a></p>
                                        </div>
                                    </div>
                                    <ul class="newshub_sub_under">
                                        <li class="subject_under_item">
                                            <img src="${contents[subject[localStorage.getItem("subject")]][random[5]]['img']}" alt="">
                                            <h3><a href="${linkWeb}" data-index="${random[5]}" class="${subject[localStorage.getItem("subject")]}">${contents[subject[localStorage.getItem("subject")]][random[5]]['title']}</a></h3>
                                        </li>
                                        <li class="subject_under_item">
                                            <img src="${contents[subject[localStorage.getItem("subject")]][random[6]]['img']}" alt="">
                                            <h3><a href="${linkWeb}" data-index="${random[6]}" class="${subject[localStorage.getItem("subject")]}">${contents[subject[localStorage.getItem("subject")]][random[6]]['title']}</a></h3>
                                        </li>
                                        <li class="subject_under_item">
                                            <img src="${contents[subject[localStorage.getItem("subject")]][random[7]]['img']}" alt="">
                                            <h3><a href="${linkWeb}" data-index="${random[7]}" class="${subject[localStorage.getItem("subject")]}">${contents[subject[localStorage.getItem("subject")]][random[7]]['title']}</a></h3>
                                        </li>    
                                    </ul>
                                    `;
    
        }
        catch(error){}
    }

    addSubjectnews();
    window.changeColorSubject();
    window.changeColorTitle();
    window.onTopFunction();
    window.saveIndex();
}