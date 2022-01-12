const query = async function (url, data = null) {
  const res = await fetch(url, {
    method: data ? "POST" : "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: data && JSON.stringify(data),
  });
  return await res.json();
};

export { query };
