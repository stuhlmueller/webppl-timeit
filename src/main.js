var lowresNow = function() {
  return new Date().getTime();
}

var sleep = function(ms){
  var now = new Date().getTime();
  while (new Date().getTime() < now + ms) {
    /* do nothing */
  } 
}

var now = (((typeof window !== 'undefined') && window.performance) ?
           window.performance.now :
           lowresNow);

module.exports = {
  now: now,
  sleep: sleep
}
