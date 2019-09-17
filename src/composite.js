// @flow strict
/*::
import type { Model } from './model';
*/
const { fail, succeed } = require('@lukekaalim/result');
const { castFailure } = require('./failures');

const modelObject = /*::  <Map: {}>*/(
  map/*: Map*/,
)/*: Model<$ObjMap<Map, <V, Y>(model: Model<V>) => V>>*/ => {
  const mapEntries/*: Array<[string, Model<mixed>]>*/ = [];
  for (const key of Object.keys(map)) {
    mapEntries.push([key, map[key]])
  }
  const from = value => {
    if (typeof value !== 'object' || value === null) {
      return fail(castFailure('WAA'));
    }
    const model = {};
    for (const [name, subModel] of mapEntries) {
      const propertyValueResult = subModel.from(value[name]);
      if (propertyValueResult.type === 'failure') {
        return fail(castFailure('WAA'));
      }
      model[name] = propertyValueResult.success;
    }
    return succeed(model);
  };
  return { from };
};

const modelArray = /*::  <Element>*/(
  elementModel/*: Model<Element>*/
)/*: Model<Array<Element>> */ => {
  const from = value => {
    if (!Array.isArray(value)) {
      return fail(castFailure('WAA'));
    }
    const model = [];
    for (const elementValue of value) {
      const elementResult = elementModel.from(elementValue);
      if (elementResult.type === 'failure') {
        return fail(castFailure('WAA'));
      }
      model.push(elementResult.success);
    }
    return succeed(model);
  };
  return { from };
};

const modelTuple = /*:: <TupleModel>*/(
  tupleModels/*: TupleModel*/
)/*: Model<$TupleMap<TupleModel, <V>(model: Model<V>) => V>>*/ => {
  // $FlowFixMe
  const models/*: Array<Model<mixed>>*/ = tupleModels;
  const from = value => {
    if (!Array.isArray(value)) {
      return fail(castFailure('WAA'));
    }
    const tuple = [];
    for (let i = 0; i < models.length; i++) {
      const tupleResult = models[i].from(value[i]);
      if (tupleResult.type === 'failure')
        return fail(castFailure('WAA'));
      tuple[i] = tupleResult.success;
    }
    return succeed(tuple);
  }
  // $FlowFixMe
  return { from };
};

module.exports = {
  modelObject,
  modelArray,
  modelTuple,
};