import { execSync } from 'node:child_process';
import { join } from 'node:path';
import { existsSync, mkdirSync } from 'node:fs';

// Répertoire où les fichiers doivent être copiés
const targetDir = join(process.cwd(), 'src');

// Créer le répertoire cible s'il n'existe pas
if (!existsSync(targetDir)) {
  mkdirSync(targetDir, { recursive: true });
}

// Exécuter la commande pour cloner le dépôt GitHub
try {
  execSync('git clone https://github.com/BriiceR/Starter-saas-kit.git src --depth 1', { stdio: 'inherit' });
  console.log('Le dépôt a été cloné avec succès dans le répertoire "src".');
} catch (error) {
  console.error('Erreur lors de la clonage du dépôt :', error.message);
}