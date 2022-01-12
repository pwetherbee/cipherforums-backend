import { DAppClient } from "@airgap/beacon-sdk";

const dAppClient = new DAppClient({ name: "Transact" });

const transact = async function () {
  try {
    const response = await dAppClient.requestOperation({
        operationDetails: [
          {
            kind: TezosOperationType.TRANSACTION,
            destination: myAddress, // Send to ourselves
            amount: "1", // Amount in mutez, the smallest unit in Tezos
            // ourInfo: "@username"
          },
        ],
      });
  } catch (error) {
    console.log("Got error:", error);
  }
};


export { transact };
