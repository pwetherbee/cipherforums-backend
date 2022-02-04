import { DAppClient } from "@airgap/beacon-sdk";

const dAppClient = new DAppClient({ name: "Wallet Sync" });

const syncWallet = async function () {
  try {
    console.log("Requesting permissions...");
    const permissions = await dAppClient.requestPermissions();
    return permissions;
  } catch (error) {
    console.log("Got error:", error);
  }
};

const desyncWallet = async function () {
  dAppClient.clearActiveAccount().then(async () => {
    const account = await dAppClient.getActiveAccount();
    // console.log("Active Account", account);
  });
};

const getActiveAccount = async function () {
  return await dAppClient.getActiveAccount();
};

export { syncWallet, desyncWallet, getActiveAccount };
