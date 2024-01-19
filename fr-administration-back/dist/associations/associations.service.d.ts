import { Association } from './association.entity';
import { User } from '../users/user.entity';
import { Repository } from 'typeorm';
import { AssociationDTO } from './association.dto';
import { Member } from './association.member';
import { RolesService } from '../roles/roles.service';
import { Minute } from 'src/minutes/minute.entity';
import { MinutesService } from 'src/minutes/minutes.service';
export declare class AssociationsService {
    private associationRepository;
    private rolesService;
    private minutesService;
    constructor(associationRepository: Repository<Association>, rolesService: RolesService, minutesService: MinutesService);
    create(associationData: Association): Promise<Association>;
    getAll(): Promise<Association[]>;
    getById(idToFind: number): Promise<Association>;
    update(id: number, name: string): Promise<Association>;
    delete(id: number): Promise<void>;
    getMembers(associationId: number): Promise<Member[]>;
    toDTO(association: Association): Promise<AssociationDTO>;
    userToMember(user: User, associationId: number): Promise<Member>;
    getMinutesByAssociationId(associationId: number, sort?: 'ASC' | 'DESC'): Promise<Minute[]>;
}
