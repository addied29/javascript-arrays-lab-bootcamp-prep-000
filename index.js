var kittens = ['Milo','Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  name.push('Ralph')
  kittens=name.push('Ralph')
  return kittens;
}
