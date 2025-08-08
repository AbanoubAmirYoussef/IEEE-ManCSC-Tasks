import fs from "node:fs";
import readline from "node:readline";

const [,, fileName, query] = process.argv;
if (!fileName || !query) {
  console.log("Usage: npm run start <filename> <query>");
  process.exit();
}

if (!fs.existsSync(fileName)) {
  console.log(`File not found: ${fileName}`);
  process.exit();
}

const fileStream = fs.createReadStream(fileName);

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

let found = false;

rl.on("line", (line) => {
  if (line.includes(query)) {
    console.log(line);
    found = true;
    rl.close();
  }
});

rl.on("close", () => {
  if (!found) {
    console.log("THAT'S NOT FUNNY");
  }
});
