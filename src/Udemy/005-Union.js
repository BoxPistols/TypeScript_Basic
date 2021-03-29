"use strict";
var unionType;
// unionType.toUpperCase() <- 先に値が無いものを書くとエラー
unionType = 'AbCd';
unionType.toUpperCase(); // 値が入った後だとエラー無し
// 配列のUnion
var unionTypes;
unionTypes = [0, 2, 'set', 'value', 5];
