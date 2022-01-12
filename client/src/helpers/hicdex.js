async function fetchGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch("https://api.hicdex.com/v1/graphql", {
    method: "POST",
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });
  return await result.json();
}
const queryCreatedOBJKTs = `
      query creatorGallery($address: String!) {
        hic_et_nunc_token(where: {creator: {address: {_eq: $address}}, supply: {_gt: 0}}, order_by: {id: desc}) {
          id
          artifact_uri
          display_uri
          thumbnail_uri
          timestamp
          mime
          title
          description
          supply
          token_tags {
            tag {
              tag
            }
          }
          swaps(where: {status: {_eq: "0"}}, order_by: {price: asc}) {
            amount
            amount_left
            creator_id
            price
          }
          token_holders(where: {quantity: {_gt: "0"}}, order_by: {id: asc}) {
            quantity
            holder {
              address
              name
            }
          }
          trades(order_by: {timestamp: desc}) {
            amount
            buyer {
              address
              name
            }
            seller {
              address
              name
            }
            swap {
              price
            }
            timestamp
          }
        }
      }
    `;
const queryCollectedOBJKTs = `
      query collectorGallery($address: String!) {
        hic_et_nunc_token_holder(where: {holder_id: {_eq: $address}, quantity: {_gt: "0"}, token: {supply: {_gt: "0"}}}, order_by: {id: desc}) {
          token {
            id
            artifact_uri
            display_uri
            thumbnail_uri
            timestamp
            mime
            title
            description
            supply
            token_tags {
              tag {
                tag
              }
            }
            creator {
              address
              name
            }
            swaps(where: {status: {_eq: "0"}}, order_by: {price: asc}) {
              amount
              amount_left
              creator_id
              price
            }
          }
        }
      }
    `;
const queryOBJKTPriceHistory = `
      query PriceHistory($token: bigint = "") {
        hic_et_nunc_trade(where: {token_id: {_eq: $token}}, order_by: {swap: {price: desc}}) {
          timestamp
          seller {
            address
          }
          buyer {
            address
            name
            metadata_file
          }
          swap {
            price
          }
          token {
            creator {
              address
            }
          }
        }
      }
    `;
const queryOBJKTDetails = `
      query Objkt($id: bigint!) {
        hic_et_nunc_token_by_pk(id: $id) {
          artifact_uri
          creator {
            address
            name
          }
          description
          display_uri
          id
          level
          mime
          royalties
          supply
          thumbnail_uri
          metadata
          timestamp
          title
          token_tags(order_by: {id: asc}) {
            tag {
              tag
            }
          }
          swaps(order_by: {id: asc}) {
            price
            timestamp
            status
            amount
            amount_left
            creator {
              address
              name
            }
          }
          trades(order_by: {timestamp: asc}) {
            amount
            buyer {
              address
              name
            }
            seller {
              address
              name
            }
            swap {
              price
            }
            timestamp
          }
          token_holders(where: {quantity: {_gt: "0"}}, order_by: {id: asc}) {
            quantity
            holder {
              address
              name
            }
          }
          hdao_balance
          extra
        }
      }
    `;
// List of Fetch Requests

// Get created objkts by address

async function fetchCreatedOBJKTs(address) {
  const { errors, data } = await fetchGraphQL(
    queryCreatedOBJKTs,
    "creatorGallery",
    {
      address: address,
    }
  );
  if (errors) {
    console.error(errors);
  }
  const result = data.hic_et_nunc_token;
  return result;
}

// Get collected objkts by address

async function fetchCollectedOBJKTs(address) {
  const { errors, data } = await fetchGraphQL(
    queryCollectedOBJKTs,
    "collectorGallery",
    {
      address: address,
    }
  );
  if (errors) {
    console.error(errors);
  }
  const result = data.hic_et_nunc_token_holder;
  // console.log({ result });
  return result;
}

// Get price history of OBJKT

async function fetchOBJKTPriceHistory(token) {
  const { errors, data } = await fetchGraphQL(
    queryOBJKTPriceHistory,
    "PriceHistory",
    {
      token: token,
    }
  );
  if (errors) {
    console.error(errors);
  }
  const result = data.hic_et_nunc_trade;
  // console.log({ result });
  return result;
}

// Fetch OBJKT details
async function fetchOBJKTDetails(id) {
  const { errors, data } = await fetchGraphQL(queryOBJKTDetails, "Objkt", {
    id: id,
  });
  if (errors) {
    console.error(errors);
  }
  const result = data.hic_et_nunc_token_by_pk;
  console.log({ result });
  return result;
}

const generateCreationURIs = (creations) =>
  creations.map(
    (creation) =>
      "https://ipfs.io/ipfs/" + creation.display_uri.split("//").slice(-1)[0]
  );

const generateThumbnailCR = (uri) => {
  return "https://ipfs.io/ipfs/" + uri.split("//").slice(-1)[0];
};
const generateThumbnailCL = (uri) => {
  return "https://ipfs.io/ipfs/" + uri.split("//").slice(-1)[0];
};

const generateCollectionURIs = (collections) =>
  collections.map(
    (item) =>
      "https://ipfs.io/ipfs/" + item.token.display_uri.split("//").slice(-1)[0]
  );

export {
  fetchCreatedOBJKTs,
  fetchCollectedOBJKTs,
  fetchOBJKTPriceHistory,
  fetchOBJKTDetails,
  generateThumbnailCR,
};
