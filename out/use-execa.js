"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const execa_1 = require("execa");
(0, execa_1.execa)("cat", ["../README.md"]);
