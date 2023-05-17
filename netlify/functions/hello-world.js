/*
 * hello-world.js | MDolce, marti.dolce@29signals.org
 * Function ---
 * This file contains a simple function using async
 * ------------
 */
exports.handler = async function (event, context) {
  const envTest = process.env.ENV_TEST;
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello World! ${envTest} is almost here!` }),
  };
};