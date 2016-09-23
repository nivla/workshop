var utils = require('./utils');

/**
 * @constructor
 */

var BrowserySync = function(emitter){

  var bs = this;

  bs.cwd      = process.cwd();
  bs.events   = bs.emitter = emitter;
};

BrowserySync.prototype.init = function(options, cb) {

  /**
   * @type {BroserSync}
   */
  var bs = this;

  bs.cb = cb || utils.defaultCallback;
  /**
   * save a reference to original options
   * @type {Map}
   * @private
   */
  bs._options = options;

  //1 array of tasks
  eachSeries(
    asyncTasks,
    taskRunner(bs)
  );
  return this;
};

function taskRunner(bs) {

  return function (item, cb) {
    item.fn(bs, executeTask);

    function executeTask(err, out) {
      //exit if any error returned an error

      if(err) {

      }
      //this ca()s the next iterate
      cb();
    }
  };

}

module.exports = BroserSync;
