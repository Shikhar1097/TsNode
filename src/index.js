/* eslint-disable no-console */

exports.esModule = true;
const App1 = require('./App');

const port = process.env.PORT || 3000;
App1.default.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
  return console.log(`server is listening on ${port}`);
});
