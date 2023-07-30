'use strict';

const taskManagementAuth = require('..');
const assert = require('assert').strict;

assert.strictEqual(taskManagementAuth(), 'Hello from taskManagementAuth');
console.info('taskManagementAuth tests passed');
