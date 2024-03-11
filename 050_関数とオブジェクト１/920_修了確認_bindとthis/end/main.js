const person = {
  name: "Tom",
  bye() {
    console.log("Bye " + this.name);
  },
  hello: function (greeting) {
    console.log(greeting + " " + this.name);
    return greeting + " " + this.name;
  },
  /**
   * 問題４：
   * 1秒後に"hello Tom"
   * と出力されるような、メソッドを
   * personオブジェクトに追加してみてください。
   *
   * 以下のように使用するものとします。
   * `person.hello1s()`
   * -> 1秒後に"hello Tom"と出力
   *
   * 3通りの方法で実装してみてください。
   * １．bind
   * ２．アロー関数
   * ３．thisを一旦変数に代入
   */
  hello1s() {
    // setTimeout(this.hello.bind(this, 'hello'), 1000);
    //これbindいるんか？　なんかsetTimeoutは引数に関数をとるからbindがいるらしい。これがないと関数が実行されてしまうということなのか？
    //→setTimeoutのコールバック関数内でthisを直接使用しようとすると、期待したオブジェクトではなく、グローバルオブジェクト（ブラウザではwindow、Node.jsではglobal）を指すことになり、this.helloのような呼び出しが期待通りに機能しなくなります。

    // setTimeout(() => {
    //     this.hello('hello');
    // }, 1000);
    //thisはアロー関数では使えないんじゃないの？→アロー関数はthisの値を自身が定義されたコンテキストのものを「固定」して保持します。これは、アロー関数が外側のスコープからthisの値を「キャプチャ」するためです。従って、アロー関数内のthisは、アロー関数を囲むスコープ（この場合はpersonオブジェクトのメソッド）でのthisと同じ値になります。アロー関数を使うことで、bindを使わずにthisを期待したオブジェクトに保つことができます。

    const _this = this;
    setTimeout(function () {
      _this.hello("hello");
    });
  },
  // この方法では、this（personオブジェクトを指す）をローカル変数（ここでは_this）に代入しています。その後、setTimeoutのコールバック関数内で、_thisを通じてhelloメソッドを呼び出します。この方法では、_thisがpersonオブジェクトを指し続けるため、期待通りに動作します。
  //_thisという命名は、単なる慣習です。_thisの代わりに他の任意の変数名を使用することも可能ですが、thisの代替として使用されることが多いため、このような名前が選ばれます。これは、thisを直接使用することの混乱を避けるためのテクニックです。
};
person.hello1s();
/**
 * 問題１：
 * 1秒後に"hello Tom"
 * と出力されるように、以下のコード
 * の記載を変更しましょう。
 */
// setTimeout(person.hello.bind(person, "hello"), 1000);

/**
 * 問題２：
 * alertで"hello Tom"
 * と出力されるように、
 * 以下のコードを変更してください。
 */
// alert(person.hello("hello"));

/**
 * 問題３：
 * person.byeメソッドを１秒後に実行したかったので
 * bindを使って束縛してみましたが、コンソールには
 * "Bye"しか表示されませんでした。
 * "Bye Tom"とするためにはどうすればよいでしょうか？
 */
// setTimeout(person.bye.bind(person), 1000);
