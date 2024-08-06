#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import url from 'url';

// Obtenez le chemin du module
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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