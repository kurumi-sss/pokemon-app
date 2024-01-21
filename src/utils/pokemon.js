export const getAllPokemon = (url) => {
  return new Promise((resolve, reject) => {
    // promise=約束　fetch.then.thenのチェーンが全て成功するまで待っててね=>App.jsの”await”
    fetch(url)
      // fetchでデータを取得
      .then((res) => res.json())
      //   データをjson形式で返す
      .then((data) => resolve(data));
    //   thenのpromisチェーンでデータとして受け取る、resolve関数に引数にdataを与えることによって
    //   returnで返すものは最終的にjson形式のもの
    //   =>App.jsの”res”
  });
};

// ↑20種類のポケモン　↓個別のポケモン

export const getPokemon = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        resolve(data);
      });
  });
};
