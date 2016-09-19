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

  return this;
};

module.exports = BroserSync;
