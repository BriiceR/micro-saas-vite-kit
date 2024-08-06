#!/usr/bin/env node

import fs from 'fs-extra'; // Utiliser fs-extra pour des opérations de fichier
import path from 'path';
import url from 'url';
import { execSync } from 'child_process';

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

try {
  fs.mkdirSync(targetPath);
  fs.copySync(templatePath, targetPath);
  console.log(`Project ${projectName} created successfully.`);
} catch (error) {
  console.error(`Failed to copy template files: ${error.message}`);
  process.exit(1);
}

console.log('Installing dependencies...');

try {
  execSync(`cd ${targetPath} && npm install`, { stdio: 'inherit' });
  console.log('Dependencies installed.');
} catch (error) {
  console.error(`Failed to install dependencies: ${error.message}`);
  process.exit(1);
}

console.log('Your project is ready!');