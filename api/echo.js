exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      query: event.queryStringParameters,
      body: event.body,
    }),
  };
};
