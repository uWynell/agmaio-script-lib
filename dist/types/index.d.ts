import { CommandModule, ChatModule, LoggerModule } from '../modules';
import { Core } from '../Core';
export interface ICore {
    config: ICoreConfig;
    CommandModule: CommandModule;
    ChatModule: ChatModule;
    LoggerModule: LoggerModule;
}
export interface ICoreConfig {
    silent: boolean;
    element: string;
    prefix: string;
}
export interface ICommand {
    name: string;
    aliases?: string[];
    disabled?: boolean;
    run: (core: Core, args: string[], chatUtils: IChatUtils) => void;
}
export interface IChatUtils {
    get: () => string;
    set: (val: string) => void;
    clear: () => void;
}
export interface IModule {
    core?: Core;
}
export interface ICommandModule extends IModule {
    commands: ICommand[];
}
export interface IChatModule extends IModule {
    element: unknown;
    utils: IChatUtils;
}
