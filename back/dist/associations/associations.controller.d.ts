import { AssociationsService } from './associations.service';
import { Association } from './association.entity';
import { AssociationDTO } from './association.dto';
import { Member } from './association.member';
import { Minute } from 'src/minutes/minute.entity';
export declare class AssociationsController {
    private readonly associationsService;
    constructor(associationsService: AssociationsService);
    getAll(): Promise<AssociationDTO[]>;
    getById(id: number): Promise<AssociationDTO>;
    create(associationData: Association): Promise<AssociationDTO>;
    update(id: number, body: {
        name: string;
    }): Promise<AssociationDTO>;
    delete(id: number): Promise<{
        success: boolean;
    }>;
    getMembers(associationId: number): Promise<Member[]>;
    getAssociationMinutes(associationId: number, sort?: string): Promise<Minute[]>;
}
