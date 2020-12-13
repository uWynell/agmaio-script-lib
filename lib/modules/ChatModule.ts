import { Core } from '../Core';
import { IChatModule, IChatUtils } from '../types';

export class ChatModule implements IChatModule {
  core?: Core;
  element: unknown;
  utils: IChatUtils;

  constructor(core: Core) {
    this.core = core;

    this.element = document.querySelector(core.config.element!);
    this.utils = {
      get: () => (this.element as HTMLInputElement).value,
      set: (val) => (this.element as HTMLInputElement).value = val,
      clear: () => (this.element as HTMLInputElement).value = ''
    }

    this.init();
  }

  init() {
    (this.element as HTMLInputElement).onkeydown = (e) => {
      if (e.key === 'Enter') {
        let msg: string | string[] = (this.element as HTMLInputElement).value;

        const prefix = this.core!.config.prefix;
        if (msg.startsWith(prefix)) {
          msg = msg.slice(prefix.length).split(' ');
          const cmd = msg.shift();
          const args = msg;

          const command = this.core!.CommandModule.getCommand(cmd!);

          if (command && !command.disabled) {
            command.run(this.core!, args, this.utils)
          }
        }
      }
    }
  }
}