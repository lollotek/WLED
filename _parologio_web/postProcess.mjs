import { readFile, writeFileSync } from "fs";

function hexdump(buffer) {
  let lines = [];

  for (let i = 0; i < buffer.length; i += 16) {
    let block = buffer.slice(i, i + 16); // cut buffer into blocks of 16
    let hexArray = [];

    for (let value of block) {
      hexArray.push("0x" + value.toString(16).padStart(2, "0"));
    }

    let hexString = hexArray.join(", ");
    let line = `  ${hexString}`;
    lines.push(line);
  }

  return lines.join(",\n");
}

function writeHtmlGzipped(sourceFile, resultFile) {
  // console.info("Reading " + sourceFile);
  
  readFile(sourceFile,  function (error, result) {
      if (error) {
        // console.warn(error);
        throw error;
      }

    // console.info("Compressed " + result.length + " bytes");
    const array = hexdump(result);
    const src = `/*
* Binary array for the Web UI.
* gzip is used for smaller size and improved speeds.
* 
* Please see https://kno.wled.ge/advanced/custom-features/#changing-web-ui
* to find out how to easily modify the web UI source!
*/

// Autogenerated from ${sourceFile}, do not edit!!
const uint16_t PAGE_index_L = ${result.length};
const uint8_t PAGE_index[] PROGMEM = {
${array}
};
`;
      // console.info("Writing " + resultFile);
      writeFileSync(resultFile, src);
      });
}

writeHtmlGzipped("dist/index.html.gz", "dist/html_ui.h");