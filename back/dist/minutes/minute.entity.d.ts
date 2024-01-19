import { User } from '../users/user.entity';
import { Association } from '../associations/association.entity';
export declare class Minute {
    id: number;
    date: string;
    content: string;
    voters: User[];
    association: Association;
}
