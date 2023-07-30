'use strict';

const taskManagementUtils = require('..');
const assert = require('assert').strict;

assert.strictEqual(taskManagementUtils(), 'Hello from taskManagementUtils');
console.info('taskManagementUtils tests passed');
