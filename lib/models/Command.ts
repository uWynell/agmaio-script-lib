import { Core } from '../Core';
import {ICommand, IChatUtils} from '../types';

export class Command implements ICommand {
  name: string;
  aliases?: string[];
  disabled?: boolean;
  run: (core: Core, args: string[], chatUtils: IChatUtils) => void;

  constructor(config: ICommand) {
    this.name = config.name;
    this.aliases = config.aliases;
    this.disabled = config.disabled;
    this.run = config.run;
  }
}