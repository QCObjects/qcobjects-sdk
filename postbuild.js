const fs = require('node:fs');
const path = './public/types/index.d.ts';

const ALIAS = [
  'declare module "qcobjects-sdk" {',
  '    export * from "index";',
  '}',
].join('\n');

let current = '';
try {
  current = fs.readFileSync(path, 'utf8');
} catch (err) {
  console.error('Failed to read', path, err);
  process.exit(1);
}

/*
This bundle is emitted by tsc as a global-concatenated set of ambient module
declarations, the same shape as Core's public/types/index.d.ts. The previous
postbuild *appended* a top-level `export {};` on every run — leaving the whole
declaration invisible to consumers as augmented modules of nothing, and stacking
every build (appendFile is not idempotent; composite skips emit, so duplicates
accumulate rather than reproduce).

Strip every top-level `export {};`, guarantee the file is a global script, and
append the package-named alias so a consumer writing

    import { Fade, NotificationComponent } from "qcobjects-sdk";

resolves to a declaration at all. The alias is rewritten on every run rather
than appended, so repeated postbuilds are byte-identical.
*/

const withoutModuleMarker = current
  .replace(new RegExp(`\\n*${escapeForRegExp(ALIAS)}\\n*`, 'g'), '\n')
  .replace(/^export \{\};?\s*$/gm, '')
  .replace(/\s+$/, '\n');

fs.writeFileSync(path, `${withoutModuleMarker}\n${ALIAS}\n`, (err) => {
  if (err) {
    console.error('Failed to write module declaration:', err);
    process.exit(1);
  }
  console.log('postbuild: qcobjects-sdk is now a global script with a qcobjects-sdk alias (idempotent)');
});

function escapeForRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
}
