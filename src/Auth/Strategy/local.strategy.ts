import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { AuthService } from "../Services/auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            usernameField: 'usuario',
            passwordField: 'senha'
        });
    }

    async validate(usarname: string, password: string): Promise<any> {
        const user = await this.authService.validateUser(usarname, password)
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}