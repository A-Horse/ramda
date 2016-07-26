var _curry2 = require('./internal/_curry2');
var _slice = require('./internal/_slice');

/**
 * noop function.
 *
 * @func
 * @memberOf FW-R
 * @since v0.21.0
 * @
 * @
 */
module.exports = _curry2(function splitIf(condition, list) {
  var matchs = [],
      unMatchs = [];

  list.forEach(function(item){
    if( condition(item) ){
      matchs.push(item);
    } else {
      unMatchs.push(item);
    }
  });
  return [matchs, unMatchs];
});
