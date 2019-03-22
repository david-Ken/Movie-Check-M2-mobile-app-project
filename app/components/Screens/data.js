//actor by movie ID
//https://api.themoviedb.org/3/movie/299537/credits?api_key=96e53b76cf1cedd470c0a21126e12d42

//review
//https://api.themoviedb.org/3/movie/299537/reviews?api_key=96e53b76cf1cedd470c0a21126e12d42&language=en-US&page=1

async function getMoviesByYear(numberOfbPages, year) {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=96e53b76cf1cedd470c0a21126e12d42&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${numberOfbPages}&year=${year}`;
  const response = await fetch(url);
  try {
    const json = response.json();
    return json;
  } catch (e) {
    console.log(e);
  }
}
//https://www.youtube.com/watch?v=SUXWAEX2jlg

async function getData(url) {
  const response = await fetch(url);
  try {
    const json = response.json();
    return json;
  } catch (e) {
    console.log(e);
  }
}

let movieByYearDataTable = null;

for (let i = 1; i <= 20; i++) {
  getMoviesByYear(i, 2018).then(data => {
    //console.log(data);
    movieByYearDataTable.push(data);
  });
}

function initializeEmptyArray(nb) {
  let array = [];
  //all nested array contains 20 movies
  nb = nb * 20;
  for (let i = 0; i < nb; i++) {
    array.push([]);
  }
  return array;
}
//export

module.exports = {
  getMoviesByYear,
  getData,
  initializeEmptyArray,
  movies
};

//test set
const movies = [
  {
    title: "La La Land",
    poster: "https://i.imgur.com/po7UezG.jpg",
    genre: "Drama/Romance"
  },
  {
    title: "Paterson",
    poster: "https://i.imgur.com/pE0C9E0.jpg",
    genre: "Drama/Comedy"
  },
  {
    title: "Jackie",
    poster: "https://i.imgur.com/VqUi1sw.jpg",
    genre: "Drama/Biography"
  },
  {
    title: "Lo and Behold Reveries of the Connected World",
    poster: "https://i.imgur.com/s106X7S.jpg",
    genre: "Documentary"
  },
  {
    title: "10 Cloverfield Lane",
    poster: "https://i.imgur.com/kV2BVdH.jpg",
    genre: "Drama"
  },
  {
    title: "Birth of a Nation",
    poster: "https://i.imgur.com/a6HJj8S.jpg",
    genre: "Fantasy/Myster"
  },
  {
    title: "De Palma",
    poster: "https://i.imgur.com/oOIa73M.jpg",
    genre: "Documentary"
  },
  {
    title: "Doctor Strange",
    poster: "https://i.imgur.com/kyHDVOk.jpg",
    genre: "Fantasy/Science Fiction"
  },
  {
    title: "Eddie the Eagle",
    poster: "https://i.imgur.com/GNrdAuF.jpg",
    genre: "Drama/Sport"
  },
  {
    title: "Pride and prejudice and zombies",
    poster: "https://i.imgur.com/KhbG0Lw.jpg",
    genre: "Thriller/Action"
  },
  {
    title: "Finding Dory",
    poster: "https://i.imgur.com/BTexHYJ.jpg",
    genre: "Comedy/Adventure"
  },
  {
    title: "Green Room",
    poster: "https://i.imgur.com/Q0Ysh7L.jpg",
    genre: "Crime/Thriller"
  },
  {
    title: "Kubo and the Two Strings",
    poster: "https://i.imgur.com/uTFCKZc.jpg",
    genre: "Fantasy/Adventure"
  },
  {
    title: "In a Valley of Violence",
    poster: "https://i.imgur.com/DTtJ62G.jpg",
    genre: "Drama/Western"
  },
  {
    title: "O.J.: Made in America",
    poster: "https://i.imgur.com/T8uc6x8.jpg",
    genre: "Documentary"
  },
  {
    title: "Rogue One: A Star Wars Story",
    poster: "https://i.imgur.com/zOF2iYc.jpg",
    genre: "Science Fiction/Action"
  },
  {
    title: "Sing Street",
    poster: "https://i.imgur.com/C3ExEb6.jpg",
    genre: "Drama/Romance"
  },
  {
    title: "Zoolander 2",
    poster: "https://i.imgur.com/ejlIijD.jpg",
    genre: "Comedy"
  }
];
/* 
export const final = [
  {
    vote_count: 1745,
    id: 490132,
    video: false,
    vote_average: 8.3,
    title: "Green Book",
    popularity: 271.065,
    poster_path: "/7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg",
    original_language: "en",
    original_title: "Green Book",
    genre_ids: [18, 35, 10402],
    backdrop_path: "/78PjwaykLY2QqhMfWRDvmfbC6EV.jpg",
    adult: false,
    overview:
      "Tony Lip, a bouncer in 1962, is hired to drive pianist Don Shirley on a tour through the Deep South in the days when African Americans, forced to find alternate accommodations and services due to segregation laws below the Mason-Dixon Line, relied on a guide called The Negro Motorist Green Book.",
    release_date: "2018-11-16"
  }
];
 */
