/**
 * 問題：
 * クロージャーの問題で作成した以下のcalcFactoryを即時関数
 * で書き直してみてください。
 */
// function calcFactory(val) {
//   return {
//     plus: function (target) {
//       const newVal = val + target;
//       console.log(`${val} + ${target} = ${newVal}`);
//       val = newVal;
//     },
//     minus: function (target) {
//       const newVal = val - target;
//       console.log(`${val} - ${target} = ${newVal}`);
//       val = newVal;
//     },
//     multiply: function (target) {
//       const newVal = val * target;
//       console.log(`${val} x ${target} = ${newVal}`);
//       val = newVal;
//     },
//     divide: function (target) {
//       const newVal = val / target;
//       console.log(`${val} / ${target} = ${newVal}`);
//       val = newVal;
//     },
//   };
// }
// const calc = calcFactory(10);
// calc.plus(5);
// calc.minus(3);
// calc.multiply(3);
// calc.divide(2);

//自力でできた部分
// const calc = (function () {
//   function plus(target) {
//     const newVal =  + target;
//     console.log(`${val} + ${target} = ${newVal}`);
//     val = newVal;
//   }
//   return {
//     plus,
//   };
// })(10);

// calc.plus(5);

//答えを見た
const calc = (function (val) {
  function plus(target) {
    const newVal = +target;
    console.log(`${val} + ${target} = ${newVal}`);
    val = newVal;
  }
  return {
    plus,
  };
})(10);

calc.plus(5);

//これは練習問題に引数がなかったからわからんでもしゃあないわ
//てかオブジェクトリテラルにしなくても、プロバティーに無名関数直打ちでいけるんやな。美しくないけど
