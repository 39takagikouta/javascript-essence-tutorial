/**
 * 問題：
 * コールバックとクロージャーの仕組みを使って、
 * setTimeoutで1秒後に"hello Tom"と表示されるような
 * hello関数を作成してみましょう。
 *
 * 条件としてはhello関数の引数には必ず
 * nameの引数を取るものとします。
 *
 */
function hello(name) {
  let _name = name;
  console.log(`hello ${_name}`);
}

/**
 * 実行文は以下の通りです。
 */
setTimeout(hello("Tom"), 1000);

//let a = helloだと関数を渡していることになる
//let a = hello()だと関数を実行し、結果を渡していることになる
// //bindやアロー関数、クロージャーなどを使用することで、thisを固定することができる
// 詳細
// JavaScriptでのthisは、関数が呼び出されるコンテキストに基づいて異なる値を持ちます。これは、特にコールバック関数やイベントハンドラー内でthisを使いたい時に混乱を招くことがあります。以下、bindやアロー関数、クロージャーを使ってthisの内容を固定する方法を具体的に説明します。

// 1. bindを使う方法
// javascript
// Copy code
// function greeting() {
//   console.log("Hello, " + this.name);
// }

// const person = {
//   name: "Alice",
// };

// const boundGreeting = greeting.bind(person);
// boundGreeting(); // "Hello, Alice"
// bindメソッドを使用すると、指定したオブジェクトを関数のthisに「固定」することができます。上の例では、greeting関数のthisをpersonオブジェクトに固定しています。bindを呼び出すと、thisが指定したオブジェクトに束縛された新しい関数が返されます。

// 2. アロー関数を使う方法
// javascript
// Copy code
// const person = {
//   name: "Alice",
//   greeting: function() {
//     setTimeout(() => {
//       console.log("Hello, " + this.name); // アロー関数内の`this`は外側の`this`を保持
//     }, 1000);
//   }
// };

// person.greeting(); // 1秒後に "Hello, Alice"
// アロー関数は、自身が作られたコンテキストのthisを「キャプチャ」し、その値を保持します。上の例では、setTimeoutのコールバック関数としてアロー関数を使用しているため、そのアロー関数内のthisはperson.greetingメソッド内のthis（つまりpersonオブジェクト）と同じになります。

// 3. クロージャーを使う方法
// javascript
// Copy code
// const person = {
//   name: "Alice",
//   greeting: function() {
//     const self = this; // `this`を変数`self`に保存
//     setTimeout(function() {
//       console.log("Hello, " + self.name); // 変数`self`を使用して外側の`this`にアクセス
//     }, 1000);
//   }
// };

// person.greeting(); // 1秒後に "Hello, Alice"
// クロージャーを利用すると、関数の外側のスコープにある変数（この例ではself）を関数の内側から「閉じ込めて」使うことができます。この例では、selfという変数に外側のthis（personオブジェクト）を保存し、setTimeoutのコールバック関数内で使用しています。

// これらのテクニックを使うことで、予期せぬthisの変化を防ぎ、コードを意図した通りに動作させることができます。

回答;
function hello(name) {
  return function () {
    console.log("hello " + name);
  };
}

/**
 * 実行文は以下の通りです。
 */
setTimeout(hello("Tom"), 1000);
