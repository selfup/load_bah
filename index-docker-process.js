const shutdown = (server) => {
  server.close((err) => {
    if (err) {
      console.error(err);
      process.exitCode = 1;
    }

    process.exit();
  })
};

const dockerSpecificProcessEvents = (server) => {
  process.on('SIGINT', () => {
    shutdown(server);
  });

  process.on('SIGTERM', (server) => {
    shutdown(server);
  });
};

module.exports = dockerSpecificProcessEvents;
