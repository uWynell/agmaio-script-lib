const { Core } = require('agmaio-script-core')

// Create the script instance.
const Script = new Core();

// Add all the exported commands to the script.
const commands = require('./commands');
commands.forEach(command => Script.CommandModule.addCommand(command))