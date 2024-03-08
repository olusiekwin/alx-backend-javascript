# ES6 Classes

## Overview
This project focuses on understanding and implementing ES6 classes in JavaScript. Classes are a fundamental aspect of object-oriented programming (OOP) in JavaScript, providing a way to define blueprints for objects with shared properties and methods.

## Learning Objectives
By the end of this project, you should be able to:

- Define a Class in JavaScript.
- Add methods to a class to define behavior.
- Understand the purpose and implementation of static methods within a class.
- Extend a class from another to create hierarchical relationships.
- Explore metaprogramming concepts and symbols.

## Requirements
- All code will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Allowed editors include vi, vim, emacs, and Visual Studio Code.
- All code files should end with a new line.
- A README.md file, located at the root of the project folder, is mandatory.
- Code should use the `.js` extension.
- Code will be tested using Jest, using the command `npm run test`.
- Code will be verified against lint using ESLint.
- All code needs to pass all tests and lint. Verify the entire project by running `npm run full-test`.

## Setup
1. Install NodeJS 12.11.x. Run the following commands in your home directory:
   ```
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```
   Verify the installation:
   ```
   $ nodejs -v
   v12.11.1
   $ npm -v
   6.11.3
   ```
2. Install Jest, Babel, and ESLint by running `npm install` in your project directory.

## Configuration Files
Add the following files to your project directory:
- `package.json`
- `babel.config.js`
- `.eslintrc.js`

Don't forget to run `$ npm install` to install the dependencies specified in `package.json`.