import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthService } from '../../services/auth/auth.service';
import { Module } from '@nestjs/common';
import { ClientsModule} from '../../client.module';
import 'dotenv/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    ClientsModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.secret,
      signOptions: { expiresIn: '10060s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
