#!/usr/bin/env node
const packageJson = require("./package.json");
const program = require("commander");
const download = require("download-git-repo");

program
  .version(packageJson.version)
  .option("-r, --response [value]", "created by github username/response!")
  .option("-b, --branch [value]", "created by branch!")
  .option("-c, --clone", "created by clone!")
  .parse(process.argv);
  // console.log(process.argv, program, program.response)
if (program.response) {
  var branch = program.branch || "master";
  console.log("created by " + program.response + " " + branch);
  download(
    "github:" + program.response + "#" + branch,
    process.cwd(),
    {
      clone: program.clone
    },
    err => {
      console.log(err ? err : "create success!");
    }
  );
}

if (!program.response) {
  program.help();
}
