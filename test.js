// @flow strict
const { expectAll, emojiReporter } = require('@lukekaalim/test');
const { expectPrimitives } = require('./src/primitives.test');
const { expectDisjoinUnion, expectUnion } = require('./src/unions.test');

const test = async () => {
  const expectation = expectAll('@lukekaalim/model should provide a consise and safe way of transposing unknown objects into models', [
    expectPrimitives,
    expectDisjoinUnion,
    expectUnion,
  ]);
  const assertion = await expectation.test();
  console.log(emojiReporter(assertion));
  process.exitCode = assertion.validatesExpectation ? 0 : 1;
};

if (require.main === module) {
  test();
}