function fib(n) {
  // assuming n is positive int
  // Fn = Fn-1 + Fn-2
  if (n >= 3) {
    // recursive case (call it self)
    return fib(n - 1) + fib(n - 2);
  } else {
    return 1;
  } // base case(don't call itself)
}


// the frog jump over river question
// can only jump 2 feet or 1 feet one time
// 11 feet long of the river
// frog can't turn back
// how many ways?

function jumpWays(n){ // n is the river width
  // assuming the river is positive feet integar wide
  // Fn = Fn-1 + Fn-2
  if(n >= 3){
    return jumpWays(3) = jumpWays(2) + jumpWays(1);
  }else if (n === 2)return 2;
  return 1;
}