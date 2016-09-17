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
    return app;
  }
}
