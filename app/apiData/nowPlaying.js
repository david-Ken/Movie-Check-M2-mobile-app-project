/* async function getNowPlaying(numberOfbPages, year) {
  const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=96e53b76cf1cedd470c0a21126e12d42&language=en-US&page=1`;
  const response = await fetch(nowPlayingUrl);
  try {
    const json = response.json();
    return json;
  } catch (e) {
    console.log(e);
  }
}

let nowPlayingData = null;

for (let i = 1; i <= 20; i++) {
  getNowPlaying(i, 2018).then(data => {
    //console.log(data);
    nowPlayingData.push(data);
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
  getNowPlaying,
  initializeEmptyArray
};
 */
