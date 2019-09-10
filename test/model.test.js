// @flow strict
const { chain, succeed, fail } = require('@lukekaalim/result');
const { nameModel, stringModel, booleanModel, modelObject } = require('../src/model');

const User = nameModel('user', modelObject({
  id: stringModel,
}));

chain(User.from({ id: 124 }))
  .then(user => succeed(console.log('Succeed', user)))
  .catch(failure => fail(console.error(failure.message)))