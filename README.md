# agmaio-script-lib
Create an Agma.io script with ease.

## Table of Contents

  - [Features](#features)
  - [Installing](#installing)
  - [Building your script](#building-your-script)
  - [Examples](#examples)

## Features
- Create commands per file.
- Ability to use NPM packages in commands.

## Installing
Using NPM:
```bash
$ npm install agmaio-script-lib
```

Using Yarn:
```bash
$ yarn add agmaio-script-lib
```

## Example
If you wish to build your script to test/use it, you can take a look at the [agmaio-script-lib-template](https://github.com/CodingWithNuke/agmaio-script-lib-template) repository.

## Examples
See the [agmaio-script-lib-template](https://github.com/CodingWithNuke/agmaio-script-lib-template) repository for a full example.

CommonJS usage:
```js
const { Core } = require('agmaio-script-lib');
```

ES6 usage:
```js
import { Core } from 'agmaio-script-lib';
```

Creating a command
```js

const { Core, Command } = require('agmaio-script-lib');

// Create the script instance.
const Script = new Core();

// Create a command which will display 'Hello World!' in chat.
const ExampleCommand = new Command({
  name: 'example',
  run: (core, args, chatUtils) => {
    chatUtils.set('Hello World!');
  }
});

// Add the command to the script.
Script.CommandModule.addCommand(ExampleCommand);
```

Creating a command and using args
```js
const { Command } = require('agmaio-script-lib');

// Create a command which will use the first argument given as name.
const ExampleArgsCommand = new Command({
  name: 'exampleArgs',
  run: (core, args, chatUtils) => {
    if (args.length) {
      chatUtils.set(`Hello, ${args[0]}!`);
    }
  }
})
```