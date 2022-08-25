let image = document.querySelector('.movie-image img');
let title = document.querySelector('.movie-text h2');
let p = document.querySelector('.movie-text p');
let nextBtn = document.querySelector('.next-btn')
let prevBtn = document.querySelector('.prev-btn')
let url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=d54f1a6164bfe4d1e9a8e04d6e9d345c&language=en-US&page=1'
fetch(url)
    .then((resolve) => resolve.json())
    .then((value) => {
        console.log(value)
        let index = 0;
        image.src = `https://image.tmdb.org/t/p/original/${value.results[0].backdrop_path}`
        title.textContent = `${value.results[0].original_title.slice(0, 28)}`
        p.textContent = `The rating is ${value.results[0].vote_average}`
        nextBtn.addEventListener('click', () => {
            if (index === 19) {
                index = 0
            } else {
                index++
                image.src = `https://image.tmdb.org/t/p/original/${value.results[index].backdrop_path}`
                title.textContent = `${value.results[index].original_title.slice(0, 28)}`
                p.textContent = `The rating is ${value.results[index].vote_average}`
            }
        })
        prevBtn.addEventListener('click', () => {
            if (index === 0) {
                index = value.results.length
            } else {
                index--
                image.src = `https://image.tmdb.org/t/p/original/${value.results[index].backdrop_path}`
                title.textContent = `${value.results[index].original_title.slice(0, 28)}`
                p.textContent = `The rating is ${value.results[index].vote_average}`
              
            };
        });
    });


        // scroll   Arrow Button

const scrollBtn = document.querySelector('.arrow');

if(scrollBtn) {
    window.addEventListener('scroll', () => {
        if(pageYOffset > (window.innerHeight * 1.2)) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    scrollBtn.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
}

        //   Desktop  Moon

let moonIcon = document.querySelector('.iconMoonInTwoF img');

moonIcon.onclick = function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        moonIcon.src = './image/sun.png';
    } else {
        moonIcon.src = './image/moon.png';
    }
}

                  //   Mobile  Moon
let moonIconT = document.querySelector('.iconMoonInTwoT img');

moonIconT.onclick = function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        moonIconT.src = './image/sun.png';
    } else {
        moonIconT.src = './image/moon.png';
    }
}

        //   sidebar mobile 

        let menu = document.querySelector('#side-menu')
        let sideBar = document.querySelector('.first-section')
        let sidebarCount = 0;
        
        menu.onclick = () => {
          menu.classList.toggle('fa-times');
          sideBar.classList.toggle('active');
          if(sidebarCount === 0) {
            sidebarCount++
            document.querySelector('.navbarF').style.backgroundColor = 'var(--first-color)';
          } else {
            sidebarCount--
            document.querySelector('.navbarF').style.backgroundColor = `var(--navColor-color)`;
          }
          
        };


        //   Bottom Navbar

const list = document.querySelectorAll('.listB');

list.forEach((item) =>
item.addEventListener('click', activeLink));

// countClick = 0;

function activeLink() {
    list.forEach((item) => 
    item.classList.remove('active'));
    // countClick++
    this.classList.add('active')
    
}

// window.addEventListener('click', () => {

//     if(countClick > 0) {
//         countClick = 0;
//         list.forEach((item) => 
//         item.classList.remove('active'));
//     }
// })

//  For  Test

// window.addEventListener('click', () => {
//     if(document.querySelector('.navigationB ul li').style = ('active')) {
//         document.querySelector('.navigationB ul li').style.remove('active');
//     }
// })


//           Mobile Bottom Navbar Scroll

// let section =  document.querySelectorAll('section'); 
// let navBottomLinks =  document.querySelectorAll('.navigationB ul li');

// window.onscroll = () => {

//     section.forEach(sectionItem => {

//         let top = window.scrollY;
//         let offset = sectionItem.offsetTop;
//         let height = sectionItem.offsetHeight;
//         let id = sectionItem.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navBottomLinks.forEach(bLinks => {
//                 bLinks.classList.remove('active');
//                 document.querySelector('.navigationB ul li[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });

// };