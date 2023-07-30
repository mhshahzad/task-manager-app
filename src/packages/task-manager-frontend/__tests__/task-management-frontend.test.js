'use strict';

const taskManagementFrontend = require('..');
const assert = require('assert').strict;

assert.strictEqual(taskManagementFrontend(), 'Hello from taskManagementFrontend');
console.info('taskManagementFrontend tests passed');
