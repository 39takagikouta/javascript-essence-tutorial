/**
 * 問題：
 * 引数で与えた範囲の値をステップ毎に返却する
 * genStepというジェネレーター関数を作成しましょう。
 *
 * - genStepの要件
 * 引数にmin, max, stepを取ります。
 * min：下限値
 * max：上限値
 * step：ステップ
 *
 * 以下のように実行した場合には
 * const it = genStep({min: 4, max: 10, step: 2});
 *
 * for(let value of it) {
 *   console.log(value); -> 4, 6, 8, 10
 * }
 *
 * の値が順番にコンソールに表示されます。
 */

// オブジェクトの分割代入を使用することで、普通はjsではできない引数名を指定して値を代入することが可能になる（二つ目の引数にだけ値を入れるとかもできる）
// Iifinity = 無限
// 分割代入を使っている場合は引数を渡さないとエラーになるので、からのオブジェクトを渡す
