function theBeatlesPlay (musicians, instruments) {
  var array = [];
  for (let i = 0; i < 10; i++) {
    array.push(`${musicians[0++]} plays ${instruments[0++]}`)
  }
  return array;
}
