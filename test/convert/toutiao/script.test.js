/* eslint-disable no-undef */
const convert = require('../../../src/converter/src/toutiao/script.js');

function testScript(testName, code1, code2) {
  test(testName || 'testing: ', () => {
    expect(code1).toBe(code2);
  });
}

testScript(
  'toutiao script convert test:',
  convert(`
  "//github.com/fulme/wto-cli.git/issues"
  commander.option()
  commander.transition()
  commander.timingFunction()`),
  `
  "https://github.com/fulme/wto-cli.git/issues"
  commander.option()
  commander.transition()
  commander.timingFunction()`
);