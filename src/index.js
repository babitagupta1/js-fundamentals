import { sleep } from './async-utils.js';
import { createRequire } from 'node:module';

// ESM code
console.log('start');

await sleep(100);

console.log('done after 100ms');

// CommonJS code inside ESM
const require = createRequire(import.meta.url);

const { add } = require('./legacy.cjs');

console.log(add(10, 20));