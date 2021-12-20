require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index regret ridge quality harvest flower army genre'; 
let testAccounts = [
"0x99768ff462d835f1db37aeeafecb4128cd69f72e1024535da52ded09977778df",
"0x463c10c6639ba04082f3d97aa9e455d90f62a8a388e0f55ded8e5842457a8e05",
"0x9cf98334c34e9278c9a7d30cd5ec8986d10538ffe5d27d8394da414bc6d27501",
"0x835c1c9c8cd364c8af4ec8cec276f62a1c0a51ed2aac09af5e152268719680dc",
"0xcca5a2c56c4cf5583a95fc7e41221c3a07d214b332d9d3c353d6eac17cc03ac1",
"0x1b24636447aa7985a380582ce90f4104e72cf864bf11cdabc25507e6a87cc2af",
"0xf0fc9f24578a6432d48ee4e1c325600b18a3cd62abc4aadf0e4901b524bb0391",
"0xa0b0664c7037bf8ab042c17a309aa1d7f1826bea6c6f51431a6d5779327ad7a5",
"0x646c28bd9908b3ba9c44b2a5da035a3e4d19a563f5e756331fe0ae3a57e801c9",
"0x85072cc9e206e2463bb0229a7d4ea87f7af7c83d3225c73ee244fb29572bd9a6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

