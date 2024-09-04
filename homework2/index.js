const movies = [
  {
    adult: false,
    backdrop_path: "https://image.tmdb.org/t/p/w500/ae434jM5NG2kKX1rRkG5giMhpPI.jpg",
    genre_ids: [16, 10751, 35, 28],
    id: 519182,
    original_language: "en",
    original_title: "Show White",
    popularity: 2783.962,
    poster_path:
      "https://image.tmdb.org/t/p/w500/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
    release_date: "2024-06-20",
    title: "Despicable Me 4",
    video: false,
    vote_average: 7.352,
    vote_count: 995,
  },
  {
    adult: false,
    backdrop_path: "/8yPSYhooj8nyBbmV3GVdLDwuE7e.jpg",
    genre_ids: [18, 10749],
    id: 1079091,
    original_language: "en",
    original_title: "It Ends with Us",
    popularity: 1449.093,
    poster_path:
      "https://image.tmdb.org/t/p/w500/tJSbiu7S5pqDnzH9weTW82bYbWu.jpg",
    release_date: "2024-08-07",
    title: "It Ends with Us",
    video: false,
    vote_average: 7.194,
    vote_count: 67,
  },
  {
    adult: false,
    backdrop_path: "/okVLmXL5y18dfN2R4ufMZEGaeCd.jpg",
    genre_ids: [28, 53, 18, 80],
    id: 1160018,
    original_language: "hi",
    original_title: "किल Kill",
    popularity: 956.574,
    poster_path:
      "https://image.tmdb.org/t/p/w500/m2zXTuNPkywdYLyWlVyJZW2QOJH.jpg",
    release_date: "2024-07-03",
    title: "Kill",
    video: false,
    vote_average: 7.315,
    vote_count: 62,
  },
  {
    adult: false,
    backdrop_path: "/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg",
    genre_ids: [878, 27, 53],
    id: 945961,
    original_language: "en",
    original_title: "Alien: Romulus",
    popularity: 757.184,
    poster_path:
      "https://image.tmdb.org/t/p/w500/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg",
    release_date: "2024-08-13",
    title: "Alien: Romulus",
    video: false,
    vote_average: 7.3,
    vote_count: 52,
  },
  {
    adult: false,
    backdrop_path: "/viKEEaaCaZ0hZ2nGuvIEozlLooL.jpg",
    genre_ids: [27, 80, 9648],
    id: 1023922,
    original_language: "en",
    original_title: "MaXXXine",
    popularity: 620.936,
    poster_path:
      "https://image.tmdb.org/t/p/w500/ArvoFK6nlouZRxYmtIOUzKIrg90.jpg",
    release_date: "2024-07-04",
    title: "MaXXXine",
    video: false,
    vote_average: 6.308,
    vote_count: 302,
  },
  {
    adult: false,
    backdrop_path: "/wkPPRIducGfsbaUPsWfw0MCQdX7.jpg",
    genre_ids: [28, 35, 12],
    id: 1051891,
    original_language: "en",
    original_title: "Thelma",
    popularity: 550.516,
    poster_path:
      "https://image.tmdb.org/t/p/w500/rUcuageYgv9SsJoWuc0seRWG6JC.jpg",
    release_date: "2024-06-21",
    title: "Thelma",
    video: false,
    vote_average: 7,
    vote_count: 62,
  },
  {
    adult: false,
    backdrop_path: "/7ks7A3mAO7twDOvBVE4cR8LaIM8.jpg",
    genre_ids: [16, 28, 18],
    id: 1104844,
    original_language: "ja",
    original_title: "劇場版ブルーロック -EPISODE 凪-",
    popularity: 477.655,
    poster_path:
      "https://image.tmdb.org/t/p/w500/ae434jM5NG2kKX1rRkG5giMhpPI.jpg",
    release_date: "2024-04-19",
    title: "Blue lock the movie",
    video: false,
    vote_average: 8.3,
    vote_count: 30,
  },
  {
    adult: false,
    backdrop_path: "/8fNBsXpgMvqk75SPsZzTmIqSRxY.jpg",
    genre_ids: [27, 53],
    id: 646683,
    original_language: "en",
    original_title: "The Exorcism",
    popularity: 443.021,
    poster_path:
      "https://image.tmdb.org/t/p/w500/ar2h87jlTfMlrDZefR3VFz1SfgH.jpg",
    release_date: "2024-05-30",
    title: "The Exorcism",
    video: false,
    vote_average: 4.57,
    vote_count: 115,
  },
  {
    adult: false,
    backdrop_path: "/59AJ2w9tKRSbBpnxKfB5UyIg6Jf.jpg",
    genre_ids: [27, 53],
    id: 1010605,
    original_language: "en",
    original_title: "The Devil's Spawn",
    popularity: 393.456,
    poster_path:
      "https://image.tmdb.org/t/p/w500/ae434jM5NG2kKX1rRkG5giMhpPI.jpg",
    release_date: "2024-08-02",
    title: "The Devil's Spawn",
    video: false,
    vote_average: 5.9,
    vote_count: 92,
  },
  {
    adult: false,
    backdrop_path: "/kqMZ8XBqIrAoFdItJ3N0bLVry8H.jpg",
    genre_ids: [28, 53],
    id: 975542,
    original_language: "en",
    original_title: "Infiltrator",
    popularity: 393.401,
    poster_path:
      "https://image.tmdb.org/t/p/w500/wWba3TaojhK7NdycRhoQpsG0FaH.jpg",
    release_date: "2024-06-28",
    title: "Infiltrator",
    video: false,
    vote_average: 6.4,
    vote_count: 78,
  },
];







  
const divElement = document.querySelector("div");
function renderingMovies(){
  movies.forEach(movie => {
      const block = `<div class="blocks">
      <div id="headerButton"><h1>${movie.title}</h1>
      <i class="fa-solid fa-star star"></i></div>
      <p>Release date:${movie.release_date}</p>
      <p>Rating: ${movie.vote_average}</p>
      <img src="${movie.poster_path}"/>
          </div>
      </div>`
      
      divElement.insertAdjacentHTML("afterbegin", block);
      
  });
  const addButtons = document.querySelectorAll(".star");
addButtons.forEach(button => {
  button.addEventListener("click", function() {
   
      const movieTitle = this.closest(".blocks").querySelector("h1").textContent;
      addToFavorites(movieTitle);
      
  });
});
}
renderingMovies()

function addToFavorites(movieTitle) {
  const favoritesList = document.querySelector("#favoritesList"); 
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Remove";
  deleteButton.addEventListener("click", function(){
    listItem.style.display = "none";
  })
  const listItem = document.createElement("li");
  listItem.textContent = movieTitle;
  favoritesList.appendChild(listItem);
  listItem.appendChild(deleteButton);}














  