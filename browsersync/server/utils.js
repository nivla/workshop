var http = require('http'),
   connect = require('connect');

module.exports = {
  getServer: {
    return {
      server: (function(){
        return http.createServer(app);
      })()
    },
    app:app
  },
  getBaseApp: function (bs, options, sripts) {

    var app = connect();

    var defaultMiddlewares = [
      {},
      {},
      {}
    ]

    //the same as Array.prototype.push.apply(app.stack, defaultMiddlewares)
    app.stack.push.apply(app.stack, defaultMiddlewares);
    return app;
  },
  /**
   * @param err
   */
  defaultCallback: function(err) {
    if(err && err.message){
      console.error(err.message);
    }
  }
}
