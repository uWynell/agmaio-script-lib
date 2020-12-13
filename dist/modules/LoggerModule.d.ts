import { Core } from '../Core';
import { IModule } from '../types';
export declare class LoggerModule implements IModule {
    core: Core;
    constructor(core: Core);
    log(message?: string): void;
    warn(message?: string): void;
    error(message?: string): void;
}
