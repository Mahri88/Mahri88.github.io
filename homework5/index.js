// const url = "https://solar-poised-salad.glitch.me/products";

// // GET REQUESTS
// async function getProducts() {
//   try {
//     const response = await axios(url);
//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// // async function getTodosWithFetch() {
// //   try {
// //     const response = await fetch(url);
// //     const data = await response.json();
// //     console.log(data);
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }

// // getTodosWithFetch();

// // POST REQUESTS

// async function addProduct() {
//   try {
//     const product = {
//       imageUrl:
//         "https://m.media-amazon.com/images/I/61sWCPz-IfL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
//       title: "Nokia added with axios",
//       price: 899,
//       description: "Nokia phone",
//     };
//     const response = await axios.post(url, product);
//     console.log(response.data);
//     getProducts();
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function addProductWithFetch() {
//   try {
//     const product = {
//       imageUrl:
//         "https://m.media-amazon.com/images/I/61sWCPz-IfL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
//       title: "Nokia added with Fetch",
//       price: 899,
//       description: "Nokia phone",
//     };
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(product),
//     });

//     const data = await response.json();
//     console.log(data);
//     getProducts();
//     // write your success logic
//     // update the list of products
//   } catch (error) {
//     console.log(error);
//   }
// }

// // document.querySelector("#axios-btn").addEventListener("click", () => {
// //   location.href = `movie.html?movieId=${12}`;

// //   //   addProduct();
// // });

// // document.querySelector("#fetch-btn").addEventListener("click", () => {
// //   addProductWithFetch();
// // });

// // movie list functionality
// // search functionality
// // filtering by genres (optional)
// // go to the specific movie page
// // show movie information (cast, title etc.)
// // show the trailer (optional)

// const apiKey = "95686a04581c305cc6d7e4ccff9d039a";
// const newUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=`;
// const imagePrefix = "https://image.tmdb.org/t/p/w500/";

// const favorites = JSON.parse(localStorage.getItem("favs")) || [];

// const loader = document.querySelector("p");

// async function getMovies() {
//   loader.style.display = "block";
//   try {
//     const {
//       data: { results },
//     } = await axios(newUrl + apiKey);
//     const moviesContainer = document.querySelector(".movies");
//     results.forEach((movie) => {
//       const movieCard = `
//         <div class="movie">
//         <img src="${imagePrefix + movie.poster_path}" />
//         <div>
//           <button class="movie-btn" id="${movie.id}">${movie.title}</button>
//           <button class="favorite-btn" data-movie-id="${
//             movie.id
//           }">Add to favorites</button>
//         </div>
//         </div>
//       `;
//       moviesContainer.insertAdjacentHTML("beforeend", movieCard);
//     });

//     const btns = document.querySelectorAll(".movie-btn");
//     btns.forEach((btn) => {
//       btn.addEventListener("click", function () {
//         location.href = `movie.html?movieId=${this.id}`;
//       });
//     });

//     const favBtns = document.querySelectorAll(".favorite-btn");
//     favBtns.forEach((btn) => {
//       btn.addEventListener("click", function () {
//         const foundMovie = results.find(
//           // TODO: use triple equal or strict equality
//           (movie) => movie.id == this.dataset.movieId
//         );
//         console.log(favorites);
//         favorites.push(foundMovie);
//         localStorage.setItem("favs", JSON.stringify(favorites));
//         renderFavorites();
//       });
//     });
//   } catch (error) {
//     document.querySelector(".error-message").textContent =
//       "Something went wrong";
//   } finally {
//     loader.style.display = "none";
//   }
// }

// function renderFavorites() {
//   const favoritesContainer = document.querySelector(".favorites div");
//   favoritesContainer.innerHTML = "";
//   favorites.forEach((movie) => {
//     const movieCard = `
//       <div class="movie">
//       <img src="${imagePrefix + movie.poster_path}" />
//       <div>
//         <button class="movie-btn" id="${movie.id}">${movie.title}</button>
//         <button class="favorite-btn" data-movie-id="${
//           movie.id
//         }">Remove from favorites</button>
//       </div>
//       </div>
//     `;
//     favoritesContainer.insertAdjacentHTML("beforeend", movieCard);
//   });
// }

// getMovies();
// renderFavorites();

// document.querySelector("#test").addEventListener("click", function (e) {
//   // localStorage.setItem("test", JSON.stringify({ id: 1, title: "iPhone 14" }));
//   const currentItem = JSON.parse(localStorage.getItem("test"));
// });


//  function greeting( name,owner) {
//     if(name = owner){
//     return 'Hello boss';
// }else{
//     return 'Hello guest';
// }
// };
//  console.log(greeting('Hello boss','Hello guest'));


// //
//  const quarterOf = (month) => {
  
//     if (month >= 2 && month <= 3) {
//       return 'First quater ';
//     } else if (month >= 4 &&  month <= 6 ) {
//       return  'Second quater ';
//     } else if ( month  >=7 &&  month <= 9) {
//       return 'Third quater'
//     } else if ( month  >=10 &&  month <= 12) {
//       return  'Forth quater'
//     }else{
//       return 'error'
//   }
// }
//   console.log(quarterOf(2));
//   console.log(quarterOf(9));
//   console.log(quarterOf(11));
  
// {/* <div class="overview">
// <h3>Overview</h3>
// ${overview} */}
//   movie apps


//my code

//   const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
//   // Storing the image path that will be used to show movie image
//   const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
//   // Storing the api irl for searching the movie
//   const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
  
//   // getting the id's of required html elements
//   const main = document.getElementById('main')
//   const form = document.getElementById('form')
//   const search = document.getElementById('search')
//   const btn = document.getElementsByClassName('btn')
  

//   getMovies(API_URL)

//   async function getMovies(url) {
//       const res = await fetch(url)
//       const data = await res.json()
    
//       showMovies(data.results)
//   }
  

//   function showMovies(movies) {
//       main.innerHTML = ''
  
//       movies.forEach((movie) => {
         
//           const { title, poster_path, vote_average, overview } = movie
  
//           const movieEl = document.createElement('div')
//           movieEl.classList.add('movie')
  
//           movieEl.innerHTML = `
//               <img src="${IMG_PATH + poster_path}" alt="${title}">
//               <div class="movie-info">
//             <h3>${title}</h3>
//             <span class="${getClassByRate(vote_average)}">${vote_average}</span>
//              <button class="btn">Add Favorites</button>
        
//               </div>
//           </div>
//           `
       
//           main.appendChild(movieEl)


     


//           const btns =document.querySelectorAll(".movie-btn");
//           btns.forEach((btn)=>{
//             btn.addEventListener("click",function(){
//                 location.href =`movie.html?Id=${this.id}`;
//             })
//           })
//       })
//     }

//   function getClassByRate(vote) {
//       if(vote >= 8) {
//           return 'green'
//       } else if(vote >= 5) {
//           return 'orange'
//       } else {
//           return 'red'
//       }
//   }

//   search.addEventListener("input",()=>{
//       const searchTerm = search.value
//       if(searchTerm && searchTerm !== '') {
//           getMovies(SEARCH_API + searchTerm)
//       }
//        else {
//           window.location.reload()
//       }
//   })
  





//new code
//TMDB 

const API_KEY = 'api_key=48c5e0a2600d0e6ae88a8f7fcbfe270b';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;

const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

const main = document.getElementById('main');
const form =  document.getElementById('form');
const search = document.getElementById('search');
const tagsEl = document.getElementById('tags');

const prev = document.getElementById('prev')
const next = document.getElementById('next')
const current = document.getElementById('current')

let  currentPage = 1;
let nextPage = 2;
let prevPage = 3;
let lastUrl = '';
let totalPages = 100;

const selectedGenre = []
setGenre();
function setGenre() {
    tagsEl.innerHTML= '';
    genres.forEach(genre => {
        const t = document.createElement('div');
        t.classList.add('tag');
        t.id=genre.id;
        t.innerText = genre.name;
        t.addEventListener('click', () => {
            if(selectedGenre.length == 0){
                selectedGenre.push(genre.id);
            }else{
                if(selectedGenre.includes(genre.id)){
                    selectedGenre.forEach((id, idx) => {
                        if(id == genre.id){
                            selectedGenre.splice(idx, 1);
                        }
                    })
                }else{
                    selectedGenre.push(genre.id);
                }
            }
            console.log(selectedGenre)
            getMovies(API_URL + '&with_genres='+encodeURI(selectedGenre.join(',')))
            highlightSelection()
        })
        tagsEl.append(t);
    })
}

function highlightSelection() {
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.classList.remove('highlight')
    })
    clearBtn()
    if(selectedGenre.length !=0){   
        selectedGenre.forEach(id => {
            const hightlightedTag = document.getElementById(id);
            hightlightedTag.classList.add('highlight');
        })
    }

}

function clearBtn(){
    let clearBtn = document.getElementById('clear');
    if(clearBtn){
        clearBtn.classList.add('highlight')
    }else{
            
        let clear = document.createElement('div');
        clear.classList.add('tag','highlight');
         clear.id = 'clear';
       clear.innerText = 'Clear ';
//         clear.addEventListener('click', () => {
//             selectedGenre = [];
//             setGenre();            
//             getMovies(API_URL);
//         })
         tagsEl.append(clear);
     }
    
 }

getMovies(API_URL);

function getMovies(url) {
  lastUrl = url;
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        if(data.results.length !== 0){
            showMovies(data.results);
            currentPage = data.page;
            nextPage = currentPage + 1;
            prevPage = currentPage - 1;
            totalPages = data.total_pages;

            current.innerText = currentPage;

            if(currentPage <= 1){
              prev.classList.add('disabled');
              next.classList.remove('disabled')
            }else if(currentPage>= totalPages){
              prev.classList.remove('disabled');
              next.classList.add('disabled')
            }else{
              prev.classList.remove('disabled');
              next.classList.remove('disabled')
            }

            tagsEl.scrollIntoView({behavior : 'smooth'})

        }else{
            main.innerHTML= `<h1 class="no-results">No Results Found</h1>`
        }
       
    })

}


function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview, id} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
             <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/1080x1580" }" alt="${title}">

            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average.toFixed(1))}">${vote_average.toFixed(1)}</span>
                

            <div class="overview">

                <h3>Overview</h3>
                ${overview}
                <br/> 
                <button class="know-more" id="${id}">Add Favorites</button
            </div>
        
        `

        main.appendChild(movieEl);

        document.getElementById(id).addEventListener('click', () => {
          console.log(id)
          openNav(movie)
        })
    })
}
 const overlayContent = document.getElementById('overlay-content');
//Open when someone clicks on the span element 
 function openNav(movie) {
   let id = movie.id;
  fetch(BASE_URL + '/movie/'+id+'/alternative_titles?'+API_KEY).then(res => res.json()).then(videoData => {
     console.log(videoData);
     if(videoData){
       document.getElementById("myNav").style.width = "100%";
       if(videoData.results.length > 0){
         let embed = [];
         videoData.results.forEach(video => {
           let {name, key, site} = video

          if(site === 'YouTube'){
              
            embed.push(`
               <iframe width="560" height="315" src="https://www.youtube.com/embed/${key}" title="${name}" class="embed hide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
           `);

         
          }
        })
        
        const content = `
        <h1>${movie.original_title}</h1>
        <br/>
        
        ${embed.join('')}
        <br/>

      
        
        `;
        overlayContent.innerHTML = content;
       
      }else{
        overlayContent.innerHTML = `<h1 class="no-results">No Results Found</h1>`
      }
    }
  })
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}






function getColor(vote) {
    if(vote>= 8){
        return 'green'
    }else if(vote >= 5){
        return "orange"
    }else{
        return 'red'
    }
}
search.addEventListener("input", () => {
  const searchTerm = search.value.trim(); 

  if (searchTerm) {
      
      const searchUrl = `${searchURL}&query=${encodeURIComponent(searchTerm)}`;
      getMovies(searchUrl);
  } else {
    
      getMovies(API_URL); 
  }
});


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;
    selectedGenre=[];
    setGenre();
    if(searchTerm) {
        getMovies(searchURL+'&query='+searchTerm)
    }else{
        getMovies(API_URL);
    }

})



function pageCall(page){
  let urlSplit = lastUrl.split('?');
  let queryParams = urlSplit[1].split('&');
  let key = queryParams[queryParams.length -1].split('=');
  if(key[0] != 'page'){
    let url = lastUrl + '&page='+page
    getMovies(url);
  }else{
    key[1] = page.toString();
    let a = key.join('=');
    queryParams[queryParams.length -1] = a;
    let b = queryParams.join('&');
    let url = urlSplit[0] +'?'+ b
    getMovies(url);
  }
}
//Aiym's code

function displayMovies(){
  const btns =document/querySelectorAll(".movie-btn")
  btns.forEach((btn)=> {
    btn.addEventListener("click", function(){
      location.href =`movie.thml?Id=${this.id}`;
    });
  });
}
const addButtons =document.querySelectorAll(".buttonAdd");
addButtons.forEach((button) => {
  button.addEventListener("click",function(){
    const movieId = this.getAttrribute("data-movie-id");
    const movie =movie.find((m)=>m.id == movieId);
    addToFavorites(movie);
  });
});

function addToFavorites(movie){
let favorites =JSON.parse(localeStorage.getItem("favorites")) || [];
if(!favorites.some((fav) => fav.id === movie.id)){
  favorites.push(movie);
  localStorage.setItem("favorites",JSON.stringify(favorites));
  alert(`${movie.title}added to favorite!`);
}else{
  alert(`${movie.title} is alredy in favorite`);
}
}
displayMovies(allMovies);