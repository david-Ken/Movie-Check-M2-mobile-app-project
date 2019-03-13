function MultipleFetch(numberOfPage, year) {
  var temp = [];

  //for (var i = 1; i < numberOfPage; i++) {
  // var apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=96e53b76cf1cedd470c0a21126e12d42&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}&year=${year}`;
  var apiUrl =
    "https://api.themoviedb.org/3/movie/450001?api_key=96e53b76cf1cedd470c0a21126e12d42&language=en-US";
  fetch(apiUrl)
    .then(response => response.json())
    .then(responseJson => {
      //  console.log(responseJson.results);

      //temp.push(responseJson);
      temp = responseJson;
    })
    .catch(error => {
      console.error(error);
    });
  //}

  return temp;
}

async function getDatas(nbPages, year) {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=96e53b76cf1cedd470c0a21126e12d42&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${nbPages}&year=${year}`;
  const response = await fetch(url);
  try {
    const json = response.json();
    return json;
  } catch (e) {
    console.log(e);
  }
}

let myData = null;

for (let i = 1; i <= 20; i++) {
  getDatas(i, 2018).then(data => {
    //console.log(data);
    myData.push(data);
  });
}

function initializeEmptyArray(nb) {
  let array = [];
  for (let i = 0; i < nb; i++) {
    array.push([]);
  }
  return array;
}
module.exports = {
  getDatas,
  initializeEmptyArray
};

/* function flatten(arr) {
  return Array.prototype.concat(...arr);
}
function format(datatab) {
  var formatted = [];
  for (var i = 0; i < datatab.length; i++) {
    formatted[i] = datatab[i];
  }
  return formatted;
} */

var finale = MultipleFetch(10, 2018);

console.log(
  "********************************Finale****************************************"
);
//console.log(finale);
//console.log("test:" + finale[0]);

//export default finale;

export const movies = [
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
  },
  {
    vote_count: 2120,
    id: 324857,
    video: false,
    vote_average: 8.5,
    title: "Spider-Man: Into the Spider-Verse",
    popularity: 230.655,
    poster_path: "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    original_language: "en",
    original_title: "Spider-Man: Into the Spider-Verse",
    genre_ids: [28, 12, 16, 878, 35],
    backdrop_path: "/uUiId6cG32JSRI6RyBQSvQtLjz2.jpg",
    adult: false,
    overview:
      'Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson "Kingpin" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.',
    release_date: "2018-12-07"
  },
  {
    vote_count: 3594,
    id: 338952,
    video: false,
    vote_average: 6.9,
    title: "Fantastic Beasts: The Crimes of Grindelwald",
    popularity: 173.138,
    poster_path: "/kQKcbJ9uYkTQql2R8L4jTUz7l90.jpg",
    original_language: "en",
    original_title: "Fantastic Beasts: The Crimes of Grindelwald",
    genre_ids: [10751, 14, 12],
    backdrop_path: "/wDN3FIcQQ1HI7mz1OOKYHSQtaiE.jpg",
    adult: false,
    overview:
      "Gellert Grindelwald has escaped imprisonment and has begun gathering followers to his cause—elevating wizards above all non-magical beings. The only one capable of putting a stop to him is the wizard he once called his closest friend, Albus Dumbledore. However, Dumbledore will need to seek help from the wizard who had thwarted Grindelwald once before, his former student Newt Scamander, who agrees to help, unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.",
    release_date: "2018-11-14"
  },
  {
    vote_count: 5662,
    id: 424694,
    video: false,
    vote_average: 8.1,
    title: "Bohemian Rhapsody",
    popularity: 165.019,
    poster_path: "/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg",
    original_language: "en",
    original_title: "Bohemian Rhapsody",
    genre_ids: [18, 10402],
    backdrop_path: "/xcaSYLBhmDzJ6P14bcKe0KTh3QV.jpg",
    adult: false,
    overview:
      "Singer Freddie Mercury, guitarist Brian May, drummer Roger Taylor and bass guitarist John Deacon take the music world by storm when they form the rock 'n' roll band Queen in 1970. Hit songs become instant classics. When Mercury's increasingly wild lifestyle starts to spiral out of control, Queen soon faces its greatest challenge yet – finding a way to keep the band together amid the success and excess.",
    release_date: "2018-10-24"
  },
  {
    vote_count: 1491,
    id: 480530,
    video: false,
    vote_average: 6.6,
    title: "Creed II",
    popularity: 151.006,
    poster_path: "/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg",
    original_language: "en",
    original_title: "Creed II",
    genre_ids: [18],
    backdrop_path: "/8yqLPNwNCtpOPc3XkOlkSMnghzw.jpg",
    adult: false,
    overview:
      "Between personal obligations and training for his next big fight against an opponent with ties to his family's past, Adonis Creed is up against the challenge of his life.",
    release_date: "2018-11-21"
  },
  {
    vote_count: 1594,
    id: 404368,
    video: false,
    vote_average: 7.3,
    title: "Ralph Breaks the Internet",
    popularity: 135.555,
    poster_path: "/ybhsGCKHpzqJDRsfnGmHNUHHrqB.jpg",
    original_language: "en",
    original_title: "Ralph Breaks the Internet",
    genre_ids: [10751, 16, 35, 14],
    backdrop_path: "/88poTBTafMXaz73vYi3c74g0y2k.jpg",
    adult: false,
    overview:
      'Video game bad guy Ralph and fellow misfit Vanellope von Schweetz must risk it all by traveling to the World Wide Web in search of a replacement part to save Vanellope\'s video game, "Sugar Rush." In way over their heads, Ralph and Vanellope rely on the citizens of the internet -- the netizens -- to help navigate their way, including an entrepreneur named Yesss, who is the head algorithm and the heart and soul of trend-making site BuzzzTube.',
    release_date: "2018-11-20"
  },
  {
    vote_count: 999,
    id: 428078,
    video: false,
    vote_average: 5.9,
    title: "Mortal Engines",
    popularity: 119.749,
    poster_path: "/uXJVpPXxZO4L8Rz3IG1Y8XvZJcg.jpg",
    original_language: "en",
    original_title: "Mortal Engines",
    genre_ids: [878, 28, 12, 14, 53],
    backdrop_path: "/rm2oMykm5nX6SzXFr7TGHkO6r8Z.jpg",
    adult: false,
    overview:
      "Many thousands of years in the future, Earth’s cities roam the globe on huge wheels, devouring each other in a struggle for ever diminishing resources. On one of these massive traction cities, the old London, Tom Natsworthy has an unexpected encounter with a mysterious young woman from the wastelands who will change the course of his life forever.",
    release_date: "2018-11-27"
  },
  {
    vote_count: 4162,
    id: 332562,
    video: false,
    vote_average: 7.5,
    title: "A Star Is Born",
    popularity: 118.683,
    poster_path: "/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg",
    original_language: "en",
    original_title: "A Star Is Born",
    genre_ids: [18, 10402, 10749],
    backdrop_path: "/wqtaHWOEZ3rXDJ8c6ZZShulbo18.jpg",
    adult: false,
    overview:
      "Seasoned musician Jackson Maine discovers — and falls in love with — struggling artist Ally. She has just about given up on her dream to make it big as a singer — until Jack coaxes her into the spotlight. But even as Ally's career takes off, the personal side of their relationship is breaking down, as Jack fights an ongoing battle with his own internal demons.",
    release_date: "2018-10-03"
  },
  {
    vote_count: 3897,
    id: 297802,
    video: false,
    vote_average: 6.8,
    title: "Aquaman",
    popularity: 107.474,
    poster_path: "/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
    original_language: "en",
    original_title: "Aquaman",
    genre_ids: [28, 12, 14],
    backdrop_path: "/5A2bMlLfJrAfX9bqAibOL2gCruF.jpg",
    adult: false,
    overview:
      "Once home to the most advanced civilization on Earth, the city of Atlantis is now an underwater kingdom ruled by the power-hungry King Orm. With a vast army at his disposal, Orm plans to conquer the remaining oceanic people -- and then the surface world. Standing in his way is Aquaman, Orm's half-human, half-Atlantean brother and true heir to the throne. With help from royal counselor Vulko, Aquaman must retrieve the legendary Trident of Atlan and embrace his destiny as protector of the deep.",
    release_date: "2018-12-07"
  },
  {
    vote_count: 1320,
    id: 375262,
    video: false,
    vote_average: 7.7,
    title: "The Favourite",
    popularity: 106.083,
    poster_path: "/cwBq0onfmeilU5xgqNNjJAMPfpw.jpg",
    original_language: "en",
    original_title: "The Favourite",
    genre_ids: [18, 36, 35],
    backdrop_path: "/ekWMoBZ4B9rM60INZEh5FAD2HFR.jpg",
    adult: false,
    overview:
      "England, early 18th century. The close relationship between Queen Anne and Sarah Churchill is threatened by the arrival of Sarah's cousin, Abigail Hill, resulting in a bitter rivalry between the two cousins to be the Queen's favourite.",
    release_date: "2018-11-23"
  },
  {
    vote_count: 11706,
    id: 299536,
    video: false,
    vote_average: 8.3,
    title: "Avengers: Infinity War",
    popularity: 103.311,
    poster_path: "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    original_language: "en",
    original_title: "Avengers: Infinity War",
    genre_ids: [12, 28, 14],
    backdrop_path: "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
    adult: false,
    overview:
      "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    release_date: "2018-04-25"
  },
  {
    vote_count: 28,
    id: 450001,
    video: false,
    vote_average: 5.7,
    title: "Master Z: Ip Man Legacy",
    popularity: 94.269,
    poster_path: "/f2PN2ff0VwcVUSgeJUx6pKHwp4r.jpg",
    original_language: "cn",
    original_title: "葉問外傳：張天志",
    genre_ids: [28],
    backdrop_path: "/nv4KsjnhcSIZtuw2mkT9IxoQ5oq.jpg",
    adult: false,
    overview:
      "After being defeated by Ip Man, Cheung Tin Chi is attempting to keep a low profile. While going about his business, he gets into a fight with a foreigner by the name of Davidson, who is a big boss behind the bar district. Tin Chi fights hard with Wing Chun and earns respect.",
    release_date: "2018-12-20"
  },
  {
    vote_count: 257,
    id: 491418,
    video: false,
    vote_average: 7.6,
    title: "Instant Family",
    popularity: 90.976,
    poster_path: "/xYV1mODz99w7AjKDSQ7h2mzZhVe.jpg",
    original_language: "en",
    original_title: "Instant Family",
    genre_ids: [35, 18],
    backdrop_path: "/lwICpzZudw8BZ0bODaHgRWCdioB.jpg",
    adult: false,
    overview:
      "When Pete and Ellie decide to start a family, they stumble into the world of foster care adoption. They hope to take in one small child but when they meet three siblings, including a rebellious 15 year old girl, they find themselves speeding from zero to three kids overnight.",
    release_date: "2018-11-16"
  },
  {
    vote_count: 747,
    id: 375588,
    video: false,
    vote_average: 5.7,
    title: "Robin Hood",
    popularity: 87.867,
    poster_path: "/AiRfixFcfTkNbn2A73qVJPlpkUo.jpg",
    original_language: "en",
    original_title: "Robin Hood",
    genre_ids: [12, 28, 53],
    backdrop_path: "/AuA50D7T7S7OEVcGo0ZKaMhERn0.jpg",
    adult: false,
    overview:
      "A war-hardened Crusader and his Moorish commander mount an audacious revolt against the corrupt English crown.",
    release_date: "2018-11-20"
  },
  {
    vote_count: 5132,
    id: 335983,
    video: false,
    vote_average: 6.6,
    title: "Venom",
    popularity: 83.095,
    poster_path: "/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg",
    original_language: "en",
    original_title: "Venom",
    genre_ids: [878, 28],
    backdrop_path: "/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
    adult: false,
    overview:
      "Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote. Soon, he must rely on his newfound powers to protect the world from a shadowy organization looking for a symbiote of their own.",
    release_date: "2018-09-28"
  },
  {
    vote_count: 296,
    id: 457136,
    video: false,
    vote_average: 6.6,
    title: "Mary Queen of Scots",
    popularity: 81.58,
    poster_path: "/b5RMzLAyq5QW6GtN9sIeAEMLlBI.jpg",
    original_language: "en",
    original_title: "Mary Queen of Scots",
    genre_ids: [18, 36],
    backdrop_path: "/iv5N169nQIzrS0pZ8MBEiemTtVt.jpg",
    adult: false,
    overview:
      "In 1561, Mary Stuart, widow of the King of France, returns to Scotland, reclaims her rightful throne and menaces the future of Queen Elizabeth I as ruler of England, because she has a legitimate claim to the English throne. Betrayals, rebellions, conspiracies and their own life choices imperil both Queens. They experience the bitter cost of power, until their tragic fate is finally fulfilled.",
    release_date: "2018-12-21"
  },
  {
    vote_count: 719,
    id: 504172,
    video: false,
    vote_average: 6.5,
    title: "The Mule",
    popularity: 77.582,
    poster_path: "/t0idiLMalKMj2pLsvqHrOM4LPdQ.jpg",
    original_language: "en",
    original_title: "The Mule",
    genre_ids: [80, 18, 53],
    backdrop_path: "/wVhrbxbMmFfx05YNlqsQfu1gRS5.jpg",
    adult: false,
    overview:
      "Earl Stone, a man in his 80s who is broke, alone, and facing foreclosure of his business when he is offered a job that simply requires him to drive. Easy enough, but, unbeknownst to Earl, he’s just signed on as a drug courier for a Mexican cartel. He does so well that his cargo increases exponentially, and Earl hit the radar of hard-charging DEA agent Colin Bates.",
    release_date: "2018-12-14"
  },
  {
    vote_count: 111,
    id: 505954,
    video: false,
    vote_average: 4.7,
    title: "T-34",
    popularity: 75.731,
    poster_path: "/wNJF8R5QE6nBT7DQoKk8t6YD1MM.jpg",
    original_language: "ru",
    original_title: "T-34",
    genre_ids: [10752, 18, 12, 28],
    backdrop_path: "/59qyrVGLLtrcuFtJGdixzn7H4OI.jpg",
    adult: false,
    overview:
      "In 1944, a courageous group of Russian soldiers managed to escape from German captivity in a half-destroyed legendary T-34 tank. Those were the times of unforgettable bravery, fierce fighting, unbreakable love, and legendary miracles.",
    release_date: "2018-12-27"
  },
  {
    vote_count: 136,
    id: 503616,
    video: false,
    vote_average: 6.1,
    title: "Second Act",
    popularity: 75.52,
    poster_path: "/maUMIZVGs8g1hYtq4dQ9Lg9FtVF.jpg",
    original_language: "en",
    original_title: "Second Act",
    genre_ids: [10749, 35, 18],
    backdrop_path: "/osmnZ2rYpBK0cOK9Vjdf4jyIZWK.jpg",
    adult: false,
    overview:
      "Maya, a 40-year-old woman struggling with frustrations from unfulfilled dreams. Until that is, she gets the chance to prove to Madison Avenue that street smarts are as valuable as book smarts, and that it is never too late for a second act.",
    release_date: "2018-11-22"
  },
  {
    vote_count: 642,
    id: 438799,
    video: false,
    vote_average: 6.7,
    title: "Overlord",
    popularity: 73.453,
    poster_path: "/l76Rgp32z2UxjULApxGXAPpYdAP.jpg",
    original_language: "en",
    original_title: "Overlord",
    genre_ids: [27, 10752, 28, 878],
    backdrop_path: "/sHNC8hjAu4ZKXYhG3cp8ghRZ02B.jpg",
    adult: false,
    overview:
      "France, World War II, June 1944. On the eve of D-Day, some American paratroopers fall behind enemy lines after their plane crashes during a mission consisting of destroying a German radio tower in Cielblanc, a small village near the beaches of Normandy. After reaching their target, the surviving paratroopers realize that, in addition to fighting Nazi troops that patrol the village, they also must fight against something else.",
    release_date: "2018-11-01"
  },
  {
    vote_count: 307,
    id: 457136,
    video: false,
    vote_average: 6.6,
    title: "Mary Queen of Scots",
    popularity: 80.035,
    poster_path: "/b5RMzLAyq5QW6GtN9sIeAEMLlBI.jpg",
    original_language: "en",
    original_title: "Mary Queen of Scots",
    genre_ids: [18, 36],
    backdrop_path: "/iv5N169nQIzrS0pZ8MBEiemTtVt.jpg",
    adult: false,
    overview:
      "In 1561, Mary Stuart, widow of the King of France, returns to Scotland, reclaims her rightful throne and menaces the future of Queen Elizabeth I as ruler of England, because she has a legitimate claim to the English throne. Betrayals, rebellions, conspiracies and their own life choices imperil both Queens. They experience the bitter cost of power, until their tragic fate is finally fulfilled.",
    release_date: "2018-12-21"
  },
  {
    vote_count: 3299,
    id: 337167,
    video: false,
    vote_average: 6.1,
    title: "Fifty Shades Freed",
    popularity: 75.442,
    poster_path: "/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg",
    original_language: "en",
    original_title: "Fifty Shades Freed",
    genre_ids: [18, 10749],
    backdrop_path: "/9ywA15OAiwjSTvg3cBs9B7kOCBF.jpg",
    adult: false,
    overview:
      "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
    release_date: "2018-01-17"
  },
  {
    vote_count: 10909,
    id: 284054,
    video: false,
    vote_average: 7.4,
    title: "Black Panther",
    popularity: 73.552,
    poster_path: "/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    original_language: "en",
    original_title: "Black Panther",
    genre_ids: [28, 12, 14, 878],
    backdrop_path: "/6ELJEzQJ3Y45HczvreC3dg0GV5R.jpg",
    adult: false,
    overview:
      "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without. Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister, members of the Dora Milaje (the Wakandan 'special forces') and an American secret agent, to prevent Wakanda from being dragged into a world war.",
    release_date: "2018-02-13"
  },
  {
    vote_count: 460,
    id: 399402,
    video: false,
    vote_average: 6.1,
    title: "Hunter Killer",
    popularity: 71.94,
    poster_path: "/a0j18XNVhP4RcW3wXwsqT0kVoQm.jpg",
    original_language: "en",
    original_title: "Hunter Killer",
    genre_ids: [28, 53],
    backdrop_path: "/gCIB3DdK00DyfwosVGf7pnFFdK3.jpg",
    adult: false,
    overview:
      "Captain Glass of the USS “Arkansas” discovers that a coup d'état is taking place in Russia, so he and his crew join an elite group working on the ground to prevent a war.",
    release_date: "2018-10-19"
  },
  {
    vote_count: 885,
    id: 400650,
    video: false,
    vote_average: 6.8,
    title: "Mary Poppins Returns",
    popularity: 68.722,
    poster_path: "/uTVGku4LibMGyKgQvjBtv3OYfAX.jpg",
    original_language: "en",
    original_title: "Mary Poppins Returns",
    genre_ids: [14, 10751, 35],
    backdrop_path: "/cwiJQXezWz876K3jS57Sq56RYCZ.jpg",
    adult: false,
    overview:
      "In Depression-era London, a now-grown Jane and Michael Banks, along with Michael's three children, are visited by the enigmatic Mary Poppins following a personal loss. Through her unique magical skills, and with the aid of her friend Jack, she helps the family rediscover the joy and wonder missing in their lives.",
    release_date: "2018-12-19"
  },
  {
    vote_count: 1290,
    id: 424783,
    video: false,
    vote_average: 6.4,
    title: "Bumblebee",
    popularity: 68.504,
    poster_path: "/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg",
    original_language: "en",
    original_title: "Bumblebee",
    genre_ids: [28, 12, 878],
    backdrop_path: "/hMANgfPHR1tRObNp2oPiOi9mMlz.jpg",
    adult: false,
    overview:
      "On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken. When Charlie revives him, she quickly learns this is no ordinary yellow VW bug.",
    release_date: "2018-12-15"
  },
  {
    vote_count: 5,
    id: 543103,
    video: false,
    vote_average: 5,
    title: "Kamen Rider Heisei Generations FOREVER",
    popularity: 67.585,
    poster_path: "/6sOFQDlkY6El1B2P5gklzJfVdsT.jpg",
    original_language: "ja",
    original_title: "仮面ライダー平成ジェネレーションズFOREVER",
    genre_ids: [28, 12, 878],
    backdrop_path: "/uufTqD2CSn1NqL3cXEl4Vp3bCav.jpg",
    adult: false,
    overview:
      "In the world of Sougo Tokiwa and Sento Kiryu, their \"companions\" are losing their memories one after the other as they're replaced by other people. The Super Time Jacker, Tid , appears before them. He orders his powerful underlings, Another Double and Another Den-O, to pursue a young boy called Shingo. While fighting to protect Shingo, Sougo meets Ataru, a young man who loves Riders, but Ataru says that Kamen Riders aren't real. What is the meaning of those words? While the mystery deepens, the true enemy that Sougo and Sento must defeat appears in the Kuriogatake mountain...",
    release_date: "2018-12-22"
  },
  {
    vote_count: 37,
    id: 471507,
    video: false,
    vote_average: 6.7,
    title: "Destroyer",
    popularity: 65.889,
    poster_path: "/sHw9gTdo43nJL82py0oaROkXXNr.jpg",
    original_language: "en",
    original_title: "Destroyer",
    genre_ids: [53, 80, 18, 28],
    backdrop_path: "/n4eLeK2OdxRDqwIJtwYC212vmBF.jpg",
    adult: false,
    overview:
      "Erin Bell is an LAPD detective who, as a young cop, was placed undercover with a gang in the California desert with tragic results. When the leader of that gang re-emerges many years later, she must work her way back through the remaining members and into her own history with them to finally reckon with the demons that destroyed her past.",
    release_date: "2018-12-25"
  },
  {
    vote_count: 414,
    id: 398173,
    video: false,
    vote_average: 7.3,
    title: "The House That Jack Built",
    popularity: 63.634,
    poster_path: "/bMUGNkPaHOurcBK9g3XpJx3fxuO.jpg",
    original_language: "en",
    original_title: "The House That Jack Built",
    genre_ids: [18, 27, 80, 53],
    backdrop_path: "/regL3STcZA6HSvg4PhfT8jEMx64.jpg",
    adult: false,
    overview:
      "Failed architect, engineer and vicious murderer Jack narrates the details of some of his most elaborately orchestrated crimes, each of them a towering piece of art that defines his life's work as a serial killer for twelve years.",
    release_date: "2018-10-08"
  },
  {
    vote_count: 650,
    id: 401469,
    video: false,
    vote_average: 6.6,
    title: "Widows",
    popularity: 63.425,
    poster_path: "/d31SGJSaX29ba5ZUbZcesGoDE7I.jpg",
    original_language: "en",
    original_title: "Widows",
    genre_ids: [80, 18, 53],
    backdrop_path: "/71OjxI27tK7kTIiPnMkdQDx14pe.jpg",
    adult: false,
    overview:
      "A police shootout leaves four thieves dead during an explosive armed robbery attempt in Chicago. Their widows have nothing in common except a debt left behind by their spouses' criminal activities. Hoping to forge a future on their own terms, they join forces to pull off a heist.",
    release_date: "2018-11-06"
  },
  {
    vote_count: 5409,
    id: 260513,
    video: false,
    vote_average: 7.6,
    title: "Incredibles 2",
    popularity: 61.944,
    poster_path: "/9lFKBtaVIhP7E2Pk0IY1CwTKTMZ.jpg",
    original_language: "en",
    original_title: "Incredibles 2",
    genre_ids: [28, 12, 16, 10751],
    backdrop_path: "/mabuNsGJgRuCTuGqjFkWe1xdu19.jpg",
    adult: false,
    overview:
      "Elastigirl springs into action to save the day, while Mr. Incredible faces his greatest challenge yet – taking care of the problems of his three children.",
    release_date: "2018-06-14"
  },
  {
    vote_count: 668,
    id: 426543,
    video: false,
    vote_average: 6,
    title: "The Nutcracker and the Four Realms",
    popularity: 61.872,
    poster_path: "/3TwxpPfMoeFLxzhgAWlptE6srsZ.jpg",
    original_language: "en",
    original_title: "The Nutcracker and the Four Realms",
    genre_ids: [14, 12, 10751],
    backdrop_path: "/l2ji4YiNSPBV69WjGBgU0gCvRqy.jpg",
    adult: false,
    overview:
      "A young girl is transported into a magical world of gingerbread soldiers and an army of mice. In Disney’s magical take on the classic The Nutcracker, Clara wants a one-of-a-kind key that will unlock a box holding a priceless gift. A golden thread presented at her godfather’s holiday party leads her to the coveted key—which promptly disappears into a strange and mysterious parallel world. There Clara encounters a soldier, a gang of mice and the regents of three magical Realms. But she must brave the ominous Fourth Realm, home to the tyrant Mother Ginger, to retrieve her key and return harmony to the unstable world.",
    release_date: "2018-10-26"
  },
  {
    vote_count: 8,
    id: 463364,
    video: false,
    vote_average: 4.5,
    title: "The Isle",
    popularity: 61.803,
    poster_path: "/r4XDWsBWMzpoNm5fUMjr9cyY5rI.jpg",
    original_language: "en",
    original_title: "The Isle",
    genre_ids: [53, 14, 12, 14],
    backdrop_path: "/i2XFi9vIblYl40AxT8YOk79qd0x.jpg",
    adult: false,
    overview:
      "1840 and another ship crashes on the rocks of an almost deserted island in Scotland. Three sailors survive the wreck and make it to shore where the few locals take them in as they wait for the mainland boat to come for them. But the sailors' survival story has only just started as they uncover the strange past of the once vibrant island.",
    release_date: "2018-03-30"
  },
  {
    vote_count: 120,
    id: 492452,
    video: false,
    vote_average: 6.9,
    title: "Ben Is Back",
    popularity: 61.26,
    poster_path: "/eSPiprXuWqwMGi6t8BkdiTz9Ou3.jpg",
    original_language: "en",
    original_title: "Ben Is Back",
    genre_ids: [18],
    backdrop_path: "/toMVitiGKo1ICxTSvZJII5lXBwz.jpg",
    adult: false,
    overview:
      "19-year-old Ben Burns unexpectedly returns home to his family's suburban home on Christmas Eve morning. Ben's mother, Holly, is relieved and welcoming but wary of her son staying clean. Over a turbulent 24 hours, new truths are revealed, and a mother's undying love for her son is tested as she does everything in her power to keep him safe.",
    release_date: "2018-12-05"
  },
  {
    vote_count: 1438,
    id: 426426,
    video: false,
    vote_average: 7.9,
    title: "Roma",
    popularity: 58.964,
    poster_path: "/dtIIyQyALk57ko5bjac7hi01YQ.jpg",
    original_language: "es",
    original_title: "Roma",
    genre_ids: [18],
    backdrop_path: "/zl9uqCl5iUSb50sTk2BPzw6bJnU.jpg",
    adult: false,
    overview:
      "In 1970s Mexico City, two domestic workers help a mother of four while her husband is away for an extended period of time.",
    release_date: "2018-08-25"
  },
  {
    vote_count: 5343,
    id: 351286,
    video: false,
    vote_average: 6.5,
    title: "Jurassic World: Fallen Kingdom",
    popularity: 57.03,
    poster_path: "/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg",
    original_language: "en",
    original_title: "Jurassic World: Fallen Kingdom",
    genre_ids: [28, 12, 878],
    backdrop_path: "/3s9O5af2xWKWR5JzP2iJZpZeQQg.jpg",
    adult: false,
    overview:
      "Three years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the isla Nublar, so Claire Dearing, the former park manager, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.",
    release_date: "2018-06-06"
  },
  {
    vote_count: 350,
    id: 446807,
    video: false,
    vote_average: 5.9,
    title: "The Girl in the Spider's Web",
    popularity: 56.486,
    poster_path: "/w4ibr8R702DCjwYniry1D1XwQXj.jpg",
    original_language: "en",
    original_title: "The Girl in the Spider's Web",
    genre_ids: [53, 80, 28],
    backdrop_path: "/r0ljJIPBGsGdpeDdlHpzCiNnxiB.jpg",
    adult: false,
    overview:
      "In Stockholm, Sweden, hacker Lisbeth Salander is hired by Frans Balder, a computer engineer, to retrieve a program that he believes it is too dangerous to exist.",
    release_date: "2018-10-26"
  },
  {
    vote_count: 7648,
    id: 383498,
    video: false,
    vote_average: 7.5,
    title: "Deadpool 2",
    popularity: 55.049,
    poster_path: "/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
    original_language: "en",
    original_title: "Deadpool 2",
    genre_ids: [28, 35, 12],
    backdrop_path: "/3P52oz9HPQWxcwHOwxtyrVV1LKi.jpg",
    adult: false,
    overview:
      "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.",
    release_date: "2018-05-15"
  },
  {
    vote_count: 194,
    id: 465914,
    video: false,
    vote_average: 7.3,
    title: "If Beale Street Could Talk",
    popularity: 53.752,
    poster_path: "/ye3KqC2hUYia6ktGIhZtmKjj3ya.jpg",
    original_language: "en",
    original_title: "If Beale Street Could Talk",
    genre_ids: [18, 10749, 80],
    backdrop_path: "/1BeMxME8SPuJgCTmyEBzGWSZrAR.jpg",
    adult: false,
    overview:
      "After her fiance is falsely imprisoned, a pregnant African-American woman sets out to clear his name and prove his innocence.",
    release_date: "2018-11-30"
  },
  {
    vote_count: 2350,
    id: 487558,
    video: false,
    vote_average: 7.6,
    title: "BlacKkKlansman",
    popularity: 53.683,
    poster_path: "/lTgROqb5nrzILPRjUY6JjDIrOhh.jpg",
    original_language: "en",
    original_title: "BlacKkKlansman",
    genre_ids: [80, 18],
    backdrop_path: "/gMVdhfQ7q9DFHhDkehrququjGPd.jpg",
    adult: false,
    overview:
      "Colorado Springs, late 1970s. Ron Stallworth, an African American police officer, and Flip Zimmerman, his Jewish colleague, run an undercover operation to infiltrate the Ku Klux Klan.",
    release_date: "2018-07-30"
  },
  {
    vote_count: 1803,
    id: 369972,
    video: false,
    vote_average: 7.1,
    title: "First Man",
    popularity: 52.634,
    poster_path: "/i91mfvFcPPlaegcbOyjGgiWfZzh.jpg",
    original_language: "en",
    original_title: "First Man",
    genre_ids: [36, 18],
    backdrop_path: "/3LX7SkR7ERIR2ZB6NPlyrgmZ5ga.jpg",
    adult: false,
    overview:
      "A look at the life of the astronaut, Neil Armstrong, and the legendary space mission that led him to become the first man to walk on the Moon on July 20, 1969.",
    release_date: "2018-10-11"
  },
  {
    vote_count: 13047,
    id: 671,
    video: false,
    vote_average: 7.8,
    title: "Harry Potter and the Philosopher's Stone",
    popularity: 52.606,
    poster_path: "/dCtFvscYcXQKTNvyyaQr2g2UacJ.jpg",
    original_language: "en",
    original_title: "Harry Potter and the Philosopher's Stone",
    genre_ids: [12, 14, 10751],
    backdrop_path: "/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
    adult: false,
    overview:
      "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard -- with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths -- and about the villain who's to blame.",
    release_date: "2001-11-16"
  },
  {
    vote_count: 4910,
    id: 363088,
    video: false,
    vote_average: 6.9,
    title: "Ant-Man and the Wasp",
    popularity: 52.305,
    poster_path: "/rv1AWImgx386ULjcf62VYaW8zSt.jpg",
    original_language: "en",
    original_title: "Ant-Man and the Wasp",
    genre_ids: [28, 12, 878, 35, 10751],
    backdrop_path: "/6P3c80EOm7BodndGBUAJHHsHKrp.jpg",
    adult: false,
    overview:
      "Just when his time under house arrest is about to end, Scott Lang once again puts his freedom at risk to help Hope van Dyne and Dr. Hank Pym dive into the quantum realm and try to accomplish, against time and any chance of success, a very dangerous rescue mission.",
    release_date: "2018-07-04"
  },
  {
    vote_count: 3809,
    id: 466282,
    video: false,
    vote_average: 8,
    title: "To All the Boys I've Loved Before",
    popularity: 52.235,
    poster_path: "/hKHZhUbIyUAjcSrqJThFGYIR6kI.jpg",
    original_language: "en",
    original_title: "To All the Boys I've Loved Before",
    genre_ids: [35, 10749],
    backdrop_path: "/uZTtVdOEIwPA6vwVRI3217DoPM.jpg",
    adult: false,
    overview:
      "Lara Jean's love life goes from imaginary to out of control when her secret letters to every boy she's ever fallen for are mysteriously mailed out.",
    release_date: "2018-08-16"
  },
  {
    vote_count: 757,
    id: 347375,
    video: false,
    vote_average: 6,
    title: "Mile 22",
    popularity: 51.946,
    poster_path: "/2L8ehd95eSW9x7KINYtZmRkAlrZ.jpg",
    original_language: "en",
    original_title: "Mile 22",
    genre_ids: [28, 53],
    backdrop_path: "/2nOMUnQ4OtsKVTmpp3og7MYt4oG.jpg",
    adult: false,
    overview:
      "An elite group of American operatives, aided by a top-secret tactical command team, must transport an asset who holds life-threatening information to an extraction point 22 miles away through the hostile streets of an Asian city.",
    release_date: "2018-08-16"
  },
  {
    vote_count: 3330,
    id: 348350,
    video: false,
    vote_average: 6.6,
    title: "Solo: A Star Wars Story",
    popularity: 48.769,
    poster_path: "/3IGbjc5ZC5yxim5W0sFING2kdcz.jpg",
    original_language: "en",
    original_title: "Solo: A Star Wars Story",
    genre_ids: [28, 12, 878],
    backdrop_path: "/pH0rtDSgBM98Ho8HgiEq8topsxL.jpg",
    adult: false,
    overview:
      "Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.",
    release_date: "2018-05-15"
  },
  {
    vote_count: 1675,
    id: 424139,
    video: false,
    vote_average: 6.4,
    title: "Halloween",
    popularity: 48.533,
    poster_path: "/bXs0zkv2iGVViZEy78teg2ycDBm.jpg",
    original_language: "en",
    original_title: "Halloween",
    genre_ids: [53, 27],
    backdrop_path: "/jLLsaKktHOUp0goIFu3R9x6knJ3.jpg",
    adult: false,
    overview:
      "Laurie Strode comes to her final confrontation with Michael Myers, the masked figure who has haunted her since she narrowly escaped his killing spree on Halloween night four decades ago.",
    release_date: "2018-10-18"
  },
  {
    vote_count: 264,
    id: 401847,
    video: false,
    vote_average: 7,
    title: "Can You Ever Forgive Me?",
    popularity: 48.197,
    poster_path: "/hPuZR2bFoV0kuBrA98exWyvTf40.jpg",
    original_language: "en",
    original_title: "Can You Ever Forgive Me?",
    genre_ids: [18, 35, 80],
    backdrop_path: "/dc0FxYIyKfP4drQ7MEl2sHsoD14.jpg",
    adult: false,
    overview:
      "When bestselling celebrity biographer Lee Israel is no longer able to get published because she has fallen out of step with current tastes, she turns her art form to deception, abetted by her loyal friend Jack.",
    release_date: "2018-10-19"
  },
  {
    vote_count: 10214,
    id: 284053,
    video: false,
    vote_average: 7.5,
    title: "Thor: Ragnarok",
    popularity: 48.145,
    poster_path: "/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
    original_language: "en",
    original_title: "Thor: Ragnarok",
    genre_ids: [28, 12, 35, 14, 878],
    backdrop_path: "/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg",
    adult: false,
    overview:
      "Thor is on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.",
    release_date: "2017-10-25"
  },
  {
    vote_count: 1753,
    id: 346910,
    video: false,
    vote_average: 5.2,
    title: "The Predator",
    popularity: 47.951,
    poster_path: "/wMq9kQXTeQCHUZOG4fAe5cAxyUA.jpg",
    original_language: "en",
    original_title: "The Predator",
    genre_ids: [878, 28, 53, 12, 27],
    backdrop_path: "/f4E0ocYeToEuXvczZv6QArrMDJ.jpg",
    adult: false,
    overview:
      "When a kid accidentally triggers the universe's most lethal hunters' return to Earth, only a ragtag crew of ex-soldiers and a disgruntled female scientist can prevent the end of the human race.",
    release_date: "2018-09-05"
  },
  {
    vote_count: 10,
    id: 554739,
    video: false,
    vote_average: 4.9,
    title: "The Final Wish",
    popularity: 47.844,
    poster_path: "/3lFQPOhOAg1gAQgFsXdfYfXFbI6.jpg",
    original_language: "en",
    original_title: "The Final Wish",
    genre_ids: [27],
    backdrop_path: "/wyp4QygcdDcLim2F9D3y4gxbW4g.jpg",
    adult: false,
    overview:
      "Following the passing of his father, Aaron Hammond returns to his hometown to help his devastated mother and to confront his past demons. Sifting through his father’s belongings, Aaron comes upon a mysterious item that is far more than it seems.",
    release_date: "2019-01-24"
  },
  {
    vote_count: 820,
    id: 360920,
    video: false,
    vote_average: 6.4,
    title: "The Grinch",
    popularity: 47.222,
    poster_path: "/1Bc9VNd9CIHIyJtPKFqSQzrXWru.jpg",
    original_language: "en",
    original_title: "The Grinch",
    genre_ids: [16, 10751, 35, 14],
    backdrop_path: "/juc9wt7Eh2IarLL5S1yQ1a21O1A.jpg",
    adult: false,
    overview:
      "The Grinch hatches a scheme to ruin Christmas when the residents of Whoville plan their annual holiday celebration.",
    release_date: "2018-11-08"
  },
  {
    vote_count: 6266,
    id: 335984,
    video: false,
    vote_average: 7.4,
    title: "Blade Runner 2049",
    popularity: 45.729,
    poster_path: "/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    original_language: "en",
    original_title: "Blade Runner 2049",
    genre_ids: [878, 53],
    backdrop_path: "/8QXGNP0Vb4nsYKub59XpAhiUSQN.jpg",
    adult: false,
    overview:
      "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
    release_date: "2017-10-04"
  },
  {
    vote_count: 3371,
    id: 353081,
    video: false,
    vote_average: 7.3,
    title: "Mission: Impossible - Fallout",
    popularity: 45.319,
    poster_path: "/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
    original_language: "en",
    original_title: "Mission: Impossible - Fallout",
    genre_ids: [28, 53, 12],
    backdrop_path: "/18vI248rVel5q19eKkxENQ1v1dX.jpg",
    adult: false,
    overview:
      "When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfill his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.",
    release_date: "2018-07-13"
  },
  {
    vote_count: 36,
    id: 220882,
    video: false,
    vote_average: 5.6,
    title: "London Fields",
    popularity: 45.112,
    poster_path: "/7OfQVm5GexlAREp8FoR4ILxp35T.jpg",
    original_language: "en",
    original_title: "London Fields",
    genre_ids: [80, 9648, 53, 18],
    backdrop_path: "/ichPk1vuRGYN5OmdSYBfJu5bWgu.jpg",
    adult: false,
    overview:
      "Clairvoyant femme fatale Nicola Six has been living with a dark premonition of her impending death by murder. She begins a tangled love affair with three uniquely different men: one of whom she knows will be her murderer.",
    release_date: "2018-09-20"
  },
  {
    vote_count: 3946,
    id: 405774,
    video: false,
    vote_average: 7,
    title: "Bird Box",
    popularity: 42.954,
    poster_path: "/rGfGfgL2pEPCfhIvqHXieXFn7gp.jpg",
    original_language: "en",
    original_title: "Bird Box",
    genre_ids: [53, 18],
    backdrop_path: "/A4xNxrRodvXzJWJs2GbBKo1IBk2.jpg",
    adult: false,
    overview:
      "When a mysterious force decimates the world’s population, only one thing is certain: if you see it, you take your life. Facing the unknown, Malorie finds love, hope and a new beginning only for it to unravel. Now she must flee with her two children down a treacherous river to the one place left that may offer sanctuary. But to survive, they'll have to undertake the perilous two-day journey blindfolded.",
    release_date: "2018-12-13"
  },
  {
    vote_count: 475,
    id: 503314,
    video: false,
    vote_average: 7.5,
    title: "Dragon Ball Super: Broly",
    popularity: 42.732,
    poster_path: "/f03YksE4NggUjG75toz4H1YAGRf.jpg",
    original_language: "ja",
    original_title: "ドラゴンボール超スーパー ブロリー",
    genre_ids: [28, 16, 14, 12, 35],
    backdrop_path: "/6OTRuxpwUUGbmCX3MKP25dOmo59.jpg",
    adult: false,
    overview:
      "Earth is peaceful following the Tournament of Power. Realizing that the universes still hold many more strong people yet to see, Goku spends all his days training to reach even greater heights. Then one day, Goku and Vegeta are faced by a Saiyan called 'Broly' who they've never seen before. The Saiyans were supposed to have been almost completely wiped out in the destruction of Planet Vegeta, so what's this one doing on Earth? This encounter between the three Saiyans who have followed completely different destinies turns into a stupendous battle, with even Frieza (back from Hell) getting caught up in the mix.",
    release_date: "2018-12-14"
  },
  {
    vote_count: 661,
    id: 454293,
    video: false,
    vote_average: 6.1,
    title: "Night School",
    popularity: 42.201,
    poster_path: "/uQVIQDc3foTPodZw0ie1Or0CXBn.jpg",
    original_language: "en",
    original_title: "Night School",
    genre_ids: [35],
    backdrop_path: "/eiUO8svuxMv16wvZsxubNLb5wNL.jpg",
    adult: false,
    overview:
      "Teddy Walker is a successful salesman whose life takes an unexpected turn when he accidentally blows up his place of employment. Forced to attend night school to get his GED, Teddy soon finds himself dealing with a group of misfit students, his former high school nemesis and a feisty teacher who doesn't think he's too bright.",
    release_date: "2018-09-27"
  },
  {
    vote_count: 56,
    id: 426563,
    video: false,
    vote_average: 4.4,
    title: "Holmes & Watson",
    popularity: 41.777,
    poster_path: "/gY4ziK7sjmNbsoBnTbhqC3SkGoE.jpg",
    original_language: "en",
    original_title: "Holmes & Watson",
    genre_ids: [9648, 12, 35, 80],
    backdrop_path: "/pikYQjSIHP96Zidprp9ngG8YmYJ.jpg",
    adult: false,
    overview:
      "Detective Sherlock Holmes and Dr. John Watson join forces to investigate a murder at Buckingham Palace. They soon learn that they have only four days to solve the case, or the queen will become the next victim.",
    release_date: "2018-12-25"
  },
  {
    vote_count: 1755,
    id: 345887,
    video: false,
    vote_average: 6.4,
    title: "The Equalizer 2",
    popularity: 41.597,
    poster_path: "/cQvc9N6JiMVKqol3wcYrGshsIdZ.jpg",
    original_language: "en",
    original_title: "The Equalizer 2",
    genre_ids: [53, 28, 80],
    backdrop_path: "/a24i4Qw6qFTtkFLQsncv8WPwevj.jpg",
    adult: false,
    overview:
      "Robert McCall, who serves an unflinching justice for the exploited and oppressed, embarks on a relentless, globe-trotting quest for vengeance when a long-time girl friend is murdered.",
    release_date: "2018-07-19"
  },
  {
    vote_count: 6948,
    id: 141052,
    video: false,
    vote_average: 6.2,
    title: "Justice League",
    popularity: 41.584,
    poster_path: "/eifGNCSDuxJeS1loAXil5bIGgvC.jpg",
    original_language: "en",
    original_title: "Justice League",
    genre_ids: [28, 12, 14, 878],
    backdrop_path: "/o5T8rZxoWSBMYwjsUFUqTt6uMQB.jpg",
    adult: false,
    overview:
      "Fuelled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne and Diana Prince assemble a team of metahumans consisting of Barry Allen, Arthur Curry and Victor Stone to face the catastrophic threat of Steppenwolf and the Parademons who are on the hunt for three Mother Boxes on Earth.",
    release_date: "2017-11-15"
  },
  {
    vote_count: 687,
    id: 429197,
    video: false,
    vote_average: 7.2,
    title: "Vice",
    popularity: 41.5,
    poster_path: "/e0NZxqQ4B8YZ6kRrZish2DPqtdi.jpg",
    original_language: "en",
    original_title: "Vice",
    genre_ids: [18, 36, 35],
    backdrop_path: "/uvy89JLcYEiUb0VOoSjkUrIW3nJ.jpg",
    adult: false,
    overview:
      "George W. Bush picks Dick Cheney, the CEO of Halliburton Co., to be his Republican running mate in the 2000 presidential election. No stranger to politics, Cheney's impressive résumé includes stints as White House chief of staff, House Minority Whip and defense secretary. When Bush wins by a narrow margin, Cheney begins to use his newfound power to help reshape the country and the world.",
    release_date: "2018-12-25"
  },
  {
    vote_count: 3190,
    id: 402900,
    video: false,
    vote_average: 6.9,
    title: "Ocean's Eight",
    popularity: 41.45,
    poster_path: "/MvYpKlpFukTivnlBhizGbkAe3v.jpg",
    original_language: "en",
    original_title: "Ocean's Eight",
    genre_ids: [80, 35, 28, 53],
    backdrop_path: "/ysM0PbmvxwojAUftlgdb8zjbK0l.jpg",
    adult: false,
    overview:
      "Debbie Ocean, a criminal mastermind, gathers a crew of female thieves to pull off the heist of the century at New York's annual Met Gala.",
    release_date: "2018-06-07"
  },
  {
    vote_count: 6179,
    id: 333339,
    video: false,
    vote_average: 7.7,
    title: "Ready Player One",
    popularity: 40.846,
    poster_path: "/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
    original_language: "en",
    original_title: "Ready Player One",
    genre_ids: [12, 878],
    backdrop_path: "/q7fXcrDPJcf6t3rzutaNwTzuKP1.jpg",
    adult: false,
    overview:
      "When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.",
    release_date: "2018-03-28"
  },
  {
    vote_count: 1019,
    id: 446021,
    video: false,
    vote_average: 6.8,
    title: "Bad Times at the El Royale",
    popularity: 40.453,
    poster_path: "/iNtFgXqXPRMkm1QO8CHn5sHfUgE.jpg",
    original_language: "en",
    original_title: "Bad Times at the El Royale",
    genre_ids: [53, 80, 9648, 18],
    backdrop_path: "/tkUpruYM2zBdbHYW9fgthbrCjV4.jpg",
    adult: false,
    overview:
      "Lake Tahoe, 1969. Seven strangers, each one with a secret to bury, meet at El Royale, a decadent motel with a dark past. In the course of a fateful night, everyone will have one last shot at redemption.",
    release_date: "2018-10-04"
  },
  {
    vote_count: 18,
    id: 466411,
    video: false,
    vote_average: 5.2,
    title: "Speed Kills",
    popularity: 40.225,
    poster_path: "/cbUuMnQPrNpSNPkUwM7WaX6fVit.jpg",
    original_language: "en",
    original_title: "Speed Kills",
    genre_ids: [80, 18, 53],
    backdrop_path: "/k56s8MT5x56u6mllyBcVcN7Xkue.jpg",
    adult: false,
    overview:
      "Speedboat racing champion and multimillionaire, Ben Aronoff (Don Aronow), leads a double life that lands him in trouble with the law and drug lords.",
    release_date: "2018-08-16"
  },
  {
    vote_count: 133,
    id: 517814,
    video: false,
    vote_average: 8.4,
    title: "Capernaum",
    popularity: 39.655,
    poster_path: "/29iluGHcoADaZNFwrioQ3dThvrD.jpg",
    original_language: "ar",
    original_title: "کفرناحوم",
    genre_ids: [18],
    backdrop_path: "/1p6cMqrxwLjTHmruMCWfpbTAxvt.jpg",
    adult: false,
    overview:
      "Zain, a 12-year-old boy scrambling to survive on the streets of Beirut, sues his parents for having brought him into such an unjust world, where being a refugee with no documents means that your rights can easily be denied.",
    release_date: "2018-10-06"
  },
  {
    vote_count: 331,
    id: 491472,
    video: false,
    vote_average: 6.8,
    title: "At Eternity's Gate",
    popularity: 39.28,
    poster_path: "/7rUnZrcSyfwfloeI5aoccztSLSg.jpg",
    original_language: "en",
    original_title: "At Eternity's Gate",
    genre_ids: [18],
    backdrop_path: "/vmLDDBvF022Scen7jF0nN8uIlEe.jpg",
    adult: false,
    overview:
      "Famed but tormented artist Vincent van Gogh spends his final years in Arles, France, painting masterworks of the natural world that surrounds him.",
    release_date: "2018-11-15"
  },
  {
    vote_count: 11655,
    id: 263115,
    video: false,
    vote_average: 7.8,
    title: "Logan",
    popularity: 39.085,
    poster_path: "/gGBu0hKw9BGddG8RkRAMX7B6NDB.jpg",
    original_language: "en",
    original_title: "Logan",
    genre_ids: [28, 18, 878],
    backdrop_path: "/5pAGnkFYSsFJ99ZxDIYnhQbQFXs.jpg",
    adult: false,
    overview:
      "In the near future, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border. But Logan's attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.",
    release_date: "2017-02-28"
  },
  {
    vote_count: 6,
    id: 516716,
    video: false,
    vote_average: 8,
    title: "Milly & Mamet",
    popularity: 38.668,
    poster_path: "/cSQw6uL4EOpw8yzTXfN8aHiWgKe.jpg",
    original_language: "id",
    original_title: "Milly & Mamet",
    genre_ids: [18, 10749, 35],
    backdrop_path: "/swRvr9iQ7qfmq5Xls4CKhzaERo3.jpg",
    adult: false,
    overview:
      "Milly and Mamet are busy taking care of their baby. One day, Mamet met Alexandra, a close friend at college, who now had investors to finance the restaurant ideas they had once wanted together.",
    release_date: "2018-12-20"
  },
  {
    vote_count: 305,
    id: 412988,
    video: false,
    vote_average: 5.7,
    title: "The Happytime Murders",
    popularity: 38.463,
    poster_path: "/rWxkur51srfVnMn2QOFjE7mbq6h.jpg",
    original_language: "en",
    original_title: "The Happytime Murders",
    genre_ids: [28, 35, 80],
    backdrop_path: "/gqemVzi13T4oB95EBufIxqafSCl.jpg",
    adult: false,
    overview:
      "In a world where human beings and puppets live together, when the members of the cast of a children's television show aired during the 1990s begin to get murdered one by one, puppet Phil Philips, a former LAPD detective who fell in disgrace and turned into a private eye, takes on the case at the request of his old boss in order to assist detective Edwards, who was his partner in the past.",
    release_date: "2018-08-22"
  },
  {
    vote_count: 1377,
    id: 484247,
    video: false,
    vote_average: 6.6,
    title: "A Simple Favor",
    popularity: 38.412,
    poster_path: "/aIYsjQM0piKc0ibPBCTWv3sqshj.jpg",
    original_language: "en",
    original_title: "A Simple Favor",
    genre_ids: [53, 80, 9648, 35, 18],
    backdrop_path: "/xXGNyEG2v48q0bVR4AH4Vca2yvy.jpg",
    adult: false,
    overview:
      "Stephanie, a dedicated mother and popular vlogger, befriends Emily, a mysterious upper-class woman whose son Nicky attends the same school as Miles, Stephanie's son. When Emily asks her to pick Nicky up from school and then disappears, Stephanie undertakes an investigation that will dive deep into Emily's cloudy past.",
    release_date: "2018-08-29"
  },
  {
    vote_count: 11381,
    id: 283995,
    video: false,
    vote_average: 7.7,
    title: "Guardians of the Galaxy Vol. 2",
    popularity: 37.355,
    poster_path: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
    original_language: "en",
    original_title: "Guardians of the Galaxy Vol. 2",
    genre_ids: [28, 12, 35, 878],
    backdrop_path: "/aJn9XeesqsrSLKcHfHP4u5985hn.jpg",
    adult: false,
    overview:
      "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
    release_date: "2017-04-19"
  },
  {
    vote_count: 5115,
    id: 447332,
    video: false,
    vote_average: 7.3,
    title: "A Quiet Place",
    popularity: 37.296,
    poster_path: "/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    original_language: "en",
    original_title: "A Quiet Place",
    genre_ids: [18, 27, 53, 878],
    backdrop_path: "/qtO7A1rVaBvqX8CBh92As5NuWjp.jpg",
    adult: false,
    overview:
      "A family is forced to live in silence while hiding from creatures that hunt by sound.",
    release_date: "2018-04-03"
  },
  {
    vote_count: 7981,
    id: 181808,
    video: false,
    vote_average: 7,
    title: "Star Wars: The Last Jedi",
    popularity: 37.117,
    poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
    original_language: "en",
    original_title: "Star Wars: The Last Jedi",
    genre_ids: [14, 12, 878, 28],
    backdrop_path: "/baNQpUlmX8shVmJBGHMSL5Y6MBl.jpg",
    adult: false,
    overview:
      "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
    release_date: "2017-12-13"
  },
  {
    vote_count: 849,
    id: 463272,
    video: false,
    vote_average: 6.1,
    title: "Johnny English Strikes Again",
    popularity: 36.193,
    poster_path: "/ryACHOzmRJiJEKjatbokudfkO74.jpg",
    original_language: "en",
    original_title: "Johnny English Strikes Again",
    genre_ids: [12, 10751, 28, 35],
    backdrop_path: "/xh4SKML3kQPnJfEcgML2pFpalQe.jpg",
    adult: false,
    overview:
      "Disaster strikes when a criminal mastermind reveals the identities of all active undercover agents in Britain. The secret service can now rely on only one man - Johnny English. Currently teaching at a minor prep school, Johnny springs back into action to find the mysterious hacker. For this mission to succeed, he’ll need all of his skills - what few he has - as the man with yesterday’s analogue methods faces off against tomorrow’s digital technology.",
    release_date: "2018-09-13"
  },
  {
    vote_count: 2422,
    id: 439079,
    video: false,
    vote_average: 5.6,
    title: "The Nun",
    popularity: 36.005,
    poster_path: "/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg",
    original_language: "en",
    original_title: "The Nun",
    genre_ids: [27, 9648, 53],
    backdrop_path: "/fgsHxz21B27hOOqQBiw9L6yWcM7.jpg",
    adult: false,
    overview:
      "When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together they uncover the order’s unholy secret. Risking not only their lives but their faith and their very souls, they confront a malevolent force in the form of the same demonic nun that first terrorized audiences in “The Conjuring 2” as the abbey becomes a horrific battleground between the living and the damned.",
    release_date: "2018-09-05"
  },
  {
    vote_count: 1073,
    id: 500664,
    video: false,
    vote_average: 7.4,
    title: "Upgrade",
    popularity: 35.402,
    poster_path: "/8fDtXi6gVw8WUMWGT9XFz7YwkuE.jpg",
    original_language: "en",
    original_title: "Upgrade",
    genre_ids: [28, 53, 878],
    backdrop_path: "/q9HocL5f8WwPldwpvmpk8ZaNZkC.jpg",
    adult: false,
    overview:
      "A brutal mugging leaves Grey Trace paralyzed in the hospital and his beloved wife dead. A billionaire inventor soon offers Trace a cure — an artificial intelligence implant called STEM that will enhance his body. Now able to walk, Grey finds that he also has superhuman strength and agility — skills he uses to seek revenge against the thugs who destroyed his life.",
    release_date: "2018-06-01"
  },
  {
    vote_count: 2502,
    id: 345940,
    video: false,
    vote_average: 5.9,
    title: "The Meg",
    popularity: 35.13,
    poster_path: "/eyWICPcxOuTcDDDbTMOZawoOn8d.jpg",
    original_language: "en",
    original_title: "The Meg",
    genre_ids: [28, 878, 53, 27],
    backdrop_path: "/rH79sB6Nkx4cMW3JzsUy7wK0rhX.jpg",
    adult: false,
    overview:
      "A deep sea submersible pilot revisits his past fears in the Mariana Trench, and accidentally unleashes the seventy foot ancestor of the Great White Shark believed to be extinct.",
    release_date: "2018-08-09"
  },
  {
    vote_count: 1107,
    id: 407436,
    video: false,
    vote_average: 6.6,
    title: "Mowgli: Legend of the Jungle",
    popularity: 34.644,
    poster_path: "/clRnzMsFoMIdC7I5JsG6dnnHH8l.jpg",
    original_language: "en",
    original_title: "Mowgli: Legend of the Jungle",
    genre_ids: [12, 18],
    backdrop_path: "/pApaVlxJCp2o4mrzCAD3AaLjq77.jpg",
    adult: false,
    overview:
      "A human child raised by wolves, must face off against a menacing tiger named Shere Khan, as well as his own origins.",
    release_date: "2018-11-25"
  },
  {
    vote_count: 1191,
    id: 455207,
    video: false,
    vote_average: 7.1,
    title: "Crazy Rich Asians",
    popularity: 33.395,
    poster_path: "/1XxL4LJ5WHdrcYcihEZUCgNCpAW.jpg",
    original_language: "en",
    original_title: "Crazy Rich Asians",
    genre_ids: [35, 18, 10749],
    backdrop_path: "/qiu7RDXC97qy2VhvEclWnWmgeFH.jpg",
    adult: false,
    overview:
      "An American-born Chinese economics professor accompanies her boyfriend to Singapore for his best friend's wedding, only to get thrust into the lives of Asia's rich and famous.",
    release_date: "2018-08-15"
  },
  {
    vote_count: 346,
    id: 340613,
    video: false,
    vote_average: 7.3,
    title: "The Wife",
    popularity: 33.307,
    poster_path: "/5zDB2tIYwfMSmNpgARHbDKpPgdg.jpg",
    original_language: "en",
    original_title: "The Wife",
    genre_ids: [18],
    backdrop_path: "/jvLrBlzdlJuDZtLunkCCd0eOXSm.jpg",
    adult: false,
    overview:
      "A wife questions her life choices as she travels to Stockholm with her husband, where he is slated to receive the Nobel Prize for Literature.",
    release_date: "2018-08-02"
  },
  {
    vote_count: 4676,
    id: 156022,
    video: false,
    vote_average: 7.2,
    title: "The Equalizer",
    popularity: 33.106,
    poster_path: "/2eQfjqlvPAxd9aLDs8DvsKLnfed.jpg",
    original_language: "en",
    original_title: "The Equalizer",
    genre_ids: [53, 28, 80],
    backdrop_path: "/hEJ52KqwOmyRpcihs10h7xOwN7e.jpg",
    adult: false,
    overview:
      "McCall believes he has put his mysterious past behind him and dedicated himself to beginning a new, quiet life. But when he meets Teri, a young girl under the control of ultra-violent Russian gangsters, he can’t stand idly by – he has to help her. Armed with hidden skills that allow him to serve vengeance against anyone who would brutalize the helpless, McCall comes out of his self-imposed retirement and finds his desire for justice reawakened. If someone has a problem, if the odds are stacked against them, if they have nowhere else to turn, McCall will help. He is The Equalizer.",
    release_date: "2014-09-24"
  },
  {
    vote_count: 490,
    id: 446894,
    video: false,
    vote_average: 6.6,
    title: "Smallfoot",
    popularity: 33.081,
    poster_path: "/zfaiO7QgpcvR8XDOMokWLRfKeTE.jpg",
    original_language: "en",
    original_title: "Smallfoot",
    genre_ids: [16, 10751, 12, 14],
    backdrop_path: "/7t88SoT3Dd8DhGnQuVoSbMNUl3W.jpg",
    adult: false,
    overview:
      "A bright young yeti finds something he thought didn't exist—a human. News of this “smallfoot” throws the simple yeti community into an uproar over what else might be out there in the big world beyond their snowy village.",
    release_date: "2018-09-20"
  },
  {
    vote_count: 789,
    id: 454992,
    video: false,
    vote_average: 6.4,
    title: "The Spy Who Dumped Me",
    popularity: 32.958,
    poster_path: "/tpPERI5i6yjT73jYWyZ9iWltQ9L.jpg",
    original_language: "en",
    original_title: "The Spy Who Dumped Me",
    genre_ids: [28, 35],
    backdrop_path: "/uN6v3Hz4qI2CIqT1Ro4vPgAbub3.jpg",
    adult: false,
    overview:
      "Audrey and Morgan, two thirty-year-old best friends in Los Angeles, are thrust unexpectedly into an international conspiracy when Audrey’s ex-boyfriend shows up at their apartment with a team of deadly assassins on his trail.",
    release_date: "2018-08-02"
  },
  {
    vote_count: 140,
    id: 567604,
    video: false,
    vote_average: 7.2,
    title: "Once Upon a Deadpool",
    popularity: 32.647,
    poster_path: "/5Ka49BWWyKMXr93YMbH5wLN7aAM.jpg",
    original_language: "en",
    original_title: "Once Upon a Deadpool",
    genre_ids: [35, 28],
    backdrop_path: "/7RqpTZq0mPpTcEwZ6qqwRZAFoLe.jpg",
    adult: false,
    overview:
      "A kidnapped Fred Savage is forced to endure Deadpool's PG-13 rendition of Deadpool 2 as a Princess Bride-esque story that's full of magic, wonder & zero F's.",
    release_date: "2018-12-11"
  },
  {
    vote_count: 7967,
    id: 354912,
    video: false,
    vote_average: 8.1,
    title: "Coco",
    popularity: 32.553,
    poster_path: "/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
    original_language: "en",
    original_title: "Coco",
    genre_ids: [16, 10751, 35, 12, 14],
    backdrop_path: "/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
    adult: false,
    overview:
      "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
    release_date: "2017-10-27"
  },
  {
    vote_count: 1431,
    id: 400155,
    video: false,
    vote_average: 6.8,
    title: "Hotel Transylvania 3: Summer Vacation",
    popularity: 31.913,
    poster_path: "/gjAFM4xhA5vyLxxKMz38ujlUfDL.jpg",
    original_language: "en",
    original_title: "Hotel Transylvania 3: Summer Vacation",
    genre_ids: [10751, 14, 35, 16],
    backdrop_path: "/m03jul0YdVEOFXEQVUv6pOVQYGL.jpg",
    adult: false,
    overview:
      "Dracula, Mavis, Johnny and the rest of the Drac Pack take a vacation on a luxury Monster Cruise Ship, where Dracula falls in love with the ship’s captain, Ericka, who’s secretly a descendant of Abraham Van Helsing, the notorious monster slayer.",
    release_date: "2018-06-28"
  },
  {
    vote_count: 2125,
    id: 493922,
    video: false,
    vote_average: 7,
    title: "Hereditary",
    popularity: 31.837,
    poster_path: "/lHV8HHlhwNup2VbpiACtlKzaGIQ.jpg",
    original_language: "en",
    original_title: "Hereditary",
    genre_ids: [27, 9648, 53],
    backdrop_path: "/yVWiOMpzf7gullGvug83r7gMdha.jpg",
    adult: false,
    overview:
      "When Ellen, the matriarch of the Graham family, passes away, her daughter’s family begins to unravel cryptic and increasingly terrifying secrets about their ancestry.",
    release_date: "2018-06-04"
  },
  {
    vote_count: 18,
    id: 500921,
    video: false,
    vote_average: 5,
    title: "Between Worlds",
    popularity: 31.678,
    poster_path: "/wfxqobg0Do8OwIO6IUM7LWHF1mV.jpg",
    original_language: "en",
    original_title: "Between Worlds",
    genre_ids: [28, 9648, 53],
    backdrop_path: "/6KAUxgR0A7lIoDnEHwv0MZIohQ9.jpg",
    adult: false,
    overview:
      "Joe—a down-on-his-luck truck driver haunted by the memory of his deceased wife and child—meets Julie, a spiritually gifted woman who enlists his help in a desperate effort to find the lost soul of her comatose daughter. But the spirit of Joe's dead wife proves stronger, possessing the young woman's body and determined to settle her unfinished business with the living.",
    release_date: "2018-12-21"
  },
  {
    vote_count: 13641,
    id: 603,
    video: false,
    vote_average: 8.1,
    title: "The Matrix",
    popularity: 31.548,
    poster_path: "/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg",
    original_language: "en",
    original_title: "The Matrix",
    genre_ids: [28, 878],
    backdrop_path: "/icmmSD4vTTDKOq2vvdulafOGw93.jpg",
    adult: false,
    overview:
      "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    release_date: "1999-03-30"
  },
  {
    vote_count: 396,
    id: 484482,
    video: false,
    vote_average: 7.2,
    title: "Sink or Swim",
    popularity: 31.376,
    poster_path: "/zsGYDF6nRC8RsT1MnQTrH2IMVDC.jpg",
    original_language: "fr",
    original_title: "Le Grand Bain",
    genre_ids: [18, 35],
    backdrop_path: "/hljeAZsHfXScqbHsAmxUGqcCx8L.jpg",
    adult: false,
    overview:
      "40-year-old Bertrand has been suffering from depression for the last two years and is barely able to keep his head above water. Despite the medication he gulps down all day, every day, and his wife's encouragement, he is unable to find any meaning in his life. Curiously, he will end up finding this sense of purpose at the swimming pool, by joining an all-male synchronised swimming team.",
    release_date: "2018-10-24"
  },
  {
    vote_count: 1010,
    id: 399360,
    video: false,
    vote_average: 5.9,
    title: "Alpha",
    popularity: 31.241,
    poster_path: "/afdZAIcAQscziqVtsEoh2PwsYTW.jpg",
    original_language: "en",
    original_title: "Alpha",
    genre_ids: [12, 18],
    backdrop_path: "/nKMeTdm72LQ756Eq20uTjF1zDXu.jpg",
    adult: false,
    overview:
      "In the prehistoric past, Keda, a young and inexperienced hunter, struggles to return home after being separated from his tribe when bison hunting goes awry. On his way back he will find an unexpected ally.",
    release_date: "2018-08-17"
  },
  {
    vote_count: 56,
    id: 523873,
    video: false,
    vote_average: 4.4,
    title: "Kung Fu League",
    popularity: 31.19,
    poster_path: "/6cNChoxMqlTLwX8pWXPh56EjatE.jpg",
    original_language: "zh",
    original_title: "功夫联盟",
    genre_ids: [28, 35],
    backdrop_path: "/3xrGXDonqCQAYDKzxMW7Hwj40UV.jpg",
    adult: false,
    overview:
      "A poor comic book artist summons four legendary Kung Fu masters to learn the highest level of martial arts and help him get his girl.",
    release_date: "2018-10-19"
  },
  {
    vote_count: 13479,
    id: 135397,
    video: false,
    vote_average: 6.6,
    title: "Jurassic World",
    popularity: 31.176,
    poster_path: "/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg",
    original_language: "en",
    original_title: "Jurassic World",
    genre_ids: [28, 12, 878, 53],
    backdrop_path: "/t5KONotASgVKq4N19RyhIthWOPG.jpg",
    adult: false,
    overview:
      "Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.",
    release_date: "2015-06-06"
  },
  {
    vote_count: 204,
    id: 507076,
    video: false,
    vote_average: 7.3,
    title: "Climax",
    popularity: 31.084,
    poster_path: "/zQDqgzSdTGSDu4rDcQTq7TAttmy.jpg",
    original_language: "fr",
    original_title: "Climax",
    genre_ids: [18, 27, 10402, 53],
    backdrop_path: "/v0sblc9A8eaE8EqDQ5Y6fELj4oB.jpg",
    adult: false,
    overview:
      "Young dancers gather in a remote and empty school building to rehearse on a cold and wintry night. The all-night celebration soon turns into a hallucinatory nightmare when they learn that their sangria is laced with LSD.",
    release_date: "2018-09-19"
  },
  {
    vote_count: 1189,
    id: 489999,
    video: false,
    vote_average: 7.7,
    title: "Searching",
    popularity: 30.542,
    poster_path: "/pk9R56ZFlofbBzfwBnHlDyg5DMs.jpg",
    original_language: "en",
    original_title: "Searching",
    genre_ids: [18, 53, 9648],
    backdrop_path: "/3CCfgSvtvN3HwVs5hbcC1NhOAzw.jpg",
    adult: false,
    overview:
      "After David Kim's 16-year-old daughter goes missing, a local investigation is opened and a detective is assigned to the case. But 37 hours later and without a single lead, David decides to search the one place no one has looked yet, where all secrets are kept today: his daughter's laptop.",
    release_date: "2018-08-24"
  },
  {
    vote_count: 4732,
    id: 316029,
    video: false,
    vote_average: 8,
    title: "The Greatest Showman",
    popularity: 30.507,
    poster_path: "/b9CeobiihCx1uG1tpw8hXmpi7nm.jpg",
    original_language: "en",
    original_title: "The Greatest Showman",
    genre_ids: [18],
    backdrop_path: "/zpq404Sk7qQ7N4x3xOeNgp74GtU.jpg",
    adult: false,
    overview:
      "The story of American showman P.T. Barnum, founder of the circus that became the famous traveling Ringling Bros. and Barnum & Bailey Circus.",
    release_date: "2017-12-20"
  },
  {
    vote_count: 4,
    id: 532321,
    video: false,
    vote_average: 5.5,
    title: "Re:Zero kara Hajimeru Isekai Seikatsu Memory Snow",
    popularity: 30.207,
    poster_path: "/xqR4ABkFTFYe8NDJi3knwWX7zfn.jpg",
    original_language: "ja",
    original_title: "Re:ゼロから始める異世界生活 Memory Snow",
    genre_ids: [16, 12],
    backdrop_path: "/4wcj0N2D1Y70ADVjNRsqfQhQEGN.jpg",
    adult: false,
    overview:
      'Subaru and friends finally get a moment of peace, and Subaru goes on a certain secret mission that he must not let anyone find out about! However, even though Subaru is wearing a disguise, Petra and other children of the village immediately figure out who he is. Now that his mission was exposed within five seconds of it starting, what will happen with Subaru\'s "date course" with Emilia?',
    release_date: "2018-10-06"
  },
  {
    vote_count: 87,
    id: 526051,
    video: false,
    vote_average: 6.1,
    title: "Look Away",
    popularity: 29.95,
    poster_path: "/ls9EPHID0zqXSooi5O03pRjoZ0r.jpg",
    original_language: "en",
    original_title: "Look Away",
    genre_ids: [27, 53],
    backdrop_path: "/x04SgdgxFGeNk2SLUnv9aXEuzQT.jpg",
    adult: false,
    overview:
      "A timid and reclusive 18-year-old high school student is alienated by her parents and ruthlessly rejected by her peers. Desperate and isolated, she confides in her own reflection — and in the mirror she finds her imagined evil twin, someone who supports her, encourages her and knows all her secret desires. When the “girls” trade places, repressed sexuality and a ferocious violence erupt with a dangerous sense of freedom.",
    release_date: "2018-10-12"
  },
  {
    vote_count: 507,
    id: 458594,
    video: false,
    vote_average: 6.4,
    title: "Peppermint",
    popularity: 29.821,
    poster_path: "/jrzxS0vcbzIIay1sdYm0rgI2QfJ.jpg",
    original_language: "en",
    original_title: "Peppermint",
    genre_ids: [28, 53, 18],
    backdrop_path: "/9krZX6T4EEs5eFpXgSi8jZkN48O.jpg",
    adult: false,
    overview:
      "A grieving mother transforms herself into a vigilante following the murders of her husband and daughter, eluding the authorities to deliver her own personal brand of justice.",
    release_date: "2018-09-06"
  },
  {
    vote_count: 57,
    id: 528949,
    video: false,
    vote_average: 7,
    title: "The Photographer of Mauthausen",
    popularity: 29.789,
    poster_path: "/1GzwDodNHSQM7Wu8VIbvTmYXJQB.jpg",
    original_language: "es",
    original_title: "El fotógrafo de Mauthausen",
    genre_ids: [53, 36, 18],
    backdrop_path: "/ljZOlqLtMa6gnTHcYn9y9lP0bK3.jpg",
    adult: false,
    overview:
      "Spanish photographer Francesc Boix, imprisoned in the Mauthausen-Gusen concentration camp, works in the SS Photographic Service. Between 1943 and 1945, he hides, with the help of other prisoners, thousands of negatives, with the purpose of showing the freed world the atrocities committed by the Nazis, exhaustively documented. He will be a key witness during the Nuremberg Trials.",
    release_date: "2018-10-26"
  },
  {
    vote_count: 2844,
    id: 427641,
    video: false,
    vote_average: 6.2,
    title: "Rampage",
    popularity: 29.696,
    poster_path: "/3gIO6mCd4Q4PF1tuwcyI3sjFrtI.jpg",
    original_language: "en",
    original_title: "Rampage",
    genre_ids: [28, 12, 878, 14],
    backdrop_path: "/wrqUiMXttHE4UBFMhLHlN601MZh.jpg",
    adult: false,
    overview:
      "Primatologist Davis Okoye shares an unshakable bond with George, the extraordinarily intelligent, silverback gorilla who has been in his care since birth. But a rogue genetic experiment gone awry mutates this gentle ape into a raging creature of enormous size. To make matters worse, it’s soon discovered there are other similarly altered animals. As these newly created alpha predators tear across North America, destroying everything in their path, Okoye teams with a discredited genetic engineer to secure an antidote, fighting his way through an ever-changing battlefield, not only to halt a global catastrophe but to save the fearsome creature that was once his friend.",
    release_date: "2018-04-12"
  },
  {
    vote_count: 729,
    id: 463821,
    video: false,
    vote_average: 6.2,
    title: "The House with a Clock in Its Walls",
    popularity: 29.599,
    poster_path: "/qM66Hv4ByAxnilr0jaqCA9uOD4Y.jpg",
    original_language: "en",
    original_title: "The House with a Clock in Its Walls",
    genre_ids: [14, 10751],
    backdrop_path: "/meyZ0ZZLLNaKIrvbmVpuXzZ11sD.jpg",
    adult: false,
    overview:
      "When ten-year-old Lewis is suddenly orphaned, he is sent to live with his Uncle Jonathan in a creaky (and creepy) old mansion with a mysterious ticking noise that emanates from the walls. Upon discovering that his uncle is a warlock, Lewis begins learning magic, but when he rebelliously resurrects an evil warlock he must find the secret of the house and save the world from destruction.",
    release_date: "2018-09-15"
  },
  {
    vote_count: 1585,
    id: 442249,
    video: false,
    vote_average: 5.8,
    title: "The First Purge",
    popularity: 29.464,
    poster_path: "/litjsBoiydO6JlO70uOX4N3WnNL.jpg",
    original_language: "en",
    original_title: "The First Purge",
    genre_ids: [28, 878, 53, 27],
    backdrop_path: "/r4clWIxKeWoqrHspQP0XunuUmB7.jpg",
    adult: false,
    overview:
      "To push the crime rate below one percent for the rest of the year, the New Founding Fathers of America test a sociological theory that vents aggression for one night in one isolated community. But when the violence of oppressors meets the rage of the others, the contagion will explode from the trial-city borders and spread across the nation.",
    release_date: "2018-07-04"
  },
  {
    vote_count: 1097,
    id: 400535,
    video: false,
    vote_average: 6.7,
    title: "Sicario: Day of the Soldado",
    popularity: 29.186,
    poster_path: "/msqWSQkU403cQKjQHnWLnugv7EY.jpg",
    original_language: "en",
    original_title: "Sicario: Day of the Soldado",
    genre_ids: [28, 80, 18, 53],
    backdrop_path: "/tnwMCH4yLBY4qpe6Nr4n66u4U3f.jpg",
    adult: false,
    overview:
      "Agent Matt Graver teams up with operative Alejandro Gillick to prevent Mexican drug cartels from smuggling terrorists across the United States border.",
    release_date: "2018-06-27"
  },
  {
    vote_count: 372,
    id: 440298,
    video: false,
    vote_average: 7.7,
    title: "Cold War",
    popularity: 29.121,
    poster_path: "/wsv6vWhJyRhwzmDN4kjs3ACV97Q.jpg",
    original_language: "pl",
    original_title: "Zimna wojna",
    genre_ids: [18, 10749, 10402],
    backdrop_path: "/rOcw5VX3is3TiZhmxLGdYqBcTcP.jpg",
    adult: false,
    overview:
      "A man and a woman meet in the ruins of post-war Poland. With vastly different backgrounds and temperaments, they are fatally mismatched and yet drawn to each other.",
    release_date: "2018-06-08"
  },
  {
    vote_count: 88,
    id: 515042,
    video: false,
    vote_average: 8.2,
    title: "Free Solo",
    popularity: 28.535,
    poster_path: "/oQZ4T3638UIZS7JV1SLTdqPmezx.jpg",
    original_language: "en",
    original_title: "Free Solo",
    genre_ids: [99],
    backdrop_path: "/z2uuQasY4gQJ8VDAFki746JWeQJ.jpg",
    adult: false,
    overview:
      "Follow Alex Honnold as he attempts to become the first person to ever free solo climb Yosemite's 3,000 foot high El Capitan wall. With no ropes or safety gear, this would arguably be the greatest feat in rock climbing history.",
    release_date: "2018-12-14"
  },
  {
    vote_count: 56,
    id: 520360,
    video: false,
    vote_average: 5.5,
    title: "King of Thieves",
    popularity: 28.497,
    poster_path: "/rtfS7y2XQ0vjTrm6khq508N0Ehk.jpg",
    original_language: "en",
    original_title: "King of Thieves",
    genre_ids: [80, 18],
    backdrop_path: "/2yY0V3kvcDt6d68t2HKklnqMnJp.jpg",
    adult: false,
    overview:
      "London, England, April 2015. Brian Reader, a retired thief, gathers an unlikely gang of burglars to perpetrate the biggest and boldest heist in British history. The thieves assault the Hatton Garden Safe Deposit Company and escape with millions in goods and money. But soon the cracks between the gang members begin to appear when they discuss how to share the loot.",
    release_date: "2018-09-04"
  },
  {
    vote_count: 3547,
    id: 336843,
    video: false,
    vote_average: 7.1,
    title: "Maze Runner: The Death Cure",
    popularity: 28.485,
    poster_path: "/2zYfzA3TBwrMC8tfFbpiTLODde0.jpg",
    original_language: "en",
    original_title: "Maze Runner: The Death Cure",
    genre_ids: [28, 878],
    backdrop_path: "/bvbyidkMaBls1LTaIWYY6UmYTaL.jpg",
    adult: false,
    overview:
      "Thomas leads his group of escaped Gladers on their final and most dangerous mission yet. To save their friends, they must break into the legendary Last City, a WCKD-controlled labyrinth that may turn out to be the deadliest maze of all. Anyone who makes it out alive will get answers to the questions the Gladers have been asking since they first arrived in the maze.",
    release_date: "2018-01-10"
  },
  {
    vote_count: 318,
    id: 505192,
    video: false,
    vote_average: 8,
    title: "Shoplifters",
    popularity: 28.351,
    poster_path: "/4nfRUOv3LX5zLn98WS1WqVBk9E9.jpg",
    original_language: "ja",
    original_title: "万引き家族",
    genre_ids: [18, 80],
    backdrop_path: "/xOpQ4jIQJ0HSUhVDixZA9yWqVBP.jpg",
    adult: false,
    overview:
      "After one of their shoplifting sessions, Osamu and his son come across a little girl in the freezing cold. At first reluctant to shelter the girl, Osamu’s wife agrees to take care of her after learning of the hardships she faces. Although the family is poor, barely making enough money to survive through petty crime, they seem to live happily together until an unforeseen incident reveals hidden secrets, testing the bonds that unite them.",
    release_date: "2018-06-02"
  },
  {
    vote_count: 489,
    id: 361292,
    video: false,
    vote_average: 7.2,
    title: "Suspiria",
    popularity: 28.21,
    poster_path: "/dzWTnkert9EoiPWldWJ15dnfAFl.jpg",
    original_language: "en",
    original_title: "Suspiria",
    genre_ids: [53, 9648, 18, 27],
    backdrop_path: "/AmO8I38bkHwKhgxPNrd6djBQyPU.jpg",
    adult: false,
    overview:
      "A darkness swirls at the center of a world-renowned dance company, one that will engulf the troupe's artistic director, an ambitious young dancer and a grieving psychotherapist. Some will succumb to the nightmare, others will finally wake up.",
    release_date: "2018-10-11"
  },
  {
    vote_count: 44,
    id: 429202,
    video: false,
    vote_average: 6.6,
    title: "Vox Lux",
    popularity: 27.944,
    poster_path: "/na3pnvCYsXGnoZfL2q9Ly3vJPWQ.jpg",
    original_language: "en",
    original_title: "Vox Lux",
    genre_ids: [18, 10402],
    backdrop_path: "/cDMKcBhtXx5GcsJPiVzRKwaYqdE.jpg",
    adult: false,
    overview:
      "In 1999, teenage sisters Celeste and Eleanor survive a seismic, violent tragedy. The sisters compose and perform a song about their experience, making something lovely and cathartic out of a catastrophe - while also catapulting Celeste to stardom. By 2017, Celeste is a mother to a teenage daughter of her own and is struggling to navigate a career fraught with scandals when another act of terrifying violence demands her attention.",
    release_date: "2018-12-07"
  },
  {
    vote_count: 155,
    id: 446101,
    video: false,
    vote_average: 6.3,
    title: "Assassination Nation",
    popularity: 27.348,
    poster_path: "/rcCpI5TJ7zMzLXS0cHWvPfhCG2c.jpg",
    original_language: "en",
    original_title: "Assassination Nation",
    genre_ids: [53, 35, 28, 18],
    backdrop_path: "/roL2pnIh55rLO93qFcIUnoamJpj.jpg",
    adult: false,
    overview:
      "High school senior Lily and her group of friends live in a haze of texts, posts, selfies and chats just like the rest of the world. So, when an anonymous hacker starts posting details from the private lives of everyone in their small town, the result is absolute madness leaving Lily and her friends questioning whether they'll live through the night.",
    release_date: "2018-09-21"
  },
  {
    vote_count: 288,
    id: 401545,
    video: false,
    vote_average: 6.6,
    title: "Everybody Knows",
    popularity: 27.208,
    poster_path: "/um7ikmficsPsiOZwp7VkKdSnBs7.jpg",
    original_language: "es",
    original_title: "Todos lo saben",
    genre_ids: [18, 80, 9648, 53],
    backdrop_path: "/gJqQxpe03aIRZZjy8A4nbLtBpch.jpg",
    adult: false,
    overview:
      "Laura, a Spanish woman living in Buenos Aires, returns to her hometown outside Madrid with her Argentinian husband and children. However, the trip is upset by unexpected events that bring secrets into the open.",
    release_date: "2018-05-09"
  },
  {
    vote_count: 6683,
    id: 399055,
    video: false,
    vote_average: 7.3,
    title: "The Shape of Water",
    popularity: 27.093,
    poster_path: "/k4FwHlMhuRR5BISY2Gm2QZHlH5Q.jpg",
    original_language: "en",
    original_title: "The Shape of Water",
    genre_ids: [18, 14, 10749],
    backdrop_path: "/rgyhSn3mINvkuy9iswZK0VLqQO3.jpg",
    adult: false,
    overview:
      "An other-worldly story, set against the backdrop of Cold War era America circa 1962, where a mute janitor working at a lab falls in love with an amphibious man being held captive there and devises a plan to help him escape.",
    release_date: "2017-12-01"
  },
  {
    vote_count: 408,
    id: 470044,
    video: false,
    vote_average: 8.1,
    title: "The Hate U Give",
    popularity: 27.073,
    poster_path: "/2icwBom0t5nmOuZI9FVXF3gkMK0.jpg",
    original_language: "en",
    original_title: "The Hate U Give",
    genre_ids: [80],
    backdrop_path: "/5AijK8OxcTzuT8z6aEcc3kO96eG.jpg",
    adult: false,
    overview:
      "Raised in a poverty-stricken slum, a 16-year-old girl named Starr now attends a suburban prep school. After she witnesses a police officer shoot her unarmed best friend, she's torn between her two very different worlds as she tries to speak her truth.",
    release_date: "2018-10-19"
  },
  {
    vote_count: 2972,
    id: 454983,
    video: false,
    vote_average: 7.3,
    title: "The Kissing Booth",
    popularity: 26.795,
    poster_path: "/7Dktk2ST6aL8h9Oe5rpk903VLhx.jpg",
    original_language: "en",
    original_title: "The Kissing Booth",
    genre_ids: [10749, 35],
    backdrop_path: "/xEKx7zPEjN6meomZ7OhV82Mm2jm.jpg",
    adult: false,
    overview:
      "When teenager Elle's first kiss leads to a forbidden romance with the hottest boy in high school, she risks her relationship with her best friend.",
    release_date: "2018-05-11"
  },
  {
    vote_count: 4040,
    id: 300668,
    video: false,
    vote_average: 6.3,
    title: "Annihilation",
    popularity: 26.78,
    poster_path: "/d3qcpfNwbAMCNqWDHzPQsUYiUgS.jpg",
    original_language: "en",
    original_title: "Annihilation",
    genre_ids: [9648, 878, 53],
    backdrop_path: "/5zfVNTrkhMu673zma6qhFzG01ig.jpg",
    adult: false,
    overview:
      "A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature don't apply.",
    release_date: "2018-02-22"
  },
  {
    vote_count: 2429,
    id: 445571,
    video: false,
    vote_average: 6.9,
    title: "Game Night",
    popularity: 26.711,
    poster_path: "/85R8LMyn9f2Lev2YPBF8Nughrkv.jpg",
    original_language: "en",
    original_title: "Game Night",
    genre_ids: [9648, 35, 80, 53],
    backdrop_path: "/dj5fwtC4iFdP9j4Zeiw3GqNf0qM.jpg",
    adult: false,
    overview:
      "Max and Annie's weekly game night gets kicked up a notch when Max's brother Brooks arranges a murder mystery party -- complete with fake thugs and federal agents. So when Brooks gets kidnapped, it's all supposed to be part of the game. As the competitors set out to solve the case, they start to learn that neither the game nor Brooks are what they seem to be. The friends soon find themselves in over their heads as each twist leads to another unexpected turn over the course of one chaotic night.",
    release_date: "2018-02-22"
  },
  {
    vote_count: 7484,
    id: 424,
    video: false,
    vote_average: 8.5,
    title: "Schindler's List",
    popularity: 26.674,
    poster_path: "/yPisjyLweCl1tbgwgtzBCNCBle.jpg",
    original_language: "en",
    original_title: "Schindler's List",
    genre_ids: [18, 36, 10752],
    backdrop_path: "/cTNYRUTXkBgPH3wP3kmPUB5U6dA.jpg",
    adult: false,
    overview:
      "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
    release_date: "1993-12-15"
  },
  {
    vote_count: 322,
    id: 442062,
    video: false,
    vote_average: 5.6,
    title: "Goosebumps 2: Haunted Halloween",
    popularity: 26.293,
    poster_path: "/kOrUF0EH2C3KHoI7tqANZMFZaTN.jpg",
    original_language: "en",
    original_title: "Goosebumps 2: Haunted Halloween",
    genre_ids: [12, 35, 14, 10751, 27],
    backdrop_path: "/h5BvesqaxL7V3vl1CmaR8waGyiM.jpg",
    adult: false,
    overview:
      "Two boys face an onslaught from witches, monsters, ghouls and a talking dummy after they discover a mysterious book by author R. L. Stine.",
    release_date: "2018-10-11"
  },
  {
    vote_count: 6935,
    id: 129,
    video: false,
    vote_average: 8.5,
    title: "Spirited Away",
    popularity: 26.102,
    poster_path: "/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg",
    original_language: "ja",
    original_title: "千と千尋の神隠し",
    genre_ids: [16, 10751, 14],
    backdrop_path: "/mnpRKVSXBX6jb56nabvmGKA0Wig.jpg",
    adult: false,
    overview:
      "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    release_date: "2001-07-20"
  },
  {
    vote_count: 88,
    id: 440472,
    video: false,
    vote_average: 7.5,
    title: "The Upside",
    popularity: 25.967,
    poster_path: "/jmjmDPEEyIrITQ3WRNEUOcYLqse.jpg",
    original_language: "en",
    original_title: "The Upside",
    genre_ids: [35, 18],
    backdrop_path: "/mdGUvN7yCyExPNO5f4zAzifk1l1.jpg",
    adult: false,
    overview:
      "Phillip is a wealthy quadriplegic who needs a caretaker to help him with his day-to-day routine in his New York penthouse. He decides to hire Dell, a struggling parolee who's trying to reconnect with his ex and his young son. Despite coming from two different worlds, an unlikely friendship starts to blossom.",
    release_date: "2019-01-10"
  },
  {
    vote_count: 0,
    id: 550506,
    video: false,
    vote_average: 0,
    title: "Saint Judy",
    popularity: 25.956,
    poster_path: "/xHt6GStRbItqREKPudUBq9Wrv59.jpg",
    original_language: "en",
    original_title: "Saint Judy",
    genre_ids: [18],
    backdrop_path: "/5aeU1u0HR3mNQf3yJYnpouG5NsI.jpg",
    adult: false,
    overview:
      "The true story of immigration attorney Judy Wood and how she singlehandedly changed the U.S. law of asylum to save women's lives.",
    release_date: "2019-03-01"
  },
  {
    vote_count: 981,
    id: 420814,
    video: false,
    vote_average: 7.4,
    title: "Christopher Robin",
    popularity: 25.631,
    poster_path: "/v4MIDJbwBIP08KaVoKnEwCPnzft.jpg",
    original_language: "en",
    original_title: "Christopher Robin",
    genre_ids: [12, 35, 10751, 14],
    backdrop_path: "/uDt8bQ4lGVlabEx5Gl2cPzvy6qz.jpg",
    adult: false,
    overview:
      "Christopher Robin, the boy who had countless adventures in the Hundred Acre Wood, has grown up and lost his way. Now it’s up to his spirited and loveable stuffed animals, Winnie The Pooh, Tigger, Piglet, and the rest of the gang, to rekindle their friendship and remind him of endless days of childlike wonder and make-believe, when doing nothing was the very best something.",
    release_date: "2018-08-02"
  },
  {
    vote_count: 4435,
    id: 398818,
    video: false,
    vote_average: 8.3,
    title: "Call Me by Your Name",
    popularity: 25.568,
    poster_path: "/nPTjj6ZfBXXBwOhd7iUy6tyuKWt.jpg",
    original_language: "en",
    original_title: "Call Me by Your Name",
    genre_ids: [10749, 18],
    backdrop_path: "/cRDJFNKatstX1YsjZgaSa2W1507.jpg",
    adult: false,
    overview:
      "Elio Perlman is spending the summer with his family at their vacation home in Lombardy, Italy. When his father hires a handsome doctoral student, the curious 17-year-old finds himself developing a growing attraction to the young man.",
    release_date: "2017-09-01"
  },
  {
    vote_count: 9556,
    id: 8587,
    video: false,
    vote_average: 8.2,
    title: "The Lion King",
    popularity: 25.5,
    poster_path: "/bKPtXn9n4M4s8vvZrbw40mYsefB.jpg",
    original_language: "en",
    original_title: "The Lion King",
    genre_ids: [10751, 16, 18],
    backdrop_path: "/6lL49SOgBtqiXMs7Y5HWBYH3X9Z.jpg",
    adult: false,
    overview:
      "A young lion cub named Simba can't wait to be king. But his uncle craves the title for himself and will stop at nothing to get it.",
    release_date: "1994-05-07"
  },
  {
    vote_count: 133,
    id: 300681,
    video: false,
    vote_average: 5.3,
    title: "Replicas",
    popularity: 25.41,
    poster_path: "/hhPBTAn9b4TYOxc1JYNsX4BFAlW.jpg",
    original_language: "en",
    original_title: "Replicas",
    genre_ids: [53, 878],
    backdrop_path: "/sHPfBVFq7dlnXCz1zFdbEdwcBDJ.jpg",
    adult: false,
    overview:
      "A scientist becomes obsessed with bringing back his family members who died in a traffic accident.",
    release_date: "2018-10-25"
  },
  {
    vote_count: 193,
    id: 472451,
    video: false,
    vote_average: 7.3,
    title: "Boy Erased",
    popularity: 25.382,
    poster_path: "/oZbhTdi0ZQY7iiSQ0L7h3ya6NDF.jpg",
    original_language: "en",
    original_title: "Boy Erased",
    genre_ids: [18],
    backdrop_path: "/2ePViXIOnifrugvnjlFxzmvjwKL.jpg",
    adult: false,
    overview:
      "Jared, the son of a Baptist pastor in a small American town, is outed to his parents at age 19. Jared is faced with an ultimatum: attend a gay conversion therapy program – or be permanently exiled and shunned by his family, friends, and faith.",
    release_date: "2018-09-24"
  },
  {
    vote_count: 1808,
    id: 447200,
    video: false,
    vote_average: 6.1,
    title: "Skyscraper",
    popularity: 25.332,
    poster_path: "/5LYSsOPzuP13201qSzMjNxi8FxN.jpg",
    original_language: "en",
    original_title: "Skyscraper",
    genre_ids: [28],
    backdrop_path: "/oMKFQmoVgB69fyXfSMu0lGlHJP2.jpg",
    adult: false,
    overview:
      "Framed and on the run, a former FBI agent must save his family from a blazing fire in the world's tallest building.",
    release_date: "2018-07-11"
  },
  {
    vote_count: 3724,
    id: 372058,
    video: false,
    vote_average: 8.6,
    title: "Your Name.",
    popularity: 25.061,
    poster_path: "/xq1Ugd62d23K2knRUx6xxuALTZB.jpg",
    original_language: "ja",
    original_title: "君の名は。",
    genre_ids: [10749, 16, 18],
    backdrop_path: "/7OMAfDJikBxItZBIug0NJig5DHD.jpg",
    adult: false,
    overview:
      "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    release_date: "2016-08-26"
  },
  {
    vote_count: 1114,
    id: 455980,
    video: false,
    vote_average: 6.8,
    title: "Tag",
    popularity: 24.945,
    poster_path: "/eXXpuW2xaq5Aen9N5prFlARVIvr.jpg",
    original_language: "en",
    original_title: "Tag",
    genre_ids: [35, 18],
    backdrop_path: "/yRXzrwLfB5tDTIA3lSU9S3N9RUK.jpg",
    adult: false,
    overview:
      "For one month every year, five highly competitive friends hit the ground running in a no-holds-barred game of tag they’ve been playing since the first grade. This year, the game coincides with the wedding of their only undefeated player, which should finally make him an easy target. But he knows they’re coming...and he’s ready.",
    release_date: "2018-05-30"
  },
  {
    vote_count: 315,
    id: 438590,
    video: false,
    vote_average: 5.6,
    title: "A-X-L",
    popularity: 24.945,
    poster_path: "/9kB56ZdMB6RgY5QtX9Bar45jCeI.jpg",
    original_language: "en",
    original_title: "A-X-L",
    genre_ids: [878, 28, 12, 10751],
    backdrop_path: "/l1nYo0yzKjf84atnBDbx0do16vQ.jpg",
    adult: false,
    overview:
      "The life of a teenage boy is forever altered by a chance encounter with cutting edge military technology.",
    release_date: "2018-08-23"
  },
  {
    vote_count: 8586,
    id: 374720,
    video: false,
    vote_average: 7.4,
    title: "Dunkirk",
    popularity: 24.694,
    poster_path: "/bOXBV303Fgkzn2K4FeKDc0O31q4.jpg",
    original_language: "en",
    original_title: "Dunkirk",
    genre_ids: [10752],
    backdrop_path: "/2bG3HXcUze0GyGAKnJSDF6gllzk.jpg",
    adult: false,
    overview:
      "The story of the miraculous evacuation of Allied soldiers from Belgium, Britain, Canada and France, who were cut off and surrounded by the German army from the beaches and harbour of Dunkirk between May 26th and June 4th 1940 during World War II.",
    release_date: "2017-07-19"
  },
  {
    vote_count: 1230,
    id: 537996,
    video: false,
    vote_average: 7.3,
    title: "The Ballad of Buster Scruggs",
    popularity: 24.652,
    poster_path: "/voxl654m7p36y8FLu8oQD7dfwwK.jpg",
    original_language: "en",
    original_title: "The Ballad of Buster Scruggs",
    genre_ids: [35, 18, 37],
    backdrop_path: "/iGz47s03QmZ0wojokyQGDTUoDnd.jpg",
    adult: false,
    overview:
      "Vignettes weaving together the stories of six individuals in the old West at the end of the Civil War. Following the tales of a sharp-shooting songster, a wannabe bank robber, two weary traveling performers, a lone gold prospector, a woman traveling the West to an uncertain future, and a motley crew of strangers undertaking a carriage ride.",
    release_date: "2018-11-09"
  },
  {
    vote_count: 997,
    id: 445651,
    video: false,
    vote_average: 6.8,
    title: "The Darkest Minds",
    popularity: 24.545,
    poster_path: "/94RaS52zmsqaiAe1TG20pdbJCZr.jpg",
    original_language: "en",
    original_title: "The Darkest Minds",
    genre_ids: [878, 53],
    backdrop_path: "/5BxrMNGl3YDiWgHCVJu8iLQoJDM.jpg",
    adult: false,
    overview:
      "After a disease kills 98% of America's children, the surviving 2% develop superpowers and are placed in internment camps. A 16-year-old girl escapes her camp and joins a group of other teens on the run from the government.",
    release_date: "2018-08-02"
  },
  {
    vote_count: 5,
    id: 471506,
    video: false,
    vote_average: 5,
    title: "Greta",
    popularity: 24.541,
    poster_path: "/6Lgk1OGexD0fU8QqDBQHcvEwd1Z.jpg",
    original_language: "en",
    original_title: "Greta",
    genre_ids: [53, 18],
    backdrop_path: "/2yR4VkzqOtnaj5AOCN8i2HBBzLY.jpg",
    adult: false,
    overview:
      "A young woman returns an elderly widow’s lost purse, leading to an unlikely relationship between the two — until the young woman discovers her elder might not be all that she seems.",
    release_date: "2019-03-01"
  },
  {
    vote_count: 6338,
    id: 280,
    video: false,
    vote_average: 7.9,
    title: "Terminator 2: Judgment Day",
    popularity: 24.423,
    poster_path: "/2y4dmgWYRMYXdD1UyJVcn2HSd1D.jpg",
    original_language: "en",
    original_title: "Terminator 2: Judgment Day",
    genre_ids: [28, 53, 878],
    backdrop_path: "/d9AqtruwS8nljKjL5aYzM42hQJr.jpg",
    adult: false,
    overview:
      "Nearly 10 years have passed since Sarah Connor was targeted for termination by a cyborg from the future. Now her son, John, the future leader of the resistance, is the target for a newer, more deadly terminator. Once again, the resistance has managed to send a protector back to attempt to save John and his mother Sarah.",
    release_date: "1991-07-03"
  },
  {
    vote_count: 7930,
    id: 857,
    video: false,
    vote_average: 8.1,
    title: "Saving Private Ryan",
    popularity: 24.361,
    poster_path: "/miDoEMlYDJhOCvxlzI0wZqBs9Yt.jpg",
    original_language: "en",
    original_title: "Saving Private Ryan",
    genre_ids: [18, 36, 10752],
    backdrop_path: "/hjQp148VjWF4KjzhsD90OCMr11h.jpg",
    adult: false,
    overview:
      "As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory and bringing the boy home.",
    release_date: "1998-07-24"
  },
  {
    vote_count: 911,
    id: 460668,
    video: false,
    vote_average: 6.4,
    title: "I Feel Pretty",
    popularity: 24.274,
    poster_path: "/iuPs45XIxfARKPLEkCGXWUrBrTR.jpg",
    original_language: "en",
    original_title: "I Feel Pretty",
    genre_ids: [35],
    backdrop_path: "/3Zb4Du20mvKl0jlOtQ6lCFhpiiT.jpg",
    adult: false,
    overview:
      "A head injury causes a woman to develop an extraordinary amount of confidence and believe she's drop dead gorgeous.",
    release_date: "2018-04-19"
  },
  {
    vote_count: 5157,
    id: 343668,
    video: false,
    vote_average: 7,
    title: "Kingsman: The Golden Circle",
    popularity: 24.18,
    poster_path: "/34xBL6BXNYFqtHO9zhcgoakS4aP.jpg",
    original_language: "en",
    original_title: "Kingsman: The Golden Circle",
    genre_ids: [28, 12, 35],
    backdrop_path: "/uExPmkOHJySrbJyJDJylHDqaT58.jpg",
    adult: false,
    overview:
      "When an attack on the Kingsman headquarters takes place and a new villain rises, Eggsy and Merlin are forced to work together with the American agency known as the Statesman to save the world.",
    release_date: "2017-09-20"
  },
  {
    vote_count: 1109,
    id: 449443,
    video: false,
    vote_average: 6.5,
    title: "Den of Thieves",
    popularity: 24.162,
    poster_path: "/AfybH6GbGFw1F9bcETe2yu25mIE.jpg",
    original_language: "en",
    original_title: "Den of Thieves",
    genre_ids: [28, 53, 80],
    backdrop_path: "/s3FDBLH4qc1IcjexB05Qvbn3wxO.jpg",
    adult: false,
    overview:
      "A gritty crime saga which follows the lives of an elite unit of the LA County Sheriff’s Dept. and the state’s most successful bank robbery crew as the outlaws plan a seemingly impossible heist on the Federal Reserve Bank.",
    release_date: "2018-01-18"
  },
  {
    vote_count: 153,
    id: 489930,
    video: false,
    vote_average: 7.8,
    title: "Blindspotting",
    popularity: 24.061,
    poster_path: "/c4UvwoMmQiztTqeUnExDU5hoCdP.jpg",
    original_language: "en",
    original_title: "Blindspotting",
    genre_ids: [35, 18, 80],
    backdrop_path: "/qNYL8EAUPvTaiW1hVavX1vIWVcl.jpg",
    adult: false,
    overview:
      "Collin must make it through his final three days of probation for a chance at a new beginning. He and his troublemaking childhood best friend, Miles, work as movers, and when Collin witnesses a police shooting, the two men’s friendship is tested as they grapple with identity and their changed realities in the rapidly-gentrifying neighborhood they grew up in.",
    release_date: "2018-07-20"
  },
  {
    vote_count: 3104,
    id: 401981,
    video: false,
    vote_average: 6.5,
    title: "Red Sparrow",
    popularity: 24.024,
    poster_path: "/vLCogyfQGxVLDC1gqUdNAIkc29L.jpg",
    original_language: "en",
    original_title: "Red Sparrow",
    genre_ids: [9648, 53],
    backdrop_path: "/sGzuQYSTwJvLBc2PnuSVLHhuFeh.jpg",
    adult: false,
    overview:
      "Prima ballerina, Dominika Egorova faces a bleak and uncertain future after she suffers an injury that ends her career. She soon turns to Sparrow School, a secret intelligence service that trains exceptional young people to use their minds and bodies as weapons. Dominika emerges as the most dangerous Sparrow after completing the sadistic training process. As she comes to terms with her new abilities, she meets a CIA agent who tries to convince her that he is the only person she can trust.",
    release_date: "2018-02-28"
  },
  {
    vote_count: 6,
    id: 520576,
    video: false,
    vote_average: 8,
    title: "After the Rain",
    popularity: 23.918,
    poster_path: "/fAx1Q5RsZ57w6evOLPf4iMEEMLR.jpg",
    original_language: "ja",
    original_title: "恋は雨上がりのように",
    genre_ids: [10749, 18],
    backdrop_path: "/mNVqvvxUSG5IK8MCrWMGkRvHVgK.jpg",
    adult: false,
    overview:
      "Akira Tachibana is a 17-year-old high school student. She was once a promising athlete, but an injury has prevented her from taking part in track and field. One day, Akira Tachibana goes to a family restaurant and the manager talks to her in a tender voice. This makes Akira Tachibana begin working part-time at the restaurant. The manager is 45-year-old Masami Kondo and he is divorced with a child. Akira Tachibana falls in love with him. --asianwiki",
    release_date: "2018-05-25"
  },
  {
    vote_count: 2001,
    id: 268896,
    video: false,
    vote_average: 5.9,
    title: "Pacific Rim: Uprising",
    popularity: 23.755,
    poster_path: "/v5HlmJK9bdeHxN2QhaFP1ivjX3U.jpg",
    original_language: "en",
    original_title: "Pacific Rim: Uprising",
    genre_ids: [28, 14, 878, 12],
    backdrop_path: "/mo5EJsExrQCroqPDwUwp6jeq0xS.jpg",
    adult: false,
    overview:
      "It has been ten years since The Battle of the Breach and the oceans are still, but restless. Vindicated by the victory at the Breach, the Jaeger program has evolved into the most powerful global defense force in human history. The PPDC now calls upon the best and brightest to rise up and become the next generation of heroes when the Kaiju threat returns.",
    release_date: "2018-03-21"
  },
  {
    vote_count: 167,
    id: 464502,
    video: false,
    vote_average: 6.6,
    title: "Acrimony",
    popularity: 23.613,
    poster_path: "/upURIW6jeEcTJKpaJeoNw5jbcr1.jpg",
    original_language: "en",
    original_title: "Acrimony",
    genre_ids: [18, 53],
    backdrop_path: "/qTGhOP8eFA5tjn4Lka4UVfDv1Zb.jpg",
    adult: false,
    overview:
      "A faithful wife takes action when it becomes clear to her that her devious husband has betrayed her.",
    release_date: "2018-03-30"
  },
  {
    vote_count: 1436,
    id: 458423,
    video: false,
    vote_average: 7.3,
    title: "Mamma Mia! Here We Go Again",
    popularity: 23.541,
    poster_path: "/vzI4gNJDUwWgmNDSBWxYoeGkIEY.jpg",
    original_language: "en",
    original_title: "Mamma Mia! Here We Go Again",
    genre_ids: [35, 10749],
    backdrop_path: "/8HKwxHZ23sW8wz4yb28IWnAM1M6.jpg",
    adult: false,
    overview:
      "Five years after meeting her three fathers, Sophie Sheridan prepares to open her mother’s hotel. In 1979, young Donna Sheridan meets the men who each could be Sophie’s biological father.",
    release_date: "2018-07-09"
  },
  {
    vote_count: 373,
    id: 399796,
    video: false,
    vote_average: 6.2,
    title: "Life of the Party",
    popularity: 23.49,
    poster_path: "/749iUAWQWeutQuTd9excjmigecw.jpg",
    original_language: "en",
    original_title: "Life of the Party",
    genre_ids: [35],
    backdrop_path: "/5uayF96i4JWtdNH3uJy5IpImDBT.jpg",
    adult: false,
    overview:
      "Dumped by her husband, longtime housewife Deanna turns regret into reset by going back to college. Winding up at the same school as her daughter, Deanna plunges headlong into the campus experience – embracing fun, freedom and frat boys.",
    release_date: "2018-05-10"
  },
  {
    vote_count: 482,
    id: 487476,
    video: false,
    vote_average: 6.6,
    title: "Nothing to Hide",
    popularity: 23.27,
    poster_path: "/cEYbEDrgKOtGVyO2c8R4zwXUVR0.jpg",
    original_language: "fr",
    original_title: "Le Jeu",
    genre_ids: [18, 35],
    backdrop_path: "/79nrD8QAuFQBn3n24M0yyHkosRV.jpg",
    adult: false,
    overview:
      "To spice up a dinner party, old friends agree to share every private message that pops up on their phones -- with disastrous results.",
    release_date: "2018-10-17"
  },
  {
    vote_count: 3904,
    id: 338970,
    video: false,
    vote_average: 6.3,
    title: "Tomb Raider",
    popularity: 23.057,
    poster_path: "/3zrC5tUiR35rTz9stuIxnU1nUS5.jpg",
    original_language: "en",
    original_title: "Tomb Raider",
    genre_ids: [28, 12, 14],
    backdrop_path: "/bLJTjfbZ1c5zSNiAvGYs1Uc82ir.jpg",
    adult: false,
    overview:
      "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
    release_date: "2018-03-05"
  },
  {
    vote_count: 1388,
    id: 419478,
    video: false,
    vote_average: 7.8,
    title: "Midnight Sun",
    popularity: 23.003,
    poster_path: "/vPG2zEKPXhovPW9S91SRnwr5JM1.jpg",
    original_language: "en",
    original_title: "Midnight Sun",
    genre_ids: [10749, 18],
    backdrop_path: "/9T8sj5io4SGCBTHsk5H8LGcfKVe.jpg",
    adult: false,
    overview:
      "Katie, a 17-year-old, has been sheltered since childhood and confined to her house during the day by a rare disease that makes even the smallest amount of sunlight deadly. Fate intervenes when she meets Charlie and they embark on a summer romance.",
    release_date: "2018-03-22"
  },
  {
    vote_count: 9104,
    id: 98,
    video: false,
    vote_average: 8.1,
    title: "Gladiator",
    popularity: 22.873,
    poster_path: "/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg",
    original_language: "en",
    original_title: "Gladiator",
    genre_ids: [28, 18, 12],
    backdrop_path: "/5vZw7ltCKI0JiOYTtRxaIC3DX0e.jpg",
    adult: false,
    overview:
      "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos. Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor. As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed. He escapes, but is captured by slave traders. Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences.",
    release_date: "2000-05-01"
  },
  {
    vote_count: 3040,
    id: 8392,
    video: false,
    vote_average: 8.1,
    title: "My Neighbor Totoro",
    popularity: 22.783,
    poster_path: "/2i0OOjvi7CqNQA6ZtYJtL65P9oZ.jpg",
    original_language: "ja",
    original_title: "となりのトトロ",
    genre_ids: [14, 16, 10751],
    backdrop_path: "/fYU3ckVE1zECs42ZO0uSoJpwlXi.jpg",
    adult: false,
    overview:
      "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
    release_date: "1988-04-16"
  },
  {
    vote_count: 156,
    id: 515916,
    video: false,
    vote_average: 7.7,
    title: "Girl",
    popularity: 22.675,
    poster_path: "/a6WKjZ1eHrKV8u1DYqjW4yUPuC.jpg",
    original_language: "nl",
    original_title: "Girl",
    genre_ids: [18],
    backdrop_path: "/iGCHoFp4VUwMoolO2C2u12AgiKl.jpg",
    adult: false,
    overview:
      "A 15-year-old girl, born in a boy's body, dreams of becoming a ballerina and will push her body to its limits in order for her dream to succeed.",
    release_date: "2018-09-27"
  },
  {
    vote_count: 5470,
    id: 62,
    video: false,
    vote_average: 8,
    title: "2001: A Space Odyssey",
    popularity: 22.627,
    poster_path: "/90T7b2LIrL07ndYQBmSm09yqVEH.jpg",
    original_language: "en",
    original_title: "2001: A Space Odyssey",
    genre_ids: [878, 9648, 12],
    backdrop_path: "/6gyZF4SeifiUUYDELkCS8nOqsu2.jpg",
    adult: false,
    overview:
      "Humanity finds a mysterious object buried beneath the lunar surface and sets off to find its origins with the help of HAL 9000, the world's most advanced super computer.",
    release_date: "1968-04-09"
  },
  {
    vote_count: 4985,
    id: 359940,
    video: false,
    vote_average: 8.2,
    title: "Three Billboards Outside Ebbing, Missouri",
    popularity: 22.621,
    poster_path: "/vgvw6w1CtcFkuXXn004S5wQsHRl.jpg",
    original_language: "en",
    original_title: "Three Billboards Outside Ebbing, Missouri",
    genre_ids: [80, 18],
    backdrop_path: "/bJLJAtGjBj836UjJZNOwgrfe5Ps.jpg",
    adult: false,
    overview:
      "After seven months have passed without a culprit in her daughter's murder case, Mildred Hayes makes a bold move, painting three signs leading into her town with a controversial message directed at Bill Willoughby, the town's revered chief of police. When his second-in-command Officer Jason Dixon, an immature mother's boy with a penchant for violence, gets involved, the battle between Mildred and Ebbing's law enforcement is only exacerbated.",
    release_date: "2017-11-10"
  },
  {
    vote_count: 584,
    id: 439015,
    video: false,
    vote_average: 4,
    title: "Slender Man",
    popularity: 22.484,
    poster_path: "/huSncs4RyvQDBmHjBBYHSBYJbSJ.jpg",
    original_language: "en",
    original_title: "Slender Man",
    genre_ids: [9648, 53, 27],
    backdrop_path: "/5K0fgMaJSdEvqSsS8e3Ez4TpvXR.jpg",
    adult: false,
    overview:
      "In a small town in Massachusetts, four high school girls perform a ritual in an attempt to debunk the lore of Slender Man. When one of the girls goes mysteriously missing, they begin to suspect that she is, in fact, his latest victim.",
    release_date: "2018-08-10"
  },
  {
    vote_count: 6745,
    id: 353486,
    video: false,
    vote_average: 6.7,
    title: "Jumanji: Welcome to the Jungle",
    popularity: 22.467,
    poster_path: "/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg",
    original_language: "en",
    original_title: "Jumanji: Welcome to the Jungle",
    genre_ids: [28, 12, 35, 14],
    backdrop_path: "/rz3TAyd5kmiJmozp3GUbYeB5Kep.jpg",
    adult: false,
    overview:
      "The tables are turned as four teenagers are sucked into Jumanji's world - pitted against rhinos, black mambas and an endless variety of jungle traps and puzzles. To survive, they'll play as characters from the game.",
    release_date: "2017-12-09"
  },
  {
    vote_count: 1544,
    id: 569547,
    video: false,
    vote_average: 7.1,
    title: "Black Mirror: Bandersnatch",
    popularity: 22.364,
    poster_path: "/fR0VZ0VE598zl1lrYf7IfBqEwQ2.jpg",
    original_language: "en",
    original_title: "Black Mirror: Bandersnatch",
    genre_ids: [878, 9648, 18, 53, 10770],
    backdrop_path: "/tmsddF6G7vIbJ2Lg6DZDVbnhBxs.jpg",
    adult: false,
    overview:
      "In 1984, a young programmer begins to question reality as he adapts a dark fantasy novel into a video game. A mind-bending tale with multiple endings.",
    release_date: "2018-12-28"
  },
  {
    vote_count: 63,
    id: 505262,
    video: false,
    vote_average: 8.7,
    title: "My Hero Academia the Movie: The Two Heroes",
    popularity: 22.269,
    poster_path: "/783vbPefbFReMBRwbwD3HQkxGEr.jpg",
    original_language: "ja",
    original_title: "僕のヒーローアカデミア THE MOVIE ～2人の英雄",
    genre_ids: [16, 28, 35, 14],
    backdrop_path: "/9DzVZK1tZmTFphef5hDU3oJyA4o.jpg",
    adult: false,
    overview:
      "All Might and Deku accept an invitation to go abroad to a floating and mobile manmade city, called 'I Island', where they research quirks as well as hero supplemental items at the special 'I Expo' convention that is currently being held on the island. During that time, suddenly, despite an iron wall of security surrounding the island, the system is breached by a villain, and the only ones able to stop him are the students of Class 1-A.",
    release_date: "2018-08-03"
  },
  {
    vote_count: 5916,
    id: 18,
    video: false,
    vote_average: 7.4,
    title: "The Fifth Element",
    popularity: 22.187,
    poster_path: "/zaFa1NRZEnFgRTv5OVXkNIZO78O.jpg",
    original_language: "en",
    original_title: "The Fifth Element",
    genre_ids: [12, 14, 28, 53, 878],
    backdrop_path: "/qlGoGQSVMzIjGbpvXzZUOH1FjNu.jpg",
    adult: false,
    overview:
      "In 2257, a taxi driver is unintentionally given the task of saving a young girl who is part of the key that will ensure the survival of humanity.",
    release_date: "1997-05-07"
  },
  {
    vote_count: 167,
    id: 438808,
    video: false,
    vote_average: 6.1,
    title: "White Boy Rick",
    popularity: 22.139,
    poster_path: "/l15r2aLqdifXM9GFsJLkOq5Y8SI.jpg",
    original_language: "en",
    original_title: "White Boy Rick",
    genre_ids: [18, 80],
    backdrop_path: "/4Y0eLVkUwThX9pt1uqVoWoCtvcl.jpg",
    adult: false,
    overview:
      "The story of teenager, Richard Wershe Jr., who became an undercover informant for the police during the 1980s and was ultimately arrested for drug-trafficking and sentenced to life in prison.",
    release_date: "2018-09-14"
  },
  {
    vote_count: 433,
    id: 440471,
    video: false,
    vote_average: 4.6,
    title: "Escape Plan 2: Hades",
    popularity: 22.039,
    poster_path: "/Aqhl55vpzxNFqVfc2DpedUsR39L.jpg",
    original_language: "en",
    original_title: "Escape Plan 2: Hades",
    genre_ids: [80, 28, 53],
    backdrop_path: "/xIAaN3AQqaJiN5RJ0WsmBady8Hq.jpg",
    adult: false,
    overview:
      "Ray Breslin manages an elite team of security specialists trained in the art of breaking people out of the world's most impenetrable prisons. When his most trusted operative, Shu Ren, is kidnapped and disappears inside the most elaborate prison ever built, Ray must track him down with the help of some of his former friends.",
    release_date: "2018-06-05"
  },
  {
    vote_count: 2789,
    id: 440021,
    video: false,
    vote_average: 6.6,
    title: "Happy Death Day",
    popularity: 21.902,
    poster_path: "/cTaEIUYTt52ooq9quVbAQ7NpGwo.jpg",
    original_language: "en",
    original_title: "Happy Death Day",
    genre_ids: [27, 9648, 53],
    backdrop_path: "/eGx5OfOdvM0gkHdmkLe3hcJuEIT.jpg",
    adult: false,
    overview:
      "A college student relives the day of her murder over and over again as she tries to discover her killer's identity.",
    release_date: "2017-10-12"
  },
  {
    vote_count: 178,
    id: 429476,
    video: false,
    vote_average: 5.4,
    title: "Hell Fest",
    popularity: 21.753,
    poster_path: "/qgLlnlrUtTKXkdrgMBwUfkyAkya.jpg",
    original_language: "en",
    original_title: "Hell Fest",
    genre_ids: [27],
    backdrop_path: "/vIsKcpscdELfbBHHsfLvfTTMIc3.jpg",
    adult: false,
    overview:
      "On Halloween night at a horror theme park, a costumed killer begins slaying innocent patrons who believe that it's all part of the festivities.",
    release_date: "2018-09-27"
  },
  {
    vote_count: 3526,
    id: 391713,
    video: false,
    vote_average: 7.3,
    title: "Lady Bird",
    popularity: 21.683,
    poster_path: "/iySFtKLrWvVzXzlFj7x1zalxi5G.jpg",
    original_language: "en",
    original_title: "Lady Bird",
    genre_ids: [35, 18],
    backdrop_path: "/2ByWxoMbfE3pxztCJn5qTJ5Ui2Y.jpg",
    adult: false,
    overview:
      "A California high school student plans to escape from her family and small town by going to college in New York, much to the disapproval of wildly loving, deeply opinionated and strong-willed mother.",
    release_date: "2017-09-08"
  },
  {
    vote_count: 7104,
    id: 78,
    video: false,
    vote_average: 7.9,
    title: "Blade Runner",
    popularity: 21.663,
    poster_path: "/p64TtbZGCElxQHpAMWmDHkWJlH2.jpg",
    original_language: "en",
    original_title: "Blade Runner",
    genre_ids: [878, 18, 53],
    backdrop_path: "/5hJ0XDCxE3qGfp1H3h7HQP9rLfU.jpg",
    adult: false,
    overview:
      "In the smog-choked dystopian Los Angeles of 2019, blade runner Rick Deckard is called out of retirement to terminate a quartet of replicants who have escaped to Earth seeking their creator for a way to extend their short life spans.",
    release_date: "1982-06-25"
  },
  {
    vote_count: 333,
    id: 451915,
    video: false,
    vote_average: 7.5,
    title: "Beautiful Boy",
    popularity: 21.654,
    poster_path: "/xxWVLnkx9lPMqer70AZRR4OC3KS.jpg",
    original_language: "en",
    original_title: "Beautiful Boy",
    genre_ids: [18],
    backdrop_path: "/sOhtC4cmaYPOlcjXCWxxrx2NKKn.jpg",
    adult: false,
    overview:
      "After he and his first wife separate, journalist David Sheff struggles to help their teenage son, who goes from experimenting with drugs to becoming devastatingly addicted to methamphetamine.",
    release_date: "2018-10-12"
  },
  {
    vote_count: 484,
    id: 460885,
    video: false,
    vote_average: 6.3,
    title: "Mandy",
    popularity: 21.59,
    poster_path: "/m0yf7J7HsKeK6E81SMRcX8vx6mH.jpg",
    original_language: "en",
    original_title: "Mandy",
    genre_ids: [28, 53, 27],
    backdrop_path: "/tNa19CK0CQZl5rxZ35QRdKAT2s0.jpg",
    adult: false,
    overview:
      "The Shadow Mountains, 1983. Red and Mandy lead a loving and peaceful existence; but when their pine-scented haven is savagely destroyed, Red is catapulted into a phantasmagoric journey filled with bloody vengeance and laced with fire.",
    release_date: "2018-09-13"
  },
  {
    vote_count: 1901,
    id: 462919,
    video: false,
    vote_average: 6.6,
    title: "Sierra Burgess Is a Loser",
    popularity: 21.441,
    poster_path: "/vjnHRySiVM4YcBYzjCxw344y9g.jpg",
    original_language: "en",
    original_title: "Sierra Burgess Is a Loser",
    genre_ids: [35, 18, 10749],
    backdrop_path: "/fdFIVBpq57ZbHok07SI3gNLWUbO.jpg",
    adult: false,
    overview:
      "A case of mistaken identity results in unexpected romance when the most popular girl in high school and the biggest loser must come together to win over their crushes.",
    release_date: "2018-09-07"
  },
  {
    vote_count: 345,
    id: 419743,
    video: false,
    vote_average: 6.8,
    title: "Disobedience",
    popularity: 21.232,
    poster_path: "/IwFugPaYFhJOAkPVFG3I3xR6wA.jpg",
    original_language: "en",
    original_title: "Disobedience",
    genre_ids: [18, 10749],
    backdrop_path: "/fnF8567jwMzZOlPgJRSOn2E71Pg.jpg",
    adult: false,
    overview:
      "A woman learns about the death of her Orthodox Jewish father, a rabbi. She returns home and has romantic feelings rekindled for her best childhood friend, who is now married to her cousin.",
    release_date: "2018-04-24"
  },
  {
    vote_count: 34,
    id: 460071,
    video: false,
    vote_average: 5.4,
    title: "Lizzie",
    popularity: 21.082,
    poster_path: "/z2iuBcwznen3kC9z4LeOzBSz1BB.jpg",
    original_language: "en",
    original_title: "Lizzie",
    genre_ids: [80, 18, 53],
    backdrop_path: "/uq2ELjEQM02GhWJY75MQHgaiCJB.jpg",
    adult: false,
    overview:
      "Massachusetts, 1892. An unmarried woman of 32 and a social outcast, Lizzie lives a claustrophobic life under her father's cold and domineering control. When Bridget Sullivan, a young maid, comes to work for the family, Lizzie finds a sympathetic, kindred spirit, and a secret intimacy soon blossoms into a wicked plan.",
    release_date: "2018-09-14"
  },
  {
    vote_count: 37,
    id: 440626,
    video: false,
    vote_average: 5.3,
    title: "Sobibor",
    popularity: 21.082,
    poster_path: "/8usXTa50LvfgDY2Q3zKAc3phfPn.jpg",
    original_language: "ru",
    original_title: "Собибор",
    genre_ids: [18, 10752, 36],
    backdrop_path: "/fx70AwHSIDkX6U8WNfUQW53SoU3.jpg",
    adult: false,
    overview:
      "The film is based on a real story that happened in 1943 in the Sobibor concentration camp in German-occupied Poland. The main character of the movie is the Soviet-Jewish soldier Alexander Pechersky, who at that time was serving in the Red Army as a lieutenant. In October 1943, he was captured by the Nazis and deported to the Sobibor concentration camp, where Jews were being exterminated in gas chambers. But, in just 3 weeks, Alexander was able to plan an international uprising of prisoners from Poland and Western Europe. This uprising resulted in being the only successful one throughout the war, which led to the largest escape of prisoners from a Nazi concentration camp.",
    release_date: "2018-05-03"
  },
  {
    vote_count: 2774,
    id: 449176,
    video: false,
    vote_average: 8.2,
    title: "Love, Simon",
    popularity: 21.081,
    poster_path: "/5YUYg5q7QfC4IoNwNUtiwdiYKPr.jpg",
    original_language: "en",
    original_title: "Love, Simon",
    genre_ids: [35, 18, 10749],
    backdrop_path: "/rqMEeajyzSF4PpJtdCB816Iz8Vr.jpg",
    adult: false,
    overview:
      "Everyone deserves a great love story. But for seventeen-year old Simon Spier it's a little more complicated: he's yet to tell his family or friends he's gay and he doesn't know the identity of the anonymous classmate he's fallen for online.",
    release_date: "2018-02-16"
  },
  {
    vote_count: 86,
    id: 414191,
    video: false,
    vote_average: 5.1,
    title: "Our House",
    popularity: 20.968,
    poster_path: "/u1Qt0HtO4ZYY2qcgM42XUd8xgtA.jpg",
    original_language: "en",
    original_title: "Our House",
    genre_ids: [18, 53, 27],
    backdrop_path: "/67Dy4wX3GjHK1YMvMDa6EjRRDBp.jpg",
    adult: false,
    overview:
      "Ethan is suffering enormous guilt after his parents are killed in a car accident. He quits a promising future at MIT and work on a revolutionary experiment in order to care for his younger siblings.",
    release_date: "2018-07-27"
  },
  {
    vote_count: 1714,
    id: 460019,
    video: false,
    vote_average: 6,
    title: "Truth or Dare",
    popularity: 20.943,
    poster_path: "/kdkNaQYZ7dhM80LsnAGKpH8ca2g.jpg",
    original_language: "en",
    original_title: "Truth or Dare",
    genre_ids: [53, 27],
    backdrop_path: "/jrZTNZmcjUVh7DPy6txp93Aczpa.jpg",
    adult: false,
    overview:
      'A harmless game of "Truth or Dare" among friends turns deadly when someone—or something—begins to punish those who tell a lie—or refuse the dare.',
    release_date: "2018-04-12"
  },
  {
    vote_count: 62,
    id: 522417,
    video: false,
    vote_average: 5,
    title: "The Scorpion King: Book of Souls",
    popularity: 20.907,
    poster_path: "/mSviUMejPmerwoQxdj7wR4Ky1Fd.jpg",
    original_language: "en",
    original_title: "The Scorpion King: Book of Souls",
    genre_ids: [12, 28, 14],
    backdrop_path: "/tw4iYlxu0FIX4kmlFlprScdSfeA.jpg",
    adult: false,
    overview:
      "The Scorpion King teams up with a female warrior named Tala, who is the sister of The Nubian King. Together they search for a legendary relic known as The Book of Souls, which will allow them to put an end to an evil warlord.",
    release_date: "2018-10-23"
  },
  {
    vote_count: 1054,
    id: 429300,
    video: false,
    vote_average: 6.7,
    title: "Adrift",
    popularity: 20.853,
    poster_path: "/5gLDeADaETvwQlQow5szlyuhLbj.jpg",
    original_language: "en",
    original_title: "Adrift",
    genre_ids: [53, 10749, 12],
    backdrop_path: "/64jAqTJvrzEwncD3ARZdqYLcqbc.jpg",
    adult: false,
    overview:
      "A true story of survival, as a young couple's chance encounter leads them first to love, and then on the adventure of a lifetime as they face one of the most catastrophic hurricanes in recorded history.",
    release_date: "2018-05-31"
  },
  {
    vote_count: 442,
    id: 454619,
    video: false,
    vote_average: 6.2,
    title: "Overboard",
    popularity: 20.758,
    poster_path: "/qauHzSQJdo9VYX4NKn9PdWnvXOV.jpg",
    original_language: "en",
    original_title: "Overboard",
    genre_ids: [10749, 35],
    backdrop_path: "/9UoPUIWCoCFzjNtm2zokSHJXmHB.jpg",
    adult: false,
    overview:
      "A spoiled, wealthy yacht owner is thrown overboard and becomes the target of revenge from his mistreated employee. A remake of the 1987 comedy.",
    release_date: "2018-05-03"
  },
  {
    vote_count: 2816,
    id: 390043,
    video: false,
    vote_average: 6.7,
    title: "The Hitman's Bodyguard",
    popularity: 20.75,
    poster_path: "/5CGjlz2vyBhW5xHW4eNOZIdgzYq.jpg",
    original_language: "en",
    original_title: "The Hitman's Bodyguard",
    genre_ids: [28, 35],
    backdrop_path: "/7KsqfXDECZMryX1Rv4RKsT7SIjQ.jpg",
    adult: false,
    overview:
      "The world's top bodyguard gets a new client, a hit man who must testify at the International Court of Justice. They must put their differences aside and work together to make it to the trial on time.",
    release_date: "2017-08-16"
  },
  {
    vote_count: 921,
    id: 556803,
    video: false,
    vote_average: 7.2,
    title: "The Princess Switch",
    popularity: 20.706,
    poster_path: "/biRUM4CBgfJtEQDCttf3zca4epp.jpg",
    original_language: "en",
    original_title: "The Princess Switch",
    genre_ids: [10749],
    backdrop_path: "/eZeKHAqNsDAG6r8hi4sMzwqHn5n.jpg",
    adult: false,
    overview:
      "When a down-to-earth Chicago baker and a soon-to-be princess discover they look like twins, they hatch a Christmastime plan to trade places.",
    release_date: "2018-11-16"
  },
  {
    vote_count: 61,
    id: 449459,
    video: false,
    vote_average: 5.6,
    title: "The Vanishing",
    popularity: 20.688,
    poster_path: "/5HKn2CecRi2OlyC3T6FZz4QqkW5.jpg",
    original_language: "en",
    original_title: "The Vanishing",
    genre_ids: [53, 18, 9648],
    backdrop_path: "/83LbQ6xMURQYO03Ilqdr3kwLBxD.jpg",
    adult: false,
    overview:
      "Three lighthouse keepers on an uninhabited island off the coast of Scotland discover something that isn't theirs to keep.",
    release_date: "2019-01-04"
  },
  {
    vote_count: 3613,
    id: 406997,
    video: false,
    vote_average: 8.2,
    title: "Wonder",
    popularity: 20.678,
    poster_path: "/ouYgAatYH4JzIThj6FI3UYf31RI.jpg",
    original_language: "en",
    original_title: "Wonder",
    genre_ids: [18, 10751],
    backdrop_path: "/4rsrxYDfIzvtAsIE9wevxPRXAk4.jpg",
    adult: false,
    overview:
      "The story of August Pullman – a boy with facial differences – who enters fifth grade, attending a mainstream elementary school for the first time.",
    release_date: "2017-11-13"
  },
  {
    vote_count: 11789,
    id: 11324,
    video: false,
    vote_average: 8.1,
    title: "Shutter Island",
    popularity: 20.669,
    poster_path: "/aZqKsvpJDFy2UzUMsdskNFbfkOd.jpg",
    original_language: "en",
    original_title: "Shutter Island",
    genre_ids: [18, 53, 9648],
    backdrop_path: "/bcb3FYtLbuPgNYO4M1IY7rfeMal.jpg",
    adult: false,
    overview:
      "World War II soldier-turned-U.S. Marshal Teddy Daniels investigates the disappearance of a patient from a hospital for the criminally insane, but his efforts are compromised by his troubling visions and also by a mysterious doctor.",
    release_date: "2010-02-14"
  },
  {
    vote_count: 287,
    id: 486947,
    video: false,
    vote_average: 7.5,
    title: "The Guilty",
    popularity: 20.628,
    poster_path: "/42QPG6p7oLcLd4LQOPeSTLhqfMx.jpg",
    original_language: "da",
    original_title: "Den skyldige",
    genre_ids: [18, 80, 53],
    backdrop_path: "/pLHhgzM2B1b9FEkYQsNCAqVvOzh.jpg",
    adult: false,
    overview:
      "Police officer Asger Holm, demoted to desk work as an alarm dispatcher, answers a call from a panicked woman who claims to have been kidnapped. Confined to the police station and with the phone as his only tool, Asger races against time to get help and find her.",
    release_date: "2018-06-14"
  },
  {
    vote_count: 52,
    id: 414919,
    video: false,
    vote_average: 6.9,
    title: "Hart Beat",
    popularity: 20.539,
    poster_path: "/h1PBdhD1c6xnTV6c7B4d58OESYB.jpg",
    original_language: "nl",
    original_title: "Hart Beat",
    genre_ids: [10751, 35, 18],
    backdrop_path: "/pJG7QnbqUeFNKre3BTVvrv96ZUX.jpg",
    adult: false,
    overview:
      "Making music means everything for the shy Zoë. But since her father left, she never played guitar again. When she is hit by the bus from Mik, superstar Bieber size, sparks fly allthough she is not a fan at first. Off course, people around the two love birds dont exactly cooperate to make things work...",
    release_date: "2016-10-12"
  },
  {
    vote_count: 353,
    id: 458737,
    video: false,
    vote_average: 6.8,
    title: "First Reformed",
    popularity: 20.262,
    poster_path: "/8HKA3Hwf8jQWy8TCYWr7C8Wft23.jpg",
    original_language: "en",
    original_title: "First Reformed",
    genre_ids: [18],
    backdrop_path: "/oXNtdwoRsG9MIpOjJHeT4xGjwbV.jpg",
    adult: false,
    overview:
      "A pastor of a small church in upstate New York starts to spiral out of control after a soul-shaking encounter with an unstable environmental activist and his pregnant wife.",
    release_date: "2018-05-18"
  },
  {
    vote_count: 365,
    id: 440161,
    video: false,
    vote_average: 7.1,
    title: "The Sisters Brothers",
    popularity: 20.093,
    poster_path: "/hbUGrEaJgFz9NWh34HHUb4vLjkG.jpg",
    original_language: "en",
    original_title: "The Sisters Brothers",
    genre_ids: [35, 18, 37],
    backdrop_path: "/2cI0rmMgoZOqP78iQDZwQASkKT3.jpg",
    adult: false,
    overview:
      "Oregon, 1851. Hermann Kermit Warm, a chemist and aspiring gold prospector, keeps a profitable secret that the Commodore wants to know, so he sends the Sisters brothers, two notorious assassins, to capture him on his way to California.",
    release_date: "2018-09-19"
  },
  {
    vote_count: 637,
    id: 483184,
    video: false,
    vote_average: 7.8,
    title: "Dogman",
    popularity: 19.973,
    poster_path: "/pqaNWWkcEmcdxkMrUnoxI3Viw4h.jpg",
    original_language: "it",
    original_title: "Dogman",
    genre_ids: [80, 18, 53],
    backdrop_path: "/zquMDqlhGYXdXiteRguQSlVGznx.jpg",
    adult: false,
    overview:
      "Marcello, a small and gentle dog groomer, finds himself involved in a dangerous relationship of subjugation with Simone, a former violent boxer who terrorizes the entire neighborhood. In an effort to reaffirm his dignity, Marcello will submit to an unexpected act of vengeance.",
    release_date: "2018-05-17"
  },
  {
    vote_count: 2188,
    id: 399035,
    video: false,
    vote_average: 6.2,
    title: "The Commuter",
    popularity: 19.915,
    poster_path: "/rDeGK6FIUfVcXmuBdEORPAGPMNg.jpg",
    original_language: "en",
    original_title: "The Commuter",
    genre_ids: [28, 53],
    backdrop_path: "/clmYuR1t4TtKcakIOvYIPrjyxDc.jpg",
    adult: false,
    overview:
      "A businessman, on his daily commute home, gets unwittingly caught up in a criminal conspiracy that threatens not only his life but the lives of those around him.",
    release_date: "2018-01-11"
  },
  {
    vote_count: 893,
    id: 465136,
    video: false,
    vote_average: 7,
    title: "Every Day",
    popularity: 19.881,
    poster_path: "/4UnME3icxSspwL0UoGZNSyyp7Xs.jpg",
    original_language: "en",
    original_title: "Every Day",
    genre_ids: [18, 14, 10749, 878],
    backdrop_path: "/hcoeD3oLP7t2dwMK7mnRAUkUxWS.jpg",
    adult: false,
    overview:
      "16-year old Rhiannon falls in love with a mysterious spirit named “A” that inhabits a different body every day. Feeling an unmatched connection, Rhiannon and “A” work each day to find each other, not knowing what the next day will bring.",
    release_date: "2018-02-22"
  },
  {
    vote_count: 1597,
    id: 384521,
    video: false,
    vote_average: 5.6,
    title: "The Cloverfield Paradox",
    popularity: 19.794,
    poster_path: "/dJe4s2h9hac0Fu3pQVV4OuWe8kU.jpg",
    original_language: "en",
    original_title: "The Cloverfield Paradox",
    genre_ids: [9648, 53, 27, 878],
    backdrop_path: "/lX4jScWnurasu6Kxuqo9819mjM2.jpg",
    adult: false,
    overview:
      "Orbiting above a planet on the brink of war, scientists test a device to solve an energy crisis and end up face-to-face with a dark alternate reality.",
    release_date: "2018-02-04"
  },
  {
    vote_count: 0,
    id: 536413,
    video: false,
    vote_average: 0,
    title: "Junpei, Think Again",
    popularity: 19.739,
    poster_path: "/bFBHjcUrWoAdEBImKpSSmgZG7kG.jpg",
    original_language: "ja",
    original_title: "純平、考え直せ",
    genre_ids: [18, 80],
    backdrop_path: "/jJFRBpnsXTd5N2rxFKaCO12lNr6.jpg",
    adult: false,
    overview:
      "21-year-old Junpei is a low ranking gangster. He is busy taking care of miscellaneous works. One day, his boss gives him a mission to kill a high ranking gangster from a rival group. Junpei wanting recognition from his group, accepts the assignment. Junpei meets Kana and they spend the night together. He tells her about his assignment. She thinks his enthusiasm for the job his assignment, but she also feels some excitement. She stays with him for 3 days until he carries out his mission.",
    release_date: "2018-09-22"
  },
  {
    vote_count: 5,
    id: 461693,
    video: false,
    vote_average: 3.6,
    title: "Silukkuvarupatti Singam",
    popularity: 19.571,
    poster_path: "/iIPbuINYWjvRZhXVrA5TDcKDuCy.jpg",
    original_language: "ta",
    original_title: "சிலுக்குவார்பட்டி சிங்கம்",
    genre_ids: [28, 35],
    backdrop_path: "/9c8LgVXzPkXh7VIEoRoUy7FOZv1.jpg",
    adult: false,
    overview:
      "A constable who prefers to mind his own business gets into a situation where he has to hide from a most-wanted gangster.",
    release_date: "2018-12-21"
  },
  {
    vote_count: 161,
    id: 505177,
    video: false,
    vote_average: 5.1,
    title: "10x10",
    popularity: 19.487,
    poster_path: "/egMETBYual2JtfFGigXTA0tGkME.jpg",
    original_language: "en",
    original_title: "10x10",
    genre_ids: [53],
    backdrop_path: "/t2yc8q0hYCHa74ZCH6aIvwNdFVv.jpg",
    adult: false,
    overview:
      "Lewis is an outwardly ordinary guy, but in reality he is hiding an obsession – revenge – against Cathy. Lewis kidnaps Cathy in broad daylight and takes her to his home, where he locks her in a soundproof cell and attempts to extract a dark secret from her past.",
    release_date: "2018-04-13"
  },
  {
    vote_count: 3788,
    id: 429,
    video: false,
    vote_average: 8.4,
    title: "The Good, the Bad and the Ugly",
    popularity: 19.426,
    poster_path: "/wfPHdfofBD5PN96dV96a51B3Ja2.jpg",
    original_language: "it",
    original_title: "Il buono, il brutto, il cattivo",
    genre_ids: [37],
    backdrop_path: "/xGC2fY5KFmtuXnsuQwYQKFOLZFy.jpg",
    adult: false,
    overview:
      "While the Civil War rages between the Union and the Confederacy, three men – a quiet loner, a ruthless hit man and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
    release_date: "1966-12-23"
  },
  {
    vote_count: 1733,
    id: 298250,
    video: false,
    vote_average: 6.1,
    title: "Jigsaw",
    popularity: 19.265,
    poster_path: "/gvBVIlcMaeWKhGjgGjlShiL4w4r.jpg",
    original_language: "en",
    original_title: "Jigsaw",
    genre_ids: [80, 27, 9648, 53],
    backdrop_path: "/e3ofKYdZ3jgNYuCriE5AAsHp4L6.jpg",
    adult: false,
    overview:
      "Dead bodies begin to turn up all over the city, each meeting their demise in a variety of grisly ways. All investigations begin to point the finger at deceased killer John Kramer.",
    release_date: "2017-10-26"
  },
  {
    vote_count: 3231,
    id: 381283,
    video: false,
    vote_average: 7,
    title: "mother!",
    popularity: 19.233,
    poster_path: "/qmi2dsuoyzZdJ0WFZYQazbX8ILj.jpg",
    original_language: "en",
    original_title: "mother!",
    genre_ids: [18, 27, 9648],
    backdrop_path: "/uuQpQ8VDOtVL2IO4y2pR58odkS5.jpg",
    adult: false,
    overview:
      "A couple's relationship is tested when uninvited guests arrive at their home, disrupting their tranquil existence.",
    release_date: "2017-09-13"
  }
];
