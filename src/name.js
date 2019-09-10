// @flow strict
/*::
import type { Model } from './model';
*/
const { chain, fail } = require('@lukekaalim/result');
const { castFailure } = require('./failures');

const nameModel = /*:: <T>*/(name/*: string*/, model/*: Model<T>*/)/*: Model<T>*/ => ({
  name,
  from: (value) => chain(model.from(value))
    .catch(failure => fail(castFailure(`Failed to cast ${name}.`, failure)))
    .result(),
});

module.exports = {
  nameModel,
};