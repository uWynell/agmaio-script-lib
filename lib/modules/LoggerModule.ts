import { Core } from '../Core';
import { IModule } from '../types';

export class LoggerModule implements IModule {
  core: Core;

  constructor(core: Core) {
    this.core = core;
  }

  log(message = '') {
    if (!this.core.config.silent)
      return console.log(`[Core Log]: ${message}`)
  }

  warn(message = '') {
    if (!this.core.config.silent)
      return console.warn(`[Core Warn]: ${message}`)
  }

  error(message = '') {
    if (!this.core.config.silent)
      return console.error(`[Core Error]: ${message}`)
  }
}