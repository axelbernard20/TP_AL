import { Repository } from 'typeorm';
import { Minute } from './minute.entity';
import { MinuteInput } from './minute.input';
import { MinuteUpdate } from './minute.update';
export declare class MinutesService {
    private minutesRepository;
    constructor(minutesRepository: Repository<Minute>);
    create(minuteInput: MinuteInput): Promise<Minute>;
    getAll(): Promise<Minute[]>;
    getById(id: number): Promise<Minute>;
    update(id: number, minuteUpdate: MinuteUpdate): Promise<Minute>;
    remove(id: number): Promise<void>;
    findMinutesByAssociationId(associationId: number, sort?: 'ASC' | 'DESC'): Promise<Minute[]>;
}
