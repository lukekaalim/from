// @flow strict
/*::
import type { Model } from './model';
import type { Result } from '@lukekaalim/result';
import type { ModelFailure } from './failures';
*/
const { fail, succeed } = require('@lukekaalim/result');
const { castFailure } = require('./failures');

const modelOptional = /*:: <T> */(
  model/*: Model<T>*/
)/*: Model<T | null>*/ => {
  const from = (value)/*: Result<T | null, ModelFailure>*/ => {
    if (value === null || value === undefined)
      return succeed(null);
    const modelResult = model.from(value);
    if (modelResult.type === 'failure')
      return fail(castFailure(''));
    return succeed(modelResult.success);
  };

  return { from };
};

module.exports = {
  modelOptional,
};