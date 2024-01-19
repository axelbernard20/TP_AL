import { RolesService } from './roles.service';
import { RoleInput } from './role.input';
import { RoleUpdate } from './role.update';
import { User } from 'src/users/user.entity';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    create(roleInput: RoleInput): Promise<import("./roles.entity").Role>;
    findAll(): Promise<import("./roles.entity").Role[]>;
    findOne(idUser: number, idAssociation: number): Promise<import("./roles.entity").Role>;
    update(idUser: number, idAssociation: number, roleUpdate: RoleUpdate): Promise<import("./roles.entity").Role>;
    remove(idUser: number, idAssociation: number): Promise<void>;
    getUsersByRoleName(roleName: string): Promise<User[]>;
}
