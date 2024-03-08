/**
 * 問題１：
 * 以下のコードではエラーが発生します。
 * コンソールで"fn called"と表示されるように
 * fn内のコードを変更してください。
 *
 * ※if文は削除してはいけません。
 */
// let b = 1;
// function fn() {
//   if (true) {
//     let a = "fn called";
//     return a;
//   }
//   // ReferenceError: a is not defined
// }

// const result = fn();
// console.log(result);

// 解き方
//　子スコープから親スコープの変数は参照できるが、親スコープから子スコープの変数は参照できないから、同スコープに配置した

/**
 * 問題２：
 * fn2内の記述を変更して、各コンソールで
 * 期待値を出力するように修正してください。
 */
// let val = "val1";
// function fn2() {
//   console.log(val); // 期待値->'val1'

//   if (true) {
//     let val = "val2";
//     console.log(val); // 期待値->'val2'
//   }

//   console.log(val); // 期待値->'val1'
// }
// fn2();

//　解き方：letにしたらいけた　varはよくわからん

/**
 * 問題３：
 * 「クロージャー（プライベート変数）」のレクチャーで作成
 * したincrementと同じ機能を持つincrement関数をブロック
 * スコープとクロージャーを利用して作成してみてください。
 *
 * increment(); // 期待値->1
 * increment(); // 期待値->2
 * increment(); // 期待値->3
 * increment(); // 期待値->4
 */

{
  let a = 0;
  function increment() {
    a = a + 1;
    console.log(a);
  }
}

increment();
increment();
increment();

// 解き方：これじゃ外部から参照できない代わりに、内部からしか関数呼び出せないけど大丈夫か
// これ関数がブロックを突き破るから使えるんか
