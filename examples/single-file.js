const { Core, Command } = require('agmaio-script-core');

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