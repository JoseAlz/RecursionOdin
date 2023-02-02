//Fibonacci Recursion

var callCount = 0;
function compute(num) {
  callCount = 0;
  var out = fibR(num);
  var output =
    "F(" +
    num +
    ") = " +
    out +
    " Calculado en: " +
    callCount +
    " Llamadas Recursivas";
  document.getElementById("out").innerHTML = output;
}
function fibR(num) {
  callCount++;

  if (num == 1) return 0;
  if (num == 2) return 1;
  return fibR(num - 1) + fibR(num - 2);
}
