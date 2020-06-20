exports.handler = async (event) => {
  const subject = event.queryStringParameters.name || "World";

  return {
    statusCode: 200,
    headers: {
      "Content-type": "image/jpeg",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers":
        "access-control-allow-origin, origin, accept, x-requested-with, content-type, access-control-request-method, access-control-request-headers",
    },
    body: `Hello ${subject}!`,
  };
};
