import { Core } from '../Core';
import { IChatModule, IChatUtils } from '../types';
export declare class ChatModule implements IChatModule {
    core?: Core;
    element: unknown;
    utils: IChatUtils;
    constructor(core: Core);
    init(): void;
}
