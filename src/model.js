const { succeed, fail, chain } = require('@lukekaalim/result');
const { stringModel, numberModel, booleanModel } = require('./primitives');
const { modelObject } = require('./composite');

const nameModel = (name, model) => ({
  name,
  from: value => chain(model.from(value))
    .catch(failure => fail({ type: 'cast-failure', message: `Failed to cast ${name} because:\n${failure.message}` }))
    .result()
});

module.exports = {
  modelObject,
  booleanModel,
  numberModel,
  stringModel,
  nameModel,
};
