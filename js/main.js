window.addEventListener('DOMContentLoaded', () => {
     const tabsParent = document.querySelector('.tabheader__items'),
          tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.project'),
          elNavbarDarkmode = document.querySelector('.navbar-darkmode')
          elNavbarDarkmode.addEventListener('click', () => {
               document.body.classList.toggle('dark')
               console.log(elNavbarDarkmode);
          })

          function hiteTabContent() {
               tabsContent.forEach((item) => {//Real loyihaga shunday qilib class berish orqali qilinadi
                    item.classList.add('hide');//Real loyihalarda asosan class berish orqali qilinadi
                    item.classList.remove('show', 'fade');
               });

               tabs.forEach((item) => {
                    item.classList.remove('tabheader__item_active');//active bo'lip turgan klasni olib tashlaydi
               });
          }
          function showTabContent(i = 0) {//qo'shib beruvchi funksiya
               tabsContent[i].classList.add('show', 'fade');
               tabsContent[i].classList.remove('hide');//Bu bizga faqat bitta elamentni ko'rsatib beradi
               tabs[i].classList.add('tabheader__item_active');
          }

          hiteTabContent();
          showTabContent();


          tabsParent.addEventListener('click', (event) => {
               const target = event.target;
               if (target && target.classList.contains('tabheader__item')) {
                    tabs.forEach((item, idx) => {
                         if (target == item) {
                              hiteTabContent();
                              showTabContent(idx);
                         }
                    });
               }
          });





     // const navbarDarkIcon = document.querySelector('.navbar-darkmode__icon');
     // console.log(navbarDarkIcon);
     // navbarDarkIcon.addEventListener('click', function () {
     //      document.body.classList.toggle('light')
     // });

});