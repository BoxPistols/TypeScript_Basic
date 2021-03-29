let unionType: number | string
// unionType.toUpperCase() <- 先に値が無いものを書くとエラー
unionType = 'AbCd'
unionType.toUpperCase() // 値が入った後だとエラー無し

// 配列のUnion
let unionTypes: (number | string)[]
unionTypes = [0, 2, 'set', 'value', 5]
