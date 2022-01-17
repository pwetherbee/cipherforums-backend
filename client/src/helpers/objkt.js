export function getHistory(objkt) {
  const history = [...objkt.trades, ...objkt.swaps];
  history.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  return history.map((transaction) => parseTransaction(transaction));
}

function parseTransaction(transaction) {
  if (transaction.buyer) {
    return { type: "trade", ...transaction };
  } else {
    return { type: "list", ...transaction };
  }
}
