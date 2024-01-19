import { MinutesService } from './minutes.service';
import { MinuteInput } from './minute.input';
import { MinuteUpdate } from './minute.update';
export declare class MinutesController {
    private readonly minutesService;
    constructor(minutesService: MinutesService);
    create(minuteInput: MinuteInput): Promise<import("./minute.entity").Minute>;
    findAll(): Promise<import("./minute.entity").Minute[]>;
    findOne(id: number): Promise<import("./minute.entity").Minute>;
    update(id: number, minuteUpdate: MinuteUpdate): Promise<import("./minute.entity").Minute>;
    remove(id: number): Promise<void>;
}
