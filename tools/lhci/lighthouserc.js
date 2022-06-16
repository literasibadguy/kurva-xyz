module.exports = {
    ci: {
      collect: {
        startServerCommand: 'npm start',
        url: [
          'http://localhost:8080/',
        ],
      },
      upload: {
        serverBaseUrl: process.env.LHCI_SERVER,
        token: process.env.LHCI_TOKEN,
      },
    },
  };
  