# ES6 Promises

## Overview
This project focuses on understanding and utilizing ES6 Promises in JavaScript. Promises are a fundamental feature of asynchronous programming in JavaScript, allowing you to handle asynchronous operations more efficiently and elegantly.

## Learning Objectives
By the end of this project, you should be able to:

- Explain Promises: what they are, why they are used, and how they work.
- Understand and utilize methods such as `then`, `resolve`, and `catch` to work with Promises effectively.
- Utilize the `every` method of the Promise object.
- Implement error handling using `throw` and `try`.
- Master the `await` operator and its use in asynchronous programming.
- Implement and use async functions.

## Requirements
- All code will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Allowed editors include vi, vim, emacs, and Visual Studio Code.
- All code files should end with a new line.
- A README.md file, located at the root of the project folder, is mandatory.
- Code should use the `.js` extension.
- Code will be tested using Jest, using the command `npm run test`.
- Code will be verified against lint using ESLint.
- All functions must be exported.

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
- `utils.js` (for tasks requiring `uploadPhoto` and `createUser`)
- `.eslintrc.js`

Don't forget to run `$ npm install` to install the dependencies specified in `package.json`.

## Response Data Format
The `uploadPhoto` function returns a response in the following format:
```json
{
  "status": 200,
  "body": "photo-profile-1"
}
```
The `createUser` function returns a response in the following format:
```json
{
  "firstName": "Guillaume",
  "lastName": "Salva"
}
```