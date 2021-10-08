require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile purity gesture neck flower tongue'; 
let testAccounts = [
"0x4da01b43e0372432c06ccba9576a6b7d59efeddb9a90368613561cee72765c56",
"0x22acb61fb41d44d0378bcbefaa4094eb67001e8891fb76b47a3d9979d28b2be0",
"0x5862cb132714f9d5afe968de20f74abe6186749b551bfb1c082d9f4a627da72a",
"0x5f530cf2ff577b37974b310d4a5d4f9fece8f860e2dbd1536b3142978831b9b1",
"0xe77bd7d60224760e53fd556f2f34ae2a1aedf5dcac28caecbd474b9f50b5b59d",
"0x1e6a5d3504ee594415923a3ce9fe4c17523c6d161678e2e89c54c486a7d365a4",
"0xdd98f785ae5dbd6bc798ce6f1fdd06acd1cb0c4888990ec5e8dbe8f144eb1925",
"0xd0903b676e0010bba0150d91a0fd28a9682aabacbacd01ec81678d03321a9956",
"0x212955803182e206ef1a7daa31f95c87d3677d0689d8470674482e3d4b0c8ba0",
"0x24561f967981c866bc746c811d043a60fb3745df91aa2b02c491d3b3fcab2b88"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


