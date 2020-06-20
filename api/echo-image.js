var fs = require("fs");

exports.handler = async (event) => {
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

  return {
    statusCode: 200,
    headers: {
      "Content-type": "image/jpeg",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    },
    body: buff.toString("base64"),
    isBase64Encoded: true,
  };
};
