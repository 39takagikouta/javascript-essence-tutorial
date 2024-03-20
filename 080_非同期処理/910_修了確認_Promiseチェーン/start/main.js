/**
 * 問題：
 * myFetch関数を使って以下の「データ取得の流れ」の通り、
 * 順次JSONを取得し、取得したデータを加工して、
 * 以下のメッセージをコンソールに表示してください。
 *
 * --Bob's timeline--
 * Tim says: waiting at station.
 * Sun says: go shopping?
 * John says: how's it going?
 * Sun says: drink?
 *
 ******************************
 * データ取得の流れ
 * １．"user1.json"を取得（Bobのユーザー情報取得）
 *
 * ２．"user1.json"のidの項目を元に
 *     `friendsOf${id}.json`でフレンド一覧を取得
 *
 * ３．取得したフレンドのID（ユーザーID）を元に、
 * 　　`user${id}.json`で各ユーザーの情報を取得
 *
 * ４．各ユーザー情報のlatestMsgIdが最後に投稿した
 * 　　メッセージのIDになりますので、そのidを用いて
 * 　　`message${friend.latestMsgId}.json`
 * 　　を取得。
 *
 * １～４で取得したデータをもとにコンソールログに
 * タイムラインの文字列を作成してください。
 *
 * ※await/asyncで記述してみてください。
 */
async function myFetch(fileName) {
  const response = await fetch(`../json/${fileName}`);
  const json = await response.json();
  return json;
}

(async function () {
  const user = await myFetch("user1.json");
  console.log(`--${user.name}'s timeline--`);
  const friendsId = await myFetch(`friendsOf${user.id}.json`);
  let friendPro = [];
  for (const friendid of friendsId.friendIds) {
    friendPro.push(myFetch(`user${friendid}.json`));
  }
  const friends = await Promise.all(friendPro); //ここがよくわからんねんな　とにかくawait Promise.allを使ったらpromiseにラップされていたやつからjsonの情報だけを取り出せる
  let msgPro = [];
  for (const friend of friends) {
    msgPro.push(myFetch(`message${friend.latestMsgId}.json`));
  }
  const friendMsgs = await Promise.all(msgPro);
  for (const a of friends) {
    for (const b of friendMsgs) {
      if (a.id === b.userId) {
        console.log(`${a.name}:${b.message}`);
      }
    }
  }
})();
