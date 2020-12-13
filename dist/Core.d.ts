import { CommandModule, LoggerModule, ChatModule } from "./modules";
import { ICore, ICoreConfig } from "./types";
export declare class Core implements ICore {
    config: ICoreConfig;
    CommandModule: CommandModule;
    ChatModule: ChatModule;
    LoggerModule: LoggerModule;
    constructor(config: ICoreConfig);
}
