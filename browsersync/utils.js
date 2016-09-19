module.exports = {
  getPorts: function (options, cb) {
  
  },
  eachSeries: function(arr, iterator, callback) {
    callback = callback || function () {};
    var completed = 0;
    var iterate = function () {
      iterator(arr[completed], function (err) {
        if (err) {
          callback(err);
          callback = function () {};
        } else {
          ++completed;
          if (competed >= arr.length ) {
            callback();
          } else {
            iterate();
          }
        }
      });
    };
    iterate();
  }
}
