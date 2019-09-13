// @flow strict
/*::
import type { Model } from './model';
*/
const { succeed, fail } = require('@lukekaalim/result');
const { castFailure } = require('./failures');
const { stringModel } = require('./primitives');

const modelDisjointUnion = /*::<Map: {}>*/(
  tagName/*: string*/,
  map/*: Map*/,
)/*: Model<$Values<$ObjMap<Map, <V>(model: Model<V>) => V>>>*/ => {
  const tags = Object.keys(map);
  const from = (value) => {
    if (typeof value !== 'object') {
      return fail(castFailure(''));
    }
    if (value === null) {
      return fail(castFailure(''));
    }
    const tag = value[tagName];
    if (typeof tag !== 'string') {
      return fail(castFailure(''));
    }
    if (!tags.includes(tag)) {
      return fail(castFailure(''));
    }
    return map[tag].from(value);
  };
  return { from };
};

const modelTagUnion = /*::<Union>*/(
  tags/*: Array<Union>*/,
)/*: Model<Union>*/ => {
  const from = (value) => {
    const tagResult = stringModel.from(value);
    if (tagResult.type === 'failure') {
      return fail(castFailure(''));
    }
    const tag = tags.find(tag => tag === tagResult.success);
    if (!tag) {
      return fail(castFailure(''));
    }
    return succeed(tag);
  };
  return { from };
}

module.exports = {
  modelDisjointUnion,
  modelTagUnion,
}