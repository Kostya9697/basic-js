const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    if (Array.isArray(arr)) {
      for (let newArr of arr) {
        depth = 1 + this.calculateDepth(newArr)
      }
      return depth
    } else {
      return 0
    }
  }

}

module.exports = {
  DepthCalculator
};
maxDepth = x => Array.isArray(x)
  ? 1 + Math.max.apply(this, x.map(maxDepth))
  : 0
  ;