function twistedSum(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    let string = i.toString();

    if (string.lenght === 1) {
      sum = sum + +string;
    } else {
      let tens = string.split("");
      tens.forEach((number) => {
        sum = sum + +number;
      });
    }
  }
  return sum;
}
