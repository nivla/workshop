var utils = require('./utils');

module.exports = {
  getEmptyPort: function (bs, done) {
    utils.getPorts(bs.options, function (err, port) {
      if (err) {
        return utils.fail(true, err, bs.cb);
      }
      done(null, {
        options: {
          port: port
        }
      });
    });
  };
};
