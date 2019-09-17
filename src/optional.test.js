// @flow strict
const { expect, assert } = require('@lukekaalim/test');
const { modelOptional } = require('./optional');
const { numberModel } = require('./primitives');

const expectOptional = expect(() => {
  const optionalNumberModel = modelOptional(numberModel);

  const undefinedNumberResult = optionalNumberModel.from(undefined);
  const literalNumberResult = optionalNumberModel.from(10);

  return assert('modelOptional should allow both null or the underlying model', [
    assert('optional should return null with an empty model', undefinedNumberResult.type === 'success' && undefinedNumberResult.success === null),
    assert('optional should return a valid value with an valid model', literalNumberResult.type === 'success' && literalNumberResult.success === 10),
  ]);
});

module.exports = {
  expectOptional,
};