import { User } from '../users/user.entity';
import { Association } from '../associations/association.entity';
export declare class Role {
    idUser: number;
    idAssociation: number;
    name: string;
    user: User;
    association: Association;
}
