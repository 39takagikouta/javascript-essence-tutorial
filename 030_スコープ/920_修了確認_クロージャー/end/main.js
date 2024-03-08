/**
 * 問題：
 * 四則演算を行うメソッドを持ったオブジェクトを
 * クロージャーを用いて作成してみてください。
 *
 * 四則演算を行うメソッド（plus, minus, multiply, divide）
 * を実行すると以下のようにコンソールに出力されます。
 *
 * const calc = calcFactory(10); // 初期値を10として設定
 * calc.plus(5);      // 出力結果 "10 + 5 = 15"
 * calc.minus(3);     // 出力結果 "15 - 3 = 12"
 * calc.multiply(3);  // 出力結果 "12 x 3 = 36"
 * calc.divide(2);    // 出力結果 "36 / 2 = 18"
 *
 * ※前に行った計算結果をもとに四則演算を行います。
 * ※四則演算は"+","-","*","/"を数値ではさんで計算を行います。
 */
function calcFactory(val) {
  return {
    plus: function (target) {
      const newVal = val + target;
      console.log(`${val} + ${target} = ${newVal}`);
      val = newVal; //→この場合、valのレキシカルスコープはcalcFactoryが定義されているところやねんな
    },
    minus: function (target) {
      const newVal = val - target;
      console.log(`${val} - ${target} = ${newVal}`);
      val = newVal;
    },
    multiply: function (target) {
      const newVal = val * target;
      console.log(`${val} x ${target} = ${newVal}`);
      val = newVal;
    },
    divide: function (target) {
      const newVal = val / target;
      console.log(`${val} / ${target} = ${newVal}`);
      val = newVal;
    },
  };
}

const calc = calcFactory(10);
calc.plus(5);
calc.minus(3);
calc.multiply(3);
calc.divide(2);

//　感想：返り値をオブジェクトにして、その中に関数を格納すればよかったんか。valの変数を更新したのがそのままになるってことは、rubyはメソッドの中の変数は使い捨てが基本だが、jsの場合は変数の内容が変わったらそのスコープの中に保存されて残り続けるんやな（初期化しない限りは）
// オブジェクトの中身をa.bで取ってこれて、その中に変数を入れられるという考え方ありきの書き方やな。「複数の関数や変数を変えしたいけど、返り値は1つしか設定できない」というときにはオブジェクトか
// 初めての記述でわからんと思っても、スコープやオブジェクト、ブロックのことわかっていたら行けるということが多かった　とにかく基本のルールを知ることが大事やな
// テンプレート構文　バッククウォートでやる シフト+@コマンドで出せる
// てか。即時関数を格納しているやん。即時に実行されなあかんからか
