import { Generator, getConfig } from '@tanstack/router-generator';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const config = getConfig();
config.root = root;

const gen = new Generator({ config, root });
await gen.run();

console.log('✓ routeTree.gen.ts generated');