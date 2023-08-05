
import fs, { readFileSync, writeFileSync } from "fs";
import { execSync } from "child_process";
import { createSpinner } from 'nanospinner';


const inquirer = require('inquirer');

inquirer.registerPrompt('directory', require('inquirer-select-directory'));

export function init() {

    inquirer.prompt([{
        type: 'directory',
        name: 'path',
        message: 'Where you like to make directory?',
        options: {
            displayFiles: false
        },
        basePath: process.cwd()
    }]).then(async function (data: any) {
        let dirPath = data.path;
        getProjectName(dirPath);
    });
}

function getProjectName(dirPath: string) {
    inquirer.registerPrompt('directory', require('inquirer-select-directory'));
    inquirer.prompt([{
        type: 'input',
        name: 'dir',
        message: 'what is Your Project Name?',
        options: {
            displayFiles: false
        },

    }]).then(async function (data: any) {
        let dirName = data.dir;
        intializeProject(dirName, dirPath)
    });
}

function intializeProject(dirName: string, dirPath: string) {
    let destinationPath = dirPath + "/" + dirName
    console.log(destinationPath)

    if (!fs.existsSync(destinationPath)) {
        fs.mkdirSync(destinationPath)
    }
    if (!fs.existsSync(destinationPath + "/src")) {
        fs.mkdirSync(destinationPath + "/src")
    }
    if (!fs.existsSync(destinationPath + "/src/model")) {
        fs.mkdirSync(destinationPath + "/src/model")
    }
    if (!fs.existsSync(destinationPath + "/src/controllers")) {
        fs.mkdirSync(destinationPath + "/src/controllers")
    }
    if (!fs.existsSync(destinationPath + "/src/service")) {
        fs.mkdirSync(destinationPath + "/src/service")
    }
    if (!fs.existsSync(destinationPath + "/src/db")) {
        fs.mkdirSync(destinationPath + "/src/db")
    }
    if (!fs.existsSync(destinationPath + "/src/util")) {
        fs.mkdirSync(destinationPath + "/src/util")
    }

    let templateIndex = readFileSync("./templates/generic.index.txt").toString()
    writeFileSync(destinationPath + "/src/app.ts", templateIndex)


    let templateDb = readFileSync("./templates/generic.db.config.txt").toString()
    writeFileSync(destinationPath + "/src/db/db.config.ts", templateDb)


    let templateBase = readFileSync("./templates/generic.base-entity.model.txt").toString()
    writeFileSync(destinationPath + "/src/util/base-entity.model.ts", templateBase)



    let templateError = readFileSync("./templates/generic.error-result.txt").toString()
    writeFileSync(destinationPath + "/src/util/error-result.ts", templateError)


    let templateSearch = readFileSync("./templates/generic.search-result.txt").toString()
    writeFileSync(destinationPath + "/src/util/search-result.ts", templateSearch)


    let templateUtils = readFileSync("./templates/generic.utils.txt").toString()
    writeFileSync(destinationPath + "/src/util/utils.ts", templateUtils)

    let templatePackage = readFileSync("./templates/generic.package.txt").toString()
    writeFileSync(destinationPath + "/package.json", templatePackage)

    let templateTsCongig = readFileSync("./templates/generic.tsconfig.txt").toString()
    writeFileSync(destinationPath + "/tsconfig.json", templateTsCongig)

    const spinner = createSpinner('running npm install....').start();
    execSync(`cd "${destinationPath}" && npm i`);
    spinner.success({ text: `execution complete` })
}