export default function handler(request, response) {
  const fs = require("fs");
  const path = require("path");

  fs.readdir(path.join(process.cwd(), "wallpapers"), (err, files) => {
    let max = files.length - 1;
    let min = 0;

    let index = Math.round(Math.random() * (max - min) + min);
    let file = files[index];

    response.writeHead(302, {
      Location: `/wallpapers/${file}`,
      //add other headers here...
    });
    response.end();
  });
}
