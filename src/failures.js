// @flow strict
/*::
import type { Failure, Success } from '@lukekaalim/result';
*/
const { fail } = require('@lukekaalim/result');

/*::
export type CastFailure = {
  type: 'cast-failure',
  message: string,
  cause?: InternalFailure | CastFailure,
}

export type InternalFailure = {
  type: 'internal-failure',
  message: string,
  error: Error,
}
*/

const failCast = (message/*: string*/, cause/*:: ?: InternalFailure | CastFailure*/)/*: Failure<CastFailure>*/ => fail({
  type: 'cast-failure',
  message,
  cause,
});

const failInternal = (error/*: Error*/)/*: Failure<InternalFailure>*/ => fail({
  type: 'internal-failure',
  message: error.stack,
  error,
});

module.exports = {
  failCast,
  failInternal,
};
