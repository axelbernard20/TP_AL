import { Repository } from 'typeorm';
import { Role } from './roles.entity';
import { RoleInput } from './role.input';
import { RoleUpdate } from './role.update';
import { User } from 'src/users/user.entity';
export declare class RolesService {
    private roleRepository;
    constructor(roleRepository: Repository<Role>);
    create(roleInput: RoleInput): Promise<Role>;
    getAll(): Promise<Role[]>;
    getByIds(idUser: number, idAssociation: number): Promise<Role>;
    update(idUser: number, idAssociation: number, roleUpdate: RoleUpdate): Promise<Role>;
    delete(idUser: number, idAssociation: number): Promise<void>;
    findRolesByUserId(userId: number): Promise<Role[]>;
    getUsersByRoleName(roleName: string): Promise<User[]>;
}
