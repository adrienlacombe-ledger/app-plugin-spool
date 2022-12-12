import { processTest } from "../test.fixture";

const contractName = "Vault2";
// https://etherscan.io/tx/0x41fe587a6aff7d8d3062c73272550aec128cc9215929a09bde41d69b64843dd8
// https://etherscan.io/getRawTx?tx=0x41fe587a6aff7d8d3062c73272550aec128cc9215929a09bde41d69b64843dd8
const rawTxHex =
  "0x02f9089201558459682f0085073754c38a83356be39426ac1dba97c1f3f33eea9ad8b3e9d9dc588c023e80b90824d7b9d4230000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000c89642d4cd7ae2b9de7ce614a000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000001800000000000000000000000000000000000000000000000000000000000000007000000000000000000000000a71a526c962d08206a44b560a4dd67e97bb5fbc0000000000000000000000000f24ebddfe5d73423dec966f14c1ec714f59a6656000000000000000000000000d72320a3dc67d9815a0348199be7ff98d7df3158000000000000000000000000ae0f58c408514e60cc6d844cc80965aeab4bf6ff0000000000000000000000009e177bb9f107bffdc0f9b512f969f6c071d57d76000000000000000000000000e78e22ab9204e36948eff81facd92a7231f40210000000000000000000000000767f653905b82fd88369b8f24bf9ff71e6ba2a7c000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000340000000000000000000000000000000000000000000000000000000000000000700000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000000000000000000000000000002200000000000000000000000000000000000000000000000000000000000000240000000000000000000000000000000000000000000000000000000000000028000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000c414b4e90d7405fd610100000000000000000000000000000000000000000000c5a7e4a0e67e3554bf57000000000000000000000000000000000000000000000f2f9b31e2fb7a9f85a100000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000223920a3d86449b726be10000000000000000000000000000000000000000000227f7f7d109eaaf3398f3000000000000000000000000000000000000000000003de7eda52db8ec8cdb08000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000014a6d3b29b2b7b087d7b00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000700000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000140000000000000000000000000000000000000000000000000000000000000016000000000000000000000000000000000000000000000000000000000000001800000000000000000000000000000000000000000000000000000000000000320000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c080a0959c337ca80a5712f7129eaa08a9e2a4e2319dc3010670958ec73e9761cbf532a0486c4d7c4183a719a2ee39c23223806045f54948f26819689fc710f7aba79907";
const testLabel = "Withdraw fast"; // <= Name of the test
const testDirSuffix = "withdraw_fast"; // <= directory to compare device snapshots to
const testNetwork = "ethereum";

const signedPlugin = false;

const devices = [
  {
    name: "nanos",
    label: "Nano S",
    steps: 6 // <= Define the number of steps for this test case and this device
  },
  {
    name: "nanox",
    label: "Nano X",
    steps: 4 // <= Define the number of steps for this test case and this device
  }
];

devices.forEach((device) =>
  processTest(device, contractName, testLabel, testDirSuffix, rawTxHex, signedPlugin,"",testNetwork)
);