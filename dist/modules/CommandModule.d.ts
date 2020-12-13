import { Core } from '../Core';
import { ICommand, ICommandModule } from '../types';
export declare class CommandModule implements ICommandModule {
    core: Core;
    commands: ICommand[];
    constructor(core: Core);
    addCommand(command: ICommand): void;
    removeCommand(name: string): void;
    getCommand(name: string): ICommand | undefined;
}
