'use strict';

var execa = require('execa');

execa.execa("cat", ["../README.md"]);
