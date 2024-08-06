#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';

const projectName = process.argv[2];

if (!projectName) {
  console.error('Please provide a project name');
  process.exit(1);
}

const templatePath = resolve(__dirname, '../template');
const targetPath = resolve(process.cwd(), projectName);

if (existsSync(targetPath)) {
  console.error(`Folder ${projectName} already exists`);
  process.exit(1);
}

mkdirSync(targetPath);
execSync(`cp -r ${templatePath}/. ${targetPath}`);

console.log(`Project ${projectName} created successfully.`);
console.log('Installing dependencies...');

execSync(`cd ${projectName} && npm install`);

console.log('Dependencies installed.');
console.log('Your project is ready!');