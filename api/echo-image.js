var fs = require("fs");

exports.handler = async (event) => {
  let CORSHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
    "Access-Control-Allow-Headers":
      "access-control-allow-origin, origin, accept, x-requested-with, content-type, access-control-request-method, access-control-request-headers",
  };

  if (process.env.ENABLE_CORS && event.httpMethod === "OPTIONS") {
    const response = {
      statusCode: 200,
      headers: {
        CORSHeaders,
      },
      body: JSON.stringify({ message: "You can use CORS" }),
    };
    callback(null, response);
    return;
  }

  let outPath = "/tmp/a.jpg";
  let image = event.body;

  console.log("event.body", event.body);
  let j = JSON.parse(event.body);
  console.log("j", j);
  console.log("j.image", j.image);

  var buff = new Buffer(
    j.image.replace(/^data:image\/(png|gif|jpeg);base64,/, ""),
    "base64"
  );
  fs.writeFile(outPath, buff, function (err) {
    console.log("done");
  });

  // return {
  //   statusCode: 200,
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     "path": outPath,
  //   }),
  // };

  CORSHeaders[""];
  return {
    statusCode: 200,
    headers: Object.assign({}, CORSHeaders, {
      "Content-Type": "image/jpeg",
    }),
    body: buff.toString("base64"),
    isBase64Encoded: true,
  };
};
