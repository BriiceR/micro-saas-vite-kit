#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectName = process.argv[2];

if (!projectName) {
  console.error('Please provide a project name');
  process.exit(1);
}

const templatePath = path.resolve(__dirname, '../template');
const targetPath = path.resolve(process.cwd(), projectName);

if (fs.existsSync(targetPath)) {
  console.error(`Folder ${projectName} already exists`);
  process.exit(1);
}

fs.mkdirSync(targetPath);
execSync(`cp -r ${templatePath}/. ${targetPath}`);

console.log(`Project ${projectName} created successfully.`);
console.log('Installing dependencies...');

execSync(`cd ${projectName} && npm install`);

console.log('Dependencies installed.');
console.log('Your project is ready!');