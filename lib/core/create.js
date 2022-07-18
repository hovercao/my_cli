const program = require("commander");
const { createProjectAction } = require("./actions");
function createCommands() {
  program
    .command("create <project> [others...]")
    .description("clone repo")
    .action(function(project, others) {
      console.log(project, others);
    });
}

module.exports = createCommands;
