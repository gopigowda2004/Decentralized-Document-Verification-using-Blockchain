module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost
      port: 7545,        // Ganache default port
      network_id: "*",   // Connects to any network
    },
  },
  compilers: {
    solc: {
      version: "0.8.19", // Set Solidity version based on your contract
    },
  },
};
