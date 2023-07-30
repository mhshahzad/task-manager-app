'use strict';

const taskManagementBackend = require('..');
const assert = require('assert').strict;

assert.strictEqual(taskManagementBackend(), 'Hello from taskManagementBackend');
console.info('taskManagementBackend tests passed');
