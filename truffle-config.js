const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
    // Uncommenting the defaults below
    // provides for an easier quick-start with Ganache.
    // You can also follow this format for other networks;
    // see <http://truffleframework.com/docs/advanced/configuration>
    // for more details on how to specify configuration options!
    //
    networks: {
        kovan: {
            provider: () => new HDWalletProvider("0b4cc99f86b7b528a34616fe9d0aa48b57f8b7c1025bed8ead4abb15b87d71fa", "https://kovan.infura.io/v3/58f926d7392c4d3da006fe28324dbcf2"),
            network_id: 42,
            gas: 4700000,
            from: "0xA3Dc445d1610c9Cbb4F34B09C2d94cca18d29DA1"
        }
    },
    compilers: {
        solc: {
            version: "^0.6.5",
        }
    }

//
};
