import { processTest, populateTransaction} from "../../test.fixture";

const contractName = "Paraswap V5";

const testLabel = "Multi Swap"; // <= Name of the test
const testDirSuffix = "multi_swap_matic"; // <= directory to compare device snapshots to
const testNetwork = "polygon";
const signedPlugin = false;

const contractAddr = "0xdef171fe48cf0115b1d80b88dc8eab59176fee57";
const chainID = 137; // POLYGON

// From : https://polygonscan.com/tx/0xd0ec84b80f3981c7c4b1ab5c02b41478013aa33f4ec41e4d35e6b6e2de3b6ed3
const inputData = "0xa94e78ef0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000068155a43676e0000000000000000000000000000000000000000000000000000de95d11e546a3ba3800000000000000000000000000000000000000000000000e0d56409f301492ba0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000016000000000000000000000000000000000000000000070617261737761702e696f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007000000000000000000000000000000000000000000000000000000000061ddaacf04ccbb6072c611eca3e1c73170101e52000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000002c0000000000000000000000000c2132d05d31c914a87c6611c10748aeb04b58e8f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000d458fa906121d9081970ed3937df50c8ba88e9c000000000000000000000000000000000000000000000000000000000000027100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000d000000000000000000000000e592427a0aece92de3edee1f18e0157c05861564000000000000000000000000000000000000000000000000000000000000271000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001f40000000000000000000000000000000000000000000000000000000061dd647f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000008f3cf7ad23cd3cadbd9735aff958023239c6a0630000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000d458fa906121d9081970ed3937df50c8ba88e9c0000000000000000000000000000000000000000000000000000000000000271000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000008000000000000000000000000a222e6a71d1a1dd5f279805fbe38d5329c1d0e70000000000000000000000000000000000000000000000000000000000000271000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000da43a4aab20d313ab3aa07d8e09f3521f32a3d830000000000000000000000000000000000000000000000000000000000000000"

// Create serializedTx and remove the "0x" prefix
const serializedTx = populateTransaction(contractAddr, inputData, chainID);

const devices = [
  {
    name: "nanos",
    label: "Nano S",
    steps: 8 // <= Define the number of steps for this test case and this device
  },
  {
    name: "nanox",
    label: "Nano X",
    steps: 6 // <= Define the number of steps for this test case and this device
  }
];

devices.forEach((device) =>
  processTest(device, contractName, testLabel, testDirSuffix, "", signedPlugin, serializedTx,testNetwork)
);
