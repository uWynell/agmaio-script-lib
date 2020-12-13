import { Core } from '../Core';
import { ICommand, IChatUtils } from '../types';
export declare class Command implements ICommand {
    name: string;
    aliases?: string[];
    disabled?: boolean;
    run: (core: Core, args: string[], chatUtils: IChatUtils) => void;
    constructor(config: ICommand);
}
