import { User } from "src/users/user.entity";
import { UsersService } from "src/users/users.service";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(id: number, password: string): Promise<User | undefined>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
