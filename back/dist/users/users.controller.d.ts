import { UsersService } from './users.service';
import { User } from './user.entity';
import { UserInput } from './user-input';
import { Role } from 'src/roles/roles.entity';
export declare class UsersController {
    private readonly service;
    constructor(service: UsersService);
    getAll(): Promise<User[]>;
    getById(id: number): Promise<User>;
    create(input: UserInput): Promise<User>;
    update(id: number, updateData: User): Promise<User>;
    delete(id: number): Promise<{
        success: boolean;
    }>;
    getUserRoles(userId: number): Promise<Role[]>;
}
