import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const canonicalDocsDir = resolve(process.cwd(), 'src/content/docs/docs');
const legacyDocsDir = resolve(process.cwd(), 'docs');

if (!existsSync(canonicalDocsDir)) {
  console.error(`Missing canonical docs tree: ${canonicalDocsDir}`);
  process.exit(1);
}

if (existsSync(legacyDocsDir)) {
  console.error(
    'Legacy docs tree detected at ./docs. Edit docs only under ./src/content/docs/docs.',
  );
  process.exit(1);
}

console.log('Docs guard passed: using ./src/content/docs/docs as the sole editable docs tree.');