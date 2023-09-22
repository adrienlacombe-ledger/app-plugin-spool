import {processTest} from "../../test.fixture";

const contractName = "SmartVaultManager";
// https://etherscan.io/tx/0xa25f3165353c5528515f2c91aa1bf6d3c04afe5c7653fcdf92613b960d7f2d36
// https://etherscan.io/getRawTx?tx=0xa25f3165353c5528515f2c91aa1bf6d3c04afe5c7653fcdf92613b960d7f2d36
const rawTxHex =
    "0x02f901d2011d8405f5e100850487dd933f830c7d3d945f63195445f9949ff2f88c48e3566e4dc156c5d780b90164388bbfd300000000000000000000000000000000000000000000000000000000000000600000000000000000000000008b4bc5cb23b2b3a2243e44b7812344949943d6080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000567d0ad510528ac7359f7a78501c28e19db1062e000000000000000000000000000000000000000000000a92786da7b8b80fa24f000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000f4240c001a0aacc6637ccb4a155dd286c8d0cec2b872fa6d3f8137898aa4f8c5fccb55f8670a05e850653be97bdcf8d29bc336fdd78a169f62400e2ad14346ed6bf60f4b27f1f";
const testLabel = "V2 Claim Withdrawal"; // <= Name of the test
const testDirSuffix = "claim_withdrawal"; // <= directory to compare device snapshots to
const testNetwork = "ethereum";
const testDirPreffix = "v2";
const signedPlugin = false;

const devices = [
    {
        name: "nanos",
        label: "Nano S",
        steps: 11 // <= Define the number of steps for this test case and this device
    },
    {
        name: "nanox",
        label: "Nano X",
        steps: 5 // <= Define the number of steps for this test case and this device
    }
];

devices.forEach((device) =>
  processTest(device, contractName, testLabel, testDirSuffix, testDirPreffix, rawTxHex, signedPlugin,"",testNetwork)
);