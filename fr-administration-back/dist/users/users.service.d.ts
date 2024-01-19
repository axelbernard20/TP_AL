import { User } from './user.entity';
import { Repository } from 'typeorm';
import { RolesService } from 'src/roles/roles.service';
import { Role } from 'src/roles/roles.entity';
export declare class UsersService {
    private userRepository;
    private rolesService;
    constructor(userRepository: Repository<User>, rolesService: RolesService);
    create(lastname: string, firstname: string, age: number, password: string): Promise<User>;
    getAll(): Promise<User[]>;
    getById(idToFind: number): Promise<User>;
    update(id: number, updateData: User): Promise<User>;
    delete(id: number): Promise<void>;
    getRolesByUserId(userId: number): Promise<Role[]>;
}
