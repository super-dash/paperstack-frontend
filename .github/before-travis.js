/**
 * 在Travis CI构建前，将环境变量`$GITHUB_PAGES_BASE_URL`作为`homepage`项加入`package.json`，
 * 以便在运行`react-scripts build`时构建出与仓库名对应的GitHub Pages前缀。
 * 
 * @see https://create-react-app.dev/docs/deployment#github-pages-https-pagesgithubcom
 */


const path = require("path");
const fs = require("fs");
const process = require("process");


if (typeof process.env.GITHUB_PAGES_BASE_URL !== "string") {
    process.exit(0);
}

const packageJsonPath = path.resolve(`${__dirname}/../package.json`);
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, { encoding: "utf8" }));
packageJson.homepage = process.env.GITHUB_PAGES_BASE_URL;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
