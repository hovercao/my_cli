const { promisify } = require("util"); //node库中的方法，将代码包一个promise
const download = promisify(require("download-git-repo"));
const { vueRepo } = require("../config/repo-config");

async function createProjectAction(project) {
  await download(vueRepo, project, { clone: true });
}

module.exports = {
  createProjectAction
};
