var kittens = ['Milo','Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
  return kittens;
}
function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
  return kittens;
}
function distructivelyRemoveLastKitten(kittens, name) {
  kittens.pop(name)
  return kittens;
}

