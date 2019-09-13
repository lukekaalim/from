// @flow strict
const { expect, assert} = require('@lukekaalim/test');
const { modelDisjointUnion, modelTagUnion } = require('./unions');
const { modelObject } = require('./composite');
const { stringModel, numberModel } = require('./primitives');
const { modelLiteral } = require('./literal');

const expectDisjoinUnion = expect(() => {
  const actionModel = modelDisjointUnion('type', {
    'speak': modelObject({ greeting: stringModel }),
    'attack': modelObject({ damage: numberModel })
  })

  return assert('Disjoin Union selects correct type', actionModel.from({ type: 'speak', greeting: 'hello there' }).type === 'success');
});

const expectUnion = expect(() => {
  const greetingModel = modelTagUnion/*:: <'sup' | 'howdy'>*/(['howdy', 'sup']);

  const greetingResult = greetingModel.from('howdy');

  return assert('Union selects correct type', greetingResult.type === 'success' && greetingResult.success === 'howdy');
});


module.exports = {
  expectDisjoinUnion,
  expectUnion,
};