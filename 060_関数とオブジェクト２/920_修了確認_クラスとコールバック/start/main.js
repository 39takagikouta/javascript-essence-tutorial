/**
 * 問題：
 * Person.helloメソッドをsetTimeoutで１秒後に
 * 実行しようとしましたが、"hello Bob"と表示されませんでした。
 *
 * setTimeoutに渡す方法がおかしそうなのですが、
 * どのようにすればよいでしょうか？
 *
 * ※２通りの方法で実装してみてください。
 */
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log("hello " + this.name);
  }
}

const bob = new Person("Bob", 23);
setTimeout(bob.hello(), 1000);

//2個目がわからん
//結局、回答は下記だった。ともかく、bob.helloはPerson.prototype,helloを渡しているのと同じで、bobインスタンスの内容を経由していないから、thisがwindowオブジェクトになる。
//だから、それを回避する書き方をすればいいとのこと
setTimeout(Person.prototype.hello.bind(bob), 1000);
setTimeout(function () {
  bob.hello();
}, 1000);

//https://www.udemy.com/course/javascript-essence/learn/lecture/19883124#overview
//これを見れば理解できた。ともかく、変数の引数として渡した瞬間、新しい変数（引数）が作られ、そこにコピーされた参照が紐づけられるため、元のオブジェクトを経由しない、オブジェクトのメソッドではなく普通の関数として呼び出されてしまう。
//だから、thisがwindowオブジェクトになる。もしその関数の中で変数を定義していたらそれになるが、基本的にコンストラクタの中で変数名は定義してあるので、それもあまりないはず
