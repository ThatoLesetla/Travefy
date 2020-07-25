import { Client } from '../../models/entities/client.entity';
import { ClientService } from './../client/client.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export type User = any;

@Injectable()
export class AuthService  {
   constructor(private clientService: ClientService,
              private jwtService: JwtService) {}

   async validateUser(username: string, pass: string): Promise<any> {
       const user = await this.clientService.findByEmail(username);

       // Validate user password 
       if (user && user.password === pass) {
           const { password, ...result } = user;

           return result;
       }

       return null;
   }

   // login method
   async login(user: Client) {
    // Encrypt user data
    const payload = { useremail: user.email, sub: user.clientID };

    // Generate JWT from payload -> return simple object with JWT token
    return {
        access_token: this.jwtService.sign(payload),
    };
   }
}
