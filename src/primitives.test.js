// @flow strict
const { expect, expectAll, assert } = require('@lukekaalim/test');
const { handle } = require('@lukekaalim/result');
const { stringModel, numberModel, booleanModel } = require('./primitives');

const expectStringModel = expect(() => {
  const stringSuccessAssertion = handle(stringModel.from('a simple string'),
    modeledString => assert('Provided string, model succeeded with same string', modeledString === 'a simple string'),
    () => assert('Provided string, model incorrectly failed', false),
  )
  const stringFailureAssertion = handle(stringModel.from({ }),
    () => assert('Provided value that isnt a string, model incorrectly succeeded', false),
    failure => assert('Provided value that isnt an array, model should fail with a cast failure', failure.type == 'cast-failure'),
  )
  return assert('String Model should succeed when the input is typeof string, but fail otherwise', [
    stringSuccessAssertion,
    stringFailureAssertion,
  ]);
});

const expectNumberModel = expect(() => {
  const numberSuccessAssertion = handle(numberModel.from(236564),
    modeledNumber => assert('Provided a number, model should succeed with same number', modeledNumber === 236564),
    () => assert('Provided a number, model incorrectly failed', false),
  );

  return assert('Number Model should succeed when the input is typeof number, but fail otherwise', [
    numberSuccessAssertion,
  ]);
});

const expectPrimitives = expectAll('primitive models should simply typecheck', [
  expectStringModel,
  expectNumberModel,
]);

module.exports = {
  expectPrimitives,
};