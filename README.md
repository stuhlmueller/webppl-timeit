## webppl-timeit

This package provides a function `timeit` that takes a thunk and returns an object with its return value and its runtime in milliseconds. For example,

    timeit(function(){
      var x = 1;
      sleep(750);
      return x;
    })

returns

    { value: 1,
      runtimeInMilliseconds: 751 }

To test, run:

    cd webppl-timeit
    webppl test.wppl --require .

License: MIT