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
enum CoffeeSize {
  // SHORT = 'SHORT',
  // TALL = 'TALL',
  // GRANDE = 'GRANDE',
  // VENDI = 'VENDI',
  /* 文字列指定しなければ配列数値になる */
  SHORT, // 0
  TALL, // 1
  GRANDE, // 2
  VENDI, // 3
}

const coffee = {
  hot: true,
  size: CoffeeSize.VENDI,
}

console.log(coffee)
