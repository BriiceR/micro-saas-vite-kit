import { existsSync, lstatSync, writeFileSync, readFileSync, mkdirSync, readdirSync } from 'fs';
import path from 'path';

const filesToCopy = [
  'index.html',
  'postcss.config.js',
  'tailwind.config.js',
  'tsconfig.app.json',
  'tsconfig.json',
  'tsconfig.node.json',
  'vite.config.ts'
];

const foldersToCopy = ['src', 'public'];

function copyFileSync(source, target) {
  let targetFile = target;

  // If target is a directory, a new file with the same name will be created
  if (existsSync(target)) {
    if (lstatSync(target).isDirectory()) {
      targetFile = join(target, basename(source));
    }
  }

  writeFileSync(targetFile, readFileSync(source));
}

function copyFolderRecursiveSync(source, target) {
  let files = [];

  // Check if folder needs to be created or integrated
  const targetFolder = join(target, basename(source));
  if (!existsSync(targetFolder)) {
    mkdirSync(targetFolder);
  }

  // Copy
  if (lstatSync(source).isDirectory()) {
    files = readdirSync(source);
    files.forEach(function (file) {
      const curSource = join(source, file);
      if (lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder);
      } else {
        copyFileSync(curSource, targetFolder);
      }
    });
  }
}

filesToCopy.forEach((file) => {
  const sourcePath = join(__dirname, file);
  const targetPath = join(process.cwd(), file);
  copyFileSync(sourcePath, targetPath);
});

foldersToCopy.forEach((folder) => {
  const sourcePath = join(__dirname, folder);
  const targetPath = join(process.cwd(), folder);
  copyFolderRecursiveSync(sourcePath, targetPath);
});