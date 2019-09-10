// @flow strict
const { expectAll, emojiReporter } = require('@lukekaalim/test');
const { expectPrimitives } = require('./src/primitives.test');

const test = async () => {
  const expectation = expectAll('@lukekaalim/model should provide a consise and safe way of transposing unknown objects into models', [
    expectPrimitives,
  ]);
  const assertion = await expectation.test();
  console.log(emojiReporter(assertion));
  process.exitCode = assertion.validatesExpectation ? 0 : 1;
};

if (require.main === module) {
  test();
}