/* Bool */
let frag: boolean = false
frag

/* number */
let decimil: number = 256
let hex: number = 0xfff
// リテラル構文では、数値リテラルは10進数、16進数、8進数、2進数のいずれかである必要があります。
let binary: number = 0b0000
let octal: number = 0o123

/* string */
let color: string = 'Mr.Green'
color = 'Dark'

/* 以下constであれば定数なので再代入不可 */
let カレー: string = '辛口'
// const カレー: string = '辛口'
カレー = '激辛'
カレー

let myColor: string = `my color num is ${hex}`

/* Array */
let list: number[] = [1, 2, 3]
let list2: Array<number> = [10, 20, 30]

/* tuple */
let tuple: [string, number]
tuple = ['Hello', 1000]

// tuple推論
tuple[0].substr(1)
// tuple[1].substr(1) Error not string
// tuple[2] = 'World'
tuple

/* unknown */
// const probablyNum: number[] = ['0']
// const probablyNum: any[] = [12.8878, 1, 2]
const probablyNum: unknown[] = [12.8878, 1, 2]

// anyは許容 unknownは値の利用を厳格にする
// probablyNum[0].toFixed(2) // error

/* void */
function logger(msg: string): void {
  // return console.log(msg)
  console.log(msg) // undefined
}
logger('xxx') // undefined
//  void = nullかundefinedしか代入しない
let unusable: void = undefined
unusable

/* null/undefined */
let u: undefined = undefined
let n: null = null

/* never */
// 発生しえない値の型

function hasError(msg: string): never {
  throw new Error(msg)
}

function infinitLoop(): never {
  while (true) {}
}

/* object */
let objBrsce: {}
let objType: object

objBrsce = true
// objType = 1
objType = { key: 'value' }
