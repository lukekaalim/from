// @flow strict
/*::
import type { Model } from './model';
*/
const { modelTuple } = require('./composite');
const { stringModel, numberModel } = require('./primitives');
const { assert, expect } = require('@lukekaalim/test');

const expectTuple = expect(() => {
  const simpleTuple = modelTuple([stringModel, numberModel, stringModel]);

  const tupleResult = simpleTuple.from(['hi', 3, 'there']);

  return assert('Simple Tuple works',
    tupleResult.type === 'success' &&
    tupleResult.success[0] === 'hi'
  );
});

module.exports = {
  expectTuple,
};