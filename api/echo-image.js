exports.handler = async (event) => {
  let image = event.body;

  return {
    statusCode: 200,
    headers: {
      "Content-type": "image/jpeg",
    },
    body: image.toString("base64"),
    isBase64Encoded: true,
  };
};
