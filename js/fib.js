//Fibonacci serie

function fib(n) {
  var n = document.getElementById("num").value;

  let arr = [0, 1];

  if (n <= 0) {
    return "Debe ser mayor que 0";
  } else if (n <= 1) {
    return "0";
  } else if (n <= 2) {
    return "0,1";
  } else {
    for (let i = 2; i <= n - 1; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
      document.getElementById("resultado").innerHTML = "<h3>" + arr + "</h3>";
    }
  }

  return arr;
}
