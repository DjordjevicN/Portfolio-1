const navBar = document.querySelector('.nav');
const textHi = document.querySelector('.text-hi');
const textName = document.querySelector('.text-name');
const textFront = document.querySelector('.text-front');
let contentBox = document.querySelector('.content');

const contactButton = document.querySelector('.button');

const buttonHome = document.querySelector('.home-li');
const buttonAbout = document.querySelector('.about');
const buttonWork = document.querySelector('.work');
const buttonSkills = document.querySelector('.skills');
const buttonContact = document.querySelector('.contact');
const navList = document.querySelector('.nav-list');
const gitHubLogo = document.querySelector('.gitHub-logo');
const linkedInLogo = document.querySelector('.linkedIn-logo');


// hamburger ******** 
const hamburger = document.querySelector('.hamburger');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

const lines = [line1, line2, line3];
const tlm = new TimelineMax({});
const toggleMenu = new TimelineMax({ paused: true, reversed: true });
// hamburger end****

const timeLine = new TimelineMax({})
// const tl = new TimelineMax({})

// first setup animation**********************

document.addEventListener('DOMContentLoaded', () => {
    timeLine
        .from(navBar, 2, { x: -100, opacity: 0, ease: Power4.easeInOut })
        .from(textHi, .50, { x: -150, ease: Circ.easeOut, opacity: 0 }, 'textEnter')
        .from(textName, .50, { x: -100, ease: Circ.easeOut, opacity: 0 }, 'textEnter')
        .from(textFront, .50, { x: -50, ease: Circ.easeOut, opacity: 0 }, 'textEnter')
        .from(gitHubLogo, .50, { y: 50, opacity: 0 }, 'finish')
        .from(linkedInLogo, .50, { y: 50, opacity: 0 }, 'finish')
        .to(navList, 1, { y: -200, opacity: 0 }, 'finish')
        .to(navList, .1, { x: -100 })

})
//////////////////////////////
// buttons set animation

buttonHome.addEventListener('click', () => {

    let homeContent = `<div class="home">
   <div class="home-title">
       <div class="home-title-text">
           <h1 class="text-hi">HI</h1>
           <h1 class="text-name">My name
               is Nikola</h1>
           <h1 class="text-front">I am a Front End Developer</h1>
       </div>
       <div class="socialImages">
                        <a href="https://github.com/DjordjevicN" target="_blank"> <svg class="gitHub-logo socialPic"
                                version="1.1" id="Layer_1" focusable="false" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" fill='#D93B18' x="0px" y="0px"
                                viewBox="0 0 496 512" style="enable-background:new 0 0 496 512;" xml:space="preserve">
                                <path d="M165.9,397.4c0,2-2.3,3.6-5.2,3.6c-3.3,0.3-5.6-1.3-5.6-3.6c0-2,2.3-3.6,5.2-3.6C163.3,393.5,165.9,395.1,165.9,397.4z
	 M134.8,392.9c-0.7,2,1.3,4.3,4.3,4.9c2.6,1,5.6,0,6.2-2s-1.3-4.3-4.3-5.2C138.4,389.9,135.5,390.9,134.8,392.9L134.8,392.9z
	 M179,391.2c-2.9,0.7-4.9,2.6-4.6,4.9c0.3,2,2.9,3.3,5.9,2.6c2.9-0.7,4.9-2.6,4.6-4.6C184.6,392.2,181.9,390.9,179,391.2z M244.8,8
	C106.1,8,0,113.3,0,252c0,110.9,69.8,205.8,169.5,239.2c12.8,2.3,17.3-5.6,17.3-12.1c0-6.2-0.3-40.4-0.3-61.4c0,0-70,15-84.7-29.8
	c0,0-11.4-29.1-27.8-36.6c0,0-22.9-15.7,1.6-15.4c0,0,24.9,2,38.6,25.8c21.9,38.6,58.6,27.5,72.9,20.9c2.3-16,8.8-27.1,16-33.7
	c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5,7.6-41.3,23.6-58.9c-2.6-6.5-11.1-33.3,2.6-67.9c20.9-6.5,69,27,69,27
	c20-5.6,41.5-8.5,62.8-8.5s42.8,2.9,62.8,8.5c0,0,48.1-33.6,69-27c13.7,34.7,5.2,61.4,2.6,67.9c16,17.7,25.8,31.5,25.8,58.9
	c0,96.5-58.9,104.2-114.8,110.5c9.2,7.9,17,22.9,17,46.4c0,33.7-0.3,75.4-0.3,83.6c0,6.5,4.6,14.4,17.3,12.1
	C428.2,457.8,496,362.9,496,252C496,113.3,383.5,8,244.8,8z M97.2,352.9c-1.3,1-1,3.3,0.7,5.2c1.6,1.6,3.9,2.3,5.2,1
	c1.3-1,1-3.3-0.7-5.2C100.8,352.3,98.5,351.6,97.2,352.9z M86.4,344.8c-0.7,1.3,0.3,2.9,2.3,3.9c1.6,1,3.6,0.7,4.3-0.7
	c0.7-1.3-0.3-2.9-2.3-3.9C88.7,343.5,87.1,343.8,86.4,344.8z M118.8,380.4c-1.6,1.3-1,4.3,1.3,6.2c2.3,2.3,5.2,2.6,6.5,1
	c1.3-1.3,0.7-4.3-1.3-6.2C123.1,379.1,120.1,378.8,118.8,380.4z M107.4,365.7c-1.6,1-1.6,3.6,0,5.9s4.3,3.3,5.6,2.3
	c1.6-1.3,1.6-3.9,0-6.2C111.6,365.4,109,364.4,107.4,365.7L107.4,365.7z" />
                            </svg> </a>

                        <a href="https://www.linkedin.com/in/nikola-djordjevic-503066193/" target="_blank"> <svg
                                version="1.1" id="Layer_1" focusable="false" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" class="linkedIn-logo socialPic"
                                fill='#D93b18' x="0px" y="0px" viewBox="0 0 448 512"
                                style="enable-background:new 0 0 448 512;" xml:space="preserve">
                                <path
                                    d="M416,32H31.9C14.3,32,0,46.5,0,64.3v383.4C0,465.5,14.3,480,31.9,480H416c17.6,0,32-14.5,32-32.3V64.3
	C448,46.5,433.6,32,416,32z M135.4,416H69V202.2h66.5V416H135.4z M102.2,173c-21.3,0-38.5-17.3-38.5-38.5S80.9,96,102.2,96
	c21.2,0,38.5,17.3,38.5,38.5C140.7,155.8,123.5,173,102.2,173z M384.3,416h-66.4V312c0-24.8-0.5-56.7-34.5-56.7
	c-34.6,0-39.9,27-39.9,54.9V416h-66.4V202.2h63.7v29.2h0.9c8.9-16.8,30.6-34.5,62.9-34.5c67.2,0,79.7,44.3,79.7,101.9V416z" />
                            </svg> </a>
   </div>
</div>`;

    contentBox.innerHTML = homeContent
    let homeTitle = document.querySelector('.home')
    timeLine
        .to(buttonHome, .15, { x: 15 })
        .to(buttonHome, .15, { x: 0 })
        .from(homeTitle, .75, { x: -100, opacity: 0, ease: Circ.easeOut })
})
buttonAbout.addEventListener('click', () => {
    contentBox.innerHTML = '';
    let aboutContent = `
    <div class="about-section">
    <div class="about-content">
        <div class="about-title">
            <h1>About</h1>
        </div>
        <div class="about-text">
            <p>Moje ime je Nikola Đorđević. <br>
            2018. odlučio sam da promenim karijeru. <br>
            Želeo sam da učim o onome što me jako zanima i ono u čemu sam uživao u svoje slobodno vreme - počeo sam da se ozbiljno bavim kreiranjem web stranica . <br>
            Te 2018. dao sam otkaz i u potpunosti sam se posvetio učenju i kreiranju. 
            Preda mnom su bila 2 puta: <br>
            1 – koji bi bi me ponovo vodio na fakultet<br>
            2 –  na kome bi učio sam<br>
            Moja odluka je bila da učim sam. <br>
            Počeo sam sa <img src="./images/html5.png" alt=""> i  <img src="./images/css3.png" alt="">. 
            Napravio sam nekoliko landing stranica. <br>
            S obzirom da sam već radio sa <img class='photoshop' src="./images/photoshop-cc.svg" alt="">, <img src="./images/after-effects-cc.svg" alt="">,   <img src="./images/premiere-cc.svg" alt="">, samostalno sam kreirao mock-up-e i pretvarao ih u code. <br>
            Kada sam se osetio spremnim da idem dalje, produžio sam na     <img src="./images/JavaScript-logo.png" alt="">. <br>
            Tada sam uvideo da mi je potreban neko ko će da me usmeri u pravom pravcu. <br>
            ComTrade je imao Front End Development kurs, koji je davao jak akcenat na JS. <br>Rešio sam da ga upišem. U septembru 2019. diplomirao sam sa ocenom 10. <br>
            Paralelno sa učenjem, radio sam i JS Algoritme na FreeCodeCamp  i gradio stranice i male aplikacije koje nisu kompletne jer su rađene sa specifičnom idejom i oprobavanjem novih opcija. 
            Kada sam se osetio komotno u radu sa
            JS 
            CSS
            krenuo sam da učim 
            <img src="./images/sass.png" alt="">
            React i da uz pomoć njih gradim aplikacije. 
            Kuda sada vodi moj put?
            Želim da se profesionalno bavim web development-om i da napredujem u svom znanju. 
            
            </p>
        </div>
    </div>
</div>
    `
    contentBox.innerHTML = aboutContent
    const aboutTitle = document.querySelector('.about-title')
    let aboutText = document.querySelector('.about-content');
    timeLine
        .to(buttonAbout, .15, { x: 15 })
        .to(buttonAbout, .15, { x: 0 })
        .from(aboutText, .75, { x: -100, opacity: 0, ease: Circ.easeOut })
        .to(aboutTitle, 1, { x: -160 })

})
buttonWork.addEventListener('click', () => {
    contentBox.innerHTML = '';
    let workContent = `
    <div class="work-section">
    <div class="gallery-grid">

        <div class="gallery-box">
            <a href="https://djordjevicn.github.io/Star_Wars_Quiz/" target="_blank"><img
                    src="./images/projects/starwars.jpg" alt="project"></a>
            <div class="links">
                <a href="https://github.com/DjordjevicN/Star_Wars_Quiz" target="_blank"> <img
                        src="./images/github-brands-blue.png" alt=""> </a>
                <a href="https://djordjevicn.github.io/Star_Wars_Quiz/" target="_blank">
                    <img src="./images/pngguru.com-id-katov.png" alt="">
                </a>
            </div>

        </div>
        <div class="gallery-box">
            <a href="https://djordjevicn.github.io/eCommerce-Burgelicious/" target="_blank"><img
                    src="./images/projects/burger.jpg" alt="project"></a>
            <div class="links">
                <a href="https://github.com/DjordjevicN/eCommerce-Burgelicious" target="_blank"> <img
                        src="./images/github-brands-blue.png" alt=""> </a>
                <a href="https://djordjevicn.github.io/eCommerce-Burgelicious/" target="_blank">
                    <img src="./images/pngguru.com-id-katov.png" alt="">
                </a>
            </div>

        </div>
        <div class="gallery-box">
            <a href="https://djordjevicn.github.io/kids-shall/" target="_blank"><img
                    src="./images/projects/ger.jpg" alt="project"></a>
            <div class="links">
                <a href="https://github.com/DjordjevicN/kids-shall" target="_blank"> <img
                        src="./images/github-brands-blue.png" alt=""></a>
                <a href="https://djordjevicn.github.io/kids-shall/" target="_blank">
                    <img src="./images/pngguru.com-id-katov.png" alt="">
                </a>
            </div>

        </div>
        <div class="gallery-box">
            <a href="https://djordjevicn.github.io/CV-Project-80s/#" target="_blank"><img
                    src="./images/projects/90cvProject.jpg" alt="project"></a>
            <div class="links">
                <a href="https://github.com/DjordjevicN/CV-Project-80s" target="_blank"> <img
                        src="./images/github-brands-blue.png" alt=""> </a>
                <a href="https://djordjevicn.github.io/CV-Project-80s/#" target="_blank">
                    <img src="./images/pngguru.com-id-katov.png" alt="">
                </a>
            </div>

        </div>
        <div class="gallery-box">
            <a href="https://djordjevicn.github.io/eCommerce-One/" target="_blank"><img
                    src="./images/projects/pizza.jpg" alt="project"></a>
            <div class="links">
                <a href="https://github.com/DjordjevicN/eCommerce-One" target="_blank"> <img
                        src="./images/github-brands-blue.png" alt=""></a>
                <a href="https://djordjevicn.github.io/eCommerce-One/" target="_blank">
                    <img src="./images/pngguru.com-id-katov.png" alt="">
                </a>
            </div>

        </div>
        <div class="gallery-box">
            <a href="https://djordjevicn.github.io/Movie-Search-API-/" target="_blank"><img
                    src="./images/projects/moviesearch.jpg" alt="project"></a>
            <div class="links">
                <a href="https://github.com/DjordjevicN/Movie-Search-API-" target="_blank"> <img
                        src="./images/github-brands-blue.png" alt=""></a>
                <a href="https://djordjevicn.github.io/Movie-Search-API-/" target="_blank">
                    <img src="./images/pngguru.com-id-katov.png" alt="">
                </a>
            </div>

        </div>
        <div class="gallery-box">
            <a href="https://djordjevicn.github.io/weather-summer/" target="_blank"><img
                    src="https://raw.githubusercontent.com/DjordjevicN/weather-summer/master/weatherSummer.jpg" alt="project"></a>
            <div class="links">
                <a href="https://github.com/DjordjevicN/weather-summer/tree/master" target="_blank"> <img
                        src="./images/github-brands-blue.png" alt=""></a>
                <a href="https://djordjevicn.github.io/weather-summer/" target="_blank">
                    <img src="./images/pngguru.com-id-katov.png" alt="">
                </a>
            </div>

        </div>
        <div class="gallery-box">
            <a href="https://djordjevicn.github.io/weather-1/" target="_blank"><img
                    src="./images/projects/weather.jpg" alt="project"></a>
            <div class="links">
                <a href="https://github.com/DjordjevicN/weather-1" target="_blank"> <img
                        src="./images/github-brands-blue.png" alt=""></a>
                <a href="https://djordjevicn.github.io/weather-1/" target="_blank">
                    <img src="./images/pngguru.com-id-katov.png" alt="">
                </a>
            </div>
         
        </div>
        <div class="gallery-box">
            <a href="https://djordjevicn.github.io/grid-landing/" target="_blank"><img
                    src="./images/projects/grid.jpg" alt="project"></a>
            <div class="links">
                <a href="https://github.com/DjordjevicN/grid-landing" target="_blank"> <img
                        src="./images/github-brands-blue.png" alt=""></a>
                <a href="https://djordjevicn.github.io/grid-landing/" target="_blank">
                    <img src="./images/pngguru.com-id-katov.png" alt="">
                </a>
            </div>

        </div>
        <div class="gallery-box">
            <a href="https://djordjevicn.github.io/responsive-eCommerce-Restaurant-1/" target="_blank"><img
                    src="./images/projects/Screenshot_5.jpg" alt="project"></a>
            <div class="links">
                <a href="https://github.com/DjordjevicN/responsive-eCommerce-Restaurant-1" target="_blank">
                    <img src="./images/github-brands-blue.png" alt=""></a>
                <a href="https://djordjevicn.github.io/responsive-eCommerce-Restaurant-1/" target="_blank">
                    <img src="./images/pngguru.com-id-katov.png" alt="">
                </a>
            </div>

        </div>

    </div>
</div>
`
    contentBox.innerHTML = workContent;
    let workBox = document.querySelector('.work-section')
    timeLine
        .to(buttonWork, .15, { x: 15 })
        .to(buttonWork, .15, { x: 0 })
        .from(workBox, 1, { y: 100, opacity: 0, ease: Circ.easeOut })
})
buttonSkills.addEventListener('click', () => {
    contentBox.innerHTML = '';
    let skillsContent = `
    <div class="skills-section">
            <div class="skills-content">
                <div class="skills-title">
                    <h1>Skills</h1>
                </div>
                <div class="skills-text">
                    <p>My main expertise is in Front End Development</p>
                    <p> using HTML, CSS and JavaScript</p>
                    <p>For animations i am using mostly GSAP and Anime.js </p>
                    <p>But if i have an idea for website that requires some other language or framework i would learnd it for that project </p>
                    <p>I am interested in animations and interactive layouts.</p>


                </div>
            </div>
        </div>
    `
    contentBox.innerHTML = skillsContent
    let skillsBox = document.querySelector('.skills-content')
    timeLine
        .to(buttonSkills, .15, { x: 15 })
        .to(buttonSkills, .15, { x: 0 })
        .from(skillsBox, 1, { x: -100, opacity: 0, ease: Circ.easeOut })
})
buttonContact.addEventListener('click', () => {
    contentBox.innerHTML = '';
    let contactContent = `<div class="contact-section">
    <div class="contact-content">
        <div class="contact-title">
            <h1>Contact</h1>
        </div>
        <div class="contact-text">
            <!-- <p>Belgrade, Serbia</p> -->

        </div>


        <div class="socialImages">
            <a href="https://github.com/DjordjevicN" target="_blank"> <svg class="gitHub-logo socialPic"
                    version="1.1" id="Layer_1" focusable="false" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" fill='#D93B18' x="0px" y="0px"
                    viewBox="0 0 496 512" style="enable-background:new 0 0 496 512;" xml:space="preserve">
                    <path d="M165.9,397.4c0,2-2.3,3.6-5.2,3.6c-3.3,0.3-5.6-1.3-5.6-3.6c0-2,2.3-3.6,5.2-3.6C163.3,393.5,165.9,395.1,165.9,397.4z
M134.8,392.9c-0.7,2,1.3,4.3,4.3,4.9c2.6,1,5.6,0,6.2-2s-1.3-4.3-4.3-5.2C138.4,389.9,135.5,390.9,134.8,392.9L134.8,392.9z
M179,391.2c-2.9,0.7-4.9,2.6-4.6,4.9c0.3,2,2.9,3.3,5.9,2.6c2.9-0.7,4.9-2.6,4.6-4.6C184.6,392.2,181.9,390.9,179,391.2z M244.8,8
C106.1,8,0,113.3,0,252c0,110.9,69.8,205.8,169.5,239.2c12.8,2.3,17.3-5.6,17.3-12.1c0-6.2-0.3-40.4-0.3-61.4c0,0-70,15-84.7-29.8
c0,0-11.4-29.1-27.8-36.6c0,0-22.9-15.7,1.6-15.4c0,0,24.9,2,38.6,25.8c21.9,38.6,58.6,27.5,72.9,20.9c2.3-16,8.8-27.1,16-33.7
c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5,7.6-41.3,23.6-58.9c-2.6-6.5-11.1-33.3,2.6-67.9c20.9-6.5,69,27,69,27
c20-5.6,41.5-8.5,62.8-8.5s42.8,2.9,62.8,8.5c0,0,48.1-33.6,69-27c13.7,34.7,5.2,61.4,2.6,67.9c16,17.7,25.8,31.5,25.8,58.9
c0,96.5-58.9,104.2-114.8,110.5c9.2,7.9,17,22.9,17,46.4c0,33.7-0.3,75.4-0.3,83.6c0,6.5,4.6,14.4,17.3,12.1
C428.2,457.8,496,362.9,496,252C496,113.3,383.5,8,244.8,8z M97.2,352.9c-1.3,1-1,3.3,0.7,5.2c1.6,1.6,3.9,2.3,5.2,1
c1.3-1,1-3.3-0.7-5.2C100.8,352.3,98.5,351.6,97.2,352.9z M86.4,344.8c-0.7,1.3,0.3,2.9,2.3,3.9c1.6,1,3.6,0.7,4.3-0.7
c0.7-1.3-0.3-2.9-2.3-3.9C88.7,343.5,87.1,343.8,86.4,344.8z M118.8,380.4c-1.6,1.3-1,4.3,1.3,6.2c2.3,2.3,5.2,2.6,6.5,1
c1.3-1.3,0.7-4.3-1.3-6.2C123.1,379.1,120.1,378.8,118.8,380.4z M107.4,365.7c-1.6,1-1.6,3.6,0,5.9s4.3,3.3,5.6,2.3
c1.6-1.3,1.6-3.9,0-6.2C111.6,365.4,109,364.4,107.4,365.7L107.4,365.7z" />
                </svg> </a>

            <a href="https://www.linkedin.com/in/nikola-djordjevic-503066193/" target="_blank"> <svg
                    version="1.1" id="Layer_1" focusable="false" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" class="linkedIn-logo socialPic"
                    fill='#D93b18' x="0px" y="0px" viewBox="0 0 448 512"
                    style="enable-background:new 0 0 448 512;" xml:space="preserve">
                    <path
                        d="M416,32H31.9C14.3,32,0,46.5,0,64.3v383.4C0,465.5,14.3,480,31.9,480H416c17.6,0,32-14.5,32-32.3V64.3
C448,46.5,433.6,32,416,32z M135.4,416H69V202.2h66.5V416H135.4z M102.2,173c-21.3,0-38.5-17.3-38.5-38.5S80.9,96,102.2,96
c21.2,0,38.5,17.3,38.5,38.5C140.7,155.8,123.5,173,102.2,173z M384.3,416h-66.4V312c0-24.8-0.5-56.7-34.5-56.7
c-34.6,0-39.9,27-39.9,54.9V416h-66.4V202.2h63.7v29.2h0.9c8.9-16.8,30.6-34.5,62.9-34.5c67.2,0,79.7,44.3,79.7,101.9V416z" />
                </svg> </a>

            <a href="https://twitter.com/dzoni_dzon" target="_blank"> <svg version="1.1" id="Layer_1"
                    focusable="false" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    class="tweeter-logo socialPic" fill='#D93b18' viewBox="0 0 448 512"
                    style="enable-background:new 0 0 448 512;" xml:space="preserve">
                    <path d="M400,32H48C21.5,32,0,53.5,0,80v352c0,26.5,21.5,48,48,48h352c26.5,0,48-21.5,48-48V80C448,53.5,426.5,32,400,32z
M351.1,190.8c0.2,2.8,0.2,5.7,0.2,8.5c0,86.7-66,186.6-186.6,186.6c-37.2,0-71.7-10.8-100.7-29.4c5.3,0.6,10.4,0.8,15.8,0.8
c30.7,0,58.9-10.4,81.4-28c-28.8-0.6-53-19.5-61.3-45.5c10.1,1.5,19.2,1.5,29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-0.8
c8.7,4.9,18.9,7.9,29.6,8.3c-18.3-12.2-29.2-32.7-29.2-54.6c0-12.2,3.2-23.4,8.9-33.1c32.3,39.8,80.8,65.8,135.2,68.6
c-9.3-44.5,24-80.6,64-80.6c18.9,0,35.9,7.9,47.9,20.7c14.8-2.8,29-8.3,41.6-15.8c-4.9,15.2-15.2,28-28.8,36.1
c13.2-1.4,26-5.1,37.8-10.2C375.1,169.9,363.9,181.5,351.1,190.8z" />
                </svg></a>

            <a href="https://instagram.com/miin_tata_" target="_blank"> <svg version="1.1" id="Layer_1"
                    focusable="false" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    class="instagram-logo socialPic" fill='#D93b18' viewBox="0 0 448 512"
                    style="enable-background:new 0 0 448 512;" xml:space="preserve">
                    <path d="M224.1,141c-63.6,0-114.9,51.3-114.9,114.9s51.3,114.9,114.9,114.9S339,319.5,339,255.9S287.7,141,224.1,141z M224.1,330.6
c-41.1,0-74.7-33.5-74.7-74.7s33.5-74.7,74.7-74.7s74.7,33.5,74.7,74.7S265.2,330.6,224.1,330.6L224.1,330.6z M370.5,136.3
c0,14.9-12,26.8-26.8,26.8c-14.9,0-26.8-12-26.8-26.8s12-26.8,26.8-26.8S370.5,121.5,370.5,136.3z M446.6,163.5
c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9,0C95.8,35.1,64,43.3,37.7,69.5
s-34.4,58-36.2,93.9c-2.1,37-2.1,147.9,0,184.9c1.7,35.9,9.9,67.7,36.2,93.9s58,34.4,93.9,36.2c37,2.1,147.9,2.1,184.9,0
c35.9-1.7,67.7-9.9,93.9-36.2c26.2-26.2,34.4-58,36.2-93.9C448.7,311.3,448.7,200.5,446.6,163.5L446.6,163.5z M398.8,388
c-7.8,19.6-22.9,34.7-42.6,42.6c-29.5,11.7-99.5,9-132.1,9s-102.7,2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6
c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7,9-132.1c7.8-19.6,22.9-34.7,42.6-42.6c29.5-11.7,99.5-9,132.1-9s102.7-2.6,132.1,9
c19.6,7.8,34.7,22.9,42.6,42.6c11.7,29.5,9,99.5,9,132.1S410.5,358.6,398.8,388z" />
                </svg></a>
            <a href="mailto:nikola.dj.87@gmail.com"> <img src="./images/envelope-solid.png"
                    class="socialPic email"> </a>

        </div>
    </div>
</div>`
    contentBox.innerHTML = contactContent
    let contactBox = document.querySelector('.contact-content')
    timeLine
        .to(buttonContact, .15, { x: 15 })
        .to(buttonContact, .15, { x: 0 })
        .from(contactBox, 1, { x: -100, opacity: 0, ease: Circ.easeOut })

})


//hamburder animation *****************************


hamburger.addEventListener('mouseenter', () => {
    if (hamburger.classList.contains("js-x")) {
        return;
    }

    tlm.staggerTo(lines, .10, { scaleX: 1.5, repeat: 1, yoyo: true, svgOrigin: '50 50', ease: Power2.easeInOut }, 0.125)

})
toggleMenu
    .to(line2, .125, { scaleX: 0 }, 0)
    .to(line1, .125, { transformOrigin: '50% 50%', y: 8 }, "rot")
    .to(line3, .125, { transformOrigin: '50% 50%', y: -8 }, "rot")
    .to(line1, .125, { rotation: -45, ease: Power2.easeInOut }, 'exit')
    .to(line3, .125, { rotation: 45, ease: Power2.easeInOut }, 'exit')
    .to(navList, .1, { x: 0 })
    .to(navList, 1, { y: 0, opacity: 1 })


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('js-x');
    toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
})

// end hamburger animation******************************