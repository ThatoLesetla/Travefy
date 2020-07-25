import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import 'dotenv/config';

@Injectable() 
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExiration: false,
            secretOrKey: process.env.secrete
        });
    }

    async validate(payload: any) {
        return { clientId: payload.sub, email: payload.email};
    }
}