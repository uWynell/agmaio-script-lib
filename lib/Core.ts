import { CommandModule, LoggerModule, ChatModule } from "./modules";
import { ICore, ICoreConfig } from "./types";
import DEFAULTS from './defaults';

export class Core implements ICore {
  config: ICoreConfig;
  CommandModule: CommandModule;
  ChatModule: ChatModule;
  LoggerModule: LoggerModule;

  constructor(config: ICoreConfig) {
    this.config = {...DEFAULTS, ...config};

    this.CommandModule = new CommandModule(this);
    this.ChatModule = new ChatModule(this);
    this.LoggerModule = new LoggerModule(this);
  }
}