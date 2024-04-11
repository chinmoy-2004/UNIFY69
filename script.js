
let sportsNews = document.querySelector('#sportsNews .newsBox')
let scienceNews = document.querySelector('#scienceNews .newsBox')
let techNews = document.querySelector('#techNews .newsBox')
let HealthNews = document.querySelector('#HealthNews .newsBox')
let EnvironmentNews = document.querySelector('#EnvironmentNews .newsBox')

let header = document.querySelector('.header')
let toggleMenu = document.querySelector('.bar')
let menu = document.querySelector('nav ul')

const toggle = (e) => {
    toggleMenu.classList.toggle('active')
    menu.classList.toggle('activeMenu')
}

toggleMenu.addEventListener('click', toggle)


//sticky header condition
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('sticky')
    }
    else {
        header.classList.remove('sticky')
    }
})







// fetching news data from a website providing api

// const apiKey = "29f8e42efe874ee2be23f0d1edb6844b"

// const fetchData = async (category, pageSize) => {
//     const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`
//     const data = await fetch(url)
//     const response = await data.json()
//     console.log(response);
//     return response.articles

// }




// fetchData('general',5)





// const add_sportsNews = (data) => {
//     let html = ''
//     let title = ''
//     data.forEach((element) => {
//         if (element.title.length < 100) {
//             title = element.title
//         }
//         else {
//             title = element.title.slice(0, 100) + "..."
//         }

//         html += `<div class="newsCard">
//                     <div class="img">
//                         <img src=${element.urlToImage} alt="image">
//                     </div>
//                     <div class="text">
//                         <div class="title">
//                         <a href=${element.url} target="_blank"><p>${title}</p></a>
//                         </div>
//                     </div>
//                 </div>`
//     })
//     sportsNews.innerHTML = html
// }
// fetchData('sports', 5).then(add_sportsNews)
// const add_scienceNews = (data) => {
//     let html = ''
//     let title = ''
//     data.forEach((element) => {
//         if (element.title.length < 100) {
//             title = element.title
//         }
//         else {
//             title = element.title.slice(0, 100) + "..."
//         }

//         html += `<div class="newsCard">
//                     <div class="img">
//                         <img src=${element.urlToImage} alt="image">
//                     </div>
//                     <div class="text">
//                         <div class="title">
//                         <a href=${element.url} target="_blank"><p>${title}</p></a>
//                         </div>
//                     </div>
//                 </div>`
//     })
//     scienceNews.innerHTML = html
// }
// fetchData('science', 5).then(add_scienceNews)
// const add_techNews = (data) => {
//     let html = ''
//     let title = ''
//     data.forEach((element) => {
//         if (element.title.length < 100) {
//             title = element.title
//         }
//         else {
//             title = element.title.slice(0, 100) + "..."
//         }

//         html += `<div class="newsCard">
//                     <div class="img">
//                         <img src=${element.urlToImage} alt="image">
//                     </div>
//                     <div class="text">
//                         <div class="title">
//                         <a href=${element.url} target="_blank"><p>${title}</p></a>
//                         </div>
//                     </div>
//                 </div>`
//     })
//     techNews.innerHTML = html
// }
// fetchData('technology', 5).then(add_techNews)



// const add_HealthNews = (data) => {
//     let html = ''
//     let title = ''
//     data.forEach((element) => {
//         if (element.title.length < 100) {
//             title = element.title
//         }
//         else {
//             title = element.title.slice(0, 100) + "..."
//         }

//         html += `<div class="newsCard">
//                     <div class="img">
//                         <img src=${element.urlToImage} alt="image">
//                     </div>
//                     <div class="text">
//                         <div class="title">
//                         <a href=${element.url} target="_blank"><p>${title}</p></a>
//                         </div>
//                     </div>
//                 </div>`
//     })
//     HealthNews.innerHTML = html
// }
// fetchData('health', 5).then(add_HealthNews)


// const add_EnvironmentNews = (data) => {
//     let html = ''
//     let title = ''
//     data.forEach((element) => {
//         if (element.title.length < 100) {
//             title = element.title
//         }
//         else {
//             title = element.title.slice(0, 100) + "..."
//         }

//         html += `<div class="newsCard">
//                     <div class="img">
//                         <img src=${element.urlToImage} alt="image">
//                     </div>
//                     <div class="text">
//                         <div class="title">
//                         <a href=${element.url} target="_blank"><p>${title}</p></a>
//                         </div>
//                     </div>
//                 </div>`
//     })
//     EnvironmentNews.innerHTML = html
// }
// fetchData('environment', 5).then(add_EnvironmentNews)






// FULL NEWS AFTER ONE CLICK

function toggleText() {
    var text = document.getElementById("fullNews");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  function toggleText() {
    var text = document.getElementById("fullNews2");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
  function toggleText() {
    var text = document.getElementById("fullNews4");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }