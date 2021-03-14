"use strict";
/*
const CoffeeSize = {
  SHORT: "SHORT",
  TALL: "TALL",
  GRANDE: "GRANDE",
  VENDI: "VENDI",
};

// Bad Case...　代入出来てしまう
coffee.size = "Hello";
*/
// ↓ 列挙型に変換　↑ 上の課題解決 厳密な選択肢を作成 Slect Form仕様
var CoffeeSize;
(function (CoffeeSize) {
    // SHORT = 'SHORT',
    // TALL = 'TALL',
    // GRANDE = 'GRANDE',
    // VENDI = 'VENDI',
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENDI"] = 3] = "VENDI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
console.log(coffee);
