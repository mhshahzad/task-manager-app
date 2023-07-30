'use strict';

const taskManagementCore = require('..');
const assert = require('assert').strict;

assert.strictEqual(taskManagementCore(), 'Hello from taskManagementCore');
console.info('taskManagementCore tests passed');
