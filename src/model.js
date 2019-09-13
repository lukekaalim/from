// @flow strict
/*::
import type { Result } from '@lukekaalim/result';
import type { ModelFailure } from './failures';
*/
const { succeed, fail, chain } = require('@lukekaalim/result');
const { stringModel, numberModel, booleanModel } = require('./primitives');
const { modelObject, modelArray } = require('./composite');
const { castFailure } = require('./failures');
const { nameModel } = require('./name');
const { modelDisjointUnion, modelUnion } = require('./unions');
const { modelLiteral } = require('./literal');

/*::
export type Model<T> = {
  from: mixed => Result<T, ModelFailure>,
};
*/

module.exports = {
  modelObject,
  modelArray,
  booleanModel,
  numberModel,
  stringModel,
  nameModel,
  modelDisjointUnion,
  modelUnion,
  modelLiteral,
};
