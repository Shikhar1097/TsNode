/* eslint-disable no-shadow */
exports.esModule = true;
const express = require('express');

const App = /** @class */ (function func1() {
  function App() {
    this.express = express();
    this.mountRoutes();
  }
  App.prototype.mountRoutes = function func2() {
    const router = express.Router();
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!',
      });
    });
    this.express.use('/', router);
  };
  return App;
}());
exports.default = new App().express;
