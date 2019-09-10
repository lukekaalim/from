// @flow strict
/*::
import type { Model } from './model';
*/
const { fail, succeed } = require('@lukekaalim/result');
const { failCast } = require('./failures');

/*::
declare type ModelObjectFunc = <Map: { [string]: Model<mixed> }>(map: Map) => Model<$ObjMap<Map, <V, Y>(model: Model<V>) => V>>;
*/

const modelObject/*: ModelObjectFunc*/ = (map) => {
  const mapEntries/*: Array<[string, Model<mixed>]>*/ = [];
  for (const key of Object.keys(map)) {
    mapEntries.push([key, map[key]])
  }
  const from = value => {
    if (typeof value !== 'object' || value === null) {
      return failCast('WAA');
    }
    const model = {};
    for (const [name, subModel] of mapEntries) {
      const propertyValueResult = subModel.from(value[name]);
      if (propertyValueResult.type === 'failure') {
        return failCast('AAA');
      }
      model[name] = propertyValueResult.success;
    }
    return succeed(model);
  };
  return { from };
};

const modelArray = (elementModel) => {
  const from = value => {
    if (Array.isArray(value)) {
      return fail();
    }
    const model = {};
    for (const [name, subModel] of mapEntries) {
      const propertyValueResult = subModel.from(value[name]);
      if (propertyValueResult.type === 'failure') {
        return fail()
      }
      model[name] = propertyValueResult.success;
    }
    return succeed(model);
  };
  return { from };
};

module.exports = {
  modelObject,
};