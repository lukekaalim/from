// @flow strict
/*::
import type { Model } from './model';
import type { Result } from '@lukekaalim/result';
import type { CastFailure, InternalFailure } from './failures';
*/
const { succeed, fail } = require('@lukekaalim/result');
const { failCast } = require('./failures');

const stringModel/*: Model<string>*/ = {
  from: value => typeof value === 'string' ? succeed(value) : failCast(`Value is not a string (Is ${typeof value} instead)`),
};

const numberModel/*: Model<number>*/ = {
  from: value => typeof value === 'number' ? succeed(value) : failCast(`Value is not a number (Is ${typeof value} instead)`),
};

const booleanModel/*: Model<boolean>*/ = {
  from: value => typeof value === 'boolean' ? succeed(value) : failCast(`Value is not a boolean (Is ${typeof value} instead)`),
};

module.exports = {
  stringModel,
  numberModel,
  booleanModel,
}