import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { promisify } from 'util';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const exec = promisify(execSync);

async function cloneRepo() {
  const repoUrl = 'https://github.com/BriiceR/Starter-saas-kit.git';
  const tempDir = path.join(__dirname, 'temp-repo');

  try {
    // Cloner le dépôt dans un répertoire temporaire
    console.log('Clonage du dépôt...');
    exec(`git clone ${repoUrl} ${tempDir}`, { stdio: 'inherit' });

    // Copier le contenu du répertoire temporaire vers le répertoire courant
    console.log('Copie des fichiers...');
    fs.readdirSync(tempDir).forEach(file => {
      const sourcePath = path.join(tempDir, file);
      const destPath = path.join(__dirname, file);

      if (fs.lstatSync(sourcePath).isDirectory()) {
        fs.readdirSync(sourcePath).forEach(subFile => {
          const subSourcePath = path.join(sourcePath, subFile);
          const subDestPath = path.join(destPath, subFile);
          fs.copyFileSync(subSourcePath, subDestPath);
        });
      } else {
        fs.copyFileSync(sourcePath, destPath);
      }
    });

    console.log('Nettoyage...');
    fs.rmdirSync(tempDir, { recursive: true });

    console.log('Le dépôt a été copié avec succès.');
  } catch (error) {
    console.error('Erreur lors de la copie du dépôt:', error);
  }
}

cloneRepo();