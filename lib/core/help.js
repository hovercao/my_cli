const program = require("commander");

function helpOptions() {
  program.option("-d --dest <dest>", "a dest file");
  program.on("--help", function() {
    console.log("options:");
  });
}

module.exports = helpOptions;
