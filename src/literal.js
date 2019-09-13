// @flow strict
/*::
import type { Model } from './model';
import type { Result } from '@lukekaalim/result';
import type { CastFailure, InternalFailure } from './failures';
*/
const { succeed, fail } = require('@lukekaalim/result');
const { castFailure } = require('./failures');

const modelLiteral = /*:: <T>*/(literal/*: T*/)/*: Model<T>*/ => {
  const from = (mixed) => {
    if (mixed === literal) {
      return succeed(literal);
    }
    return fail(castFailure(''));
  };

  return { from };
};

module.exports = {
  modelLiteral,
}