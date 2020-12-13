import { Core } from '../Core';
import { ICommand, ICommandModule } from '../types';

export class CommandModule implements ICommandModule {
  core: Core;
  commands: ICommand[];

  constructor(core: Core) {
    this.core = core;
    this.commands = [];
  }

  addCommand(command: ICommand) {
    let conflict = false;
    for (let i = 0; i < this.commands.length; i++) {
      const cmd = this.commands[i];

      if (cmd.name === command.name) {
        conflict = true;
        return this.core.LoggerModule.error(`Command with name ${cmd.name} already exists.`)
      }
    }

    if (!conflict) this.commands.push(command)
  }

  removeCommand(name: string) {
    for (let i = 0; i < this.commands.length; i++) {
      const cmd = this.commands[i];

      if (cmd.name === name) {
        this.commands.splice(i, 1)
      }
    }
  }

  getCommand(name: string) {
    let found = false;
    for (let i = 0; i < this.commands.length; i++) {
      const command = this.commands[i];

      if (command.name === name) {
        found = true;
        return command;
      }
    }

    if (!found) {
      for (let i = 0; i < this.commands.length; i++) {
        const command = this.commands[i];

        if (command.aliases && command.aliases.includes(name)) {
          return command;
        }
      }
    }
  }
}