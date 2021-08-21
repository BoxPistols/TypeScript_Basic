function exp2(amount: number) {
  return amount * 2
}

const val = exp2(1000)

const tac = val * 1.1

const tx = (_x: number) => {
  return _x * 1.1
}

const fee = () => {
  return tx(500) + 1500
}
// Quokka
tx(500)
fee()
