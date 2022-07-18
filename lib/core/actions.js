const { promisify } = require("util"); //node库中的方法，将代码包一个promise
const download = promisify(require("download-git-repo"));
const { vueRepo } = require("../config/repo-config");
const { commandSpawn } = require("../utils/termianl");

async function createProjectAction(project) {
  console.log("hjx help your project");
  //执行git clone 克隆代码
  await download(vueRepo, project, { clone: true });
  // npm install
  await commandSpawn(
    process.platform === "win32" ? "npm.cmd" : "npm",
    ["install"],
    { cwd: `./${project}` }
  );
}

module.exports = {
  createProjectAction
};
