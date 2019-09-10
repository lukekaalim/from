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

export type ModelFailure =
  | InternalFailure
  | CastFailure
*/

const castFailure = (message/*: string*/, cause/*:: ?: ModelFailure*/)/*: CastFailure*/ => ({
  type: 'cast-failure',
  message,
  cause,
});

const internalFailure = (error/*: Error*/)/*: InternalFailure*/ => ({
  type: 'internal-failure',
  message: error.stack,
  error,
});

module.exports = {
  castFailure,
  internalFailure,
};
