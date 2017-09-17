function theBeatlesPlay (musicians, instruments) {
  var array = [];
  for (let i = 0; i < 10; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}
