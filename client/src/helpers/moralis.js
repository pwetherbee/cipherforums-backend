// https://admin.moralis.io/web3Api#
// /{address}/nft

async function fetchGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch(
    "https://api.tzstats.com/explorer/account/tz3RDC3Jdn4j15J7bBHZd29EUee9gVB1CxD9",
    {
      method: "POST",
      body: JSON.stringify({
        query: operationsDoc,
        variables: variables,
        operationName: operationName,
      }),
    }
  );
  console.log(result);
  return await result.json();
}
