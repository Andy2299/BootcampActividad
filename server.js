const app = require('./api/app');

const startServer = (port) => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};

module.exports = startServer;
