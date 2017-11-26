var data = require('./data.js');
var foo = data.foo;


// 2차원 배열의 요소들을 하나씩 출력
for (var i = 0; i < foo.length; i++) {
  if (i % 2 === 0) {
    document.getElementById("left").innerHTML += foo[i].join(" - ") + "<br>";
  }
  else {
    document.getElementById("right").innerHTML += foo[i].join(" - ") + "<br>";
  }

}