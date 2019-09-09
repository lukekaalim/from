// @flow strict
const { chain, succeed } = require('@lukekaalim/result');
const { nameModel, modelString, modelBoolean, modelObject } = require('../src/model');

const User = nameModel('user', modelObject({
  id: modelString,
}));

const oh = chain(User.from('123'))
  .then(user => succeed('123'))
  .result()